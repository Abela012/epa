// Script to hash and update a user's password in Supabase
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';
import readline from 'readline';

// Load environment variables
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

const { default: supabase } = await
import ('./lib/supabase.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function hashUserPassword() {
    try {
        const email = process.argv[2];

        if (!email) {
            console.log('Usage: node hash-user-password.js <email>');
            process.exit(1);
        }

        console.log(`\n🔐 Hashing password for: ${email}\n`);

        // Get user
        const { data: user, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (fetchError || !user) {
            console.log('❌ User not found');
            process.exit(1);
        }

        console.log('✅ User found:', user.email);

        // Get new password
        rl.question('Enter new password: ', async(password) => {
            if (!password) {
                console.log('❌ Password cannot be empty');
                rl.close();
                process.exit(1);
            }

            // Hash the password
            const hashed = await bcrypt.hash(password, 10);
            console.log('\n📝 Updating password in database...');

            // Update in database
            const { error: updateError } = await supabase
                .from('users')
                .update({ password: hashed })
                .eq('id', user.id);

            if (updateError) {
                console.error('❌ Error updating password:', updateError);
                rl.close();
                process.exit(1);
            }

            console.log('✅ Password has been hashed and updated successfully!');
            console.log('   You can now sign in with this password.');
            rl.close();
            process.exit(0);
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        rl.close();
        process.exit(1);
    }
}

await hashUserPassword();