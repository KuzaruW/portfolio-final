import profilePic from './images/me.jpg'
import avatarPic from './images/ai_me.png'
import track01 from './music/track1.mp3'
import track02 from './music/track2.mp3'
import track03 from './music/track3.mp3'
import track04 from './music/track4.mp3'
import track05 from './music/track5.mp3'
import Img01 from './images/track1.png'
import Img02 from './images/track2.png'
import Img03 from './images/track3.png'
import Img04 from './images/track4.png'
import Img05 from './images/track5.png'
import CV from './documents/CV.pdf'
import logo from './images/logo.svg'



// portfolio.js - Centralized portfolio data
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Kusal Waidyanayake",
    title: "Full Stack Developer | AI & ML Enthusiat",
    subtitle: "Passionate about creating digital solutions",
    location: "Remote / Global",
    timezone: "EST",
    avatar: avatarPic,
    resume: CV,
    bio: {
      short: "I'm a passionate full-stack developer with 3+ years of experience building modern web applications.",
      detailed: "I started my journey in web development 3 years ago, driven by curiosity and a passion for creating digital solutions. What began as a hobby quickly evolved into a career as I discovered the power of code to solve real-world problems.",
      mission: "I believe great software is not just about clean code, but about understanding user needs and creating seamless experiences.",
      interests: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I also enjoy photography and hiking in my free time."
    },
    availability: {
      status: "Available for freelance",
      workingHours: "9:00 AM - 6:00 PM EST",
      responseTime: "24 hours",
      weekendAvailability: "Limited"
    },
    profileImage: profilePic,
  },

  logo : logo,

  // Contact Information
  contact: {
    email: "kusal.waidy@gmail.com",
    phone: "+94 70 6010 770",
    location: "Remote / Global",
    github: "https://github.com/KuzaruW",
    linkedin: "www.linkedin.com/in/kusal-828447223",
    twitter: "https://twitter.com/yourusername",
    website: "https://yourwebsite.com",
    calendly: "https://calendly.com/yourusername"
  },

  // Professional Experience
  experience: [
    {
      id: 1,
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2024 - Present",
      location: "Remote",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      achievements: [
        "Led a team of 5 developers in delivering 3 major projects",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 10+ junior developers"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript", "Docker"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      duration: "Mar 2023 - Dec 2023",
      location: "New York, NY",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced page load times by 50%",
        "Integrated payment systems for e-commerce platforms",
        "Collaborated with design teams for pixel-perfect implementations"
      ],
      technologies: ["React", "Express", "PostgreSQL", "Docker", "Stripe API"],
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      year: "2022",
      title: "Frontend Developer",
      company: "StartupTech",
      duration: "Jun 2022 - Feb 2023",
      location: "San Francisco, CA",
      description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
      achievements: [
        "Developed 20+ reusable React components",
        "Implemented responsive designs for mobile-first approach",
        "Optimized bundle size reducing load time by 35%",
        "Conducted code reviews and maintained coding standards"
      ],
      technologies: ["JavaScript", "CSS", "Vue.js", "Firebase", "Figma"],
      color: "from-purple-500 to-pink-600"
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2018 - 2022",
      location: "City, State",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks"
      ],
      projects: [
        "Built a social media platform using MERN stack",
        "Developed a machine learning model for stock prediction",
        "Created a mobile app for campus navigation"
      ],
      achievements: [
        "Dean's List (4 semesters)",
        "President of Computer Science Club",
        "Hackathon Winner (2021)"
      ]
    }
  ],

  // Technical Skills
  skills: {
    frontend: {
      name: 'Frontend',
      icon: 'Globe',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, years: 3 },
        { name: 'JavaScript', level: 90, years: 4 },
        { name: 'TypeScript', level: 85, years: 2 },
        { name: 'CSS/SCSS', level: 90, years: 4 },
        { name: 'HTML5', level: 95, years: 4 },
        { name: 'Vue.js', level: 80, years: 2 },
        { name: 'Angular', level: 75, years: 1.5 },
        { name: 'Tailwind CSS', level: 90, years: 2 }
      ]
    },
    backend: {
      name: 'Backend',
      icon: 'Server',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90, years: 3 },
        { name: 'Python', level: 85, years: 2 },
        { name: 'Express.js', level: 90, years: 3 },
        { name: 'Django', level: 80, years: 1.5 },
        { name: 'PHP', level: 75, years: 2 },
        { name: 'Laravel', level: 70, years: 1 },
        { name: 'REST APIs', level: 95, years: 3 },
        { name: 'GraphQL', level: 80, years: 1.5 }
      ]
    },
    database: {
      name: 'Database',
      icon: 'Database',
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 90, years: 3 },
        { name: 'PostgreSQL', level: 85, years: 2 },
        { name: 'MySQL', level: 80, years: 2.5 },
        { name: 'Redis', level: 75, years: 1 },
        { name: 'SQLite', level: 80, years: 2 },
        { name: 'Firebase', level: 85, years: 2 }
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      icon: 'Code',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95, years: 4 },
        { name: 'Docker', level: 85, years: 2 },
        { name: 'AWS', level: 80, years: 2 },
        { name: 'Linux', level: 85, years: 3 },
        { name: 'Webpack', level: 75, years: 2 },
        { name: 'Vite', level: 85, years: 1.5 },
        { name: 'CI/CD', level: 80, years: 2 },
        { name: 'Jest', level: 85, years: 2 }
      ]
    }
  },

  // Projects
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.",
      longDescription: "This comprehensive e-commerce solution features a React frontend with a Node.js backend, handling everything from product catalog management to order processing. The platform includes advanced features like real-time inventory updates, personalized recommendations, and detailed analytics.",
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      image: '/projects/ecommerce.jpg',
      category: 'Web Application',
      status: 'Live',
      year: '2024',
      duration: '3 months',
      team: 'Solo Project',
      features: [
        'User Authentication & Authorization',
        'Payment Integration (Stripe)',
        'Admin Dashboard',
        'Responsive Design',
        'Real-time Inventory Management',
        'Order Tracking',
        'Email Notifications',
        'Product Reviews & Ratings'
      ],
      challenges: 'Implementing real-time updates and optimizing performance for large datasets.',
      learnings: 'Gained deep understanding of state management and performance optimization techniques.',
      metrics: {
        users: '1,000+',
        performance: '95% Lighthouse score',
        uptime: '99.9%'
      },
      testimonial: {
        text: "The platform exceeded our expectations with its performance and user experience.",
        author: "Client Name",
        position: "CEO, Company"
      }
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time synchronization, team features, and intuitive drag-and-drop interface.",
      longDescription: "This task management application helps teams organize their work efficiently with features like project boards, time tracking, file attachments, and team collaboration tools. Built as a Progressive Web App for offline functionality.",
      tech: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'JWT', 'PWA'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://taskmanager-demo.com',
      image: '/projects/taskmanager.jpg',
      category: 'Web Application',
      status: 'Live',
      year: '2024',
      duration: '2 months',
      team: '2 Developers',
      features: [
        'Real-time Collaboration',
        'Drag & Drop Interface',
        'File Attachments',
        'Time Tracking',
        'Team Management',
        'Offline Support',
        'Mobile Responsive',
        'Export Reports'
      ],
      challenges: 'Building offline-first architecture and ensuring data consistency.',
      learnings: 'Mastered Progressive Web App development and service worker implementation.',
      metrics: {
        users: '500+',
        performance: '92% Lighthouse score',
        retention: '85%'
      }
    }
  ],

  // Services Offered
  services: [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.',
      icon: 'Code',
      color: 'from-blue-500 to-purple-500',
      emoji: '🌐',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development',
        'Database Design',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
      pricing: 'Starting from $5,000',
      timeline: '4-12 weeks'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps and Progressive Web Apps for iOS and Android.',
      icon: 'Smartphone',
      color: 'from-green-500 to-teal-500',
      emoji: '📱',
      features: [
        'Progressive Web Apps',
        'React Native Apps',
        'Cross-platform Development',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'PWA', 'Firebase', 'App Store Connect'],
      pricing: 'Starting from $8,000',
      timeline: '6-16 weeks'
    },
    {
      id: 3,
      title: 'UI/UX Consultation',
      description: 'User experience design and interface optimization for better user engagement.',
      icon: 'Palette',
      color: 'from-purple-500 to-pink-500',
      emoji: '🎨',
      features: [
        'User Experience Audit',
        'Interface Design',
        'Prototyping',
        'Usability Testing',
        'Design Systems',
        'Accessibility Optimization'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      pricing: 'Starting from $3,000',
      timeline: '2-6 weeks'
    },
    {
      id: 4,
      title: 'Technical Consulting',
      description: 'Architecture planning, code reviews, and technical guidance for your projects.',
      icon: 'Coffee',
      color: 'from-orange-500 to-red-500',
      emoji: '☕',
      features: [
        'Code Reviews',
        'Architecture Planning',
        'Performance Audits',
        'Technology Selection',
        'Team Training',
        'DevOps Setup'
      ],
      technologies: ['Various based on project needs'],
      pricing: '$150/hour',
      timeline: 'Flexible'
    }
  ],

  // Achievements & Stats
  achievements: [
    {
      icon: 'Award',
      text: "Led 5+ successful project launches",
      value: "5+",
      label: "Projects Led",
      color: "from-yellow-400 to-orange-500",
      emoji: "🏆"
    },
    {
      icon: 'Code',
      text: "1000+ commits across various projects",
      value: "1000+",
      label: "Commits",
      color: "from-green-400 to-blue-500",
      emoji: "💻"
    },
    {
      icon: 'Coffee',
      text: "Mentored 10+ junior developers",
      value: "10+",
      label: "Developers Mentored",
      color: "from-purple-400 to-pink-500",
      emoji: "👥"
    },
    {
      icon: 'Globe',
      text: "Contributed to 15+ open source projects",
      value: "15+",
      label: "Open Source",
      color: "from-blue-400 to-indigo-500",
      emoji: "🌟"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "Tech Innovations Inc.",
      avatar: "/testimonials/sarah.jpg",
      text: "Working with [Your Name] has been an absolute pleasure. Their technical expertise and attention to detail are exceptional.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "CTO",
      company: "StartupTech",
      avatar: "/testimonials/mike.jpg",
      text: "They delivered a high-quality solution on time and within budget. I highly recommend their services.",
      rating: 5,
      project: "Task Management App"
    }
  ],

  // Social Media Links
  social: {
    github: {
      url: "https://github.com/yourusername",
      username: "@yourusername",
      followers: "1.2k"
    },
    linkedin: {
      url: "https://linkedin.com/in/yourprofile",
      connections: "500+"
    },
    twitter: {
      url: "https://twitter.com/yourusername",
      username: "@yourusername",
      followers: "800"
    },
    instagram: {
      url: "https://instagram.com/yourusername",
      username: "@yourusername",
      followers: "600"
    }
  },

  // Background Music Playlist
  playlist: [
    {
      id: 1,
      name: "Gypsy",
      artist: "Orca Vibes",
      src: track01,
      cover: Img01,
      duration: "01:47",
      genre: "Lo-Fi"
    },
    {
      id: 2,
      name: "In Dreamland",
      artist: "Chillpeach",
      src: track02,
      cover: Img02,
      duration: "03:06",
      genre: "Lo-Fi"
    },
    {
      id: 3,
      name: "2:00 AM",
      artist: "Chillpeach",
      src: track03,
      cover: Img03,
      duration: "02:28",
      genre: "Lo-Fi"
    },
    {
      id: 4,
      name: "Taikyai",
      artist: "Chillpeach",
      src: track04,
      cover: Img04,
      duration: "02:30",
      genre: "Lo-Fi"
    },
    {
      id: 5,
      name: "Purple",
      artist: "Chillpeach",
      src: track05,
      cover: Img05,
      duration: "02:41",
      genre: "Lo-Fi"
    }
  ],

  // Meta Information for SEO
  meta: {
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies. Available for freelance projects and consulting.",
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "Web Development",
      "Frontend Developer",
      "Backend Developer",
      "JavaScript",
      "TypeScript",
      "Freelancer"
    ],
    ogImage: "/og-image.jpg",
    siteUrl: "https://yourwebsite.com"
  },

  // Configuration
  config: {
    theme: {
      primaryColor: "blue",
      accentColor: "purple",
      darkMode: true
    },
    features: {
      blog: false,
      testimonials: true,
      projects: true,
      contact: true,
      resume: true
    },
    animations: {
      enabled: true,
      duration: 500,
      easing: "ease-out"
    }
  }
};