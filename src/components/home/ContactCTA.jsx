import React from 'react';
import { Send } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-dark-section" style={{ padding: '6rem 1.5rem' }}>
      <style>{`
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .cta-content h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.5rem;
        }
        .cta-content p {
          font-size: 1.25rem;
          color: var(--gray-400);
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        @media (max-width: 576px) {
          .cta-btns {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="cta-content">
          <h2>Ready to <span className="accent-text">Start Your Project?</span></h2>
          <p>
            Join hundreds of successful businesses that have scaled with our help. 
            Contact us today for a free consultation and quote.
          </p>
          <div className="cta-btns">
            <NavLink to="/contact" className="btn btn-primary">
              Contact Us <Send size={18} style={{ marginLeft: '8px' }} />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--gray-700)', color: 'white' }}>
              Get a Free Quote
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
