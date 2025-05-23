import React, { useState } from 'react';
import { Monitor, Github, ExternalLink, Calendar, Users, Star, Eye, Filter, Search } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Enhanced project data with more details
  const enhancedProjects = [
    {
      ...portfolioData.projects[0],
      id: 1,
      status: 'Live',
      category: 'Web Application',
      stars: 42,
      forks: 18,
      contributors: 3,
      lastUpdated: '2 days ago',
      year: '2024',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Responsive Design'],
      liveUrl: 'https://example.com',
      challenges: 'Implementing real-time updates and optimizing performance for large datasets.',
      learnings: 'Gained deep understanding of state management and performance optimization techniques.'
    },
    {
      ...portfolioData.projects[1],
      id: 2,
      status: 'In Development',
      category: 'Mobile App',
      stars: 28,
      forks: 12,
      contributors: 2,
      lastUpdated: '1 week ago',
      year: '2024',
      features: ['Real-time Sync', 'Offline Mode', 'Push Notifications', 'Dark Mode'],
      liveUrl: 'https://example.com',
      challenges: 'Building offline-first architecture and ensuring data consistency.',
      learnings: 'Mastered Progressive Web App development and service worker implementation.'
    },
    // Additional mock projects
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
      learnings: 'Enhanced skills in data visualization and API integration patterns.'
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
      learnings: 'Deepened knowledge of API integrations and background job processing.'
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

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          A collection of projects showcasing my skills and passion for development
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {stats.totalProjects}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {stats.liveProjects}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Live</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.totalStars}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {stats.technologies}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
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
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                  
                  {/* Status and Category Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
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

                  {/* Year */}
                  <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
                    {project.year}
                  </div>
                  
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Hover Overlay with Actions */}
                  <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                      title="View Code"
                    >
                      <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                    </a>
                    <button 
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                      title="View Details"
                    >
                      <Eye className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header with Stats */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.contributors}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Learning:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.learnings}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      Updated {project.lastUpdated}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
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
      <section className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 dark:border-gray-700">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
            View All Projects on GitHub
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-6 h-6" />
            Discuss a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;