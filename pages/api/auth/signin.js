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
    const adminEmail = 'admin@gmail.com';
    const adminPassword = '1234567890';

    // Only allow the single admin user to sign in
    if (email !== adminEmail) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Ensure admin user exists (bootstrap if necessary)
    let user = await users.findOne({ email: adminEmail });
    if (!user) {
      const hashed = await bcrypt.hash(adminPassword, 10);
      const insert = await users.insertOne({
        name: 'Admin',
        email: adminEmail,
        password: hashed,
        isAdmin: true,
        createdAt: new Date(),
      });
      user = { _id: insert.insertedId, name: 'Admin', email: adminEmail, password: hashed, isAdmin: true };
    } else if (!user.isAdmin) {
      // Enforce admin flag on the admin account
      await users.updateOne({ _id: user._id }, { $set: { isAdmin: true } });
      user.isAdmin = true;
    }

    // Validate password: allow either matching the known admin password (convenience)
    // or the stored bcrypt hash. This helps if the DB was bootstrapped differently.
    let valid = false;
    if (password === adminPassword) {
      valid = true
    } else {
      valid = await bcrypt.compare(password, user.password)
    }
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: rememberMe ? '30d' : '1d' }
    );
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Max-Age=${rememberMe ? 2592000 : 86400}`);
    return res.status(200).json({ message: 'Signed in', user: { name: user.name, isAdmin: true } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
