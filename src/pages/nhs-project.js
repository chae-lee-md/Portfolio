
import React from 'react';
import { ArrowRight } from 'lucide-react';
import './nhs-project.css';
import NHSHeroImage from '../assets/nhs-hs-hero-img.png';
import NHSLogo from "../assets/nhs-logo.png";
import { User } from "lucide-react";
import { ClipboardList, UserCircle, MessagesSquare, FileText } from "lucide-react";
import UserJourney1 from "../assets/current-user-journey1.png";
import UserJourney2 from "../assets/current-user-journey2.png";
import EcosystemMap from "../assets/ecosystem-stakeholder-map.png";
import DesignIteration from "../assets/design-iteration.png";
import SystemsThinking from "../assets/systems-thinking.png";





const NHSProject = () => {
  return (
    <div className="nhs-case-study">
      {/* Hero Section */}
    <section className="nhs-hero-section">
        <div className="nhs-logo"></div>
        <div className="hero-content"> 
            <h1>Secured applying journey for fraud prevention</h1>
        
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
                <span className="value">6 months | 12 sprints, 2024</span>
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
                <p>Increased frauds and duplicated applications due to the insecure and confusing service journey</p>
              </div>

              <div className="role-section">
                <h2 className="section-title">My role</h2>
                <p>I designed strategic end-to-end web and mobile journeys, led team workshops, and scoped prioritisation under limited timescales. I provided strategic guidance to stakeholders and resolved conflicting requirements with consideration for the long-term vision. I also owned code prototypes.</p>
              </div>

              <div className="success-section">
                <h2 className="section-title">Success</h2>
                <p><strong>Secure Customer Verification</strong> — Enabling users to self-serve by managing and updating their online applications with enhanced security and improved accessibility</p>
              </div>

              <div className="top-impact-section">
                <h2 className="section-title">The Impact</h2>
                <ul>
                  <li>Enabled customers to self-serve while ensuring robust security measures are in place</li>
                  <li>Optimised the digital application route over the non-digital route to support cost reduction</li>
                </ul>
              </div>

             <div className="outcome-button">
  <div className="arrow-circle">
    <ArrowRight size={20} />
  </div>
  <span>GO TO OUTCOME</span>
</div>
            </div>
          </div>
        </div>
      </section>

        {/* Overview Section */}
<section class="section">
        <div class="container">
            <h2>Overview</h2>
            <p>The Healthy Start scheme provides financial support for individuals with caring responsibilities for babies and children under 4 years old. As a result, there has been an increase in fraudulent cases, leading the service to implement stricter eligibility checks. This has resulted in increased call volumes from anxious users and diverted the customer services team's focus from other services.</p>
        </div>
    </section>

    {/* Journey Section */}
    <section class="journey-section">
        <div class="container">
            <div class="journey-content">
                <div class="journey-left">
                    <p>Where is there potential for frauds in the service, and how can we mitigate this?</p>
                </div>
                <div class="journey-center">
                    <p>How can we introduce a more secure apply journey?</p>
                </div>
                <div class="journey-right">
                    <div class="journey-circles">
                        <div class="circle circle-1">
                            <span>A new customer verification feature</span>
                        </div>
                        <div class="circle circle-2">
                            <span>The ability to self-service</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="journey-labels">
                <span>Problem Mapping</span>
                <span>Opportunity</span>
                <span>Solutions</span>
            </div>
        
        <div className="footer-note">
        <p>* Fraud in this case covers both Duplicate and Fraudulent applications</p>
        </div>
        </div>
    </section>


        {/* Design Process Section */}
    <section class="section">
        <div class="container">
            <h2>Design Process</h2>
            
        </div>
    </section>





        {/* The Challenge Section */}
    <section class="the-challenge-section">
        <div class="container">
            <h2>The Challenge</h2>
            <p>The Healthy Start scheme provides financial support for individuals with caring responsibilities for babies and children. 
<br /><br />With the ongoing monitoring, we identified that there has been an increase in fraudulent cases due to the benefits of the service. As this issue caused the public money to be sent to the wrong place, it was crucial for the business to investigate this problem further.</p>
        
        
        <div className="challenge-list">
      <div className="challenge-item">
        <div className="challenge-icon-circle">
        <User className="challenge-icon" />
        </div>
        <h4>3374 instances of duplicated email addresses
& 3124 duplicated mobile phone numbers</h4> 
      </div>
      <div className="challenge-item">
        <div className="challenge-icon-circle">
        <FileText className="challenge-icon" />
        </div>
        <h4>7,617 call volumes for inquiries going into CCS</h4>
         
      </div>
      <div className="challenge-item">
        <div className="challenge-icon-circle">
        <MessagesSquare className="challenge-icon" />
        </div>
        <h4>Customer frustration not being able to have options to update applications online</h4>
         
      </div>
    </div>
        
        
        </div> 




    </section>




        {/* Objectives Section */}
<section class="objectives-section">
        <div class="container">
            <h2>Objectives</h2>
            <p>The objectives from both the business and users are identified through user research and stakeholder workshops. With the user data, we mapped out what we already know and don’t know, and then started to brainstorm to find a solution that balances all parties’ requirements, considering service and technical aspects.</p>
        </div> 

        <div className="needs-section">
      {/* Business needs */}
      <div className="card business-card">
        <div className="card-header">
          <img src={NHSLogo} alt="NHS Logo" className="nhs-logo" />
          <h3>Business needs</h3>
        </div>
        <ul>
          <li>Prevent all avenues for bringing fraudulent claims</li>
          <li>Reduce the number of unsuccessful applications</li>
          <li>Reduce call drivers to CCS team</li>
        </ul>
      </div>

      {/* User needs */}
      <div className="card user-card">
        <div className="card-header">
          <User size={18} />
          <h3>User needs</h3>
        </div>
        <ul>
          <li>A wider choice of options to update their existing applications</li>
          <li>The ability to self-serve</li>
          <li>
            Do as much as they can online without having to contact the service
          </li>
        </ul>
      </div>
    </div>
    </section>


        {/* User Groups Section */}
    <section className="user-group-section">
    <div className="container">
        <h2>User Groups</h2>
        <p>
        Our user groups are divided into two categories: internal users and end
        users. The primary focus within the end user group is on current
        beneficiaries, aligning perfectly with the project objectives. We
        conducted tests and interviews with them in key scenarios to identify
        problem areas and refine our solutions accordingly. Although additional
        user groups have been identified, they are not included in this initial
        MVP.
        </p>
    </div>

    {/* 👇 Wrap your story cards in a flex container */}
    <div className="user-group-cards">
        <div className="story-card">
        <h2>NHS Agents</h2>
        <div className="story-content">
            <p>
            As a <strong>member of the Healthy Start team</strong>
            </p>
            <p>
            I need a <strong>unique identifier for applicants and children</strong>
            </p>
            <p>
            So that <strong>known duplicate claims with a higher level of confidence</strong>
            </p>
        </div>
        </div>

        <div className="story-card">
        <h2>Beneficiary (end users)</h2>
        <div className="story-content">
            <p>
            As a <strong>person with an existing Healthy Start application</strong>
            </p>
            <p>
            I need <strong>more options to update my Healthy Start application</strong>
            </p>
            <p>
            So that <strong>I can amend my details at a time and in a way that suits me</strong>
            </p>
        </div>
        </div>
    </div>
    </section>




        {/* Research Insight Section */}
    <section class="research-insight-section">
        <div class="container">
            <h2>Rersearch Insight</h2>
            <p>
            I collaboratively led several rounds of user research with 20+ users, 
            focus groups with five internal stakeholders (operational teams), and A/B testing. </p> <p>
            User needs are discovered through user research and focus groups with internal stakeholders 
            to ensure a comprehensive understanding of the target audience and align project goals 
            with user expectations. With these finding, we learned the importance of the content design 
            for vulnerable users and refined our strategies to better serve our primary audience 
            and mitigate potential risks.
        </p>
        





    {/* Research Stats with Icons */}
    <div className="research-stats">
      <div className="stat-item">
        <ClipboardList className="stat-icon" />
        <h4>Monthly CSAT Survey</h4>
        <p>2,000 successful applicants/ month</p>
      </div>
      <div className="stat-item">
        <FileText className="stat-icon" />
        <h4>Discovery Survey</h4>
        <p>1,096 responses in total</p>
      </div>
      <div className="stat-item">
        <MessagesSquare className="stat-icon" />
        <h4>Focus Groups</h4>
        <p>5 internal teams</p>
      </div>
      <div className="stat-item">
        <UserCircle className="stat-icon" />
        <h4>User Interviews</h4>
        <p>6 user interviews</p>
      </div>
    </div>

    {/* Divider */}
    <div className="divider"></div>

                {/* Research Summary */}
                <h3 className="summary-heading">Research Summary</h3>
                <div className="research-cards">
                <div className="summary-card">
                    <h4>KYC check</h4>
                    <p>
                    A lack of clarity around the KYC check – what this was, who was
                    responsible etc.
                    </p>
                    <span className="tag">Stakeholder</span>
                </div>

                <div className="summary-card">
                    <h4>Secured journey</h4>
                    <p>
                    The lack of identity verification for applicants, children, and
                    pregnancy validation was identified as a problem, leading to duplicate
                    claims and difficulties in managing them.
                    </p>
                    <span className="tag">Stakeholder</span>
                </div>

                <div className="summary-card">
                    <h4>Customer to self-serve</h4>
                    <p>
                    All participants would prefer to be able to update their details via
                    an online platform.
                    </p>
                    <span className="tag">Beneficiary</span>
                </div>

                <div className="summary-card">
                    <h4>Navigation issues</h4>
                    <p>
                    The kick-out screens tested well with a few content related amendments
                    suggested.
                    </p>
                    <span className="tag">Beneficiary</span>
                </div>
                </div> 
    </div>


    </section>




        {/* Current User Journey Section */}
    <section class="current-user-journey-section">
        <div class="container">
            <h2>Current User Journey</h2>
            <p>
            I mapped out the AS-IS current Service blueprint map and user journey to understand what’s causing users’ frustrations 
            and to spot areas where we can make improvement. 
            This is to design a product that aligns with other products within the service. 
            </p>

            
            <div className="journey-images">
         <img src={UserJourney1} alt="Current User Journey 1" className="user-journey" />
        <img src={UserJourney2} alt="Current User Journey 2" className="user-journey" />
      </div>

      <div className="journey-questions">
        <div className="journey-card">
          <p>
            How might we refine a service journey for users who may be creating
            duplicated application?
          </p>
        </div>

        <div className="journey-card">
          <p>
            How might we enhance customer satisfaction by delivering a
            convenient way to update an application?
          </p>
        </div>

        <div className="journey-card">
          <p>
            How might we improve service efficiency by reducing required agent
            interaction to update to application?
          </p>
        </div>

        <div className="journey-card">
          <p>
            How might we reduce user error within the service and reduce
            confusion for applicants when applying online?
          </p>
        </div>
      </div> 
        
        </div>    
        </section>







    {/* Ecosystem Map & Stakeholder Map Section */}
    <section class="ecosystem-stakeholder-map-section">
        <div class="container">
            <h2>Ecosystem Map & Stakeholder Map</h2>
            <p>
            Placeholder text for the ecosystem map & stakeholder map description.
            </p>
        <div className="maps-images">
        <img src={EcosystemMap} alt="Ecosystem Map" className="ecosystem-stakeholder-map" />
        </div>
    </div>
    </section>






    {/* Design iteration Section */}
    <section class="design-iteration-section">
        <div class="container">
            <h2>Design Iteration</h2>
            <p>
            As part of the ongoing work, the prototype was iterated, and was taken out for usability testing. 
            We had total 6 sessions for each round to test the end-to-end scenarios along with semi-structured interview.
            </p>
        <div className="design-iteration-images">
        <img src={DesignIteration} alt="Design Iteration" className="design-iteration" />
        </div>
    </div>
    </section>







    {/* Systems Thinking Section */}
    <section class="systems-thinking-section">
        <div class="container">
            <h2>Systems Thinking</h2>
            <p>Once we finalised the user flow, I created service blueprints to provide a holistic view of both internal processes and the end-user experience. 
                This was developed in collaboration with the lead engineer to enhance understanding, and was ultimately used to communicate effectively with the wider team and stakeholders.
            </p>
        <div className="systems-thinking-images">
        <img src={SystemsThinking} alt="Systems Thinking" className="systems-thinking" />
        </div>
    </div>
    </section>




    {/* Solutions Section */}
    <section class="solutions-section">
        <div class="container">
            <h2>Solutions</h2>
            <p>The MVP enables users to create a single application, while reducing the potential for fraud. Enhanced user navigation ensures users are directed to the right destination to achieve their goal.
            </p><br />
            <p>This is one of the various measures we have implemented to prevent fraudulent applications, and to enhance security for both the business and users.
            </p>
        
        </div>
    </section>






    {/* Impact Section */}
    <section className="impact-section">
      <div className="impact-intro">
        <h2 className="impact-subtitle">Impact</h2>
            <p>The product vision is to make it simple, safe, and accessible for eligible individuals to apply for and manage their user experience online.
            </p><br />
            <p>The business achieved operational efficiency, leading to streamlined operations and a decrease in support queries related to navigation issues. Additionally, improvements in successful completions of user journeys indicate a reduction in user errors.
            </p>
        </div>
        
        

      <div className="impact-cards">
        <div className="impact-card">
          <h2>200K+</h2>
          <h5>Active Users</h5>
          <p>Engaged with our platform within the first 6 months.</p>
        </div>
        <div className="impact-card">
          <h2>95%</h2>
          <h5>Diagnostic Speed Improvement</h5>
          <p>Achievement of 95% uptime of online claim update journey.</p>
        </div>
        <div className="impact-card">
          <h2>98%</h2>
          <h5>Diagnostic Accuracy</h5>
          <p>Reduction in the number of National Insurance Number bounced claims by 10%</p>
        </div>
      </div>




 
    </section>





    </div>
  );
};

export default NHSProject;