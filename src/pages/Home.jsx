import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import AboutSection from '../components/home/AboutSection.jsx';
import ExperienceEducation from '../components/home/ExperienceEducation.jsx';
import TechStack from '../components/home/TechStack.jsx';
import FeaturedProjects from '../components/home/FeaturedProjects.jsx';
import Footer from '../components/home/Footer.jsx';

const HomePage = ({ onNavigate }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes popIn {
        0% {
          opacity: 0;
          transform: scale(0.8);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes gridMove {
        0% { 
          transform: translate(0, 0); 
        }
        100% { 
          transform: translate(40px, 40px); 
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      .bg-grid-pattern {
        background-image: 
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(59, 130, 246, 0.5);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(59, 130, 246, 0.7);
      }

      /* Parallax effect */
      .parallax-bg {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `;
    
    document.head.appendChild(style);

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="parallax-element absolute top-3/4 right-1/4 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="parallax-element absolute bottom-1/4 left-1/2 w-32 h-32 bg-pink-400/5 rounded-full blur-3xl"></div>
        <div className="parallax-element absolute top-1/2 right-1/3 w-40 h-40 bg-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection onNavigate={onNavigate} />
        <AboutSection onNavigate={onNavigate} />
        <ExperienceEducation />
        <TechStack />
        <FeaturedProjects onNavigate={onNavigate} />
        <Footer onNavigate={onNavigate} />
      </div>

      {/* Floating action button for scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 opacity-0 hover:opacity-100 focus:opacity-100"
        style={{
          opacity: typeof window !== 'undefined' && window.pageYOffset > 500 ? 1 : 0
        }}
        onScroll={() => {
          const button = document.querySelector('.scroll-to-top');
          if (button) {
            button.style.opacity = window.pageYOffset > 500 ? '1' : '0';
          }
        }}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default HomePage;