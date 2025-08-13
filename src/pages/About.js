import React from 'react'; // <-- ADDED: React import
import Footer from '../components/Footer'; // <-- ADDED: Footer import

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm a Product Designer with 5+ years of experience turning complex challenges 
            into intuitive, scalable solutions used by millions of people worldwide.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">My Journey</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            My design journey started with a fascination for solving complex problems through 
            human-centered design. Over the years, I've worked with startups, B2B companies, 
            and B2C enterprises, helping them create products that truly resonate with their users.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">What I Do</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I specialize in product design, service design, and user experience research. 
            My approach combines strategic thinking with hands-on design execution, always 
            keeping the end user at the center of every decision.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">Let's Connect</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm always excited to discuss new opportunities and challenges. Whether you're 
            looking to collaborate on a project or just want to chat about design, feel free to reach out!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; // <-- ADDED: Export statement