import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

// Load environment variables from .env.local BEFORE importing supabase
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

import supabase from './lib/supabase.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function setAdminUser() {
    try {
        // Get all users
        const { data: allUsers, error: fetchError } = await supabase
            .from('users')
            .select('email, name, is_admin');

        if (fetchError) {
            console.error('❌ Error fetching users:', fetchError);
            rl.close();
            process.exit(1);
        }

        console.log('\n📋 Current users in database:');
        allUsers.forEach((user, index) => {
            console.log(`${index + 1}. ${user.email} - ${user.name || 'No name'} ${user.is_admin ? '(ADMIN)' : ''}`);
        });

        rl.question('\nEnter the email of the user to make admin: ', async(email) => {
            const { data: user, error: userError } = await supabase
                .from('users')
                .select('*')
                .eq('email', email)
                .single();

            if (userError || !user) {
                console.log('❌ User not found!');
                rl.close();
                process.exit(0);
            }

            // Update user to admin
            const { error: updateError } = await supabase
                .from('users')
                .update({ is_admin: true })
                .eq('email', email);

            if (updateError) {
                console.error('❌ Error updating user:', updateError);
                rl.close();
                process.exit(1);
            }

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