import * as React from 'react';
import Image from 'next/image';

interface EmailTemplateProps {
  name: string;
  userEmail: string;
  absoluteLogoUrl: string;
}

export const EmailTemplateToUser: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  userEmail,
  absoluteLogoUrl,
}) => (
   <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #eee' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Image
                src={absoluteLogoUrl}
                alt="AKASH STUDIOS Logo"
                width={80}
                height={80}
                style={{ display: 'inline-block' }}
            />
         </div>
        <h1 style={{ textAlign: 'center', color: '#555', fontSize: '24px' }}>Thanks for getting in touch!</h1>
        <h2 style={{ textAlign: 'center', color: '#555', fontSize: '20px', fontWeight: 'normal', marginBottom: '30px' }}>Hi {name}!</h2>

        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            We have received your message and will get back to you at{' '}
            <a href={`mailto:${userEmail}`} style={{ color: '#6919ff', textDecoration: 'none' }}>{userEmail}</a>{' '}
            as soon as possible.
         </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Have a good one!
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            AKASH<br/>
            AKASH STUDIOS
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

        <p style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
            You are receiving this email because you have recently submitted an inquiry via the contact form on akashstudios.
            This is an automatic notification, please do not reply to this email.
        </p>
    </div>
);

export default EmailTemplateToUser;
