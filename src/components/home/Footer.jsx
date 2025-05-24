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
      { threshold: 0.1 }
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
    <footer ref={footerRef} className="px-6 pt-16 pb-8 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden no-print">
      {/* Background pattern */}
      <div className="background-effects">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto page-content">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 section-reveal ${isVisible ? 'visible' : ''}`}>
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 gradient-text-safe hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {portfolioData.personal.title}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {portfolioData.personal.bio.short}
            </p>
            
            {/* Animated status indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-400">
                {portfolioData.personal.availability.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {['about', 'skills', 'projects', 'contact'].map((page, index) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 btn-hover-effect capitalize animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 btn-hover-effect"
              >
                <Mail className="w-4 h-4 animate-float" />
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
                      className={`p-3 glass-effect rounded-lg text-gray-600 dark:text-gray-400 ${social.color} btn-hover-effect animate-stagger glow-on-hover`}
                      title={social.label}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="w-4 h-4 animate-pulse" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-gray-200 dark:border-gray-700 text-center section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 {portfolioData.personal.name}. All rights reserved.
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