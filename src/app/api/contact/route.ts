import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// Email template functions
function generateOwnerEmailHTML(name: string, email: string, message: string, absoluteLogoUrl: string) {
    return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 0; margin: 0; background-color: #f8f9fa; min-height: 100vh;">
        <div style="background: linear-gradient(135deg, #6919ff 0%, #8b5cf6 100%); padding: 40px 20px 60px 20px; text-align: center; position: relative;">
            <div style="margin-bottom: 20px;">
                <img src="${absoluteLogoUrl}" alt="AKASH STUDIOS Logo" width="80" height="80" style="display: inline-block; background-color: #ffffff; border-radius: 16px; padding: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />
            </div>
            <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0 0 8px 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">📧 New Contact Submission</h1>
            <p style="color: #e2e8f0; font-size: 16px; margin: 0; font-weight: 300;">AKASH STUDIOS Website</p>
        </div>
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; margin-top: -30px; position: relative; z-index: 1;">
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 24px; margin: 0;">
                <p style="margin: 0; font-size: 14px; color: #92400e; font-weight: 500;">🔔 You have received a new message from your contact form</p>
            </div>
            <div style="padding: 32px 24px;">
                <h2 style="color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 24px; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">Contact Information</h2>
                <div style="margin-bottom: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <label style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Full Name</label>
                    <p style="font-size: 16px; color: #111827; font-weight: 600; margin: 0;">${name}</p>
                </div>
                <div style="margin-bottom: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <label style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Email Address</label>
                    <a href="mailto:${email}" style="font-size: 16px; color: #6919ff; font-weight: 600; text-decoration: none;">${email}</a>
                </div>
                <div style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <label style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Message</label>
                    <div style="font-size: 16px; color: #374151; line-height: 1.6; white-space: pre-wrap; background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #d1d5db;">${message}</div>
                </div>
                <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                    <a href="mailto:${email}?subject=Re: Your inquiry to AKASH STUDIOS" style="display: inline-block; background-color: #6919ff; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(105, 25, 255, 0.3);">📧 Reply to ${name}</a>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding: 32px 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0 0 8px 0;">This notification was sent from your AKASH STUDIOS contact form</p>
            <p style="margin: 0; font-size: 11px; color: #9ca3af;">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    </div>
    `;
}

function generateUserEmailHTML(name: string, userEmail: string, absoluteLogoUrl: string) {
    return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 0; margin: 0; background-color: #f8f9fa; min-height: 100vh;">
        <div style="background: linear-gradient(135deg, #6919ff 0%, #8b5cf6 100%); padding: 40px 20px 60px 20px; text-align: center; position: relative;">
            <div style="margin-bottom: 20px;">
                <img src="${absoluteLogoUrl}" alt="AKASH STUDIOS Logo" width="100" height="100" style="display: inline-block; background-color: #ffffff; border-radius: 20px; padding: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />
            </div>
            <h1 style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0 0 8px 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Thanks for reaching out! 🎉</h1>
            <p style="color: #e2e8f0; font-size: 18px; margin: 0; font-weight: 300;">We've received your message</p>
        </div>
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); overflow: hidden; margin-top: -30px; position: relative; z-index: 1;">
            <div style="background-color: #dcfdf7; border-left: 4px solid #10b981; padding: 20px 24px; margin: 0;">
                <p style="margin: 0 0 4px 0; font-size: 16px; color: #065f46; font-weight: 600;">✅ Message Received Successfully!</p>
                <p style="margin: 0; font-size: 14px; color: #047857;">Hi ${name}, we've got your message and we're excited to connect with you.</p>
            </div>
            <div style="padding: 40px 32px;">
                <div style="text-align: center; margin-bottom: 32px;">
                    <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">What happens next?</h2>
                </div>
                <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; text-align: center; border: 1px solid #e5e7eb;">
                    <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">In the meantime...</h3>
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 20px 0; line-height: 1.5;">Feel free to explore our portfolio and recent projects</p>
                    <a href="https://akashstudios.com" style="display: inline-block; background-color: #6919ff; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(105, 25, 255, 0.3);">🌐 Visit Our Portfolio</a>
                </div>
            </div>
            <div style="border-top: 1px solid #e5e7eb; padding: 32px; text-align: center; background-color: #f9fafb;">
                <p style="color: #374151; font-size: 16px; font-weight: 600; margin: 0 0 4px 0;">Best regards,</p>
                <p style="color: #6919ff; font-size: 18px; font-weight: bold; margin: 0 0 2px 0;">Akash Singh</p>
                <p style="color: #6b7280; font-size: 14px; margin: 0;">Founder & Lead Developer, AKASH STUDIOS</p>
            </div>
        </div>
        <div style="text-align: center; padding: 40px 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0 0 8px 0; color: #9ca3af;">You're receiving this because you contacted us through our website.</p>
            <p style="margin: 0; font-size: 11px; color: #9ca3af;">© ${new Date().getFullYear()} AKASH STUDIOS. Crafting digital experiences with passion.</p>
        </div>
    </div>
    `;
}

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
const transporter = nodemailer.createTransport({
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
        const ownerEmailHTML = generateOwnerEmailHTML(name, email, message, absoluteLogoUrl);

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
        const userEmailHTML = generateUserEmailHTML(name, email, absoluteLogoUrl);

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