import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight, Users, PersonStanding, UserCheck, BarChart2, LayoutDashboard } from 'lucide-react';
import './nhs-login-project.css';
import NHSLoginImage from '../assets/nhs-login-hero-img.png'; 
import asIsImage from '../assets/user-journey-mapping-as-is.jpg'; 
import toBeImage from '../assets/user-journey-mapping-to-be.jpg'; 
import emailDesignOption1 from '../assets/emailDesignOption1.png'; 
import emailDesignOption2 from '../assets/emailDesignOption2.png'; 
import emailDesignOption3 from '../assets/emailDesignOption3.png'; 
import NHSloginRegistrationProcess from '../assets/NHSlogin-registration-process.jpeg';
import EdgeCaseScenarios from '../assets/edge-case-scenarios.png';
import EdgeCaseScenariosExamples from '../assets/edge-case-scenarios-examples.png'; 
import PrototypeRecording from '../assets/prototype-recording.mov';
import ImplementationImg1 from '../assets/implementation-img1.png'; 
import ImplementationImg2 from '../assets/implementation-img2.png'; 
import ImplementationImg3 from '../assets/implementation-img3.png'; 

import MoreProject1 from "../assets/NHS-preview.png";
import MoreProject2 from "../assets/purpose-preview.png";
import { Link } from "react-router-dom"; 


const NHSLoginProject = () => {
  const [activeSection, setActiveSection] = useState('business');
  const [discoverySlide, setDiscoverySlide] = useState(0);
  
  const [activeView, setActiveView] = useState('AS-IS');
const [currentSlide, setCurrentSlide] = useState(0);

const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
};

//scroll to top in the new page
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
}, []);

// Pause on hover (optional)
const handleMouseEnter = () => {
    // You can add pause logic here if needed
};

const handleMouseLeave = () => {
    // Resume logic here if needed
};









  const discoveryCards = [
    {
      id: 1,
      icon: Users,
      title: "Stakeholder interviews",
      points: [
        "Defined what success looks like for different stakeholders (product owners, technical leads, NHS partners).",
        "Clarified priorities: e.g., security vs. ease of use, speed of implementation vs. scalability.",
        "Captured early concerns that shaped design trade-offs."
      ]
    },
    {
      id: 2,
      icon: BarChart2,
      title: "Competitive analysis",
      points: [
        "Looked at how other services integrate NHS Login (UX patterns, entry points, error handling).",
        "Identified potential risks and pitfalls (e.g., security gaps, confusing user flows, inconsistent branding) that could inform our design.",
        "Highlighted opportunities to improve user trust and reduce friction."
      ]
    },
    {
      id: 3,
      icon: UserCheck,
      title: "User research",
      points: [
        "Reviewed and examined existing user behaviour data and system performace metrics on login and verification behaviour.",
        "Mapped user journeys with the current system and identified key usage patterns and common user frustration points.",
        "Established data-driven priorities for design improvements and feature development."
      ]
    },
    {
      id: 4,
      icon: PersonStanding,
      title: "Accessibility & Compliance Needs",
      points: [
        "Aligned with NHS Service Standards to ensure consistency and trust.",
        "Considered GDPR requirements for handling sensitive user data securely.",
        "Followed WCAG 2.1 accessibility guidelines to make the service inclusive for all users.",
        "Embedded compliance considerations early to reduce future risks and rework."
      ]
    },
    {
      id: 5,
      icon: LayoutDashboard,
      title: "Data & Analytics Review",
      points: [
        "Collected API constraints (available endpoints, authentication protocols).",
        "Defined security requirements (multi-factor authentication, compliance with NHS standards).",
        "Considered performance and accessibility requirements to ensure inclusivity."
      ]
    }
  ];

  const nextDiscoverySlide = () => {
  setDiscoverySlide(prev => {
    if (prev >= discoveryCards.length - 1) {
      return prev; // Don't go beyond last card
    }
    return prev + 1;
  });
};

