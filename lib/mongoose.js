import mongoose from 'mongoose';

// Reuse the connection across hot reloads in dev and across API calls in serverless
const globalWithMongoose = globalThis;

if (!globalWithMongoose._mongooseConnection) {
	globalWithMongoose._mongooseConnection = { conn: null, promise: null };
}

const cached = globalWithMongoose._mongooseConnection;

export async function connectToDatabase() {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/epa-item-bank';
		cached.promise = mongoose
			.connect(uri, { serverSelectionTimeoutMS: 10000 })
			.then((mongooseInstance) => {
				return mongooseInstance.connection;
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}
