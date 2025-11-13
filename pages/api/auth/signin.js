import supabase from '../../../lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { email, password, rememberMe } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    try {
        // Security: Never log sensitive keys or expose them in responses

        // Check if Supabase is initialized
        if (!supabase) {
            console.error('Supabase client not initialized. Check environment variables.');
            console.error('URL exists:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
            console.error('Service key exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Look up user by email in Supabase
        const { data: user, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        // Check if user exists
        if (fetchError) {
            if (fetchError.code === 'PGRST116') {
                // User not found - don't reveal if user exists or not
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            // Other database error - log for debugging but don't expose details
            console.error('Database error:', fetchError.code, fetchError.message);
            return res.status(500).json({ error: 'Server error' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if password field exists and is not null
        if (!user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Validate password against stored bcrypt hash
        let valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            // Check if password might be stored in plain text (temporary fallback for migration)
            if (user.password === password) {
                // Hash the password and update it in the database
                const hashed = await bcrypt.hash(password, 10);
                const { error: updateError } = await supabase
                    .from('users')
                    .update({ password: hashed })
                    .eq('id', user.id);

                if (updateError) {
                    console.error('Error updating password');
                    return res.status(500).json({ error: 'Server error' });
                }

                // Password is now valid (it matched plain text)
                valid = true;
            } else {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        }

        if (!valid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token with user info
        const token = jwt.sign({
                userId: user.id,
                email: user.email,
                isAdmin: user.is_admin || false
            },
            process.env.JWT_SECRET, { expiresIn: rememberMe ? '30d' : '1d' }
        );

        res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Max-Age=${rememberMe ? 2592000 : 86400}`);
        return res.status(200).json({
            message: 'Signed in',
            user: {
                name: user.name,
                email: user.email,
                isAdmin: user.is_admin || false
            }
        });
    } catch (err) {
        // Log full error for debugging but don't expose to client
        console.error('Signin error:', err.message, err.stack);
        res.status(500).json({ error: 'Server error' });
    }
}