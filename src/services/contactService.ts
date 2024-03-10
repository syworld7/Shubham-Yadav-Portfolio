import { supabase, ContactSubmission } from '../lib/supabase';

// Check if Supabase is configured
const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: ContactSubmission;
}

export const contactService = {
  async submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        return {
          success: false,
          message: 'All fields are required',
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return {
          success: false,
          message: 'Please enter a valid email address',
        };
      }

      // Check if Supabase is configured
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured. Form submission simulated.');

        return {
          success: true,
          message:
            "Message sent successfully! I'll get back to you soon. (Demo mode - Supabase not configured)",
          data: {
            id: 'demo-' + Date.now(),
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            created_at: new Date().toISOString(),
          },
        };
      }

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to send message. Please try again later.',
        };
      }

      // Send thank you email
      try {
        const { error: emailError } = await supabase.functions.invoke('send-thank-you-email', {
          body: {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
        });

        if (emailError) {
          console.warn('Failed to send thank you email:', emailError);
        }
      } catch (emailError) {
        console.warn('Error sending thank you email:', emailError);
      }

      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        data,
      };
    } catch (error) {
      console.error('Contact form error:', error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      };
    }
  },

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured. Returning empty array.');
        return [];
      }

      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching contact submissions:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      return [];
    }
  },
};
