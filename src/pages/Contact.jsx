import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Initialize EmailJS with Public Key
      emailjs.init('dDd11An2dqLJcTHnU');

      // 1. Send Email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_5z4ffjf', 
        'template_agezx4p', 
        templateParams
      );

      // 2. Save to Firestore (Backup)
      try {
        await addDoc(collection(db, 'messages'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      } catch (fsError) {
        console.warn('Firestore backup failed:', fsError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission failed:', error);
      // Specifically handle the 412 error which is common with Gmail connection
      if (error.status === 412) {
        setStatus('auth_error');
      } else {
        setStatus('error');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      content: 'narengi , no.2 bonda , birkuchi',
      color: '#6366f1'
    },
    {
      icon: <Phone size={24} />,
      title: 'Mobile Number',
      content: '6003359534',
      color: '#a855f7'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      content: 'saifulislam.786452@gmail.com',
      color: '#ec4899'
    }
  ];

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          padding-top: 100px;
          min-height: 100vh;
          background: #f8fafc;
        }
        .contact-hero {
          background: var(--black);
          color: white;
          padding: 6rem 1.5rem;
          text-align: center;
          margin-bottom: -100px;
        }
        .contact-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1rem;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          padding: 0 1.5rem 6rem;
          position: relative;
          z-index: 10;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          transition: transform 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-5px);
        }
        .info-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .info-card h3 {
          font-size: 1.25rem;
          margin: 0;
          color: var(--black);
        }
        .info-card p {
          color: var(--gray-600);
          line-height: 1.6;
          margin: 0;
        }
        .contact-form-container {
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
        }
        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group.full {
          grid-column: span 2;
        }
        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--black);
        }
        .form-group input, .form-group textarea {
          padding: 0.85rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
        .submit-btn {
          grid-column: span 2;
          margin-top: 1rem;
        }
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          .contact-hero {
            padding: 4rem 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .contact-form {
            grid-template-columns: 1fr;
          }
          .form-group.full {
            grid-column: span 1;
          }
          .submit-btn {
            grid-column: span 1;
          }
          .contact-form-container {
            padding: 2rem;
          }
        }
      `}</style>

      <section className="contact-hero">
        <div className="container">
          <h1>Get In <span className="accent-text">Touch</span></h1>
          <p style={{ color: 'var(--gray-400)', fontSize: '1.25rem' }}>
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          {contactDetails.map((item, index) => (
            <div key={index} className="info-card">
              <div className="info-icon" style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
          
          <div className="info-card" style={{ background: 'var(--primary)', color: 'white' }}>
            <div className="info-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <Clock size={24} />
            </div>
            <h3 style={{ color: 'white' }}>Working Hours</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="contact-form-container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
            <p style={{ color: 'var(--gray-600)' }}>Fill out the form below and we will get back to you within 24 hours.</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Saiful Islam" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="name@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject" 
                placeholder="Project Inquiry" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full">
              <label>Message</label>
              <textarea 
                name="message" 
                rows="6" 
                placeholder="Tell us about your project..." 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn submit-btn ${status === 'success' ? 'btn-success' : 'btn-primary'}`}
              disabled={status === 'loading'}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: status === 'success' ? '#10b981' : '',
                borderColor: status === 'success' ? '#10b981' : ''
              }}
            >
              {status === 'loading' ? (
                <>Sending... <Loader2 size={18} className="animate-spin" style={{ marginLeft: '10px' }} /></>
              ) : status === 'success' ? (
                <>Sent Successfully <CheckCircle2 size={18} style={{ marginLeft: '10px' }} /></>
              ) : (
                <>Send Message <Send size={18} style={{ marginLeft: '10px' }} /></>
              )}
            </button>
            
            {status === 'auth_error' && (
              <div style={{ gridColumn: 'span 2', padding: '1rem', background: '#fff1f2', border: '1px solid #fda4af', borderRadius: '0.75rem', marginTop: '1.5rem' }}>
                <p style={{ color: '#be123c', fontWeight: '600', marginBottom: '0.5rem' }}>Gmail Connection Issue (Error 412)</p>
                <ol style={{ color: '#e11d48', fontSize: '0.85rem', paddingLeft: '1.25rem', margin: 0 }}>
                  <li>Go to <b>EmailJS Dashboard</b></li>
                  <li>Go to <b>Email Services</b></li>
                  <li>Click your Gmail service</li>
                  <li>Click <b>Reconnect Account</b> and make sure to check "Send email on your behalf"</li>
                </ol>
              </div>
            )}
            
            {status === 'error' && (
              <p style={{ gridColumn: 'span 2', color: '#ef4444', textAlign: 'center', marginTop: '1rem', fontWeight: '500' }}>
                Something went wrong. Please check your credentials and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
