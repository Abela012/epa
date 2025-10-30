import clientPromise from '../../../lib/mongodb';
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
      const client = await clientPromise;
      const db = client.db('epa-item-bank');
      const news = db.collection('news');
      const raw = await news
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();
      const items = raw.map((doc) => ({ id: doc._id.toString(), ...doc, _id: undefined }))
      return res.status(200).json({ items });
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
    const client = await clientPromise;
    const db = client.db('epa-item-bank');
    const users = db.collection('users');
    const user = await users.findOne({ _id: new (await import('bson')).ObjectId(decoded.userId) });

    // Allow any authenticated user to post (no admin requirement)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
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
      // Directory might already exist
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

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    let imagePath = null;
    if (files.image) {
      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
      const filename = `${Date.now()}-${imageFile.originalFilename || 'image.jpg'}`;
      const newPath = path.join(process.cwd(), 'public', 'uploads', filename);
      
      await fs.rename(imageFile.filepath, newPath);
      imagePath = `/uploads/${filename}`;
    }

    // Save to database
    const news = db.collection('news');
    const newPost = {
      title,
      description,
      image: imagePath,
      author: user.name || user.email,
      authorId: user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await news.insertOne(newPost);

    return res.status(201).json({
      message: 'News posted successfully',
      post: { ...newPost, _id: result.insertedId },
    });
  } catch (error) {
    console.error('Error posting news:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
