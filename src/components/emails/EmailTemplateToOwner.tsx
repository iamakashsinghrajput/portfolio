import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  absoluteLogoUrl: string;
}

export const EmailTemplateToOwner: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  absoluteLogoUrl,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '0',
    margin: '0',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  }}>
    {/* Header */}
    <div style={{
      background: 'linear-gradient(135deg, #6919ff 0%, #8b5cf6 100%)',
      padding: '40px 20px 60px 20px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        marginBottom: '20px'
      }}>
        <img
          src={absoluteLogoUrl}
          alt="AKASH STUDIOS Logo"
          width={80}
          height={80}
          style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        />
      </div>
      <h1 style={{
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        📧 New Contact Submission
      </h1>
      <p style={{
        color: '#e2e8f0',
        fontSize: '16px',
        margin: '0',
        fontWeight: '300'
      }}>
        AKASH STUDIOS Website
      </p>
    </div>

    {/* Main Content */}
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginTop: '-30px',
      position: 'relative',
      zIndex: '1'
    }}>
      {/* Alert Banner */}
      <div style={{
        backgroundColor: '#fef3c7',
        borderLeft: '4px solid #f59e0b',
        padding: '16px 24px',
        margin: '0'
      }}>
        <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#92400e',
          fontWeight: '500'
        }}>
          🔔 You have received a new message from your contact form
        </p>
      </div>

      {/* Contact Details */}
      <div style={{ padding: '32px 24px' }}>
        <h2 style={{
          color: '#1f2937',
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '12px'
        }}>
          Contact Information
        </h2>

        {/* Name Field */}
        <div style={{
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <label style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'block',
            marginBottom: '4px'
          }}>
            Full Name
          </label>
          <p style={{
            fontSize: '16px',
            color: '#111827',
            fontWeight: '600',
            margin: '0'
          }}>
            {name}
          </p>
        </div>

        {/* Email Field */}
        <div style={{
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <label style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'block',
            marginBottom: '4px'
          }}>
            Email Address
          </label>
          <a href={`mailto:${email}`} style={{
            fontSize: '16px',
            color: '#6919ff',
            fontWeight: '600',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border-color 0.2s'
          }}>
            {email}
          </a>
        </div>

        {/* Message Field */}
        <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <label style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'block',
            marginBottom: '8px'
          }}>
            Message
          </label>
          <div style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '6px',
            border: '1px solid #d1d5db'
          }}>
            {message}
          </div>
        </div>

        {/* Action Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <a href={`mailto:${email}?subject=Re: Your inquiry to AKASH STUDIOS`} style={{
            display: 'inline-block',
            backgroundColor: '#6919ff',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '14px',
            boxShadow: '0 2px 4px rgba(105, 25, 255, 0.3)',
            transition: 'all 0.2s'
          }}>
            📧 Reply to {name}
          </a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div style={{
      textAlign: 'center',
      padding: '32px 20px',
      color: '#6b7280',
      fontSize: '12px'
    }}>
      <p style={{ margin: '0 0 8px 0' }}>
        This notification was sent from your AKASH STUDIOS contact form
      </p>
      <p style={{ margin: '0', fontSize: '11px', color: '#9ca3af' }}>
        Received on {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
    </div>
  </div>
);

export default EmailTemplateToOwner;