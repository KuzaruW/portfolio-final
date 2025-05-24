import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Monitor } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const HeroSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Building the future, one line of code at a time.",
    "Where creativity meets functionality.",
    "Turning ideas into digital reality.",
    "Code is poetry written in logic."
  ];

  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.contact.github,
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: portfolioData.contact.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.contact.email}`,
      label: 'Email',
      color: 'hover:text-green-600'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const ProfileImage = () => {
    // Use profileImage instead of avatar to match your portfolio data structure
    const imageSrc = portfolioData.personal.avatar || portfolioData.personal.avatar;
    
    return (
      <div className="flex justify-center">
        <div className="relative">
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 shadow-2xl">
            {imageSrc ? (
              <img 
                src={imageSrc}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.error('Failed to load profile image:', imageSrc);
                  // Hide image and show fallback
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
            ) : null}
            
            {/* Fallback - shows if no image or image fails */}
            <div className={`${imageSrc ? 'hidden' : 'flex'} absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center rounded-full`}>
              <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-white">
                {portfolioData.personal.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden items-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ProfileImage />
          </div>

          <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
              {portfolioData.personal.name}
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-6">
              {portfolioData.personal.title}
            </h2>

            <div className="h-12 sm:h-16 mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
                "{quotes[currentQuote]}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Let's work together
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Monitor className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
              {portfolioData.personal.name}
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
              {portfolioData.personal.title}
            </h2>

            <div className="h-16 mb-12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl leading-relaxed">
                "{quotes[currentQuote]}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mb-16">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`p-4 bg-white/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                    title={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's work together
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                <Monitor className="w-5 h-5 mr-2" />
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;