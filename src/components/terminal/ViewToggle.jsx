import React from 'react';
import { Terminal, User } from 'lucide-react';

const ViewToggle = ({ currentView, onSwitchView, isTerminalVisible, onToggleTerminal }) => {
  // If we have terminal overlay functionality, use that instead
  if (onToggleTerminal) {
    return (
      <button
        type="button"
        onClick={onToggleTerminal}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isTerminalVisible
            ? 'bg-green-800 text-green-200 hover:bg-green-700'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        title={isTerminalVisible ? "Close Terminal" : "Open Terminal"}
      >
        <Terminal size={16} />
        {isTerminalVisible ? 'Close Terminal' : 'Open Terminal'}
      </button>
    );
  }

  // Fallback for legacy full-page switching (if still needed)
  return (
    <button
      type="button"
      onClick={() => onSwitchView(currentView === 'terminal' ? 'portfolio' : 'terminal')}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        currentView === 'terminal' 
          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
          : 'bg-gray-800 text-white hover:bg-gray-700'
      }`}
    >
      {currentView === 'terminal' ? (
        <>
          <User size={16} />
          Portfolio View
        </>
      ) : (
        <>
          <Terminal size={16} />
          Terminal Mode
        </>
      )}
    </button>
  );
};

export default ViewToggle;