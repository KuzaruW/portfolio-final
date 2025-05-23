import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const Footer = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="px-6 pt-16 pb-8 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {portfolioData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {portfolioData.title}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Building innovative digital solutions with modern technologies and creative problem-solving.
            </p>
            
            {/* Animated status indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">Available for projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {['about', 'projects', 'contact'].map((page, index) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 capitalize hover:translate-x-1 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isVisible ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">{portfolioData.contact.email}</span>
              </a>
              
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-6 group`}
                      title={social.label}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: isVisible ? 'popIn 0.5s ease-out forwards' : 'none'
                      }}
                    >
                      <IconComponent className="w-4 h-4 group-hover:animate-pulse" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 {portfolioData.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;