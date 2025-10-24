// Test MongoDB connection using Mongoose
import mongoose from 'mongoose';

async function testConnection() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/epa-item-bank';

  console.log('Testing MongoDB connection with Mongoose...');
  console.log('URI:', uri.replace(/\/\/.*@/, '//***:***@'));

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000
    });

    console.log('✅ Successfully connected to MongoDB via Mongoose!');

    const db = mongoose.connection.db;
    const collection = db.collection('users');

    const userCount = await collection.countDocuments();
    console.log(`📊 Current users in database: ${userCount}`);

    const users = await collection.find({}, { projection: { password: 0 } }).toArray();
    console.log('👥 Existing users:', users);

    await mongoose.disconnect();
    console.log('✅ Connection test completed successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check your MONGODB_URI in .env.local');
    console.log('3. For Atlas: Check your IP whitelist and credentials');
    console.log('4. For local: Make sure MongoDB service is started');
  }
}

await testConnection();

