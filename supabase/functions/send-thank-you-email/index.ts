import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not set');
    }

    const emailTemplate = `<!DOCTYPE html>
    <html> ... ${message} ... </html>`;

    /* ------------------ Notification Email ------------------ */
    const notifyRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['shubhamsy1973@gmail.com'],
        subject: `New Contact Form Submission from ${name} - ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const notificationError = notifyRes.ok ? null : await notifyRes.text();

    /* ------------------ Thank You Email ------------------ */
    const thankYouRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shubham Yadav <onboarding@resend.dev>',
        to: [email],
        subject: `Thank you for contacting Shubham Yadav - ${subject}`,
        html: emailTemplate,
      }),
    });

    const thankYouError = thankYouRes.ok ? null : await thankYouRes.text();

    const successMessage =
      notificationError && thankYouError
        ? 'Contact form submitted, but emails failed to send'
        : notificationError
          ? 'Contact form submitted, thank you email sent, but notification failed'
          : thankYouError
            ? 'Contact form submitted, notification sent, but thank you email failed'
            : 'Contact form submitted and both emails sent successfully';

    return new Response(
      JSON.stringify({
        success: true,
        message: successMessage,
        data: {
          notification: notificationError ? null : { sent: true },
          thankYou: thankYouError ? null : { sent: true },
          errors: {
            notification: notificationError,
            thankYou: thankYouError,
          },
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Function error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
