import React, { useState, useEffect } from 'react';

const TerminalInput = ({ input, setInput, onExecuteCommand, inputRef }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const availableCommands = ['help', 'about', 'skills', 'projects', 'contact', 'clear', 'portfolio'];

  // Handle command suggestions
  useEffect(() => {
    if (input.trim() === '') {
      setShowSuggestions(false);
      return;
    }

    const filtered = availableCommands.filter(cmd => 
      cmd.toLowerCase().startsWith(input.toLowerCase())
    );

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0 && input.length > 0);
    setSelectedSuggestion(0);
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (showSuggestions && suggestions.length > 0) {
        // Use selected suggestion
        const selectedCmd = suggestions[selectedSuggestion];
        setInput(selectedCmd);
        setShowSuggestions(false);
        setTimeout(() => {
          onExecuteCommand(selectedCmd);
          setInput('');
        }, 100);
      } else if (input.trim()) {
        onExecuteCommand(input);
        setInput('');
      }
      setShowSuggestions(false);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion]);
        setShowSuggestions(false);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestion(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      {/* Command Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bottom-full left-0 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10 min-w-48">
          <div className="p-2 text-xs text-gray-400 border-b border-gray-600">
            Suggestions (Tab to complete):
          </div>
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
                index === selectedSuggestion 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => {
                setInput(suggestion);
                setShowSuggestions(false);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono">{suggestion}</span>
                {index === selectedSuggestion && (
                  <span className="text-xs opacity-75">↵</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Command Input */}
      <div className="flex items-center group">
        <span className="text-blue-400 mr-2 select-none group-hover:text-blue-300 transition-colors">
          $
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-green-400 outline-none flex-1 font-mono caret-green-400 placeholder-gray-600"
          placeholder="Type a command... (Tab for suggestions)"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
        {/* Animated cursor */}
        <div className="w-2 h-5 bg-green-400 ml-1 animate-pulse"></div>
      </div>

      {/* Command hint */}
      {input.trim() === '' && (
        <div className="mt-2 text-gray-500 text-xs">
          💡 Try typing "help" to see available commands
        </div>
      )}
    </div>
  );
};

export default TerminalInput;