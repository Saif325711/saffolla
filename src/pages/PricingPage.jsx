import React, { useEffect } from 'react';
import { 
  Check, ChevronRight, Zap, Target, ShieldCheck, Mail, Phone, MessageSquare
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PricingPage = () => {
  // Ensure we start at the top of the page when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    {
      name: 'Starter',
      price: '$299',
      subtitle: 'Perfect for small projects and portfolios',
      features: [
        'Portfolio Website',
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'SEO Optimization',
        '1 Month Support'
      ],
      icon: <Zap size={24} />,
      btnText: 'Get Started',
      accent: '#6366f1'
    },
    {
      name: 'Professional',
      price: '$999',
      subtitle: 'For growing businesses and e-commerce',
      popular: true,
      features: [
        'Business Website / E-Commerce',
        'Responsive Design',
        'Up to 15 Pages',
        'Admin Dashboard',
        'Payment Integration',
        'SEO Optimization',
        '3 Months Support'
      ],
      icon: <Target size={24} />,
      btnText: 'Get Started',
      accent: '#a855f7'
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      subtitle: 'Complete mobile app and web solutions',
      features: [
        'Mobile App (Android & iOS)',
        'Web Application',
        'Admin Dashboard',
        'API Integration',
        'Payment Gateway',
        'Push Notifications',
        '6 Months Support'
      ],
      icon: <ShieldCheck size={24} />,
      btnText: 'Get Started',
      accent: '#ec4899'
    }
  ];

  const customProjects = [
    { name: 'Recharge App', price: '$1,999' },
    { name: 'E-Commerce App', price: '$1,499' },
    { name: 'Business Website', price: '$499' }
  ];

  return (
    <div className="pricing-page">
      <style>{`
        .pricing-page {
          padding-top: 100px; /* Offset for navbar */
          background: #f8fafc;
          min-height: 100vh;
        }
        .pricing-section {
          padding: 6rem 1.5rem;
        }
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
        }
        .section-header h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
        }
        .section-subtitle {
          font-size: 1.25rem;
          color: var(--gray-500);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 8rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .pricing-card {
          background: white;
          padding: 3rem;
          border-radius: 2.5rem;
          border: 1px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px -12px rgba(99, 102, 241, 0.15);
          border-color: var(--primary);
        }
        .pricing-card.popular {
          border-color: var(--primary);
          box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.1);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tier-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 2rem;
        }
        .tier-name {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .tier-price {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .tier-price span {
          font-size: 1.1rem;
          color: var(--gray-500);
          font-weight: 500;
        }
        .tier-subtitle {
          color: var(--gray-500);
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .features-list {
          margin-bottom: 3rem;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--gray-600);
          font-size: 1rem;
        }
        .check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .custom-section {
          background: white;
          padding: 6rem 2rem;
          border-radius: 3.5rem;
          max-width: 1000px;
          margin: 0 auto 8rem;
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        .custom-header {
          margin-bottom: 4rem;
        }
        .custom-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .custom-header p {
          color: var(--gray-500);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
        }

        .custom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .custom-item {
          padding: 2.5rem;
          background: #f8fafc;
          border-radius: 2rem;
          transition: all 0.3s ease;
        }
        .custom-item:hover {
          background: white;
          box-shadow: var(--shadow-md);
          transform: scale(1.03);
        }
        .custom-item h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--gray-700);
        }
        .custom-item .price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .consultation-cta {
          background: var(--black);
          color: white;
          padding: 6rem 2rem;
          border-radius: 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .consultation-cta::after {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.2;
        }
        .consultation-cta h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
        }
        .consultation-cta p {
          color: var(--gray-400);
          font-size: 1.25rem;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .consultation-cta h2 { font-size: 2rem; }
          .pricing-card { padding: 2rem; }
        }
      `}</style>

      <div className="container pricing-section">
        {/* Header */}
        <div className="section-header">
          <h1>Our <span className="accent-text">Pricing</span></h1>
          <p className="section-subtitle">Transparent pricing for quality software development</p>
        </div>

        {/* Pricing Tiers */}
        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="tier-icon" style={{ backgroundColor: tier.accent }}>
                {tier.icon}
              </div>
              
              <h3 className="tier-name">{tier.name}</h3>
              <div className="tier-price">{tier.price}<span> starting</span></div>
              <p className="tier-subtitle">{tier.subtitle}</p>
              
              <div className="features-list">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <NavLink 
                to="/contact" 
                className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', padding: '1.25rem' }}
              >
                {tier.btnText} <ChevronRight size={18} style={{ marginLeft: '6px' }} />
              </NavLink>
            </div>
          ))}
        </div>

        {/* Custom Projects */}
        <div className="custom-section">
          <div className="custom-header">
            <h2>Custom <span className="accent-text">Projects</span></h2>
            <p>
              Have a unique project in mind? We offer custom quotes tailored to 
              your specific requirements.
            </p>
          </div>
          
          <div className="custom-grid">
            {customProjects.map((item, i) => (
              <div key={i} className="custom-item">
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>Starting from</div>
              </div>
            ))}
          </div>
          
          <NavLink 
            to="/contact" 
            className="btn btn-dark" 
            style={{ padding: '1rem 2.5rem' }}
          >
            Request Custom Quote
          </NavLink>
        </div>

        {/* Consultation CTA */}
        <div className="consultation-cta">
          <MessageSquare size={48} className="accent-text" style={{ marginBottom: '2rem' }} />
          <h2>Not Sure <span className="accent-text">Which Plan?</span></h2>
          <p>
            Contact us for a free consultation and we'll help you choose 
            the right solution for your business.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <NavLink to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Free Consultation
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
