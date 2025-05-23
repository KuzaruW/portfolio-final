import React, { useState } from 'react';
import { Code, Database, Palette, Globe, Server, Smartphone, Award, Calendar, MapPin, Coffee } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const AboutPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Extended bio sections
  const bioSections = [
    {
      title: "My Journey",
      content: "I started my journey in web development 3 years ago, driven by curiosity and a passion for creating digital solutions. What began as a hobby quickly evolved into a career as I discovered the power of code to solve real-world problems."
    },
    {
      title: "What Drives Me",
      content: "I'm passionate about building user-centric applications that make a difference. I believe great software is not just about clean code, but about understanding user needs and creating seamless experiences."
    },
    {
      title: "Beyond Code",
      content: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I also enjoy photography and hiking in my free time."
    }
  ];

  // Experience timeline
  const experience = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience.",
      technologies: ["React", "Express", "PostgreSQL", "Docker"]
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "StartupTech",
      description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["JavaScript", "CSS", "Vue.js", "Firebase"]
    }
  ];

  // Skill categories
  const skillCategories = {
    frontend: {
      icon: Globe,
      name: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Vue.js', 'Angular', 'Tailwind CSS']
    },
    backend: {
      icon: Server,
      name: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PHP', 'Laravel', 'REST APIs', 'GraphQL']
    },
    database: {
      icon: Database,
      name: 'Database',
      color: 'from-purple-500 to-violet-500',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Firebase']
    },
    tools: {
      icon: Code,
      name: 'Tools & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Webpack', 'Vite', 'CI/CD', 'Jest']
    }
  };

  const achievements = [
    { icon: Award, text: "Led 5+ successful project launches" },
    { icon: Code, text: "1000+ commits across various projects" },
    { icon: Coffee, text: "Mentored 10+ junior developers" },
    { icon: Globe, text: "Contributed to 15+ open source projects" }
  ];

  const getDisplaySkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flatMap(cat => cat.skills);
    }
    return skillCategories[activeCategory]?.skills || [];
  };

  return (
    <div className="py-12 space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
      </section>

      {/* Bio Sections */}
      <section className="grid md:grid-cols-3 gap-8">
        {bioSections.map((section, index) => (
          <div
            key={index}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={index}
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {achievement.text}
              </p>
            </div>
          );
        })}
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {exp.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getDisplaySkills().map((skill, i) => (
            <div
              key={skill}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Info */}
      <section className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Personal Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">Based in Remote / Global</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">3+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">Available for Freelance</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">Coffee Enthusiast</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">Open Source Contributor</span>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">UI/UX Enthusiast</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;