import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Monitor } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const HeroSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
          {portfolioData.name}
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
          {portfolioData.title}
        </h2>

        {/* Animated Quote */}
        <div className="h-16 mb-12">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed transition-all duration-500">
            "{quotes[currentQuote]}"
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`p-4 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                title={social.label}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Let's work together
          </button>
          
          <button
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View My Work
          </button>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating particles */}
        <div 
          className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"
          style={{
            top: '25%',
            left: '25%',
            transform: `translate(${Math.min(mousePosition.x * 0.02, 50)}px, ${Math.min(mousePosition.y * 0.02, 50)}px)`
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse"
          style={{
            top: '33%',
            right: '33%',
            animationDelay: '1s',
            transform: `translate(${Math.min(mousePosition.x * -0.015, 30)}px, ${Math.min(mousePosition.y * 0.015, 30)}px)`
          }}
        />
        <div 
          className="absolute w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse"
          style={{
            bottom: '25%',
            left: '33%',
            animationDelay: '2s',
            transform: `translate(${Math.min(mousePosition.x * 0.01, 20)}px, ${Math.min(mousePosition.y * -0.01, 20)}px)`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      </div>


    </section>
  );
};

export default HeroSection;