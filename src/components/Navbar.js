import React, { useState, useEffect } from 'react';
import { Check, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chae@example.com');
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

  const handleNavClick = (page) => {
    setCurrentPage(page);
    closeMobileMenu();
  };

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
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
                >
                  WORK
                </button>
                <button
                  onClick={() => setCurrentPage('about')}
                  className={`nav-link ${currentPage === 'about' ? 'nav-link-active' : ''}`}
                >
                  ABOUT
                </button>
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`nav-link nav-archive ${currentPage === 'archive' ? 'nav-link-active' : ''}`}
                  style={{
                    width: '4rem',
                    textAlign: 'center',
                    color: hovered ? '#025CEF' : '#6b7280',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    fontWeight: hovered ? '700' : '500',
                  }}
                >
                  {hovered ? 'WIP!' : 'ARCHIVE'}
                </button>
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

        <button
          onClick={() => handleNavClick('home')}
          className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
        >
          WORK
        </button>

        <button
          onClick={() => handleNavClick('about')}
          className={`nav-link ${currentPage === 'about' ? 'nav-link-active' : ''}`}
        >
          ABOUT
        </button>

        <button
          onClick={() => handleNavClick('archive')}
          className={`nav-link ${currentPage === 'archive' ? 'nav-link-active' : ''}`}
        >
          ARCHIVE
        </button>

        <a href="#" className="nav-link" onClick={closeMobileMenu}>
          RESUME
        </a>
      </div>
    </>
  );
};

export default Navbar;