import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage on initial load
    try {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Save to localStorage
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDark));
    } catch (error) {
      console.log('Could not save to localStorage:', error);
    }

    // Apply dark class to html element (required for Tailwind 4.1)
    const htmlElement = document.documentElement;
    
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Debug log
    console.log('Dark mode:', isDark, 'HTML classes:', htmlElement.className);
  }, [isDark]);

  const toggleDarkMode = () => {
    console.log('Toggling dark mode from', isDark, 'to', !isDark);
    setIsDark(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
