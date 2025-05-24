// TerminalHeader.jsx - Updated to work without DarkModeContext dependency
import React from 'react';
import { Minimize2, Maximize2, Moon, Sun, User, X, Minus } from 'lucide-react';

const TerminalHeader = ({ 
  onSwitchView, 
  isMaximized, 
  setIsMaximized, 
  onToggle, 
  onMinimize,
  isDarkMode,
  onToggleTheme,
  ...otherProps
}) => {
  return (
    <div className={`px-4 py-3 flex items-center justify-between border-b transition-colors ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-gray-200 border-gray-300'
    }`}>
      <div className="flex items-center space-x-3">
        
        {/* Terminal Title */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-400 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-sm"></div>
          </div>
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            portfolio-terminal
          </span>
          <div className={`text-xs ${
            isDarkMode ? 'text-gray-500' : 'text-gray-600'
          }`}>
            ~/portfolio
          </div>
        </div>
      </div>

      {/* Header Controls */}
      <div className="flex items-center space-x-2">

        {/* Additional Window Controls */}
        <button
          type="button"
          onClick={onMinimize}
          className={`p-1.5 rounded transition-colors group ${
            isDarkMode 
              ? 'hover:bg-gray-700' 
              : 'hover:bg-gray-300'
          }`}
          title="Minimize"
        >
          <Minus className={`w-4 h-4 group-hover:scale-110 transition-transform ${
            isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
          }`} />
        </button>

        <button
          type="button"
          onClick={() => setIsMaximized(!isMaximized)}
          className={`p-1.5 rounded transition-colors group ${
            isDarkMode 
              ? 'hover:bg-gray-700' 
              : 'hover:bg-gray-300'
          }`}
          title={isMaximized ? "Restore window" : "Maximize window"}
        >
          {isMaximized ? (
            <Minimize2 className={`w-4 h-4 group-hover:scale-110 transition-transform ${
              isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
            }`} />
          ) : (
            <Maximize2 className={`w-4 h-4 group-hover:scale-110 transition-transform ${
              isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
            }`} />
          )}
        </button>

        <button
          type="button"
          onClick={onToggle}
          className={`p-1.5 rounded transition-colors group ${
            isDarkMode 
              ? 'hover:bg-red-700/20' 
              : 'hover:bg-red-100'
          }`}
          title="Close terminal"
        >
          <X className={`w-4 h-4 group-hover:scale-110 transition-transform ${
            isDarkMode 
              ? 'text-red-400 group-hover:text-red-300' 
              : 'text-red-500 group-hover:text-red-600'
          }`} />
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;