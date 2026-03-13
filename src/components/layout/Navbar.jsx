import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Team', path: '/#team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for colors based on page and scroll status
  const navClass = (!isHomePage || scrolled) ? 'scrolled' : 'not-scrolled';
  const textColor = (!isHomePage || scrolled) ? 'var(--gray-700)' : 'white';
  const logoColor = (!isHomePage || scrolled) ? 'var(--black)' : 'white';

  return (
    <>
      <style>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        nav.scrolled {
          background: white;
          box-shadow: var(--shadow-md);
          padding: 0.5rem 0;
        }
        nav.not-scrolled {
          background: transparent;
          padding: 1rem 0;
        }
        .nav-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
          max-width: 1280px;
          margin: 0 auto;
          gap: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .nav-container {
            flex-direction: row;
            justify-content: space-between;
            padding: 0 1.5rem;
            gap: 0;
          }
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          transition: color 0.3s ease;
        }
        @media (min-width: 768px) {
          .logo {
            font-size: 1.5rem;
          }
        }

        .logo-icon {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          width: 100%;
          justify-content: flex-start; /* Better for scrolling */
          overflow-x: auto;
          white-space: nowrap;
          padding: 0.5rem 0.5rem 0.75rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nav-links::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        @media (min-width: 768px) {
          .nav-links {
            width: auto;
            gap: 2rem;
            padding-bottom: 0;
            overflow-x: visible;
          }
        }

        .nav-item {
          font-weight: 500;
          font-size: 0.85rem;
          position: relative;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .nav-item {
            font-size: 0.95rem;
          }
        }

        .nav-item:hover, .nav-item.active {
          color: var(--primary) !important;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-item:hover::after, .nav-item.active::after {
          width: 100%;
        }

        .nav-cta {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-cta {
            display: block;
          }
        }
      `}</style>

      <nav className={navClass}>
        <div className="nav-container">
          <NavLink to="/" className="logo" style={{ color: logoColor }}>
            <Rocket className="logo-icon" size={24} />
            <span>Saffolla</span>
          </NavLink>

          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                style={{ color: textColor }}
              >
                {link.name}
              </NavLink>
            ))}
            {/* On mobile, 'Get Quote' is just another link in the scroll */}
            <NavLink to="/contact" className="nav-item accent-text" style={{ fontWeight: '700' }}>
              Get Quote
            </NavLink>
          </div>

          <div className="nav-cta">
            <NavLink to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
              Get Quote
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
