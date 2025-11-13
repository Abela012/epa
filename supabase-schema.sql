-- Supabase PostgreSQL Schema for PSSE Project
-- Run this SQL in your Supabase SQL Editor to create the required tables
-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    first_name TEXT,
    last_name TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- News table
CREATE TABLE IF NOT EXISTS news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    author TEXT NOT NULL,
    author_id UUID REFERENCES users(id) ON DELETE
    SET NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_is_admin ON users(is_admin);
CREATE INDEX IF NOT EXISTS idx_news_created_at ON news(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_author_id ON news(author_id);
-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
-- RLS Policies for users table
-- Allow service role to do everything (server-side operations)
CREATE POLICY "Service role can do everything on users" ON users FOR ALL USING (true) WITH CHECK (true);
-- RLS Policies for news table
-- Allow service role to do everything (server-side operations)
CREATE POLICY "Service role can do everything on news" ON news FOR ALL USING (true) WITH CHECK (true);
-- Allow public read access to news
CREATE POLICY "Public can read news" ON news FOR
SELECT USING (true);

