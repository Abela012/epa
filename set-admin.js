import clientPromise from './lib/mongodb.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function setAdminUser() {
  try {
    const client = await clientPromise;
    const db = client.db('epa-item-bank');
    const users = db.collection('users');

    // Get all users
    const allUsers = await users.find({}, { projection: { email: 1, name: 1, isAdmin: 1 } }).toArray();
    
    console.log('\n📋 Current users in database:');
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} - ${user.name || 'No name'} ${user.isAdmin ? '(ADMIN)' : ''}`);
    });

    rl.question('\nEnter the email of the user to make admin: ', async (email) => {
      const user = await users.findOne({ email });
      
      if (!user) {
        console.log('❌ User not found!');
        rl.close();
        process.exit(0);
      }

      // Update user to admin
      await users.updateOne(
        { email },
        { $set: { isAdmin: true } }
      );

      console.log(`✅ User ${email} is now an admin!`);
      rl.close();
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Error:', error);
    rl.close();
    process.exit(1);
  }
}

setAdminUser();
