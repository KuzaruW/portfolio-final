import React from 'react';
import { Minimize2, Maximize2, Moon, Sun, User } from 'lucide-react';
import { useDarkMode } from '../../utils/DarkModeContext.jsx';

const TerminalHeader = ({ onSwitchView, isMaximized, setIsMaximized }) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center space-x-3">
        {/* Traffic Light Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors group">
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-red-800 rounded-full"></div>
            </div>
          </div>
          <div 
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors group"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <div className="w-1.5 h-0.5 bg-yellow-800 rounded-full"></div>
            </div>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors group">
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-800 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Terminal Title */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-400 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-sm"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">portfolio-terminal</span>
          <div className="text-gray-500 text-xs">~/portfolio</div>
        </div>
      </div>

      {/* Header Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleDarkMode}
          className="p-1.5 rounded hover:bg-gray-700 transition-colors group"
          title="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
          )}
        </button>
        
        <button
          onClick={() => onSwitchView('portfolio')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-sm transition-colors group"
          title="Switch to portfolio view"
        >
          <User className="w-3 h-3 group-hover:scale-110 transition-transform" />
          Portfolio
        </button>

        <button
          onClick={() => setIsMaximized(!isMaximized)}
          className="p-1.5 rounded hover:bg-gray-700 transition-colors group"
          title={isMaximized ? "Restore window" : "Maximize window"}
        >
          {isMaximized ? (
            <Minimize2 className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
          ) : (
            <Maximize2 className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;