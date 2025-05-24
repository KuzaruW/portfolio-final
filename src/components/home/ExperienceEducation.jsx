import React, { useState, useEffect, useRef } from 'react';
import { Calendar, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const ExperienceEducation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      {/* Background elements */}
      <div className="background-effects">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto page-content">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600 dark:text-blue-400 animate-pulse" />
              Experience
            </h3>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="glass-effect content-card rounded-xl p-6 card-hover animate-stagger"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center animate-pulse-glow`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.year}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium btn-hover-effect"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-600 dark:text-purple-400 animate-pulse" />
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="glass-effect content-card rounded-xl p-6 card-hover animate-stagger"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center animate-pulse-glow">
                      <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{edu.duration}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {edu.location} {edu.gpa && `• GPA: ${edu.gpa}`}
                      </p>
                      
                      {/* Key coursework */}
                      {edu.coursework && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {edu.coursework.slice(0, 3).map((course, courseIndex) => (
                            <span 
                              key={courseIndex}
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full font-medium btn-hover-effect"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default ExperienceEducation;