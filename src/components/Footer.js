import React from 'react'; // <-- ADDED: React import
import './Footer.css';

// Footer Component

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer">
      <div className="footer-container">
        <button onClick={scrollToTop} className="back-to-top-btn">
          <span>↑</span>
          <span>BACK TO TOP</span>
        </button>

        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/chae-lee/" target="_blank" className="social-link">
            LinkedIn
          </a>
          <a className="email">
            chaehee.lee.d@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;