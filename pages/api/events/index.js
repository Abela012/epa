import supabase from '../../../lib/supabase';
import jwt from 'jsonwebtoken';
import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { data: items, error } = await supabase
                .from('events')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) {
                console.error('Error fetching events:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }

            const formattedItems = items.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.image,
                date: item.date,
                time: item.time,
                location: item.location,
                type: item.type,
                author: item.author,
                authorId: item.author_id,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            }));

            return res.status(200).json({ items: formattedItems });
        } catch (error) {
            console.error('Error fetching events:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Verify authentication and admin status
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        let decoded
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            console.warn('events: token verify failed', e && e.message)
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Debug log helpful info (non-sensitive)
        try {
            console.log('events: token present:', !!token)
            console.log('events: decoded token:', { userId: decoded.userId, isAdmin: decoded.isAdmin })
        } catch (e) { /* noop */ }

        // Authorization: require an authenticated user (no admin-only restriction)
        // This matches /api/news behavior so signed-in users can post events like news.
        let user = null;
        try {
            const resp = await supabase
                .from('users')
                .select('id, name, email, is_admin')
                .eq('id', decoded.userId)
                .single();

            if (resp.error || !resp.data) {
                console.warn('events: user lookup failed', resp.error && resp.error.message);
                return res.status(401).json({ error: 'Unauthorized' });
            }
            user = resp.data;
        } catch (dbErr) {
            console.error('events: user lookup exception', dbErr && dbErr.message);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // Parse form data
        const form = new IncomingForm({
            uploadDir: path.join(process.cwd(), 'public', 'uploads'),
            keepExtensions: true,
            maxFileSize: 5 * 1024 * 1024, // 5MB
        });

        // Ensure upload directory exists
        try {
            await fs.mkdir(path.join(process.cwd(), 'public', 'uploads'), { recursive: true });
        } catch (err) {
            // ignore
        }

        const parseForm = () => {
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    resolve({ fields, files });
                });
            });
        };

    const { fields, files } = await parseForm();

    const fieldsObj = fields || {};
    const filesObj = files || {};

    console.log('events: parsed fields keys:', Object.keys(fieldsObj));
    console.log('events: parsed files keys:', Object.keys(filesObj));

    const title = Array.isArray(fieldsObj.title) ? fieldsObj.title[0] : fieldsObj.title;
    const description = Array.isArray(fieldsObj.description) ? fieldsObj.description[0] : fieldsObj.description;
    const date = Array.isArray(fieldsObj.date) ? fieldsObj.date[0] : fieldsObj.date;
    const time = Array.isArray(fieldsObj.time) ? fieldsObj.time[0] : fieldsObj.time;
    const location = Array.isArray(fieldsObj.location) ? fieldsObj.location[0] : fieldsObj.location;
    const type = Array.isArray(fieldsObj.type) ? fieldsObj.type[0] : fieldsObj.type;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        let imagePath = null;
        if (files && files.image) {
            const rawImage = Array.isArray(files.image) ? files.image[0] : files.image;

            // Support different formidable versions and shapes
            const tempPath = rawImage.filepath || rawImage.path || rawImage.file || rawImage.tempFilePath;
            const originalName = rawImage.originalFilename || rawImage.originalname || rawImage.name || 'image.jpg';

            if (tempPath) {
                const safeName = String(originalName).replace(/[^a-zA-Z0-9._-]/g, '_');
                const filename = `${Date.now()}-${safeName}`;
                const newPath = path.join(process.cwd(), 'public', 'uploads', filename);

                try {
                    await fs.rename(tempPath, newPath);
                } catch (renameErr) {
                    // Some environments/versions may not allow rename across volumes.
                    // Try copy + unlink as a fallback.
                    console.warn('events: rename failed, attempting copy fallback', renameErr && renameErr.message);
                    try {
                        await fs.copyFile(tempPath, newPath);
                        try { await fs.unlink(tempPath); } catch (u) { /* ignore */ }
                    } catch (copyErr) {
                        console.error('events: failed to copy uploaded file to final destination', copyErr && copyErr.message);
                        // Do not fail the whole request for upload copy errors; log and continue without image.
                        imagePath = null;
                    }
                }

                imagePath = `/uploads/${filename}`;
            } else {
                console.warn('events: uploaded image object missing temp path', rawImage);
            }
        }

        const newEvent = {
            title,
            description,
            image: imagePath,
            date: date || null,
            time: time || null,
            location: location || null,
            type: type || null,
            author: user.name || user.email,
            author_id: user.id,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        console.log('events: inserting event into DB', { title: newEvent.title, author: newEvent.author, author_id: newEvent.author_id, image: newEvent.image });

        const { data: event, error: insertError } = await supabase
            .from('events')
            .insert(newEvent)
            .select()
            .single();

        if (insertError) {
            console.error('Error inserting event:', insertError);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(201).json({
            message: 'Event posted successfully',
            event: {
                id: event.id,
                title: event.title,
                description: event.description,
                image: event.image,
                date: event.date,
                time: event.time,
                location: event.location,
                type: event.type,
                author: event.author,
                authorId: event.author_id,
                createdAt: event.created_at,
                updatedAt: event.updated_at,
            },
        });
    } catch (error) {
        // Log full error and stack for debugging
        try { console.error('Error posting event:', error); } catch (e) { }
        try { console.error(error && error.stack); } catch (e) { }

        // In development, return the real error message/stack to help debugging
        if (process.env.NODE_ENV !== 'production') {
            return res.status(500).json({ error: error && error.message ? error.message : 'Internal server error', stack: error && error.stack ? error.stack : undefined });
        }

        return res.status(500).json({ error: 'Internal server error' });
    }
}
