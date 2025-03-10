import React from 'react';

interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate = ({
  name = '',
  email = '',
  message = '',
}: EmailTemplateProps) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#333', fontSize: '24px' }}>New Contact Form Submission</h1>
      
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        
        <hr style={{ border: '1px solid #eee', margin: '20px 0' }} />
        
        <h2 style={{ color: '#333', fontSize: '18px' }}>Message:</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;