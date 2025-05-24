import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Code, Star, Database, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use portfolio data for tech stack with proper icon mapping
  const iconMap = {
    Globe: Monitor,
    Server: Code,
    Database: Database,
    Code: Star
  };

  const techStack = Object.entries(portfolioData.skills).reduce((acc, [key, category]) => {
    acc[key] = {
      name: category.name,
      icon: iconMap[category.icon] || Monitor,
      color: category.color,
      skills: category.skills.map(skill => skill.name).slice(0, 5) // Take first 5 skills
    };
    return acc;
  }, {});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="section-spacing px-6 py-24 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="background-effects">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto page-content">
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Specializing in modern development across multiple domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([key, stack], index) => {
            const IconComponent = stack.icon;
            return (
              <div 
                key={key} 
                className={`glass-effect content-card rounded-2xl p-8 card-hover animate-stagger relative overflow-hidden ${
                  isVisible ? 'section-reveal visible' : 'section-reveal'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 hover:opacity-100 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-2xl flex items-center justify-center mb-6 card-hover animate-pulse-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 gradient-text-safe hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    {stack.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium btn-hover-effect animate-stagger"
                        style={{ animationDelay: `${(skillIndex * 0.1) + 0.5}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
      <div>
        <div className={`text-center section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <button
            onClick={() => onNavigate('skills')}
            className="btn-hover-effect inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              My Skills
              <ChevronRight className="w-5 h-5 ml-2 animate-float" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;