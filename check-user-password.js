// Script to check and update user passwords in Supabase
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

// Load environment variables
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

const { default: supabase } = await
import ('./lib/supabase.js');

async function checkUserPassword(email) {
    try {
        console.log(`\n🔍 Checking user: ${email}\n`);

        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (error || !user) {
            console.log('❌ User not found');
            return;
        }

        console.log('✅ User found:');
        console.log('  ID:', user.id);
        console.log('  Email:', user.email);
        console.log('  Name:', user.name || 'N/A');
        console.log('  Is Admin:', user.is_admin);
        console.log('  Password field exists:', !!user.password);
        console.log('  Password length:', user.password ? .length || 0);
        console.log('  Password starts with:', user.password ? .substring(0, 10) || 'N/A');

        // Check if password looks like a bcrypt hash (starts with $2a$, $2b$, or $2y$)
        const isBcryptHash = user.password ? .startsWith('$2a$') ||
            user.password ? .startsWith('$2b$') ||
            user.password ? .startsWith('$2y$');

        console.log('  Looks like bcrypt hash:', isBcryptHash);

        if (!isBcryptHash && user.password) {
            console.log('\n⚠️  Password is NOT hashed! It appears to be stored in plain text.');
            console.log('   You need to hash this password before it can be used for authentication.');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Get email from command line or use default
const email = process.argv[2] || 'admin@gmail.com';
await checkUserPassword(email);

