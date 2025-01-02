/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
    - Add policy for reading total count
*/

DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS waitlist (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    created_at timestamptz DEFAULT now()
  );

  ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

  -- Only create policies if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist' AND policyname = 'Anyone can join waitlist'
  ) THEN
    CREATE POLICY "Anyone can join waitlist" ON waitlist
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist' AND policyname = 'Anyone can view waitlist count'
  ) THEN
    CREATE POLICY "Anyone can view waitlist count" ON waitlist
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;