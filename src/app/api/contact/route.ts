import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailTemplateToOwner } from '@/src/components/emails/EmailTemplateToOwner';
import { EmailTemplateToUser } from '@/src/components/emails/EmailTemplateToUser';
import React from 'react';
import { renderToString } from 'react-dom/server';

// Email configuration
const smtpHost = process.env.SMTP_HOST;
const smtpPort = parseInt(process.env.SMTP_PORT || '587');
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;
const ownerEmail = process.env.OWNER_EMAIL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const absoluteLogoUrl = `${siteUrl}/akashstudios.svg`;
const fromEmail = process.env.FROM_EMAIL || smtpUser;

// Validate required environment variables
if (!smtpHost) {
    console.error("SMTP_HOST environment variable is not set.");
}
if (!smtpUser) {
    console.error("SMTP_USER environment variable is not set.");
}
if (!smtpPassword) {
    console.error("SMTP_PASSWORD environment variable is not set.");
}
if (!ownerEmail) {
    console.error("OWNER_EMAIL environment variable is not set.");
}

// Create nodemailer transporter
const transporter = nodemailer.createTransporter({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
        user: smtpUser,
        pass: smtpPassword,
    },
    tls: {
        rejectUnauthorized: false // For development/testing
    }
});

export async function POST(request: Request) {
    // Validate configuration
    if (!smtpHost || !smtpUser || !smtpPassword) {
        return NextResponse.json({ error: 'Server configuration error (SMTP settings missing).' }, { status: 500 });
    }
    if (!ownerEmail) {
        return NextResponse.json({ error: 'Server configuration error (Owner email missing).' }, { status: 500 });
    }

    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields (name, email, or message).' }, { status: 400 });
        }

        // Verify transporter connection
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError) {
            console.error('SMTP connection failed:', verifyError);
            return NextResponse.json({ error: 'Email service configuration error.' }, { status: 500 });
        }

        console.log(`Attempting to send notification to owner: ${ownerEmail} from: ${fromEmail}`);

        // Create owner email HTML
        const ownerEmailElement = React.createElement(EmailTemplateToOwner, {
            name: name,
            email: email,
            message: message,
            absoluteLogoUrl: absoluteLogoUrl
        });
        const ownerEmailHTML = renderToString(ownerEmailElement);

        // Send email to owner
        try {
            const ownerMailOptions = {
                from: `"AKASH STUDIOS Contact Form" <${fromEmail}>`,
                to: ownerEmail,
                subject: `New Contact Form Submission from ${name} | AKASH STUDIOS`,
                html: ownerEmailHTML,
                replyTo: email,
            };

            const ownerInfo = await transporter.sendMail(ownerMailOptions);
            console.log("Email successfully sent to owner:", ownerInfo.messageId);
        } catch (ownerError) {
            console.error("Error sending email to owner:", ownerError);
            return NextResponse.json({ error: 'Failed to send notification email to site owner.' }, { status: 500 });
        }

        console.log(`Attempting to send confirmation to user: ${email} from: ${fromEmail}`);

        // Create user email HTML
        const userEmailElement = React.createElement(EmailTemplateToUser, {
            name: name,
            userEmail: email,
            absoluteLogoUrl: absoluteLogoUrl
        });
        const userEmailHTML = renderToString(userEmailElement);

        // Send confirmation email to user
        try {
            const userMailOptions = {
                from: `"Akash Singh - AKASH STUDIOS" <${fromEmail}>`,
                to: email,
                subject: `Thanks for getting in touch, ${name}! | AKASH STUDIOS`,
                html: userEmailHTML,
            };

            const userInfo = await transporter.sendMail(userMailOptions);
            console.log("Confirmation email successfully sent to user:", userInfo.messageId);
        } catch (userError) {
            console.error("Error sending confirmation email to user:", userError);
            return NextResponse.json({ message: 'Message sent to owner successfully, but user confirmation failed.' }, { status: 200 });
        }

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (error: unknown) {
        console.error("General error in POST /api/contact:", error);
        const errorMessage = 'An unexpected error occurred processing the request.';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}