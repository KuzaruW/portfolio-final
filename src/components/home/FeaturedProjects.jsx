import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const FeaturedProjects = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // Get featured projects from portfolio data
  const featuredProjects = portfolioData.projects.slice(0, 2).map(project => ({
    ...project,
    image: project.image || "/assets/images/project-placeholder.jpg",
    status: project.status || "Live",
    year: project.year || "2024"
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing px-6 bg-gray-50 dark:bg-gray-900/50 py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="background-effects">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto page-content">
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A glimpse into my recent work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass-effect content-card rounded-2xl overflow-hidden card-hover animate-stagger ${
                isVisible ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Animated overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 transition-opacity duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Status badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium animate-pulse ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700 shadow-lg' 
                      : 'bg-orange-100 text-orange-700 shadow-lg'
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 glass-effect text-white rounded-full text-xs font-medium shadow-lg">
                    {project.year}
                  </span>
                </div>
                
                {/* Project icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`card-hover ${
                    hoveredProject === index ? 'animate-pulse-glow' : ''
                  }`}>
                    <Monitor className="w-16 h-16 text-white/80 animate-float" />
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredProject === index && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </>
                )}
              </div>
              
              <div className="p-6 relative">
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 transition-opacity duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 gradient-text-safe hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium btn-hover-effect animate-stagger"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white btn-hover-effect"
                    >
                      <Github className="w-4 h-4 animate-rotate" style={{ animationDuration: '2s' }} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg btn-hover-effect"
                    >
                      <ExternalLink className="w-4 h-4 animate-float" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <button
            onClick={() => onNavigate('projects')}
            className="btn-hover-effect inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 animate-float" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;