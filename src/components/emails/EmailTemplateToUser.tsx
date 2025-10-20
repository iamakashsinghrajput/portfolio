import * as React from 'react';

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
          width={100}
          height={100}
          style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '15px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        />
      </div>
      <h1 style={{
        color: '#ffffff',
        fontSize: '32px',
        fontWeight: 'bold',
        margin: '0 0 8px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        Thanks for reaching out! 🎉
      </h1>
      <p style={{
        color: '#e2e8f0',
        fontSize: '18px',
        margin: '0',
        fontWeight: '300'
      }}>
        We&apos;ve received your message
      </p>
    </div>

    {/* Main Content */}
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginTop: '-30px',
      position: 'relative',
      zIndex: '1'
    }}>
      {/* Success Banner */}
      <div style={{
        backgroundColor: '#dcfdf7',
        borderLeft: '4px solid #10b981',
        padding: '20px 24px',
        margin: '0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '24px' }}>✅</span>
          <div>
            <p style={{
              margin: '0 0 4px 0',
              fontSize: '16px',
              color: '#065f46',
              fontWeight: '600'
            }}>
              Message Received Successfully!
            </p>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: '#047857'
            }}>
              Hi {name}, we&apos;ve got your message and we&apos;re excited to connect with you.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 32px' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <h2 style={{
            color: '#1f2937',
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 16px 0'
          }}>
            What happens next?
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '20px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              backgroundColor: '#6919ff',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              flexShrink: '0'
            }}>
              1
            </div>
            <div>
              <h3 style={{
                color: '#374151',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 4px 0'
              }}>
                Message Review
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                margin: '0',
                lineHeight: '1.5'
              }}>
                We&apos;ll carefully review your message and understand your requirements.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '20px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              backgroundColor: '#8b5cf6',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              flexShrink: '0'
            }}>
              2
            </div>
            <div>
              <h3 style={{
                color: '#374151',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 4px 0'
              }}>
                Personal Response
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                margin: '0',
                lineHeight: '1.5'
              }}>
                Expect a personalized response from our team within 24-48 hours.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            <div style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              flexShrink: '0'
            }}>
              3
            </div>
            <div>
              <h3 style={{
                color: '#374151',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 4px 0'
              }}>
                Let&apos;s Connect
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                margin: '0',
                lineHeight: '1.5'
              }}>
                We&apos;ll reach out to{' '}
                <a href={`mailto:${userEmail}`} style={{
                  color: '#6919ff',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  {userEmail}
                </a>
                {' '}to discuss your project.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            color: '#374151',
            fontSize: '18px',
            fontWeight: '600',
            margin: '0 0 12px 0'
          }}>
            In the meantime...
          </h3>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: '0 0 20px 0',
            lineHeight: '1.5'
          }}>
            Feel free to explore our portfolio and recent projects
          </p>
          <a href="https://akashstudios.com" style={{
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
            🌐 Visit Our Portfolio
          </a>
        </div>
      </div>

      {/* Signature */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
        padding: '32px',
        textAlign: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          marginBottom: '16px'
        }}>
          <p style={{
            color: '#374151',
            fontSize: '16px',
            fontWeight: '600',
            margin: '0 0 4px 0'
          }}>
            Best regards,
          </p>
          <p style={{
            color: '#6919ff',
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '0 0 2px 0'
          }}>
            Akash Singh
          </p>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: '0'
          }}>
            Founder & Lead Developer, AKASH STUDIOS
          </p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div style={{
      textAlign: 'center',
      padding: '40px 20px',
      color: '#6b7280',
      fontSize: '12px'
    }}>
      <div style={{
        marginBottom: '16px'
      }}>
        <a href="https://linkedin.com/in/akashsingh" style={{
          color: '#6919ff',
          textDecoration: 'none',
          margin: '0 8px'
        }}>
          LinkedIn
        </a>
        <span style={{ margin: '0 8px', color: '#d1d5db' }}>•</span>
        <a href="https://github.com/akashsingh" style={{
          color: '#6919ff',
          textDecoration: 'none',
          margin: '0 8px'
        }}>
          GitHub
        </a>
        <span style={{ margin: '0 8px', color: '#d1d5db' }}>•</span>
        <a href="https://akashstudios.com" style={{
          color: '#6919ff',
          textDecoration: 'none',
          margin: '0 8px'
        }}>
          Portfolio
        </a>
      </div>
      <p style={{ margin: '0 0 8px 0', color: '#9ca3af' }}>
        You&apos;re receiving this because you contacted us through our website.
      </p>
      <p style={{ margin: '0', fontSize: '11px', color: '#9ca3af' }}>
        © {new Date().getFullYear()} AKASH STUDIOS. Crafting digital experiences with passion.
      </p>
    </div>
  </div>
);

export default EmailTemplateToUser;
