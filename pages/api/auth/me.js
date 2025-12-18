import jwt from 'jsonwebtoken';
import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
    try {
        const token = req.cookies ? .token;
        if (!token) return res.status(200).json({ user: null });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { data: user, error } = await supabase
            .from('users')
            .select('id, name, email, is_admin, first_name, last_name')
            .eq('id', decoded.userId)
            .single();

        if (error || !user) return res.status(200).json({ user: null });

        const displayName = user.first_name ?
            `${user.first_name} ${user.last_name || ''}`.trim() :
            (user.name || user.email);

        res.status(200).json({
            user: {
                id: user.id,
                name: displayName,
                email: user.email,
                isAdmin: user.is_admin || false
            }
        });
    } catch (e) {
        return res.status(200).json({ user: null });
    }
}