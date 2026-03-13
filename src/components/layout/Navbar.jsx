import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          padding: 0.75rem 0;
        }
        nav.not-scrolled {
          background: transparent;
          padding: 1.25rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        .logo-icon {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-item {
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: color 0.3s ease;
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
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu, .overlay {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
            z-index: 1001;
          }
          .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: white;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            padding: 2rem 2rem;
            gap: 1.5rem;
            z-index: 1000;
          }
          .mobile-menu.open {
            display: flex;
            right: 0;
          }
          .overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
          }
          .overlay.show {
            display: block;
          }
        }
      `}</style>

      <nav className={navClass}>
        <div className="nav-container">
          <NavLink to="/" className="logo" style={{ color: logoColor }}>
            <Rocket className="logo-icon" size={28} />
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
            <NavLink to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
              Get Quote
            </NavLink>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: logoColor }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Overlay and Mobile Menu only on mobile screens */}
        <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
            <button onClick={() => setIsOpen(false)} style={{ color: 'var(--black)' }}>
              <X size={28} />
            </button>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="nav-item"
              style={{ fontSize: '1.25rem', color: 'var(--black)' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ marginTop: '1rem' }}>
            Get Quote
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
