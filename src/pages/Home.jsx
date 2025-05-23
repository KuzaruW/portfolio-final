import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Code, Monitor, MessageCircle, User, ExternalLink, Calendar, GraduationCap, Briefcase, Star, Award, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const HomePage = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Building the future, one line of code at a time.",
    "Where creativity meets functionality.",
    "Turning ideas into digital reality.",
    "Code is poetry written in logic."
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced data structures
  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.contact.github,
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: portfolioData.contact.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.contact.email}`,
      label: 'Email',
      color: 'hover:text-green-600'
    }
  ];

  const experience = [
    {
      year: "2024",
      company: "Tech Innovations Inc.",
      role: "Senior Full Stack Developer",
      description: "Leading development of enterprise applications"
    },
    {
      year: "2023",
      company: "Digital Solutions Co.",
      role: "Full Stack Developer",
      description: "Built scalable web applications for clients"
    }
  ];

  const education = [
    {
      year: "2022",
      institution: "University of Technology",
      degree: "Bachelor of Computer Science",
      description: "Specialized in Software Engineering"
    },
    {
      year: "2024",
      institution: "Tech Academy",
      degree: "Advanced React Certification",
      description: "Modern frontend development practices"
    }
  ];

  const techStack = {
    frontend: {
      name: "Frontend Development",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "JavaScript", "TypeScript", "CSS", "Tailwind CSS"]
    },
    backend: {
      name: "Backend Development", 
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"]
    },
    aiml: {
      name: "AI/ML & Data",
      icon: Star,
      color: "from-purple-500 to-pink-500", 
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis", "APIs"]
    }
  };

  const featuredProjects = [
    {
      ...portfolioData.projects[0],
      image: "/assets/images/project1.jpg", // You'll need to add these images
      status: "Live",
      year: "2024"
    },
    {
      ...portfolioData.projects[1],
      image: "/assets/images/project2.jpg",
      status: "In Development", 
      year: "2024"
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            {portfolioData.name}
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 font-light mb-8">
            {portfolioData.title}
          </h2>

          {/* Animated Quote */}
          <div className="h-16 mb-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
              "{quotes[currentQuote]}"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`p-4 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  title={social.label}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Let's work together
            </button>
            
            <button
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </button>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <User className="w-24 h-24 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Add your photo to:<br />
                      /assets/images/profile.jpg
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center animate-bounce">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center animate-pulse">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
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
                <div className="text-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More About Me
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="px-6 bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-600 dark:text-blue-400" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.year}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{edu.year}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Specializations */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
            Specializing in modern development across multiple domains
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([key, stack]) => {
              const IconComponent = stack.icon;
              return (
                <div key={key} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {stack.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A glimpse into my recent work
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-16 pb-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {portfolioData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {portfolioData.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Building innovative digital solutions with modern technologies and creative problem-solving.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {['about', 'projects', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => onNavigate(page)}
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {portfolioData.contact.email}
                </a>
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 {portfolioData.name}. Built with React & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;