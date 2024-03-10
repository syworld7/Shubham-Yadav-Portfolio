# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be set up (usually takes 1-2 minutes)

## 2. Create the Database Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contact submissions
CREATE POLICY "Allow public to insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows only authenticated users to read contact submissions
-- (Optional: Remove this if you want to keep submissions private)
CREATE POLICY "Allow authenticated users to read contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 3. Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Click on "Settings" → "API"
3. Copy your:
   - Project URL
   - Anon/Public key

## 4. Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual values.

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the contact form
4. Check your Supabase dashboard → Table Editor → contact_submissions to see the submitted data

## 6. Optional: Set Up Email Notifications

You can set up email notifications in Supabase to get notified when someone submits a contact form:

1. Go to Database → Functions
2. Create a new function for email notifications
3. Set up triggers to call the function when new rows are inserted

## Security Notes

- The current setup allows anyone to submit contact forms (which is what you want)
- Only authenticated users can read the submissions (you can modify this policy as needed)
- The anon key is safe to use in frontend applications
- Consider setting up rate limiting for production use
