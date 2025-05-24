import React, { useState } from 'react';
import { Monitor, Github, ExternalLink, Calendar, Users, Star, Eye } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Enhanced project data (you can extend your portfolioData)
  const enhancedProjects = portfolioData.projects.map((project, index) => ({
    ...project,
    id: index,
    status: index === 0 ? 'Live' : 'In Development',
    stars: Math.floor(Math.random() * 50) + 10,
    forks: Math.floor(Math.random() * 20) + 5,
    contributors: Math.floor(Math.random() * 5) + 1,
    lastUpdated: '2 days ago',
    image: `https://picsum.photos/400/250?random=${index}`, // Placeholder images
    category: index % 2 === 0 ? 'Web App' : 'Mobile App'
  }));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Unified Background */}
      <div className="absolute inset-0 -z-10">
        {/* Very subtle floating elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-64 h-64 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {enhancedProjects.map((project, i) => (
            <div
              key={project.id}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50 hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'Live' 
                      ? 'bg-green-100/80 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-orange-100/80 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                  }`}>
                    {project.status}
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                
                {/* Project Preview Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Eye className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
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

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-purple-100/80 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-sm rounded-full font-medium hover:scale-105 transition-transform duration-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.lastUpdated}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold group-hover:gap-3 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200/80 dark:hover:bg-purple-900/70 transition-colors backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;