import React from 'react';
import { MousePointer2, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
          background: var(--black);
          color: white;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          z-index: 1;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--black) 0%, transparent 100%);
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        .hero-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 2rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          animation: fadeInDown 0.8s ease-out;
        }
        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: white;
          animation: fadeInLeft 1s ease-out forwards;
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--gray-400);
          margin-bottom: 2.5rem;
          animation: fadeInLeft 1.2s ease-out;
          line-height: 1.6;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 1.4s ease-out;
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .hero-bg {
            width: 100%;
            opacity: 0.4;
          }
          .hero-bg::after {
            background: linear-gradient(to bottom, var(--black) 0%, rgba(0,0,0,0.7) 100%);
          }
          .hero-content {
            text-align: center;
            margin: 0 auto;
          }
          .hero-btns {
            justify-content: center;
          }
        }
      `}</style>

      <div className="hero-bg">
        <img 
          src="/assets/images/hero_developer.png" 
          alt="Developer working" 
          className="hero-image"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-label">Trusted Software Agency</span>
          <h1>Turn Your <span className="accent-text">Dream</span> Into <span className="accent-text">Reality</span></h1>
          <p>
            We help entrepreneurs and businesses build scalable, high-quality 
            software products that stand out in the digital landscape.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">
              Get Started <MousePointer2 size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-outline" style={{ borderColor: 'var(--gray-700)', color: 'white' }}>
              Call Now <PhoneCall size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
