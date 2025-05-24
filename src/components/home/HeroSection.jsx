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

  const ProfileImageComponent = ({ className = "" }) => (
    <div className={`flex justify-center ${className}`}>
      <div className="relative">
        {/* Profile image container with responsive sizing */}
        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden glass-effect">
          {/* Check if profile image exists in portfolio data */}
          {portfolioData.personal.avatar ? (
            <>
              {/* Subtle inner effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/5 via-transparent to-purple-100/5 dark:from-blue-400/5 dark:via-transparent dark:to-purple-400/5 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent dark:from-transparent dark:via-white/3 dark:to-transparent rounded-full"></div>
              
              <img 
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-center card-hover rounded-full"
                onError={(e) => {
                  console.error('Failed to load profile image:', portfolioData.personal.avatar);
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-600/60 backdrop-blur-sm items-center justify-center rounded-full">
                <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-white">
                  {portfolioData.personal.name.charAt(0)}
                </span>
              </div>
            </>
          ) : (
            /* Fallback if no image provided */
            <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 backdrop-blur-sm flex items-center justify-center">
              <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-white">
                {portfolioData.personal.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        {/* Ultra-subtle floating elements */}
        <div className="absolute -top-8 lg:-top-12 -right-8 lg:-right-12 w-2 h-2 bg-blue-300/30 dark:bg-blue-400/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute -bottom-12 lg:-bottom-16 -left-12 lg:-left-16 w-1.5 h-1.5 bg-cyan-300/30 dark:bg-cyan-400/30 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 -left-12 lg:-left-20 w-1 h-1 bg-purple-300/30 dark:bg-purple-400/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -right-12 lg:-right-20 w-1.5 h-1.5 bg-pink-300/30 dark:bg-pink-400/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto w-full page-content">
        {/* Mobile Layout: Image first, then content */}
        <div className="flex flex-col lg:hidden items-center space-y-8">
          
          {/* Profile Image - Mobile */}
          <ProfileImageComponent 
            className={`section-reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          />

          {/* Content - Mobile */}
          <div className={`text-center section-reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Main Heading */}
            <h1 className="page-title gradient-text-safe bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200">
              {portfolioData.personal.name}
            </h1>

            {/* Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-6">
              {portfolioData.personal.title}
            </h2>

            {/* Animated Quote */}
            <div className="h-12 sm:h-16 mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed animate-fade-in">
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
                    className={`p-3 sm:p-4 glass-effect rounded-full text-gray-600 dark:text-gray-400 ${social.color} btn-hover-effect animate-stagger`}
                    title={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-hover-effect inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-float" />
                Let's work together
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="btn-hover-effect inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-xl font-semibold w-full sm:w-auto"
              >
                <Monitor className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-float" />
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Desktop */}
          <div className={`text-center lg:text-left section-reveal ${isVisible ? 'visible' : ''}`}>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text-safe bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 mb-6 leading-tight">
              {portfolioData.personal.name}
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
              {portfolioData.personal.title}
            </h2>

            {/* Animated Quote */}
            <div className="h-16 mb-12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in">
                "{quotes[currentQuote]}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-16">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`p-4 glass-effect rounded-full text-gray-600 dark:text-gray-400 ${social.color} btn-hover-effect animate-stagger glow-on-hover`}
                    title={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-6 h-6 animate-pulse" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-hover-effect inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
              >
                <Mail className="w-5 h-5 mr-2 animate-float" />
                Let's work together
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="btn-hover-effect inline-flex items-center px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-xl font-semibold"
              >
                <Monitor className="w-5 h-5 mr-2 animate-float" />
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image Desktop */}
          <ProfileImageComponent 
            className={`section-reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;