import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplateToOwner } from '@/src/components/emails/EmailTemplateToOwner';
import { EmailTemplateToUser } from '@/src/components/emails/EmailTemplateToUser';
import React from 'react';

const resendApiKey = process.env.RESEND_API_KEY;
const ownerEmail = process.env.OWNER_EMAIL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const absoluteLogoUrl = `${siteUrl}/lokkeestudios.svg`;
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

if (!resendApiKey) {
    console.error("RESEND_API_KEY environment variable is not set.");
}
if (!ownerEmail) {
    console.error("OWNER_EMAIL environment variable is not set.");
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
    if (!resendApiKey) {
        return NextResponse.json({ error: 'Server configuration error (API key missing).' }, { status: 500 });
    }
    if (!ownerEmail) {
        return NextResponse.json({ error: 'Server configuration error (Owner email missing).' }, { status: 500 });
    }

    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields (name, email, or message).' }, { status: 400 });
        }

        console.log(`Attempting to send notification to owner: ${ownerEmail} from: ${fromEmail}`);
        const ownerEmailElement = React.createElement(EmailTemplateToOwner, {
            name: name,
            email: email,
            message: message
        });

        const { data: ownerData, error: ownerError } = await resend.emails.send({
            from: fromEmail,
            to: [ownerEmail],
            subject: `New Contact Form Submission from ${name} | AKASH STUDIOS`,
            react: ownerEmailElement,
            replyTo: email,
        });

        if (ownerError) {
            console.error("Error sending email to owner:", ownerError);
            return NextResponse.json({ error: 'Failed to send notification email to site owner.' }, { status: 500 });
        }
        console.log("Email successfully sent to owner:", ownerData?.id);


        console.log(`Attempting to send confirmation to user: ${email} from: ${fromEmail}`);
        const userEmailElement = React.createElement(EmailTemplateToUser, {
            name: name,
            userEmail: email,
            absoluteLogoUrl: absoluteLogoUrl
        });

        const { data: userData, error: userError } = await resend.emails.send({
            from: fromEmail,
            to: [email],
            subject: `Thanks for getting in touch, ${name}! | AKASH STUDIOS`,
            react: userEmailElement,
        });

        if (userError) {
            console.error("Error sending confirmation email to user:", userError);
            return NextResponse.json({ message: 'Message sent to owner successfully, but user confirmation failed.' }, { status: 200 });
        }
        console.log("Confirmation email successfully sent to user:", userData?.id);


        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (error: unknown) {
        console.error("General error in POST /api/contact:", error);
        const errorMessage = 'An unexpected error occurred processing the request.';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}