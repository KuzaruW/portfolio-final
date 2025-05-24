import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Globe, Server, Smartphone, Award, Calendar, MapPin, Coffee } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Bio sections from portfolio data
  const bioSections = [
    {
      title: "My Journey",
      content: portfolioData.personal.bio.detailed,
      icon: "🚀"
    },
    {
      title: "What Drives Me",
      content: portfolioData.personal.bio.mission,
      icon: "💡"
    },
    {
      title: "Beyond Code",
      content: portfolioData.personal.bio.interests,
      icon: "🌟"
    }
  ];

  return (
    <div className="portfolio-page space-y-16">
      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        className={`text-center section-reveal ${isVisible.hero ? 'visible' : ''}`}
      >
        <div className="relative">
          <h1 className="page-title gradient-text-safe bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h1>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl animate-float opacity-20">
            👨‍💻
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
          Get to know the person behind the code
        </p>
      </section>

      {/* Bio Sections */}
      <section 
        id="bio"
        data-animate
        className="grid md:grid-cols-3 gap-8"
      >
        {bioSections.map((section, index) => (
          <div
            key={index}
            className={`glass-effect content-card rounded-2xl p-6 card-hover animate-stagger ${
              isVisible.bio ? 'section-reveal visible' : 'section-reveal'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-4xl mb-4 text-center animate-float">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {section.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </section>

      {/* Quick Stats */}
      <section 
        id="stats"
        data-animate
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {portfolioData.achievements.map((achievement, index) => {
          const IconComponent = eval(achievement.icon); // Note: In production, use proper icon mapping
          return (
            <div
              key={index}
              className={`text-center glass-effect content-card rounded-2xl p-6 card-hover animate-stagger ${
                isVisible.stats ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl mb-2 animate-float">{achievement.emoji}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {achievement.text}
              </p>
            </div>
          );
        })}
      </section>

      {/* Experience Timeline */}
      <section id="experience" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.experience ? 'visible' : ''
        }`}>
          Professional Experience
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} section-reveal ${
                  isVisible.experience ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 z-10 hidden md:block animate-pulse"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-effect content-card rounded-2xl p-8 card-hover">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center animate-pulse-glow`}>
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {exp.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium btn-hover-effect"
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
      </section>

      {/* Education Section */}
      <section id="education" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.education ? 'visible' : ''
        }`}>
          Education
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.id}
              className={`glass-effect content-card rounded-2xl p-8 card-hover section-reveal ${
                isVisible.education ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Education Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <Database className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                      {edu.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {edu.location} {edu.gpa && `• GPA: ${edu.gpa}`}
                    </p>
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full font-medium btn-hover-effect"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {edu.projects && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Notable Projects:</h4>
                      <ul className="space-y-2">
                        {edu.projects.map((project, projectIndex) => (
                          <li 
                            key={projectIndex}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span 
                            key={achIndex}
                            className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm rounded-full font-medium btn-hover-effect"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Info */}
      <section 
        id="personal"
        data-animate
        className={`glass-effect content-card rounded-2xl p-8 card-hover section-reveal ${
          isVisible.personal ? 'visible' : ''
        }`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Personal Details
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: MapPin, text: portfolioData.personal.location, color: "text-blue-600 dark:text-blue-400" },
              { icon: Code, text: "3+ Years of Experience", color: "text-green-600 dark:text-green-400" },
              { icon: Award, text: portfolioData.personal.availability.status, color: "text-purple-600 dark:text-purple-400" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-gray-600 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {[
              { icon: Coffee, text: "Coffee Enthusiast", color: "text-orange-600 dark:text-orange-400" },
              { icon: Globe, text: "Open Source Contributor", color: "text-indigo-600 dark:text-indigo-400" },
              { icon: Palette, text: "UI/UX Enthusiast", color: "text-pink-600 dark:text-pink-400" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 card-hover"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-gray-600 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;