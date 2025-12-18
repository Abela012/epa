# Security Guidelines

## Environment Variables

### Server-Side Only (NEVER expose to client)
- `SUPABASE_SERVICE_ROLE_KEY` - Full database access, bypasses RLS
- `JWT_SECRET` - Used to sign authentication tokens
- `ADMIN_EMAIL` - Optional admin email configuration
- `ADMIN_PASSWORD` - Optional admin password configuration

### Client-Side Safe (Can be exposed)
- `NEXT_PUBLIC_SUPABASE_URL` - Public Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anon key (respects RLS)

## Important Security Rules

1. **Never use `SUPABASE_SERVICE_ROLE_KEY` in client-side code**
   - Only use in API routes (`pages/api/*`)
   - The `lib/supabase.js` file will throw an error if imported client-side

2. **Always use API routes for sensitive operations**
   - Authentication
   - User management
   - Admin operations
   - Any operations that bypass RLS

3. **Client-side components should:**
   - Use `supabaseClient` from `lib/supabase.js` (anon key)
   - Or call API routes instead of direct database access

4. **Environment Variables:**
   - Store sensitive keys in `.env.local` (not committed to git)
   - Never commit `.env.local` to version control
   - Use `NEXT_PUBLIC_` prefix only for variables that are safe to expose

## File Structure

- `lib/supabase.js` - Server-side client (service role key)
- `pages/api/*` - API routes (server-side only, use service role key)
- `app/*` and `components/*` - Client components (use API routes or anon key)



