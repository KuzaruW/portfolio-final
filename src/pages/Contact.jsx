import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle, Clock, Calendar, Coffee, Video, Code, Smartphone, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        budget: '', 
        timeline: '', 
        projectType: '', 
        message: '' 
      });
      
      // Success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce-in';
      notification.textContent = 'Message sent successfully! 🎉';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 3000);
    }, 2000);
  };

  // Contact methods from portfolio data
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Send me a message',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      color: 'from-blue-500 to-blue-600',
      description: 'Best for detailed project discussions',
      emoji: '📧'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Check out my code',
      value: '@' + portfolioData.contact.github.split('/').pop(),
      href: portfolioData.contact.github,
      color: 'from-gray-700 to-gray-800',
      description: 'Explore my open source contributions',
      emoji: '💻'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: "Let's connect professionally",
      value: 'Connect with me',
      href: portfolioData.contact.linkedin,
      color: 'from-blue-600 to-blue-700',
      description: 'Professional networking and opportunities',
      emoji: '🤝'
    }
  ];

  // Availability from portfolio data
  const availability = [
    { day: 'Monday - Friday', time: portfolioData.personal.availability.workingHours, available: true },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM EST', available: true },
    { day: 'Sunday', time: 'Emergency only', available: false }
  ];

  const projectTypes = ['Web Application', 'Mobile App', 'E-commerce Site', 'Portfolio Website', 'API Development', 'UI/UX Design', 'Technical Consulting', 'Other'];
  const budgetRanges = ['Under $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+', 'Let\'s discuss'];
  const timelines = ['ASAP', '1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'];

  return (
    <div className="portfolio-page space-y-16">
      {/* Header */}
      <section 
        id="header"
        data-animate
        className={`text-center section-reveal ${isVisible.header ? 'visible' : ''}`}
      >
        <div className="relative">
          <h1 className="page-title gradient-text-safe bg-gradient-to-r from-pink-600 to-orange-600">
            Let's Work Together
          </h1>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl animate-float opacity-20">
            🤝
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can make it happen.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '24h', label: 'Response Time', emoji: '⚡' },
            { value: '50+', label: 'Projects Completed', emoji: '🚀' },
            { value: '100%', label: 'Client Satisfaction', emoji: '⭐' },
            { value: '3+', label: 'Years Experience', emoji: '💼' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center card-hover animate-stagger ${
                isVisible.header ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2 animate-float">{stat.emoji}</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.services ? 'visible' : ''
        }`}>
          Services I Offer
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services.map((service, index) => {
            const IconComponent = eval(service.icon); // Note: In production, use proper icon mapping
            return (
              <div
                key={service.id}
                className={`glass-effect content-card rounded-2xl p-6 text-center card-hover animate-stagger ${
                  isVisible.services ? 'section-reveal visible' : 'section-reveal'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-float">{service.emoji}</div>
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-2" id="form" data-animate>
          <div className={`glass-effect content-card rounded-3xl p-8 card-hover section-reveal ${
            isVisible.form ? 'visible' : ''
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <Send className="text-pink-600 dark:text-pink-400 animate-pulse" />
              Start a Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form below and I'll get back to you within {portfolioData.personal.availability.responseTime}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                  placeholder="Your Company (Optional)"
                />
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="form-group">
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                  >
                    <option value="">Select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect text-gray-900 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-xl input-focus-effect resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-hover-effect flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-xl font-semibold ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full loading-spinner" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 animate-float" />
                    Send Project Details
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-8" id="sidebar" data-animate>
          {/* Contact Methods */}
          <div className={`glass-effect content-card rounded-3xl p-6 card-hover section-reveal ${
            isVisible.sidebar ? 'visible' : ''
          }`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-pink-600 dark:text-pink-400 animate-pulse" />
              Get in Touch
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group flex items-center p-4 rounded-2xl bg-gradient-to-r ${method.color} text-white btn-hover-effect animate-stagger`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute top-2 right-2 text-2xl opacity-50 animate-float">
                      {method.emoji}
                    </div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 animate-pulse-glow">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-white/80 text-sm">{method.subtitle}</p>
                      <p className="text-white/60 text-xs">{method.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className={`glass-effect content-card rounded-3xl p-6 card-hover section-reveal ${
            isVisible.sidebar ? 'visible' : ''
          }`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="text-pink-600 dark:text-pink-400 animate-rotate" style={{ animationDuration: '3s' }} />
              Availability
            </h3>

            <div className="space-y-3">
              {availability.map((slot, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg px-2 card-hover animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {slot.day}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      {slot.time}
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    slot.available 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {slot.available ? 'Available' : 'Limited'}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              {[
                { icon: MapPin, text: portfolioData.personal.location, emoji: "🌍" },
                { icon: Phone, text: "Video calls available", emoji: "📹" },
                { icon: Calendar, text: `Usually responds within ${portfolioData.personal.availability.responseTime}`, emoji: "⚡" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-3 card-hover animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-4 h-4 animate-float" />
                  <span className="text-sm">{item.text}</span>
                  <span className="ml-auto text-lg animate-pulse">{item.emoji}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className={`glass-effect content-card rounded-3xl p-6 card-hover section-reveal ${
            isVisible.sidebar ? 'visible' : ''
          }`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h3>

            <div className="space-y-3">
              {[
                { 
                  href: `mailto:${portfolioData.contact.email}?subject=Quick Question`,
                  icon: Mail,
                  text: "Quick Question",
                  bg: "bg-blue-100 dark:bg-blue-900/30",
                  text_color: "text-blue-700 dark:text-blue-300",
                  emoji: "❓"
                },
                {
                  href: `mailto:${portfolioData.contact.email}?subject=Schedule a Call`,
                  icon: Video,
                  text: "Schedule a Call",
                  bg: "bg-green-100 dark:bg-green-900/30",
                  text_color: "text-green-700 dark:text-green-300",
                  emoji: "📞"
                },
                {
                  href: `mailto:${portfolioData.contact.email}?subject=Request Quote`,
                  icon: Send,
                  text: "Request Quote",
                  bg: "bg-purple-100 dark:bg-purple-900/30",
                  text_color: "text-purple-700 dark:text-purple-300",
                  emoji: "💰"
                }
              ].map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className={`flex items-center gap-3 p-3 ${action.bg} ${action.text_color} rounded-xl btn-hover-effect animate-stagger relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-1 right-2 text-lg opacity-50 animate-float">
                    {action.emoji}
                  </div>
                  <action.icon className="w-5 h-5 animate-pulse" />
                  <span className="font-medium">{action.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" data-animate>
        <h2 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 section-reveal ${
          isVisible.faq ? 'visible' : ''
        }`}>
          Frequently Asked Questions
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "What's your typical project timeline?",
              answer: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex web applications can take 2-6 months. I'll provide a detailed timeline after understanding your requirements.",
              emoji: "⏱️"
            },
            {
              question: "Do you work with international clients?",
              answer: "Absolutely! I work with clients globally and am comfortable with remote collaboration. I'm flexible with time zones and use modern communication tools for seamless project management.",
              emoji: "🌍"
            },
            {
              question: "What technologies do you specialize in?",
              answer: "I specialize in React, Node.js, Python, and modern web technologies. I also work with cloud platforms like AWS and have experience with mobile development and UI/UX design.",
              emoji: "⚛️"
            },
            {
              question: "How do you handle project communication?",
              answer: "I provide regular updates through your preferred communication channel (email, Slack, etc.) and schedule weekly check-ins. You'll always know the project status and next steps.",
              emoji: "💬"
            }
          ].map((faq, index) => (
            <div 
              key={index}
              className={`glass-effect content-card rounded-2xl p-6 card-hover animate-stagger ${
                isVisible.faq ? 'section-reveal visible' : 'section-reveal'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3 animate-float">{faq.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section 
        id="cta"
        data-animate
        className={`text-center bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden card-hover section-reveal ${
          isVisible.cta ? 'visible' : ''
        }`}
      >
        <div className="relative z-10">
          <div className="text-6xl mb-4 animate-float">🚀</div>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's turn your ideas into reality. I'm just one message away!
          </p>
          <a
            href={`mailto:${portfolioData.contact.email}?subject=New Project Inquiry`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold btn-hover-effect"
          >
            <Mail className="w-6 h-6 animate-float" />
            Send Me an Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
                    