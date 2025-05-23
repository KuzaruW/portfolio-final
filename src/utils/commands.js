import { portfolioData } from '../data/portfolio.js';

export const commands = {
  help: () => `Available commands:
  help - Show this help
  about - About me
  skills - My technical skills
  projects - View my projects
  contact - Get my contact info
  clear - Clear terminal
  portfolio - Switch to portfolio view`,
  
  about: () => `${portfolioData.name} - ${portfolioData.title}
${portfolioData.bio}`,
  
  skills: () => `Technical Skills:
${portfolioData.skills.map(skill => `• ${skill}`).join('\n')}`,
  
  projects: () => portfolioData.projects.map(project => 
    `${project.name}
Description: ${project.description}
Tech: ${project.tech.join(', ')}
GitHub: ${project.github}`
  ).join('\n\n'),
  
  contact: () => `Contact Information:
Email: ${portfolioData.contact.email}
GitHub: ${portfolioData.contact.github}
LinkedIn: ${portfolioData.contact.linkedin}`,
  
  clear: () => 'CLEAR'
};