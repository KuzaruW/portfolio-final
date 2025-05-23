import React from 'react';
import { Terminal, User } from 'lucide-react';

const ViewToggle = ({ currentView, onSwitchView }) => {
  return (
    <button
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