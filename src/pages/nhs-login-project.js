import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './nhs-login-project.css';
import NHSHeroImage from '../assets/nhs-hs-hero-img.png'; 

const NHSLoginProject = () => {
  const [activeSection, setActiveSection] = useState('business');

  const contentData = {
    business: {
      title: "",
      cards: [
        {
          number: "1",
          title: "Know your customer",
          description: "We have as responsibility to identify our users if we're giving financial support in return. We want them to be real people and to be who they say they are.",
          type: "problem-statement-card"
        },
        {
          number: "2",
          title: "Fraud/error mitigation",
          description: "We have evidence of cases where users have more than one application and we want to prevent theses by introducing a unique identifier that can bolster the duplicate check already in place.",
          type: "problem-statement-card"
        },
        {
          number: "3",
          title: "Enables better self-serve options in future",
          description: "To enable other initiatives in the pipeline we need to establish higher level of authentication first.",
          type: "problem-statement-card"
        }
      ]
    },

    user: {
      title: "Current authentication friction",
      cards: [
        {
          number: "1",
          title: "Inconsistency",
          description: "The authentication exists in one product, not across all products across the service.",
          type: "user-painpoints-card"
        },
        {
          number: "2",
          title: "User experience",
          description: "Users that we have mobile phone number of in our database can only use the authentication, therefore the service. This creates friction in user experience and users manually need to call the CSS team for support.",
          type: "user-painpoints-card"
        }
      ]
    },
    technical: {
      title: "Existing system limitations",
      cards: [
        {
          number: "1",
          title: "Weaker security measure",
          description: "The current security system (one time passcode) does not guarantee who they say they are, therefore it is considered the weaker side of security and our confidence.",
          type: "technical-card"
        },
        {
          number: "2",
          title: "Alignment with the long-term goal",
          description: "It does not aligned with the business goal, enabling products to be self-serve. We want to create a system that serves the long-term goal.",
          type: "technical-card"
        }
      ]
    }
  };

  const chipButtons = [
    { key: 'business', label: 'Business Challenge', className: 'business-challenge' },
    { key: 'user', label: 'User Pain-points', className: 'user-pain-points' },
    { key: 'technical', label: 'Technical constraints', className: 'technical-constraints' }
  ];

  const handleChipClick = (sectionKey) => {
    setActiveSection(sectionKey);
  };

  const currentSection = contentData[activeSection];

  return (
    <div className="nhs-case-study">
      {/* Hero Section */}
      <section className="nhs-hero-section">
        <div className="nhs-logo"></div>
        <div className="hero-content"> 
          <h1>Placeholder title</h1>
          <img
            src={NHSHeroImage}
            alt="NHS Healthy Start Hero Image"
            className="nhs-hs-hero-img"
          />
        </div>
      </section>

      {/* Case Study Details */}
      <section className="case-details">
        <div className="container">
          <div className="details-grid">
            {/* Left Column - Project Info */}
            <div className="project-info">
              <div className="info-item">
                <span className="label">Sector</span>
                <span className="value">Healthcare</span>
              </div>
              <div className="info-item">
                <span className="label">Timeline</span>
                <span className="value">10 months | ?? sprints, 2025</span>
              </div>
              <div className="info-item">
                <span className="label">Role</span>
                <span className="role-value">UX Product Designer</span>
              </div>
              <div className="info-item">
                <span className="label">Responsibility</span>
                <span className="value">Service Design, UX, Interaction Design, Code Prototyping, User Research, Workshop Facilitation</span>
              </div>
              <div className="info-item">
                <span className="label">Team</span>
                <span className="value">User Researcher, Content Designer, Product Managers, Business Analyst, Developers, Data Analyst</span>
              </div>
              <div className="info-item">
                <span className="label">Keyword</span>
                <span className="value">B2C, Web mobile, End-to-end</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="content-column">
              <div className="challenge-section">
                <h2 className="section-title">The Key Challenge</h2>
                <p>The absence of robust KYC measures undermined user verification, leading to increased risks of fraud, errors, and a lack of confidence in user identity</p>
              </div>

              <div className="role-section">
                <h2 className="section-title">My role</h2>
                <p>Owned the end-to-end design process from refining scope and validating feasibility to iterating on user-tested designs while ensuring consistency across flows, aligning with business objectives, and designing for edge-cases</p>
              </div>

              <div className="success-section">
                <h2 className="section-title">Success</h2>
                <p>placeholder</p>
              </div>

              <div className="top-impact-section">
                <h2 className="section-title">The Impact</h2>
                <ul>
                  <li>placeholder</li>
                  <li>placeholder</li>
                </ul>
              </div>

              <a href="#solutions-section" className="outcome-button">
                <div className="arrow-circle">
                  <ArrowRight size={20} />
                </div>
                <span>GO TO OUTCOME</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <h2>Problem Statement</h2>
          <p>To enhance security while maintaining a seamless user experience, the Healthy Start service opted to implement an identity validation mechanism. Several options were evaluated, and the final decision was made following thorough analysis and discussions with multiple stakeholders, in alignment with both Business, Service and user objectives.</p>
        </div> 
  
        <div className="container">
          <div className="problem-content">
            <div className="chip-buttons">
              {chipButtons.map((chip) => (
                <button
                  key={chip.key}
                  className={`chip ${chip.className} ${activeSection === chip.key ? 'active' : ''}`}
                  onClick={() => handleChipClick(chip.key)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
            
            <div className="content-section">
              <h3 className="title-inside">{currentSection.title}</h3>
              <div className={`problem-cards-container ${currentSection.cards.length === 3 ? 'three-cards' : ''}`}>
                {currentSection.cards.map((card, index) => (
                  <div key={index} className={`problem-card ${card.type}`}>
                    <div className="card-number">{card.number}</div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-description">{card.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div> 
        </div>
</section>




    </div>
  );
};

export default NHSLoginProject;