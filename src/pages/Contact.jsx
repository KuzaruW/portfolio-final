import React, { useState } from 'react';
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
      alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Send me a message',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      description: 'Best for detailed project discussions'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Check out my code',
      value: '@' + portfolioData.contact.github.split('/').pop(),
      href: portfolioData.contact.github,
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900',
      description: 'Explore my open source contributions'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: "Let's connect professionally",
      value: 'Connect with me',
      href: portfolioData.contact.linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      description: 'Professional networking and opportunities'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps and Progressive Web Apps for iOS and Android.'
    },
    {
      icon: Palette,
      title: 'UI/UX Consultation',
      description: 'User experience design and interface optimization for better user engagement.'
    },
    {
      icon: Coffee,
      title: 'Technical Consulting',
      description: 'Architecture planning, code reviews, and technical guidance for your projects.'
    }
  ];

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM EST', available: true },
    { day: 'Sunday', time: 'Emergency only', available: false }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Portfolio Website',
    'API Development',
    'UI/UX Design',
    'Technical Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
          Let's Work Together
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can make it happen.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">24h</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        <div className="lg:col-span-2">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <Send className="text-pink-600 dark:text-pink-400" />
              Start a Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
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
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                  placeholder="Your Company (Optional)"
                />
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                  >
                    <option value="">Select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Project Details
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-pink-600 dark:text-pink-400" />
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
                    className={`group flex items-center p-4 rounded-2xl bg-gradient-to-r ${method.color} ${method.hoverColor} text-white transition-all duration-300 hover:scale-105`}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
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
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="text-pink-600 dark:text-pink-400" />
              Availability
            </h3>

            <div className="space-y-3">
              {availability.map((slot, index) => (
                <div key={index} className="flex items-center justify-between py-2">
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
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Remote / Global</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Video calls available</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Usually responds within 24h</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Quick Question`}
                className="flex items-center gap-3 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Quick Question</span>
              </a>
              
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Schedule a Call`}
                className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
              >
                <Video className="w-5 h-5" />
                <span className="font-medium">Schedule a Call</span>
              </a>
              
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Request Quote`}
                className="flex items-center gap-3 p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span className="font-medium">Request Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              What's your typical project timeline?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex web applications can take 2-6 months. I'll provide a detailed timeline after understanding your requirements.
            </p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Do you work with international clients?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Absolutely! I work with clients globally and am comfortable with remote collaboration. I'm flexible with time zones and use modern communication tools for seamless project management.
            </p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              What technologies do you specialize in?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I specialize in React, Node.js, Python, and modern web technologies. I also work with cloud platforms like AWS and have experience with mobile development and UI/UX design.
            </p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              How do you handle project communication?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I provide regular updates through your preferred communication channel (email, Slack, etc.) and schedule weekly check-ins. You'll always know the project status and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Let's turn your ideas into reality. I'm just one message away!
        </p>
        <a
          href={`mailto:${portfolioData.contact.email}?subject=New Project Inquiry`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Mail className="w-6 h-6" />
          Send Me an Email
        </a>
      </section>
    </div>
  );
};

export default ContactPage;