import React, { useState, useEffect, useRef } from 'react';
import { Check, Copy } from 'lucide-react';

// import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import About from '../pages/About';


// Home Page Component
const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-custom-bg">
      <Hero scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      {/* <Footer /> */}
    </div>
  );
};



// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <About />}
    </div>
  );
};

export default App;