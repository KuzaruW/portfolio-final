import React, { useState, useEffect } from 'react';
import { Mail, Github, Download, ArrowDown, Sparkles, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';
import { assets } from '../../data/assets.js'; // Import your assets

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
    <section id="hero" className="relative min-h-[100vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Clean Background Effects - No harsh borders */}
      <div className="absolute inset-0">
        {/* Smooth gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        {/* Soft floating orbs - no borders */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Status Badge - Clean design */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm text-green-300 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </div>

            {/* Name - Centered and Bold */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4">
                {portfolioData.name}
              </h1>
              
              {/* Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6">
                {portfolioData.title}
              </h2>
              
              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-400 italic mb-8 max-w-2xl">
                "{portfolioData.bio}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href={portfolioData.contact.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Let's work together
              </a>
              
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-600/50 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Check if assets and profileImage exist */}
              {assets && assets.profileImage ? (
                <>
                  {/* Glowing effect behind image - no visible borders */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Profile image container */}
                  <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl">
                    <img 
                      src={assets.profileImage}
                      alt={portfolioData.name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Failed to load profile image:', assets.profileImage);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </>
              ) : (
                /* Fallback if no image */
                <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl md:text-8xl font-bold text-white">
                    {portfolioData.name.charAt(0)}
                  </span>
                </div>
              )}
              
              {/* Floating elements around image - subtle */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-400/60 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 -left-8 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll Down</span>
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;