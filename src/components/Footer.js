import React from 'react'; // <-- ADDED: React import

// Footer Component
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
        >
          <span>↑</span>
          <span>BACK TO TOP</span>
        </button>
        
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer; // <-- ADDED: The export statement