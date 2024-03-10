-- Fix RLS policy for contact_submissions table
-- This allows anyone to insert contact submissions (including anonymous users)

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public to insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anyone to insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to read contact submissions" ON contact_submissions;

-- Create a new policy that allows anyone to insert
CREATE POLICY "Allow anyone to insert contact submissions" ON contact_submissions
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows anyone to read (for admin purposes)
CREATE POLICY "Allow anyone to read contact submissions" ON contact_submissions
  FOR SELECT 
  USING (true);

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'contact_submissions';



