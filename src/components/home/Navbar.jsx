import React, { useState } from 'react';
import { Moon, Sun, Download, Menu, X, Music } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';
import { useDarkMode } from '../../utils/DarkModeContext.jsx';
import ViewToggle from '../terminal/ViewToggle.jsx';
import MusicPlayer from '../musicPlayer/musicPlayer.jsx';

const Navbar = ({ 
  onSwitchView, 
  currentPage, 
  onNavigate,
  isTerminalVisible,
  onToggleTerminal,
  onMusicStateChange // Add this prop to receive state change handler
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = portfolioData.personal.resume || '/assets/resume.pdf';
    link.download = `${portfolioData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigation = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  const toggleMusicPlayer = () => {
    const newState = !isMusicPlayerOpen;
    setIsMusicPlayerOpen(newState);
    
    // Update music state in parent component
    if (onMusicStateChange) {
      onMusicStateChange(prevState => ({
        ...prevState,
        isOpen: newState
      }));
    }
  };

  // Function to handle music state updates from MusicPlayer
  const handleMusicStateUpdate = (newState) => {
    if (onMusicStateChange) {
      onMusicStateChange(prevState => ({
        ...prevState,
        ...newState,
        isOpen: isMusicPlayerOpen
      }));
    }
  };

  return (
    <>
      <header className="glass-effect border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <button
              type="button"
              onClick={() => handleMobileNavigation('home')}
              className="flex items-center space-x-2 sm:space-x-3 btn-hover-effect"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-sm sm:text-lg animate-pulse">
                  {portfolioData.personal.name.charAt(0)}
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold gradient-text-safe bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">{portfolioData.personal.title}</p>
              </div>
              {/* Mobile: Show just initials and truncated name */}
              <div className="sm:hidden">
                <h1 className="text-sm font-bold gradient-text-safe bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                  {portfolioData.personal.name.split(' ')[0]}
                </h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`nav-item px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 active'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="btn-hover-effect inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                title="Download Resume"
              >
                <Download className="w-4 h-4 animate-float" />
                Resume
              </button>

              {/* Music Player Toggle */}
              <button
                type="button"
                onClick={toggleMusicPlayer}
                className={`theme-toggle p-2 rounded-lg glass-effect btn-hover-effect transition-all duration-300 ${
                  isMusicPlayerOpen ? 'bg-purple-100 dark:bg-purple-900/30' : ''
                }`}
                title="Toggle music player"
              >
                <Music className={`w-5 h-5 transition-all duration-300 ${
                  isMusicPlayerOpen 
                    ? 'text-purple-600 dark:text-purple-400 animate-pulse' 
                    : 'text-gray-600 dark:text-gray-400 animate-float'
                }`} />
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="theme-toggle p-2 rounded-lg glass-effect btn-hover-effect"
                title="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500 animate-rotate" style={{ animationDuration: '3s' }} />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 animate-float" />
                )}
              </button>

              {/* Terminal Toggle */}
              <ViewToggle 
                currentView="portfolio" 
                onSwitchView={onSwitchView}
                isTerminalVisible={isTerminalVisible}
                onToggleTerminal={onToggleTerminal}
              />
            </div>

            {/* Mobile Menu Buttons */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Music Player Toggle */}
              <button
                type="button"
                onClick={toggleMusicPlayer}
                className={`p-2 rounded-lg glass-effect btn-hover-effect transition-all duration-300 ${
                  isMusicPlayerOpen ? 'bg-purple-100 dark:bg-purple-900/30' : ''
                }`}
                title="Toggle music player"
              >
                <Music className={`w-5 h-5 transition-all duration-300 ${
                  isMusicPlayerOpen 
                    ? 'text-purple-600 dark:text-purple-400 animate-pulse' 
                    : 'text-gray-600 dark:text-gray-400'
                }`} />
              </button>

              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="theme-toggle p-2 rounded-lg glass-effect btn-hover-effect"
                title="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500 animate-rotate" style={{ animationDuration: '3s' }} />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 animate-float" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg glass-effect btn-hover-effect"
                title="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Positioned directly under navbar */}
        <div className={`lg:hidden absolute left-0 right-0 top-full z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}>
          {/* Mobile Menu Panel */}
          <div className="glass-effect border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2 mb-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 animate-stagger ${
                      currentPage === item.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="space-y-3">
                {/* Download Resume Button */}
                <button
                  onClick={() => {
                    handleDownloadResume();
                    toggleMobileMenu();
                  }}
                  className="w-full btn-hover-effect flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium"
                >
                  <Download className="w-4 h-4 animate-float" />
                  Download Resume
                </button>

                {/* Terminal Toggle */}
                <div className="flex justify-center">
                  <ViewToggle 
                    currentView="portfolio" 
                    onSwitchView={onSwitchView}
                    isTerminalVisible={isTerminalVisible}
                    onToggleTerminal={onToggleTerminal}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  © 2025 {portfolioData.personal.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Music Player Component */}
      <MusicPlayer 
        isOpen={isMusicPlayerOpen}
        onToggle={toggleMusicPlayer}
        onStateChange={handleMusicStateUpdate} // Pass state change handler
      />

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;