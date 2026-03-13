import React from 'react';
import { CreditCard, Globe, User, BookOpen, Smartphone, Laptop } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Recharge & Bill Payment App',
      description: 'Modern and secure payment solutions with seamless user experience.',
      icon: <CreditCard size={32} />,
    },
    {
      title: 'E-commerce Website',
      description: 'High-converting online stores tailored to your business goals.',
      icon: <Globe size={32} />,
    },
    {
      title: 'Portfolio Website',
      description: 'Stunning personal and professional portfolios to showcase your work.',
      icon: <User size={32} />,
    },
    {
      title: 'Business Website',
      description: 'Professional web presence to establish authority in your industry.',
      icon: <Laptop size={32} />,
    },
    {
      title: 'Android App Development',
      description: 'Native and hybrid Android apps optimized for performance.',
      icon: <Smartphone size={32} />,
    },
    {
      title: 'iOS App Development',
      description: 'Premium iOS applications built with the latest technologies.',
      icon: <Smartphone size={32} />,
    },
  ];

  return (
    <section id="services">
      <style>{`
        .service-card {
          text-align: center;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .icon-box {
          width: 70px;
          height: 70px;
          background: rgba(99, 102, 241, 0.05);
          color: var(--primary);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .service-card:hover .icon-box {
          background: var(--primary);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }
        .service-card h3 {
          font-size: 1.25rem;
          color: var(--black);
        }
        .service-card p {
          color: var(--gray-500);
          line-height: 1.6;
        }
      `}</style>
      
      <h2 className="section-title">Our <span className="accent-text">Services</span></h2>
      <p className="section-subtitle">
        We offer a wide range of software development services to help you achieve your business objectives.
      </p>

      <div className="grid-3">
        {services.map((service, index) => (
          <div key={index} className="card service-card">
            <div className="icon-box">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
