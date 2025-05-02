import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplateToOwner: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Submission from AKASH STUDIOS Website</h1>
    <p>You received a new message from your contact form.</p>
    <hr />
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
    <p><strong>Message:</strong></p>
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    <hr />
  </div>
);

export default EmailTemplateToOwner;