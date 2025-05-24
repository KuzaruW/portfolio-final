import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Server, Monitor, Star, Trophy, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});

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

  // Icon mapping for skills categories
  const iconMap = {
    Globe: Globe,
    Server: Server,
    Database: Database,
    Code: Code
  };

  // Get display skills based on active category
  const getDisplaySkills = () => {
    if (activeCategory === 'all') {
      return Object.values(portfolioData.skills).flatMap(cat => 
        cat.skills.map(skill => ({ ...skill, category: cat.name, categoryColor: cat.color }))
      );
    }
    return portfolioData.skills[activeCategory]?.skills.map(skill => ({ 
      ...skill, 
      category: portfolioData.skills[activeCategory].name,
      categoryColor: portfolioData.skills[activeCategory].color 
    })) || [];
  };

  // Calculate skill stats
  const skillStats = {
    totalSkills: Object.values(portfolioData.skills).reduce((sum, cat) => sum + cat.skills.length, 0),
    categories: Object.keys(portfolioData.skills).length,
    averageLevel: Math.round(
      Object.values(portfolioData.skills)
        .flatMap(cat => cat.skills)
        .reduce((sum, skill) => sum + skill.level, 0) / 
      Object.values(portfolioData.skills).flatMap(cat => cat.skills).length
    ),
    totalExperience: Math.max(
      ...Object.values(portfolioData.skills)
        .flatMap(cat => cat.skills)
        .map(skill => skill.years)
    )
  };

  const statsData = [
    { 
      value: skillStats.totalSkills, 
      label: 'Total Skills', 
      color: 'text-blue-600 dark:text-blue-400', 
      icon: Code,
      emoji: '🛠️'
    },
    { 
      value: skillStats.categories, 
      label: 'Categories', 
      color: 'text-green-600 dark:text-green-400', 
      icon: Star,
      emoji: '📚'
    },
    { 
      value: `${skillStats.averageLevel}%`, 
      label: 'Avg Proficiency', 
      color: 'text-purple-600 dark:text-purple-400', 
      icon: Trophy,
      emoji: '🎯'
    },
    { 
      value: `${skillStats.totalExperience}+`, 
      label: 'Max Experience', 
      color: 'text-orange-600 dark:text-orange-400', 
      icon: Zap,
      emoji: '⚡'
    }
  ];

  return (
    <div className="portfolio-page space-y-16">
      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        className={`text-center section-reveal ${isVisible.hero ? 'visible' : ''}`}
      >
        <div className="relative">
          <h1 className="page-title gradient-text-safe bg-gradient-to-r from-green-600 to-blue-600">
            Technical Skills
          </h1>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl opacity-20">
            🛠️
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
          Comprehensive overview of my technical expertise and proficiency levels
        </p>
      </section>

      {/* Skills Stats */}
      <section 
        id="stats"
        data-animate
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={index}
              className={`text-center glass-effect content-card rounded-2xl p-6 card-hover animate-stagger ${
                isVisible.stats ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color} animate-pulse`} />
              <div className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </section>

      {/* Skills Categories */}
      <section id="categories" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.categories ? 'visible' : ''
        }`}>
          Skill Categories
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(portfolioData.skills).map(([key, category], index) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <div
                key={key}
                className={`glass-effect content-card rounded-2xl p-6 text-center card-hover animate-stagger ${
                  isVisible.categories ? 'section-reveal visible' : 'section-reveal'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {category.skills.length} skills
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                      +{category.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Filter */}
      <section id="filter" data-animate>
        <div className={`flex flex-wrap justify-center gap-4 mb-12 section-reveal ${
          isVisible.filter ? 'visible' : ''
        }`}>
          <button
            onClick={() => setActiveCategory('all')}
            className={`btn-hover-effect px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg animate-pulse'
                : 'glass-effect text-gray-600 dark:text-gray-400'
            }`}
          >
            All Skills
          </button>
          {Object.entries(portfolioData.skills).map(([key, category]) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`btn-hover-effect flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg animate-pulse`
                    : 'glass-effect text-gray-600 dark:text-gray-400'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Skills Grid with Proficiency */}
      <section id="skills" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.skills ? 'visible' : ''
        }`}>
          {activeCategory === 'all' ? 'All Skills' : portfolioData.skills[activeCategory]?.name || 'Skills'}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDisplaySkills().map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-effect content-card rounded-xl p-6 card-hover animate-stagger ${
                isVisible.skills ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${skill.categoryColor || 'from-blue-500 to-purple-600'} rounded-lg flex items-center justify-center animate-pulse-glow`}>
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    skill.level >= 90 ? 'text-green-600 dark:text-green-400' :
                    skill.level >= 80 ? 'text-blue-600 dark:text-blue-400' :
                    skill.level >= 70 ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-gray-600 dark:text-gray-400'
                  }`}>
                    {skill.level}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.level >= 90 ? 'Expert' :
                     skill.level >= 80 ? 'Advanced' :
                     skill.level >= 70 ? 'Intermediate' :
                     'Beginner'}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      skill.level >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      skill.level >= 80 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      skill.level >= 70 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}
                    style={{ 
                      width: isVisible.skills ? `${skill.level}%` : '0%',
                      transitionDelay: `${i * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>

              {/* Skill Category Badge */}
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 bg-gradient-to-r ${skill.categoryColor || 'from-blue-500 to-purple-600'} text-white text-xs rounded-full font-medium`}>
                  {skill.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex}
                      className={`w-3 h-3 ${
                        starIndex < Math.floor(skill.level / 20) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Testimonial */}
      <section 
        id="testimonial"
        data-animate
        className={`glass-effect content-card rounded-2xl p-8 text-center card-hover section-reveal ${
          isVisible.testimonial ? 'visible' : ''
        }`}
      >
        <div className="text-4xl mb-4">💡</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Continuous Learning
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
          refining existing skills, and staying updated with industry best practices. 
          My goal is not just to know these technologies, but to master them and apply them effectively.
        </p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'Learning Daily', emoji: '📚' },
            { label: 'Building Projects', emoji: '🏗️' },
            { label: 'Reading Documentation', emoji: '📖' },
            { label: 'Community Engagement', emoji: '🤝' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;