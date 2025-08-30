import React, { useState, useEffect } from 'react';
import { Check, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Navbar = () => { // Removed currentPage and setCurrentPage props
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation(); // Get the current URL location

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chaehee.lee.d@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  // The handleNavClick function is no longer needed.

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-blur">
          <div className="navbar-content">
            {/* Desktop Navigation */}
            <div className="navbar-desktop">
              <div className="navbar-links">
                {/* Use Link component for navigation */}
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
                >
                  WORK
                </Link>
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
                >
                  ABOUT
                </Link>
                <Link
                  to="/archive"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`nav-link nav-archive ${location.pathname === '/archive' ? 'nav-link-active' : ''}`}
                  style={{
                    width: '4rem',
                    textAlign: 'center',
                    color: location.pathname === '/archive' ? '#000' : (hovered ? '#025CEF' : '#6b7280'),
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    fontWeight: hovered ? '700' : '500',
                  }}
                >
                  {hovered ? 'WIP!' : 'ARCHIVE'}
                </Link>
                {/* Use a regular anchor tag for external links like Resume */}
                <a href="#" className="nav-link">
                  RESUME
                </a>
              </div>

              {/* Desktop Contact Button */}
              <div className="copy-email-button-wrapper">
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="copy-email-button"
                >
                  {emailCopied ? <Check size={16} /> : <Mail size={16} />}
                  <span>CONTACT</span>
                </button>

                {(showTooltip || emailCopied) && (
                  <div className="email-tooltip">
                    {emailCopied ? 'Email copied!' : 'Copy email'}
                    <div className="email-tooltip-arrow"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="navbar-mobile-controls">
              {/* Mobile Contact Button */}
              <div className="copy-email-button-wrapper">
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="copy-email-button"
                >
                  {emailCopied ? <Check size={16} /> : <Mail size={16} />}
                  <span>CONTACT</span>
                </button>

                {(showTooltip || emailCopied) && (
                  <div className="email-tooltip">
                    {emailCopied ? 'Email copied!' : 'Copy email'}
                    <div className="email-tooltip-arrow"></div>
                  </div>
                )}
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="hamburger-button"
                aria-label="Toggle menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button
          onClick={closeMobileMenu}
          className="mobile-close-button"
          aria-label="Close menu"
        >
          <X />
        </button>

        {/* Use Link component for mobile menu navigation */}
        <Link
          to="/"
          onClick={closeMobileMenu} // Add onClick to close the menu
          className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
        >
          WORK
        </Link>

        <Link
          to="/about"
          onClick={closeMobileMenu}
          className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
        >
          ABOUT
        </Link>
        
        <Link
          to="/archive"
          onClick={closeMobileMenu}
          className={`nav-link ${location.pathname === '/archive' ? 'nav-link-active' : ''}`}
        >
          ARCHIVE
        </Link>

        <a href="#" className="nav-link" onClick={closeMobileMenu}>
          RESUME
        </a>
      </div>
    </>
  );
};

export default Navbar;