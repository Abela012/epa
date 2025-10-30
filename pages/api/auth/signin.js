import clientPromise from '../../../lib/mongodb';
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
    const client = await clientPromise;
    const db = client.db('epa-item-bank');
    const users = db.collection('users');
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: user.isAdmin || false },
      process.env.JWT_SECRET,
      { expiresIn: rememberMe ? '30d' : '1d' }
    );
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Max-Age=${rememberMe ? 2592000 : 86400}`);
    return res.status(200).json({ message: 'Signed in', user: { name: user.name, isAdmin: user.isAdmin || false } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
