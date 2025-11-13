import supabase from '../../../lib/supabase';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    // Disable public signup entirely
    return res.status(403).json({ error: 'Sign up is disabled' });
}