import React, { useEffect } from 'react';
import { 
  Lightbulb, ShieldCheck, Award, Clock, Users, Lock, ChevronRight, Rocket, Target, Briefcase
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  // Ensure we start at the top of the page when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver modern solutions.',
      icon: <Lightbulb size={24} />,
      color: '#6366f1'
    },
    {
      title: 'Trust',
      description: 'We build lasting relationships based on transparency and reliability.',
      icon: <ShieldCheck size={24} />,
      color: '#a855f7'
    },
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our work and deliverables.',
      icon: <Award size={24} />,
      color: '#ec4899'
    },
    {
      title: 'Timeliness',
      description: 'We respect deadlines and deliver projects on time, every time.',
      icon: <Clock size={24} />,
      color: '#f59e0b'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with clients to understand and fulfill their vision.',
      icon: <Users size={24} />,
      color: '#10b981'
    },
    {
      title: 'Security',
      description: 'We prioritize security in all our applications and solutions.',
      icon: <Lock size={24} />,
      color: '#ef4444'
    }
  ];

  return (
    <div className="about-page">
      <style>{`
        .about-page {
          padding-top: 100px; /* Offset for navbar */
        }
        .about-section {
          padding: 8rem 1.5rem;
          background: white;
          color: var(--black);
        }
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
        }
        .section-header h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.5rem;
        }
        .section-tagline {
          font-size: 1.25rem;
          color: var(--gray-500);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 8rem;
        }
        .about-image-container {
          position: relative;
        }
        .experience-badge {
          position: absolute;
          bottom: 2rem;
          right: -2rem;
          background: var(--primary);
          color: white;
          padding: 2rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
          text-align: center;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .content-block h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .content-block p {
          color: var(--gray-600);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 8rem;
        }
        .value-card {
          padding: 2.5rem;
          border-radius: 2rem;
          background: #f8fafc;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .value-card:hover {
          background: white;
          border-color: #e2e8f0;
          box-shadow: var(--shadow-xl);
          transform: translateY(-5px);
        }
        .value-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.5rem;
        }

        .mission-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 8rem;
        }
        .mission-card {
          background: var(--black);
          color: white;
          padding: 4rem;
          border-radius: 3rem;
          position: relative;
          overflow: hidden;
        }
        .mission-card::after {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: var(--primary);
          filter: blur(100px);
          opacity: 0.2;
        }

        .ready-cta {
          text-align: center;
          background: #f8fafc;
          padding: 6rem 2rem;
          border-radius: 3.5rem;
          margin-bottom: 5rem;
        }
        .ready-cta h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 992px) {
          .about-grid, .mission-vision {
            grid-template-columns: 1fr;
          }
          .experience-badge {
            position: static;
            margin-top: 2rem;
            max-width: fit-content;
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h1>About <span className="accent-text">Us</span></h1>
          <p className="section-tagline">Learn more about Rozmah Digital and our mission</p>
        </div>

        {/* Who We Are & Experience */}
        <div className="about-grid">
          <div className="content-block">
            <h2><Users className="accent-text" /> Who We Are</h2>
            <p>
              <strong>saffolla</strong> is a professional software development company dedicated to turning 
              your digital dreams into reality. We specialize in creating high-quality mobile applications, 
              web platforms, and business solutions that drive growth and success.
            </p>
            <p>
              Founded with a passion for technology and innovation, we have built a team of skilled 
              developers who are committed to delivering exceptional results for our clients.
            </p>
            
            <div style={{ marginTop: '3rem' }}>
              <h2><Briefcase className="accent-text" /> Our Experience</h2>
              <p>
                We have successfully delivered numerous projects including recharge and bill payment 
                applications like <strong>DamnPay</strong>, <strong>BillBits</strong>, and <strong>FastRecharge</strong>. 
                Our portfolio spans e-commerce platforms, portfolio websites, business websites, 
                and mobile applications for both Android and iOS.
              </p>
            </div>
          </div>
          
          <div className="about-image-container">
            <div style={{ background: '#f8fafc', borderRadius: '3rem', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
               <div style={{ textAlign: 'center' }}>
                  <Rocket size={100} className="accent-text" style={{ marginBottom: '2rem' }} />
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '800' }}>SAFFOLLA</h3>
                  <p className="accent-text" style={{ fontWeight: '600' }}>Turn Your Dream Into Reality</p>
               </div>
            </div>
            <div className="experience-badge">
              <span style={{ fontSize: '3rem', fontWeight: '800', display: 'block' }}>50+</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mission-vision">
           <div className="mission-card">
              <Target size={48} className="accent-text" style={{ marginBottom: '2rem' }} />
              <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ color: 'var(--gray-400)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                 Our mission is to empower businesses and individuals with cutting-edge software 
                 solutions that are reliable, scalable, and user-friendly. We believe in creating 
                 technology that makes a difference.
              </p>
           </div>
           
           <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Core <span className="accent-text">Values</span></h2>
              <p style={{ color: 'var(--gray-600)', fontSize: '1.1rem' }}>
                 These principles guide everything we do, from choosing the right technology 
                 to helping our clients achieve their business goals.
              </p>
           </div>
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon" style={{ backgroundColor: v.color }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{v.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="ready-cta">
          <h2>Ready to <span className="accent-text">Work With Us?</span></h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
             Let's discuss how we can help bring your project to life.
          </p>
          <NavLink to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
             Contact Us <ChevronRight size={20} style={{ marginLeft: '8px' }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