const prevDiscoverySlide = () => {
  setDiscoverySlide(prev => {
    if (prev <= 0) {
      return 0; // Don't go before first card
    }
    return prev - 1;
  });
};





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
      <section className="nhs-login-hero-section">
        <div className="nhs-logo"></div>
        <div className="hero-content"> 
          <h1>Integration of a Third-Party Solution</h1>
          <img
            src={NHSLoginImage}
            alt="NHS Healthy Start Hero Image"
            className="nhs-login-hero-img"
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
                <span className="value">10 months | 22 sprints, 2025</span>
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
                <p>The absence of robust KYC measures undermined user verification, leading to increased risks of fraud, errors, and a lack of confidence in user identity.</p>
              </div>

              <div className="role-section">
                <h2 className="section-title">My role</h2>
                <p>Owned the end-to-end design process from refining scope and validating feasibility to iterating on user-tested designs while ensuring consistency across flows, aligning with business objectives, and designing for edge-cases.</p>
              </div>

              <div className="success-section">
                <h2 className="section-title">Success</h2>
                <ul>
                  <li>This work has built the foundation for more self-serve features in the future.</li>
                  <li>Greater confidence in user identity means a reduced risk of fraud.</li>
                </ul>
              </div>

              <div className="top-impact-section">
                <h2 className="section-title">The Impact</h2>
                  <p>Now that we have stronger confidence in user identity and the mechanism in place, we can explore account management, payment, and card balance features to deliver a more seamless and secure user experience.</p>
                    
              </div>

              <a href="#the-implementation-section" className="outcome-button">
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






 
{/* The Discovery Section */}

