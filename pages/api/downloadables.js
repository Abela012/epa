import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const downloadsDir = path.join(process.cwd(), 'public', 'downloads');
        const files = fs.readdirSync(downloadsDir)
            .filter(f => !f.startsWith('.'))
            .map(filename => ({
                name: filename,
                url: `/downloads/${filename}`
            }));
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json({ error: 'Failed to list files.' });
    }
}