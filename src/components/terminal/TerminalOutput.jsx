import React from 'react';

const TerminalOutput = ({ history }) => {
  const formatLine = (line, index) => {
    // Command line styling
    if (line.startsWith('$')) {
      return (
        <div key={index} className="flex group">
          <span className="text-blue-400 mr-2 select-none">$</span>
          <span className="text-white group-hover:text-gray-100 transition-colors">
            {line.substring(2)}
          </span>
        </div>
      );
    }

    // Error messages
    if (line.startsWith('Command not found')) {
      return (
        <span key={index} className="text-red-400 flex items-center">
          <span className="mr-2">❌</span>
          {line}
        </span>
      );
    }

    // Help and important messages
    if (line.includes('Available commands:') || line.includes('help')) {
      return (
        <span key={index} className="text-yellow-400 flex items-center">
          <span className="mr-2">📋</span>
          {line}
        </span>
      );
    }

    // List items (bullets)
    if (line.includes('•')) {
      return (
        <span key={index} className="text-cyan-400 hover:text-cyan-300 transition-colors">
          {line}
        </span>
      );
    }

    // URLs and links
    if (line.includes('http') || line.includes('github.com') || line.includes('@')) {
      return (
        <span key={index} className="text-blue-300 hover:text-blue-200 transition-colors">
          {line}
        </span>
      );
    }

    // Section headers (lines ending with :)
    if (line.trim().endsWith(':') && line.trim().length > 1) {
      return (
        <span key={index} className="text-purple-400 font-semibold">
          {line}
        </span>
      );
    }

    // Regular text
    return (
      <span key={index} className={line.trim() === '' ? '' : 'text-gray-300'}>
        {line}
      </span>
    );
  };

  return (
    <div className="space-y-1 mb-4">
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-relaxed hover:bg-gray-900/30 px-1 -mx-1 rounded transition-colors duration-150">
          {formatLine(line, i)}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;