<section className="discovery-section">
  <div className="container">
    <div className="discovery-content">
      <div className="text-content">
        <h2>Discovery</h2>
        <p className="discovery-intro">
          Our discovery phase was intentionally short and focused. Rather than conducting extensive new user research, we drew on existing insights gathered over the past few years, including research conducted by another team. This approach allowed us to move quickly while still grounding our design decisions in robust user evidence.
        </p>
      </div>

      <div className="card-slider-container">
        <div className="card-slider">
          <div
            className="card-track"
            style={{ transform: `translateX(calc(-${discoverySlide} * (var(--card-width) + var(--gap))))`
  }}
          >
            {discoveryCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.id} className="discovery-card">
                  <div className="discovery-card-header">
                    <div className="card-icon">
                      <IconComponent size={20} />
                    </div>
                    <h3>{card.title}</h3>
                  </div>
                  <ul className="card-content">
                    {card.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="slider-controls">
  <button
    className={`slider-btn prev-btn ${discoverySlide === 0 ? 'disabled' : ''}`}
    onClick={prevDiscoverySlide}
    disabled={discoverySlide === 0}
    aria-label="Previous card"
  >
    <ChevronLeft size={20} />
  </button>
  <button
    className={`slider-btn next-btn ${discoverySlide >= discoveryCards.length - 1 ? 'disabled' : ''}`}
    onClick={nextDiscoverySlide}
    disabled={discoverySlide >= discoveryCards.length - 1}
    aria-label="Next card"
  >
    <ChevronRight size={20} />
  </button>
</div>
      </div>
    </div>
  </div>
</section>







        {/* The Strategy Section */}
    <section className="the-strategy-section">
      <div className="container">
        <h2>Strategy</h2>
        
        <div className="strategy-content">
  <div className="toggle-buttons">
    <button 
      className={`toggle-btn ${activeView === 'AS-IS' ? 'active' : 'inactive'}`}
      onClick={() => setActiveView('AS-IS')}
    >
      AS-IS
    </button>
    <button 
      className={`toggle-btn ${activeView === 'TO-BE' ? 'active' : 'inactive'}`}
      onClick={() => setActiveView('TO-BE')}
    >
      TO-BE
    </button>
  </div>
  
  <div className="image-container">
    <img 
      src={activeView === 'AS-IS' ? asIsImage : toBeImage} 
      alt={`${activeView} view`}
      className="strategy-image"
    />
  </div>
</div>

           <div className="design-principles three-principles">
  <div className="principle user-journey">
    <div className="principle-header">
      <span>User journey mapping (AS-IS → TO-BE)</span>
    </div>
    <p>Visualised the experience before and after integration to identify pain points and illustrate the improved flow.</p>
  </div>

  <div className="principle design-principle-1">
    <div className="principle-header">
      <span>Design principle</span>
      <span className="principle-number">1</span>
    </div>
    <p>Defined the optimal point in the flow to introduce authentication, ensuring it felt seamless and contributed to a simpler -not longer- journey.</p>
  </div>
  
  <div className="principle design-principle-2">
    <div className="principle-header">
      <span>Design principle</span>
      <span className="principle-number">2</span>
    </div>
    <p>Maintained consistency with existing user flows and aligned patterns across related products.</p>
  </div>
</div>


      </div>
    </section>


        {/* The Ideation & Exploration Section */}
    <section class="the-ideation-exploration-section">
        <div class="container">
            <h2>Ideation & Exploration</h2>
            <p>Generating, comparing, and refining integration concepts through iteration and feedback. 
              I explored multiple approaches to identify the most scalable path, tested design patterns to maximise value, validated ideas with stakeholders, and addressed edge cases with clear solutions.</p>
      
 


 <div className="image-slider">
    <div className="slider-container">
        <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
            <img src={emailDesignOption1} alt="Email Design Option 1" />
        </div>
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
            <img src={emailDesignOption2} alt="Email Design Option 2" />
        </div>
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={emailDesignOption3} alt="Email Design Option 3" />
        </div>
    </div>
    
</div>



            <div class="cards-grid">
                <div class="ideation-card">
                    <div class="ideation-card-number">1</div>
                    <h3 class="card-title">Integration Approaches</h3>
                    <p class="card-description">Explored multiple integration approaches, weighing pros and cons with future projects in mind.</p>
                </div>

                <div class="ideation-card">
                    <div class="ideation-card-number">2</div>
                    <h3 class="card-title">UI Pattern Alternatives</h3>
                    <p class="card-description">Designed alternative UI patterns to compare screen-level improvements.</p>
                </div>

                <div class="ideation-card">
                    <div class="ideation-card-number">3</div>
                    <h3 class="card-title">Early concept validation</h3>
                    <p class="card-description">Facilitated early stakeholder feedback sessions to validate concepts and secure alignment.</p>
                </div>

                <div class="ideation-card">
                    <div class="ideation-card-number">4</div>
                    <h3 class="card-title">Edge Case Scenarios</h3>
                    <p class="card-description">Anticipated edge cases and "unhappy path" scenarios, ensuring robust solutions.</p>
                </div>
            </div>
  </div> 
    </section>







        {/* The Design & Testing Section */}
    <section class="the-edge-cases-section">
        <div class="container">
            <h2>Design for Edge Cases</h2>
            <p>As part of designing the integration with NHS login, I considered potential scenarios involving user error, system failure, or exceptional situations with NHS login - referred to as the “unhappy path.” I outlined how NHS login handles these scenarios within their system. Following a session with SMEs to gather considerations, we explored the ideal user actions and responses to these scenarios.</p>
      
       <div className="registration-process-images">
        <div>
          <img src={NHSloginRegistrationProcess} alt="NHS login Registratoin Process" className="registration-process" />
           <p>NHS login Registration Process</p>
       </div>
       </div>

       <div className="edge-cases-images">
        <div>
          <img src={EdgeCaseScenarios} alt="Edge Case Scenarios" className="img-left" />
          <p>Edge Case Scenarios</p>
        </div>
        <div>
          <img src={EdgeCaseScenariosExamples} alt="Edge Case Scenarios Examples" className="img-right"/>
          <p>Edge Case Scenarios Examples</p>
        </div>
      </div>

     
        </div> 
    </section>

 




        {/* The Prototype Section */}
    <section class="the-prototype-section">
        <div class="container">
            <h2>Prototype & Testing</h2>
            <p>Six participants (six females: five England, one Wales; three ESL) were recruited via the NHS BSA survey panel and face-to-face engagement. Four remote and two in-person sessions were conducted, combining interviews and usability testing. In-person sessions took place in a North East family hub serving baby clinics/classes. Notes were captured in Miro for analysis.</p>

            <div className="prototype-recording">
                <div className="prototype-recording-container">
                  <video 
                    src={PrototypeRecording} 
                    autoPlay        // starts playing automatically
                    loop            // repeats indefinitely
                    muted           // required for autoplay in most browsers
                    playsInline     // ensures autoplay works on mobile
                    className="prototype-video"
                  />
                </div>
            </div>

 
     

                {/* Key finding */}
                <h3 className="key-finding-heading">Research General Findings</h3>
                <div className="key-finding-cards">
                <div className="key-finding-card">
                    <h4>Completion</h4>
                    <p>
                    Excluding the NHS log in screens, all participants were able to complete all questions in the E2E application journey.
                    </p>
                    {/* <span className="tag">Stakeholder</span> */}
                </div>

                <div className="key-finding-card">
                    <h4>Expectations</h4>
                    <p>
                    There was nothing else users expected to see when logging in.
                    </p>
                    {/* <span className="tag">Stakeholder</span> */}
                </div>

                <div className="key-finding-card">
                    <h4>User Trust</h4>
                    <p>
                    All participants said they would be happy to share their personal information with an HCP (Health Care Professionals) if they were supporting with their application.
                    </p>
                    {/* <span className="tag">Beneficiary</span> */}
                </div>

                <div className="key-finding-card">
                    <h4>Features</h4>
                    <p>
                    Feedback about users wanting access to a digital balance checker and card on their phone.
                    </p>
                    {/* <span className="tag">Beneficiary</span> */}
                </div>
                </div> 
     

                <br ></br><br ></br>
                <h3 className="risk-heading">Risks</h3>
                <div className="risk-cards">
                                <div className="risk-card">
                                    <h4>Completion</h4>
                                    <p>
                                    Users who cannot use NHS login or have failed to set up an account will be unable to apply online.
                                    </p>
                                    {/* <span className="tag">Stakeholder</span> */}
                                </div>

                                <div className="risk-card">
                                    <h4>Expectations</h4>
                                    <p>
                                    5 of 6 participants said if they needed help with logging in, they would ring up Healthy Start, not NHS login.
                                    </p>
                                    {/* <span className="tag">Stakeholder</span> */}
                                </div>
                                </div>
                        </div> 
                    </section>








        {/* The Design Implementation Section */}
        <section className="the-implementation-section" id="the-implementation-section">
          <div className="container">
            <h2>Design Implementation</h2>
            <p>
              Based on the feedback gathered, we made targeted design iterations to address issues and improve the overall user journey. These iterations were supported by a third-party security integration, which enabled three key features:
            </p>


<div className="implementation-row top-row">
  <div className="implementation-card">
    <div className="implementation-img-container">
      <img src={ImplementationImg1} alt="Implementation 1" className="implementation-img1" />
    </div>
    <div className="implementation-card-text">
      <h4>Self-Serve Access</h4>
      <p>Alongside new security measures, we introduced a Dashboard, providing users secure access and moving closer to a self-service experience.</p>
    </div>
  </div>

  <div className="implementation-card">
    <div className="implementation-img-container">
      <img src={ImplementationImg2} alt="Implementation 2" className="implementation-img2" />
    </div>
    <div className="implementation-card-text">
      <h4>Faster Login</h4>
      <p>Pre-populated email/phone details for a smoother and quicker journey.</p>
    </div>
  </div>
</div>

<div className="implementation-row bottom-row">
  <div className="implementation-card">
    <div className="implementation-img-container">
      <img src={ImplementationImg3} alt="Implementation 3" className="implementation-img3" />
    </div>
    <div className="implementation-card-text">
      <h4>Building trust</h4>
      <p>Trust-building through secure user verification, with data retrieved from a single source of truth.</p>
    </div>
  </div>
</div>
          </div>
        </section>












        {/* The Result & Impact Section */}
    <section class="the-impact-section">
        <div class="container">
          <div className="the-impact-intro">
        <h2 className="the-impact-subtitle">Impact</h2>
            <p>Focusing on a single metric brings clarity and alignment, giving the team a shared definition of success. It sharpens the test of the core hypothesis behind the release. We defined one primary metric as the headline measure, while also setting guardrail metrics to prevent harm and complementing them with qualitative feedback for deeper insight.
              This journey is set to launch in November 2025. Therefore, the metrics shown represent the intended impact, which is anticipated based on user feedback. 
              </p>
            </div>

      <div className="the-impact-cards">
        <div className="the-impact-card">
          <h2>-40%</h2>
          <h5>Fraud Reduction</h5>
          <p>Achieve a 40% reduction in newly detected fraudulent accounts and transactions within the first 6 months post-launch (vs. baseline)</p>
        </div>
        </div>
         
 
        </div> 
    </section>








        {/* Learning Section */}
    <section class="the-learning-section">
        <div class="container">
            <h2>Learning</h2>
            <p>Potential improvements were identified during the project, with lessons that can be applied to future work to enhance collaboration, execution, and overall outcomes.
            </p>
      

            <div className="my-learning-cards">
                <div className="my-learning-card1">
                    <h4>Engage early and often</h4>
                    <p>
                      Do not leave the demo until the end. Instead of waiting for the final showcase, maintain regular communication with PMs and lead engineers. Frequent check-ins ensure alignment on strategy and execution, and also help spot critical edge cases early.</p>
                </div>

                <div className="my-learning-card2">
                    <h4>Document decisions continuously</h4>
                    <p>
                    Capture key choices as they happen, rather than leaving documentation until the end. This helps the team avoid confusion and maintain clear communication.</p>
                </div>

                <div className="my-learning-card3">
                    <h4>Build trust through expertise</h4>
                    <p>
                    Consistently demonstrating your expertise is the fastest way to build trust and earn credibility with senior stakeholders and partners. While speaking their language and understanding their values are important, nothing builds trust more quickly than delivering your work with precision and reliability.</p>
                     
                </div>
                </div> 

            
            
            
      
        </div> 
    </section>







        {/* Future Opportunities Section */}
    <section class="the-future-section">
        <div class="container">
            <h2>Future Opportunities</h2>
            <p>Successfully implementing a robust user verification method has opened new possibilities for future products aimed at enhancing self-service. With increased confidence in user identity, we can now explore opportunities such as account management features, payment capabilities, and card balance checks, enabling a more seamless and secure user experience.</p>

        </div> 
    </section>




 
    {/* More project */}
    <section className="more-project-section">
  <div className="container">
    <h2 className="more-project-subtitle">More Project</h2>

    <div className="project-grid">
      {/* Image 1 */}
      <div className="project-card-left">
         <Link to="/nhs-project">
        <img src={MoreProject1} alt="Project 1" className="project-image-left" />
        <div className="project-overlay">
          <span className="project-text">NHS — Secured Journey For Fraud Prevention</span>
          <span className="project-arrow">→</span>
        </div>
        </Link>
      </div>

      {/* Image 2 */}
      <div className="project-card-right">
        <Link to="#">
        <img src={MoreProject2} alt="Project 2" className="project-image-right" />
        <div className="project-overlay">
          <span className="project-text">COMING SOON!</span>
          <span className="project-arrow">◆</span>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>






    </div>
  );
};

export default NHSLoginProject;