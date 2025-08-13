import React, { useState } from 'react'; // <-- ADDED: useState import
import { Check, Copy } from 'lucide-react'; // <-- ADDED: Icon imports
import './Navbar.css';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chae@example.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <nav className="navbar-container"> 
      <div className="navbar-wrapper">
        <div className="navbar-links">
          <button
            onClick={() => setCurrentPage('home')}
            className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
          >
            Work
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`nav-link ${currentPage === 'about' ? 'nav-link-active' : ''}`}
          >
          About
          </button>
          <a
            href="#"
            className="nav-link"
          >
            Résumé
          </a>
        </div>
        
        <div className="copy-email-button-wrapper">
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="copy-email-button"
          >
            {emailCopied ? <Check size={16} /> : <Copy size={16} />}
            <span>Copy email</span>
          </button>
          
          {(showTooltip || emailCopied) && (
            <div className="email-tooltip">
              {emailCopied ? 'Email copied!' : 'Email copied!'}
              <div className="email-tooltip-arrow"></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
