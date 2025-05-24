import React, { useState, useEffect } from 'react';
import Navbar from '../components/home/Navbar.jsx';
import Terminal from './Terminal.jsx';
import HomePage from './Home.jsx';
import AboutPage from './About.jsx';
import ProjectsPage from './Projects.jsx';
import Skills from './Skills.jsx';
import ContactPage from './Contact.jsx';
import ShootingStarsBackground from '../components/backgroundStyles/DarkModeBG.jsx';
import FloatingParticlesBackground from '../components/backgroundStyles/LightModeBG.jsx';
import { useDarkMode } from '../utils/DarkModeContext.jsx';
import Footer from '../components/home/Footer.jsx';

const Portfolio = ({ onSwitchView }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  
  // Use existing dark mode context
  const { isDark, toggleDarkMode } = useDarkMode();

  const renderCurrentPage = () => {
    const pageProps = {
      className: `fade-in ${
        currentPage !== 'home' ? 'portfolio-page' : ''
      }`
    };

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return (
          <div {...pageProps}>
            <AboutPage />
          </div>
        );
      case 'projects':
        return (
          <div {...pageProps}>
            <ProjectsPage />
          </div>
        );
      case 'contact':
        return (
          <div {...pageProps}>
            <ContactPage />
          </div>
        );
        case 'skills':
        return (
          <div {...pageProps}>
            <Skills />
          </div>
        );
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const handleTerminalToggle = () => {
    setIsTerminalVisible(!isTerminalVisible);
  };

  const handleTerminalNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="portfolio-container">
      {/* Dynamic Background based on theme */}
      <div className="background-effects">
        {isDark ? <ShootingStarsBackground /> : <FloatingParticlesBackground />}
      </div>
      
      {/* Header */}
      <Navbar
        onSwitchView={onSwitchView}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isTerminalVisible={isTerminalVisible}
        onToggleTerminal={handleTerminalToggle}
      />

      {/* Main Content */}
      <main className="page-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderCurrentPage()}
      </main>

      {/* Terminal Overlay */}
      <Terminal
        onSwitchView={onSwitchView}
        onNavigate={handleTerminalNavigate}
        isVisible={isTerminalVisible}
        onToggle={handleTerminalToggle}
        isDarkMode={isDark}
        onToggleTheme={toggleDarkMode}
      />

      <Footer/>
    </div>
  );
};

export default Portfolio;