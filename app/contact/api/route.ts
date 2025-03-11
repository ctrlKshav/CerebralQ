import React from "react";
import { EmailTemplate } from "@/components/contact/email-template";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate form data
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend with simple HTML template
    const { data, error } = await resend.emails.send({
      from: 'Cerebral Quotient <updates@contact.cerebralquotient.com>',
      to: ['keshavm9978@gmail.com', 'labs@c4e.in'],
      subject: `New contact form submission on cerebralquotient.com from ${name}`,
      react: EmailTemplate({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}