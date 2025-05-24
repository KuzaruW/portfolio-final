import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import AboutSection from '../components/home/AboutSection.jsx';
import ExperienceEducation from '../components/home/ExperienceEducation.jsx';
import TechStack from '../components/home/TechStack.jsx';
import FeaturedProjects from '../components/home/FeaturedProjects.jsx';
import Footer from '../components/home/Footer.jsx';
import { ArrowUp, Sparkles, Rocket, Heart } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Enhanced parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrollY(scrolled);
      setShowScrollTop(scrolled > 500);
      
      // Parallax elements
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      // Floating elements rotation
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const rotation = scrolled * 0.05 + (index * 30);
        element.style.transform += ` rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced Parallax background elements */}
      <div className="background-effects">
        {/* Floating geometric shapes */}
        <div className="parallax-element floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="parallax-element floating-element absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="parallax-element floating-element absolute bottom-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="parallax-element floating-element absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        {/* Additional floating elements */}
        <div 
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-ping"
          style={{
            left: `${10 + Math.sin(scrollY * 0.01) * 5}%`,
            top: `${20 + Math.cos(scrollY * 0.01) * 5}%`
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"
          style={{
            right: `${15 + Math.sin(scrollY * 0.008) * 8}%`,
            top: `${60 + Math.cos(scrollY * 0.008) * 8}%`
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-pink-400/30 rounded-full"
          style={{
            left: `${80 + Math.sin(scrollY * 0.005) * 10}%`,
            bottom: `${30 + Math.cos(scrollY * 0.005) * 10}%`
          }}
        />
      </div>

      {/* Main content with reduced spacing */}
      <div className="page-content">
        <div 
          id="hero" 
          data-animate 
          className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
        >
          <HeroSection onNavigate={onNavigate} />
        </div>

        <div 
          id="about" 
          data-animate 
          className={`transition-all duration-1000 -mt-12 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
        >
          <AboutSection onNavigate={onNavigate} />
        </div>

        <div 
          id="experience" 
          data-animate 
          className={`transition-all duration-1000 -mt-8 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
        >
          <ExperienceEducation />
        </div>

        <div 
          id="tech" 
          data-animate 
          className={`transition-all duration-1000 -mt-8 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
        >
          <TechStack />
        </div>

        <div 
          id="projects" 
          data-animate 
          className={`transition-all duration-1000 -mt-8 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
        >
          <FeaturedProjects onNavigate={onNavigate} />
        </div>
      </div>

      {/* Enhanced floating action buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50 no-print">
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 ${
            showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>

        {/* Decorative floating elements */}
        <div className="absolute -top-6 -left-6 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"></div>
      </div>

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50 no-print">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="background-effects">
        {/* Animated sparkles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          >
            <Sparkles 
              className="w-4 h-4 text-blue-400/20 dark:text-blue-300/20" 
              style={{
                transform: `rotate(${scrollY * 0.1 + i * 60}deg)`
              }}
            />
          </div>
        ))}

        {/* Floating hearts */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute"
            style={{
              right: `${5 + i * 20}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${3 + i * 0.5}s`,
              transform: `translateY(${Math.sin(scrollY * 0.005 + i) * 10}px)`
            }}
          >
            <Heart 
              className="w-3 h-3 text-pink-400/20 dark:text-pink-300/20"
              style={{
                transform: `scale(${Math.sin(scrollY * 0.01 + i) * 0.5 + 1})`
              }}
            />
          </div>
        ))}

        {/* Floating rockets */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`rocket-${i}`}
            className="absolute"
            style={{
              left: `${70 + i * 20}%`,
              bottom: `${10 + i * 30}%`,
              transform: `translateY(${Math.sin(scrollY * 0.005 + i * 2) * 20}px) rotate(${45 + i * 90}deg)`
            }}
          >
            <Rocket className="w-5 h-5 text-purple-400/20 dark:text-purple-300/20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;