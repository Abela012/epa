import { createClient } from '@supabase/supabase-js';

// SECURITY: Service role key should NEVER be exposed to client-side
// Only use in server-side API routes (pages/api/*)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Ensure this module is only used server-side
// Note: In Next.js, API routes run server-side where window is undefined
// This check prevents accidental client-side usage
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    throw new Error('lib/supabase.js: Service role key cannot be used in client-side code. Use supabaseClient instead.');
}

// Validate environment variables (server-side only)
if (!supabaseUrl || !supabaseServiceKey) {
    const errorMsg = 'Missing Supabase environment variables. Please add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local';
    // Only throw in Next.js API routes (when NEXT_RUNTIME is set), not in standalone scripts
    if (process.env.NEXT_RUNTIME && process.env.NODE_ENV !== 'production' && process.env.NEXT_PHASE !== 'phase-production-build') {
        throw new Error(errorMsg);
    }
    // For standalone scripts, just log and continue (will return null)
    if (!process.env.NEXT_RUNTIME) {
        console.warn('⚠️', errorMsg);
    }
}

// Server-side Supabase client with service role key (bypasses RLS)
// SECURITY: This should ONLY be used in API routes, never in client components
export const supabase = supabaseUrl && supabaseServiceKey ?
    createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }) :
    null;

// Client-side Supabase client with anon key (respects RLS)
// This is safe to use in client components
export const supabaseClient = typeof window !== 'undefined' ?
    createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    ) :
    null;

export default supabase;