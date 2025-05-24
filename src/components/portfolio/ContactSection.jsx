import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
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
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Check out my code',
      value: '@' + portfolioData.contact.github.split('/').pop(),
      href: portfolioData.contact.github,
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: "Let's connect professionally",
      value: 'Connect with me',
      href: portfolioData.contact.linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Unified Background */}
      <div className="absolute inset-0 -z-10">
        {/* Very subtle floating elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageCircle className="text-pink-600 dark:text-pink-400" />
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`group flex items-center p-4 rounded-2xl bg-gradient-to-r ${method.color} ${method.hoverColor} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-white/80 text-sm">{method.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Remote / Global</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Available 9-5 EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Send className="text-pink-600 dark:text-pink-400" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Usually responds within 24 hours
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            © 2024 {portfolioData.name}. Built with React & Tailwind CSS
          </p>
          <div className="flex justify-center gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors group"
                >
                  <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;