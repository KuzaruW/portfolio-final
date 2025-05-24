import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';
import { useDarkMode } from '../../utils/DarkModeContext.jsx';
import ViewToggle from '../terminal/ViewToggle.jsx';

const PortfolioHeader = ({ 
  onSwitchView, 
  currentPage, 
  onNavigate,
  isTerminalVisible,
  onToggleTerminal
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg group-hover:animate-pulse">
              {portfolioData.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">{portfolioData.title}</p>
          </div>
        </button>

        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm text-gray-900 dark:text-white"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
            title="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 group-hover:-rotate-12 transition-transform duration-200" />
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
      </div>
    </header>
  );
};

export default PortfolioHeader;