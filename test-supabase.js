// Test Supabase connection
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env.local FIRST
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

// Now dynamically import supabase after env vars are loaded
const { default: supabase } = await
import ('./lib/supabase.js');

async function testConnection() {
    console.log('Testing Supabase connection...');
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set');
    console.log('Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 4) + '****' : 'Not set');
    console.log('');

    if (!supabase) {
        console.error('❌ Supabase client is null. Environment variables may not be loaded correctly.');
        console.log('Make sure your .env.local file exists and contains:');
        console.log('  NEXT_PUBLIC_SUPABASE_URL=your_url');
        console.log('  SUPABASE_SERVICE_ROLE_KEY=your_key');
        return;
    }

    try {
        // Test connection by querying users table
        const { data: users, error, count } = await supabase
            .from('users')
            .select('*', { count: 'exact' })
            .limit(10);

        if (error) {
            console.error('❌ Supabase connection failed:', error.message);
            console.log('\n🔧 Troubleshooting tips:');
            console.log('1. Make sure NEXT_PUBLIC_SUPABASE_URL is set in .env.local');
            console.log('2. Make sure SUPABASE_SERVICE_ROLE_KEY is set in .env.local');
            console.log('3. Check your Supabase project settings');
            console.log('4. Verify the tables (users, news) exist in your Supabase database');
            return;
        }

        console.log('✅ Successfully connected to Supabase!');
        console.log(`📊 Current users in database: ${count || users?.length || 0}`);

        if (users && users.length > 0) {
            console.log('👥 Existing users:', users.map(u => ({
                id: u.id,
                email: u.email,
                name: u.name,
                is_admin: u.is_admin
            })));
        }

        // Test news table
        const { data: news, error: newsError } = await supabase
            .from('news')
            .select('*', { count: 'exact' })
            .limit(5);

        if (!newsError) {
            console.log(`📰 News items in database: ${news?.length || 0}`);
        }

        console.log('✅ Connection test completed successfully!');
    } catch (error) {
        console.error('❌ Supabase connection failed:', error.message);
        console.log('\n🔧 Troubleshooting tips:');
        console.log('1. Make sure NEXT_PUBLIC_SUPABASE_URL is set in .env.local');
        console.log('2. Make sure SUPABASE_SERVICE_ROLE_KEY is set in .env.local');
        console.log('3. Check your Supabase project settings');
        console.log('4. Verify the tables (users, news) exist in your Supabase database');
    }
}


await testConnection();