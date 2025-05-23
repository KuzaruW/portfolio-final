import React, { useState, useRef, useEffect } from 'react';
import { commands } from '../utils/commands.js';
import TerminalHeader from '../components/terminal/TerminalHeader.jsx';
import TerminalOutput from '../components/terminal/TerminalOutput.jsx';
import TerminalInput from '../components/terminal/TerminalInput.jsx';
import TerminalFooter from '../components/terminal/TerminalFooter.jsx';

const Terminal = ({ onSwitchView }) => {
  const [history, setHistory] = useState([
    '╭─────────────────────────────────────────────────────────╮',
    '│  Welcome to my interactive portfolio terminal! 🚀      │',
    '│  Type "help" to see available commands                 │',
    '│  Use Tab for autocompletion                            │',
    '╰─────────────────────────────────────────────────────────╯',
    ''
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    const newHistory = [...history, `$ ${cmd}`];
    
    if (command === 'clear') {
      setHistory(['']);
      return;
    }
    
    if (command === 'portfolio') {
      newHistory.push('🚀 Switching to portfolio view...', '');
      setHistory(newHistory);
      setTimeout(() => {
        onSwitchView('portfolio');
      }, 500);
      return;
    }
    
    if (commands[command]) {
      const output = commands[command]();
      newHistory.push(output, '');
    } else if (command) {
      newHistory.push(
        `Command not found: ${command}`, 
        '💡 Tip: Type "help" for available commands or use Tab for suggestions.', 
        ''
      );
    }
    
    setHistory(newHistory);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 md:p-8">
      {/* Terminal Window */}
      <div className={`mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 ${
        isMaximized ? 'w-full h-[calc(100vh-2rem)]' : 'max-w-5xl h-[85vh]'
      } transition-all duration-300`}>
        
        {/* Terminal Header */}
        <TerminalHeader 
          onSwitchView={onSwitchView}
          isMaximized={isMaximized}
          setIsMaximized={setIsMaximized}
        />

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="bg-black text-green-400 font-mono text-sm p-6 h-full overflow-auto cursor-text scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          style={{ fontFamily: 'Fira Code, SF Mono, Consolas, Monaco, monospace' }}
        >
          {/* Terminal Output */}
          <TerminalOutput history={history} />

          {/* Command Input */}
          <TerminalInput 
            input={input}
            setInput={setInput}
            onExecuteCommand={executeCommand}
            inputRef={inputRef}
          />

          {/* Terminal Footer */}
          <TerminalFooter />
        </div>
      </div>

      {/* Terminal Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Terminal;