import supabase from '../../../lib/supabase';
import jwt from 'jsonwebtoken';
import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { data: items, error } = await supabase
                .from('news')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) {
                console.error('Error fetching news:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }

            const formattedItems = items.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.image,
                author: item.author,
                authorId: item.author_id,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            }));

            return res.status(200).json({ items: formattedItems });
        } catch (error) {
            console.error('Error fetching news:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
    // Verify admin authentication
    const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, name, email')
            .eq('id', decoded.userId)
            .single();

        // Allow any authenticated user to post (no admin requirement)
        if (userError || !user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Parse form data (use OS temp dir for uploaded files)
        const form = new IncomingForm({
            uploadDir: os.tmpdir(),
            keepExtensions: true,
            maxFileSize: 5 * 1024 * 1024, // 5MB
        });

        const parseForm = () => {
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    resolve({ fields, files });
                });
            });
        };

        const { fields, files } = await parseForm();

        const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
        const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        let imagePath = null;
        if (files.image) {
            const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
            const filename = `${Date.now()}-${imageFile.originalFilename || 'image.jpg'}`;

            // Read file into buffer from temp location
            const fileBuffer = await fs.readFile(imageFile.filepath);

            // Upload to Supabase Storage (ensure bucket "news-images" exists)
            const storagePath = `news/${filename}`;
            const { error: uploadError } = await supabase.storage
                .from('news-images')
                .upload(storagePath, fileBuffer, {
                    contentType: imageFile.mimetype || 'image/jpeg',
                    cacheControl: '3600',
                    upsert: false,
                });

            // Clean up temp file (best-effort)
            try {
                await fs.unlink(imageFile.filepath);
            } catch {
                // ignore
            }

            if (uploadError) {
                console.error('Error uploading image to Supabase Storage:', uploadError);
                return res.status(500).json({ error: 'Error uploading image' });
            }

            const { data: publicUrlData } = supabase.storage
                .from('news-images')
                .getPublicUrl(storagePath);

            imagePath = publicUrlData ? .publicUrl || null;
        }

        // Save to database
        const newPost = {
            title,
            description,
            image: imagePath,
            author: user.name || user.email,
            author_id: user.id,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const { data: post, error: insertError } = await supabase
            .from('news')
            .insert(newPost)
            .select()
            .single();

        if (insertError) {
            console.error('Error inserting news:', insertError);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(201).json({
            message: 'News posted successfully',
            post: {
                id: post.id,
                title: post.title,
                description: post.description,
                image: post.image,
                author: post.author,
                authorId: post.author_id,
                createdAt: post.created_at,
                updatedAt: post.updated_at,
            },
        });
    } catch (error) {
        console.error('Error posting news:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}