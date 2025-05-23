import React, { useState } from 'react';
import { Code, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorize skills (you can modify this based on your actual skills)
  const skillCategories = {
    frontend: {
      icon: Globe,
      name: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: portfolioData.skills.filter(skill => 
        ['React', 'JavaScript', 'CSS', 'HTML', 'Vue', 'Angular'].includes(skill)
      )
    },
    backend: {
      icon: Server,
      name: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: portfolioData.skills.filter(skill => 
        ['Node.js', 'Python', 'Express', 'Django', 'PHP'].includes(skill)
      )
    },
    database: {
      icon: Database,
      name: 'Database',
      color: 'from-purple-500 to-violet-500',
      skills: portfolioData.skills.filter(skill => 
        ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'].includes(skill)
      )
    },
    tools: {
      icon: Code,
      name: 'Tools',
      color: 'from-orange-500 to-red-500',
      skills: portfolioData.skills.filter(skill => 
        ['Git', 'Docker', 'AWS', 'Webpack'].includes(skill)
      )
    }
  };

  const allSkills = portfolioData.skills;

  const getSkillIcon = (skill) => {
    const iconMap = {
      React: Globe,
      JavaScript: Code,
      'Node.js': Server,
      Python: Code,
      CSS: Palette,
      Git: Code,
      MongoDB: Database,
    };
    return iconMap[skill] || Code;
  };

  const getDisplaySkills = () => {
    if (activeCategory === 'all') return allSkills;
    return skillCategories[activeCategory]?.skills || [];
  };

  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Arsenal
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All Skills
        </button>
        {Object.entries(skillCategories).map(([key, category]) => {
          const IconComponent = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {getDisplaySkills().map((skill, i) => {
          const IconComponent = getSkillIcon(skill);
          return (
            <div
              key={skill}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                {skill}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:from-purple-500 group-hover:to-pink-500"
                  style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {portfolioData.skills.length}+
          </div>
          <div className="text-gray-600 dark:text-gray-400">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {portfolioData.projects.length}+
          </div>
          <div className="text-gray-600 dark:text-gray-400">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            2+
          </div>
          <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
            100+
          </div>
          <div className="text-gray-600 dark:text-gray-400">Commits</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;