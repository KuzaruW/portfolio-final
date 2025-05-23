import React, { useState, useEffect, useRef } from 'react';
import { User, Code, Award, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const AboutSection = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center relative z-10">
                <div className="text-center">
                  <User className="w-24 h-24 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Add your photo to:<br />
                    /public/assets/images/profile.jpg
                  </p>
                </div>
              </div>
              
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-pink-300/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-blue-300/30 rounded-full blur-xl"></div>
          </div>

          {/* About Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {portfolioData.bio} I'm passionate about creating innovative solutions that bridge the gap between complex technology and user-friendly experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-100 dark:bg-blue-900/30 rounded-xl transform hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:animate-pulse">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-purple-100 dark:bg-purple-900/30 rounded-xl transform hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:animate-pulse">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Learn More About Me
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;