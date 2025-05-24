import React, { useState, useEffect } from 'react';
import { Monitor, Github, ExternalLink, Calendar, Users, Star, Eye, Filter, Search, Zap, Trophy, Code2, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
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

  // Enhanced project data with portfolio data
  const enhancedProjects = [
    ...portfolioData.projects.map(project => ({
      ...project,
      id: project.id,
      name: project.name,
      description: project.description,
      tech: project.tech,
      github: project.github,
      status: project.status,
      category: project.category,
      stars: Math.floor(Math.random() * 100) + 20, // Mock data
      forks: Math.floor(Math.random() * 30) + 5,
      contributors: Math.floor(Math.random() * 5) + 1,
      lastUpdated: '2 days ago',
      year: project.year,
      features: project.features,
      liveUrl: project.live,
      challenges: project.challenges,
      learnings: project.learnings,
      color: 'from-blue-500 to-purple-600',
      emoji: '🚀'
    })),
    // Additional mock projects to showcase variety
    {
      id: 3,
      name: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather monitoring system with predictive analytics and beautiful data visualizations.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/username/weather-dashboard',
      status: 'Live',
      category: 'Data Visualization',
      stars: 35,
      forks: 15,
      contributors: 1,
      lastUpdated: '3 days ago',
      year: '2023',
      features: ['Interactive Charts', 'Weather API Integration', 'Location Services', 'Export Data'],
      liveUrl: 'https://weather-demo.com',
      challenges: 'Processing large amounts of weather data efficiently and creating intuitive visualizations.',
      learnings: 'Enhanced skills in data visualization and API integration patterns.',
      color: 'from-cyan-500 to-blue-600',
      emoji: '🌤️'
    },
    {
      id: 4,
      name: 'Social Media Automation Tool',
      description: 'An intelligent tool for scheduling and automating social media posts across multiple platforms.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/username/social-automation',
      status: 'Live',
      category: 'Automation',
      stars: 67,
      forks: 23,
      contributors: 4,
      lastUpdated: '1 day ago',
      year: '2023',
      features: ['Multi-platform Support', 'AI Content Suggestions', 'Analytics Dashboard', 'Team Collaboration'],
      liveUrl: 'https://social-auto.com',
      challenges: 'Handling different social media APIs and rate limiting strategies.',
      learnings: 'Deepened knowledge of API integrations and background job processing.',
      color: 'from-purple-500 to-pink-600',
      emoji: '🤖'
    }
  ];

  const categories = ['all', 'Web Application', 'Mobile App', 'Data Visualization', 'Automation'];
  
  const filteredProjects = enhancedProjects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = {
    totalProjects: enhancedProjects.length,
    liveProjects: enhancedProjects.filter(p => p.status === 'Live').length,
    totalStars: enhancedProjects.reduce((sum, p) => sum + p.stars, 0),
    technologies: [...new Set(enhancedProjects.flatMap(p => p.tech))].length
  };

  const statsData = [
    { 
      value: stats.totalProjects, 
      label: 'Projects', 
      color: 'text-purple-600 dark:text-purple-400', 
      icon: Code2,
      emoji: '📚'
    },
    { 
      value: stats.liveProjects, 
      label: 'Live', 
      color: 'text-green-600 dark:text-green-400', 
      icon: Zap,
      emoji: '✨'
    },
    { 
      value: stats.totalStars, 
      label: 'Stars', 
      color: 'text-blue-600 dark:text-blue-400', 
      icon: Star,
      emoji: '⭐'
    },
    { 
      value: stats.technologies, 
      label: 'Technologies', 
      color: 'text-orange-600 dark:text-orange-400', 
      icon: Trophy,
      emoji: '🛠️'
    }
  ];

  return (
    <div className="portfolio-page space-y-16">
      {/* Header */}
      <section 
        id="header"
        data-animate
        className={`text-center section-reveal ${isVisible.header ? 'visible' : ''}`}
      >
        <div className="relative">
          <h1 className="page-title gradient-text-safe bg-gradient-to-r from-purple-600 to-pink-600">
            My Projects
          </h1>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl animate-float opacity-20">
            🚀
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          A collection of projects showcasing my skills and passion for development
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center card-hover animate-stagger ${
                  isVisible.header ? 'section-reveal visible' : 'section-reveal'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="text-2xl mb-2 animate-float">{stat.emoji}</div>
                  <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color} animate-pulse`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filters and Search */}
      <section 
        id="filters"
        data-animate
        className={`flex flex-col md:flex-row gap-6 items-center justify-between section-reveal ${
          isVisible.filters ? 'visible' : ''
        }`}
      >
        {/* Search */}
        <div className="relative flex-1 max-w-md form-group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`btn-hover-effect px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-stagger ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg animate-pulse'
                    : 'glass-effect text-gray-600 dark:text-gray-400'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" data-animate>
        {filteredProjects.length === 0 ? (
          <div className={`text-center py-16 section-reveal ${
            isVisible.projects ? 'visible' : ''
          }`}>
            <div className="text-6xl mb-4 animate-float">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`glass-effect content-card rounded-3xl overflow-hidden card-hover animate-stagger ${
                  isVisible.projects ? 'section-reveal visible' : 'section-reveal'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  transitionDelay: `${i * 0.05}s`
                }}
              >
                {/* Project Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/10"></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/50 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
                  </div>
                  
                  {/* Status and Category Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium animate-pulse ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                    }`}>
                      {project.status}
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Year and Emoji */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-2xl animate-float">{project.emoji}</span>
                    <span className="text-white/80 text-sm font-medium">{project.year}</span>
                  </div>
                  
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center card-hover">
                      <Monitor className="w-10 h-10 text-white animate-pulse" />
                    </div>
                  </div>

                  {/* Hover Overlay with Actions */}
                  <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full btn-hover-effect"
                      title="View Code"
                    >
                      <Github className="w-6 h-6 text-white animate-rotate" style={{ animationDuration: '2s' }} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full btn-hover-effect"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6 text-white animate-float" />
                    </a>
                    <button 
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full btn-hover-effect"
                      title="View Details"
                    >
                      <Eye className="w-6 h-6 text-white animate-pulse" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header with Stats */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white gradient-text-safe bg-gradient-to-r from-purple-600 to-pink-600">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1 card-hover">
                        <Star className="w-4 h-4 animate-pulse" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1 card-hover">
                        <Users className="w-4 h-4 animate-float" />
                        {project.contributors}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 card-hover animate-stagger"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full font-medium btn-hover-effect animate-stagger"
                          style={{ animationDelay: `${j * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Learnings */}
                  {(project.challenges || project.learnings) && (
                    <div className="mb-6 space-y-3">
                      {project.challenges && (
                        <div className="glass-effect p-3 rounded-lg card-hover">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                            <span className="text-orange-500">🎯</span>
                            Challenge:
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{project.challenges}</p>
                        </div>
                      )}
                      {project.learnings && (
                        <div className="glass-effect p-3 rounded-lg card-hover">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                            <span className="text-green-500">💡</span>
                            Learning:
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{project.learnings}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 animate-pulse" />
                      Updated {project.lastUpdated}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 font-semibold btn-hover-effect"
                      >
                        <Github className="w-4 h-4 animate-rotate" style={{ animationDuration: '2s' }} />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg btn-hover-effect"
                      >
                        <ExternalLink className="w-4 h-4 animate-float" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section 
        id="cta"
        data-animate
        className={`text-center glass-effect content-card rounded-2xl p-12 card-hover section-reveal ${
          isVisible.cta ? 'visible' : ''
        }`}
      >
        <div className="text-6xl mb-4 animate-float">🤝</div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in collaborating?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Let's build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold btn-hover-effect"
          >
            <Github className="w-6 h-6 animate-rotate" style={{ animationDuration: '2s' }} />
            View All Projects on GitHub
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-xl font-semibold btn-hover-effect"
          >
            <Rocket className="w-6 h-6 animate-float" />
            Discuss a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;