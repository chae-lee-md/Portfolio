import React from 'react'; // <-- ADDED: React import

// Project Card Component
const ProjectCard = ({ title, description, tags, bgColor, image, size = 'normal' }) => {
  const cardClasses = size === 'large' 
    ? 'col-span-2 row-span-2' 
    : size === 'wide' 
    ? 'col-span-2' 
    : '';
    
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${cardClasses}`}>
      <div className={`h-64 ${bgColor} relative overflow-hidden`}>
        {image && (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/60 text-sm">Project Preview</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: 'NHS — Secured Apply Journey',
      description: 'Self-serve driven online apply journey with enhanced security and improved accessibility for fraud prevention',
      tags: ['Service Design', 'UX Design', 'Code prototyping'],
      bgColor: 'bg-blue-600',
      image: true
    },
    {
      title: 'Career Roadmap',
      description: 'AI-powered career navigation platform tailored for young generation in tech',
      tags: ['Product Design', 'Code prototyping'],
      bgColor: 'bg-black',
      image: true
    },
    {
      title: 'Service Design with TEK',
      description: 'Service that fosters alternative approaches for sustainable and equitable futures to be climate responsive',
      tags: ['Service Design', 'UX Design', 'User Research'],
      bgColor: 'bg-red-500',
      image: true,
      size: 'large'
    },
    {
      title: 'Sustainable Pensions',
      description: 'Funding strategy that financially supports sustainable local food business to be consumed by all',
      tags: ['Service Design', 'UX Design'],
      bgColor: 'bg-blue-500',
      image: true
    }
  ];

  return (
    <div id="projects" className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; // <-- ADDED: Export statement for the main component