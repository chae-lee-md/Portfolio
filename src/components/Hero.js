import React from 'react';
import './Hero.css';
import profilePic from '../assets/chae-profile.JPG';

// Hero Component
const Hero = ({ scrollToProjects }) => {
  return (

<div className="hero-container">
  <div className="hero-wrapper">
    <div className="hero-content">

      <div className="hero-section">
        <div className="greeting-wrapper">
          <span className="greeting-text">Hello!</span>
          <div className="hello-profile">
            <img 
              src={profilePic} 
              alt="Chae's profile photo" 
              className="hello-profile-img"
            />
          </div>
          <span className="greeting-text">I'm Chae</span>
        </div>

        <h1 className="hero-heading">
          Product Designer turning tangled challenges into{' '}
          <span className="hero-heading-highlight">scalable products used by millions</span>,
          backed by 5+ years in startups, B2B, and B2C enterprises.
        </h1>
      </div>

      <div className="cta-buttons">
        <a href="#" className="cta-button">Little bit more about me ↗</a>
        <a href="https://www.linkedin.com/in/chae" target="_blank" rel="noopener noreferrer" className="cta-button">LinkedIn ↗</a>
      </div>

    </div> 



        <div className="projects-cta-wrapper">
          <button
            onClick={scrollToProjects}
            className="projects-cta-button"
          >
            Selected projects
            <div className="projects-cta-arrow">↓</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
