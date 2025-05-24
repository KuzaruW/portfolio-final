import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Monitor } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';
import { assets } from '../../data/assets.js'; // Import your assets

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
      
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 -z-10">
         
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-200/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Subtle mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Moving particles */}
        <div 
          className="absolute w-32 h-32 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '20%',
            left: '15%',
            transform: `translate(${Math.sin(Date.now() * 0.001) * 20}px, ${Math.cos(Date.now() * 0.0008) * 15}px) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: '20%',
            animationDelay: '1s',
            transform: `translate(${Math.sin(Date.now() * 0.0012) * -25}px, ${Math.cos(Date.now() * 0.001) * 20}px) translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute w-28 h-28 bg-cyan-300/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '30%',
            left: '25%',
            animationDelay: '2s',
            transform: `translate(${Math.sin(Date.now() * 0.0009) * 15}px, ${Math.cos(Date.now() * 0.0011) * -18}px) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
              {portfolioData.name}
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
              {portfolioData.title}
            </h2>

            {/* Animated Quote */}
            <div className="h-16 mb-12">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto lg:mx-0 leading-relaxed transition-all duration-500">
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
                    className={`p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50`}
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Let's work together
              </button>
              
              <button
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-center px-8 py-4 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/20 dark:border-gray-700/50"
              >
                <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Enhanced layered background for perfect blending */}
              <div className="absolute -inset-16 bg-gradient-to-br from-blue-200/20 via-purple-200/15 to-indigo-200/20 dark:from-blue-600/20 dark:via-purple-600/15 dark:to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-12 bg-gradient-to-tr from-cyan-200/15 via-blue-200/10 to-purple-200/15 dark:from-cyan-500/15 dark:via-blue-500/10 dark:to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -inset-8 bg-gradient-to-bl from-indigo-200/10 via-purple-100/8 to-blue-200/12 dark:from-indigo-500/10 dark:via-purple-400/8 dark:to-blue-400/12 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/8 via-transparent to-purple-100/8 dark:from-blue-400/8 dark:via-transparent dark:to-purple-400/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>

              {/* Check if assets and profileImage exist */}
              {assets && assets.profileImage ? (
                <>
                  {/* Profile image container with seamless edges */}
                  <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
                    {/* Subtle inner effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/5 via-transparent to-purple-100/5 dark:from-blue-400/5 dark:via-transparent dark:to-purple-400/5 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent dark:from-transparent dark:via-white/3 dark:to-transparent rounded-full"></div>
                    
                    <img 
                      src={assets.profileImage}
                      alt={portfolioData.name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 rounded-full"
                      onError={(e) => {
                        console.error('Failed to load profile image:', assets.profileImage);
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image fails to load */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-600/60 backdrop-blur-sm items-center justify-center rounded-full">
                      <span className="text-6xl md:text-8xl font-bold text-white">
                        {portfolioData.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                /* Fallback if no image provided */
                <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-white">
                    {portfolioData.name.charAt(0)}
                  </span>
                </div>
              )}
              
              {/* Ultra-subtle floating elements */}
              <div 
                className="absolute -top-12 -right-12 w-2 h-2 bg-blue-300/30 dark:bg-blue-400/30 rounded-full animate-bounce blur-sm"
                style={{
                  transform: `translate(${Math.min(mousePosition.x * 0.008, 8)}px, ${Math.min(mousePosition.y * 0.008, 8)}px)`
                }}
              ></div>
              <div 
                className="absolute -bottom-16 -left-16 w-1.5 h-1.5 bg-cyan-300/30 dark:bg-cyan-400/30 rounded-full animate-bounce blur-sm" 
                style={{ 
                  animationDelay: '0.5s',
                  transform: `translate(${Math.min(mousePosition.x * -0.006, 6)}px, ${Math.min(mousePosition.y * 0.006, 6)}px)`
                }}
              ></div>
              <div 
                className="absolute top-1/4 -left-20 w-1 h-1 bg-purple-300/30 dark:bg-purple-400/30 rounded-full animate-bounce blur-sm" 
                style={{ 
                  animationDelay: '1s',
                  transform: `translate(${Math.min(mousePosition.x * 0.004, 4)}px, ${Math.min(mousePosition.y * -0.004, 4)}px)`
                }}
              ></div>
              <div 
                className="absolute bottom-1/4 -right-20 w-1.5 h-1.5 bg-pink-300/30 dark:bg-pink-400/30 rounded-full animate-bounce blur-sm" 
                style={{ 
                  animationDelay: '1.5s',
                  transform: `translate(${Math.min(mousePosition.x * -0.003, 3)}px, ${Math.min(mousePosition.y * 0.003, 3)}px)`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating-element {
          animation: slowFloat 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;