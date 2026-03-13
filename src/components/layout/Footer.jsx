import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: var(--black);
          color: white;
          padding: 5rem 1.5rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .footer-brand p {
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          background: #181123;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid #2d2d34;
        }
        .social-icon:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .footer-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
        }
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-link {
          color: var(--gray-400);
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          color: var(--gray-400);
        }
        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .footer-bottom {
          border-top: 1px solid #18181b;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--gray-500);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
      
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Rocket className="accent-text" size={28} />
            <span>Saffolla</span>
          </div>
          <p>
            Turning your dreams into reality with cutting-edge software solutions. 
            We build modern web and mobile applications tailored to your business needs.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <NavLink to="/" className="footer-link">Home</NavLink>
            <NavLink to="/services" className="footer-link">Services</NavLink>
            <NavLink to="/team" className="footer-link">Team</NavLink>
            <NavLink to="/pricing" className="footer-link">Pricing</NavLink>
            <NavLink to="/contact" className="footer-link">Contact</NavLink>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Services</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Web Development</a>
            <a href="#" className="footer-link">Mobile Apps</a>
            <a href="#" className="footer-link">UI/UX Design</a>
            <a href="#" className="footer-link">Digital Marketing</a>
            <a href="#" className="footer-link">Cloud Solutions</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-item">
            <MapPin className="contact-icon" size={20} />
            <span>narengi , no.2 bonda , birkuchi</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={20} />
            <span>6003359534</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={20} />
            <span>saifulislam.786452@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Saffolla Software Agency. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
