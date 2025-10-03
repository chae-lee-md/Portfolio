import React from 'react'; // <-- ADDED: React import
import Footer from '../components/Footer'; // <-- ADDED: Footer import
import './About.css';

export default function AboutPage() {
  const experiences = [
    {
      title: "Product Designer",
      company: "@ NHS Business Services Authorities ",
      period: "2023 - present",
      tags: ["B2B", "Healthcare"],
      rotation: +1
    },
    {
      title: "Product Designer",
      company: "@ High Speed Training",
      period: "",
      tags: ["B2B2C", "E-commerce"]
    },
    {
      title: "UX Consultant",
      company: "@ London College of Communication",
      period: "",
      tags: ["B2C", "Education"]
    },
    {
      title: "Founding Designer",
      company: "@ OpenMeta",
      period: "",
      tags: ["Web3", "Startup"],
      rotation: -2
    }
  ];

  const skillsets = [
    "UX Strategy",
    "Design Systems Management",
    "Service Design",
    "Product Design",
    "a11y",
    "User Research",
    "Usability Testing",
    "Code Prototype",
    "Vide Coding",
    "Workshop Facilitation",
    "Stakeholder Management",
    "Mentorship"
  ];




  const education = [
    {
      degree: "MA Service Design",
      uni: "University of the Arts London, U.K.",
      grade: "Class: with Distinction (A+)"
    },
    {
      degree: "BA Digital Media Design",
      uni: "Kaywon University of Art & Design, South Korea",
      grade: "GPA: 4.1/4.5"
    }
  
  
  ];
  
  
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="main-heading">About</h1>
        
        <div className="bio-section">
          <p className="bio-text">
            Hi, I'm Chae, a London-based product designer. I approach design holistically - 
            zooming in on micro-interactions while keeping the broader system in view. 
            With over 5 years of experience across tech startups, B2B SaaS, and the UK public sector, 
            I specialise in <span className="highlight-pink"><span>UX strategy</span></span>, <span className="highlight-cyan"><span>end-to-end product design</span></span>, 
            and <span className="highlight-yellow"><span>service design</span></span>, all grounded in deep customer empathy. 
            I'm driven by curiosity and a desire to continuously refine both my craft and myself.
          </p>
          
          <p className="bio-text">
            I consistently apply design thinking with a data-driven mindset to create business impact 
            while delivering real value to users. Unapologetically <span className="highlight-purple">user-obsessed</span>, 
            I combine service design thinking with product design expertise and front-end development skills 
            to shape meaningful products for millions.
          </p>
          
          <p className="site-info">
            This site is built with React and custom CSS - a playground for end-to-end product development and 
            upcoming side projects.
          </p>
        </div>

        <div className="about-experience">
          <h2 className="about-experience-heading">Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card" style={{ transform: `rotate(${exp.rotation}deg)` }}>

                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <div className="experience-tags">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="experience-tag">{tag}</span>
                ))}

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-experience">
          <h2 className="about-experience-heading">Skillset</h2>
          <div className="skillsets">
            {skillsets.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>

        
        <div className="about-experience">
          <h2 className="about-experience-heading">Education</h2>
          {education.map((edu, index) => (
            <div className="education" key={index}>
              <p className="degree">{edu.degree}</p>
              <p className="uni">{edu.uni}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>





      </div>
    </div>
  );
}
