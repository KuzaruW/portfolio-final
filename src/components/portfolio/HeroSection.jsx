import React, { useState, useEffect } from 'react';
import { Mail, Github, Download, ArrowDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    portfolioData.title,
    "Creative Problem Solver",
    "Tech Enthusiast",
    "Code Craftsman"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="text-center relative min-h-[90vh] flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-3xl blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className={`relative max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Status Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-8 border border-green-200 dark:border-green-800">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <Sparkles className="w-4 h-4 mr-2" />
          Available for new opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
          {portfolioData.name}
        </h1>

        {/* Animated Role */}
        <div className="h-20 mb-8">
          <h2 className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 font-light">
            <span className="inline-block min-w-0">
              {roles[currentRole]}
            </span>
            <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">|</span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          {portfolioData.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Let's work together
          </a>
          
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            View my work
          </a>
          
          <button className="group inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            <Download className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
            Download CV
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;