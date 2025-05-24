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
    <section id="hero" className="relative min-h-[100vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm text-green-300 rounded-full text-sm font-medium border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none">
                {portfolioData.name.split(' ').map((word, index) => (
                  <div key={index}>
                    {index === 0 ? (
                      <span className="block text-white">{word}</span>
                    ) : (
                      <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    )}
                  </div>
                ))}
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-300 font-light">
                I'M A{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  {roles[currentRole].toUpperCase()}
                </span>
                <span className="animate-pulse text-cyan-400 ml-1">|</span>
              </h2>
            </div>

            {/* Portfolio Label */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 tracking-widest">
                PORTFOLIO
              </h3>
            </div>

            {/* Bio */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Let's work together
              </a>
              
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                View my work
              </a>
              
              <button className="group inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-xl font-semibold border border-gray-600/50 hover:bg-gray-700/50 hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 p-1 animate-spin-slow">
                <div className="rounded-full bg-slate-900 h-full w-full"></div>
              </div>
              
              {/* Profile image */}
              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={portfolioData.personal.profileImage} // Use your profile image from assets
                  alt={portfolioData.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 -right-8 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
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

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;