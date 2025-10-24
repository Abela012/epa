import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
	try {
		const token = req.cookies?.token;
		if (!token) return res.status(200).json({ user: null });

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const client = await clientPromise;
		const db = client.db('epa-item-bank');
		const users = db.collection('users');
		const user = await users.findOne({ _id: new (await import('bson')).ObjectId(decoded.userId) }, { projection: { password: 0 } });
		if (!user) return res.status(200).json({ user: null });
		res.status(200).json({ user: { id: user._id, name: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : (user.name || user.email), email: user.email } });
	} catch (e) {
		return res.status(200).json({ user: null });
	}
}
