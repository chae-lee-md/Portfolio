// ProjectsSection.jsx

import React from 'react';
import './ProjectsSection.css'; 
import TEKPreview from '../assets/TEK-preview.png';
import NHSPreview from '../assets/NHS-preview2.png';
import NHSloginPreview from '../assets/NHS-login-preview.png';

// The corrected ProjectCard component
// It now correctly destructures 'linkHref' from the props
const ProjectCard = ({ title, description, tags, bgColor, image, imageUrl, size = 'normal', linkHref }) => {

  const cardClasses = size === 'large' 
    ? 'card-large' 
    : size === 'wide' 
    ? 'card-wide' 
    : '';

  return (
    // The entire card is wrapped in an anchor tag
    <a href={linkHref} className="project-card-link"> 
      <div className={`project-card ${cardClasses}`}>
       
       <div className={`project-card__image-container ${bgColor}`}>
  {imageUrl && (
    <div
      className="project-card__image-preview"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  )}
</div>


        
        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
          
          <div className="project-card__tags">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="project-card__tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};


// The ProjectsSection component uses the ProjectCard
const ProjectsSection = () => {
  const projects = [
    {
      title: 'NHS — Secured Apply Journey',
      description: 'Self-serve driven online apply journey with enhanced security and improved accessibility for fraud prevention',
      tags: ['Service Design', 'UX Design', 'End-to-end'],
      bgColor: 'bg-white',
      imageUrl: NHSPreview, // add image URL
      linkHref: '/nhs-project' // Add a link for each project
    },
    {
      title: 'Career Roadmap',
      description: 'AI-powered career navigation platform tailored for young generation in tech',
      tags: ['Product Design', 'Code prototyping'],
      bgColor: 'bg-black',
      image: true,
      linkHref: '/career-roadmap-project'
    },

    {
      title: 'Design System Building',
      description: 'This is placeholder text for the design system building project description',
      tags: ['Product Design', 'Design Engineer project'],
      bgColor: 'bg-black',
      image: true,
      linkHref: '/desigin-system-project'
    },
    {
      title: 'Integration of a Third-Party Solution',
      description: 'Beyond the Product: Designing a Scalable Integration for Seamless Ecosystem Experiences',
      tags: ['Product Design', 'Code prototyping'],
      bgColor: 'bg-blue',
      imageUrl: NHSloginPreview,
      linkHref: '/nhs-login-project'
      
    },
    {
      title: 'Design Framework with TEK',
      description: 'AI-powered career navigation platform tailored for young generation in tech',
      tags: ['Product Design', 'Code prototyping'],
      imageUrl: TEKPreview, // add image URL
      linkHref: '/career-roadmap-project-2'
    },

    {
      title: 'Sustainable Pensions',
      description: 'Funding strategy that financially supports sustainable local food business to be consumed by all',
      tags: ['Service Design', 'UX Design'],
      bgColor: 'bg-blue-500',
      image: true,
      linkHref: '/sustainable-pensions-project'
    }
  ];

  return (
    <div id="projects-section">
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            // The spread operator {...project} correctly passes `linkHref`
            // along with all other properties to the ProjectCard.
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;