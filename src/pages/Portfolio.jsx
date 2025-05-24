import React, { useState } from 'react';
import Navbar from '../components/home/Navbar.jsx';
import Terminal from './Terminal.jsx';
import HomePage from './Home.jsx';
import AboutPage from './About.jsx';
import ProjectsPage from './Projects.jsx';
import ContactPage from './Contact.jsx';
import ShootingStarsBackground from '../components/backgroundStyles/DarkModeBG.jsx';
import FloatingParticlesBackground from '../components/backgroundStyles/LightModeBG.jsx';
import { useDarkMode } from '../utils/DarkModeContext.jsx';

const Portfolio = ({ onSwitchView }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  
  // Use your existing dark mode context
  const { isDark, toggleDarkMode } = useDarkMode();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background based on theme */}
      {isDark ? <ShootingStarsBackground /> : <FloatingParticlesBackground />}
      
      {/* Header */}
      <Navbar
        onSwitchView={onSwitchView}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isTerminalVisible={isTerminalVisible}
        onToggleTerminal={handleTerminalToggle}
      />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
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
    </div>
  );
};

export default Portfolio;