import React, { useState, useRef, useEffect } from 'react';
import { commands } from '../utils/commands.js';
import TerminalHeader from '../components/terminal/TerminalHeader.jsx';
import TerminalOutput from '../components/terminal/TerminalOutput.jsx';
import TerminalInput from '../components/terminal/TerminalInput.jsx';
import TerminalFooter from '../components/terminal/TerminalFooter.jsx';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useDarkMode } from '../utils/DarkModeContext.jsx';
import { portfolioData } from '../data/portfolio.js';

const Terminal = ({ 
  onSwitchView, 
  onNavigate, 
  isVisible, 
  onToggle,
  musicPlayerState, // Add this prop to receive music state
  ...otherProps
}) => {
  const { isDark, toggleDarkMode } = useDarkMode();

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
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Create dynamic music command based on music player state
  const createMusicCommand = () => {
    if (!musicPlayerState || !musicPlayerState.isOpen) {
      return () => `🎵 Music Player Status:
╭─────────────────────────────────────────────────────────╮
│  Status: Music player is closed                        │
│  Action: Open the music player from the navbar! 🎶     │
╰─────────────────────────────────────────────────────────╯`;
    }

    const { isPlaying, currentTrack, currentTime, duration, volume } = musicPlayerState;
    const playlist = portfolioData.playlist || [];
    
    if (!isPlaying) {
      // Truncate and pad track info for consistent formatting
      const trackName = (currentTrack?.name || 'Unknown').substring(0, 25).padEnd(25);
      const artistName = (currentTrack?.artist || 'Unknown Artist').substring(0, 20).padEnd(20);
      
      return () => `🎵 Music Player Status:
╭─────────────────────────────────────────────────────────╮
│  Status: Music player is open but paused ⏸️            │
│  Track:  ${trackName}                   │
│  Artist: ${artistName}                      │
│  Volume: ${Math.round((volume || 0) * 100).toString().padStart(3)}%                                         │
│  Action: Click play to start listening! 🎶             │
╰─────────────────────────────────────────────────────────╯`;
    }

    const formatTime = (time) => {
      if (isNaN(time)) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressBar = (current, total) => {
      if (!total || total === 0) return '░░░░░░░░░░';
      const progress = Math.floor((current / total) * 10);
      return '█'.repeat(progress) + '░'.repeat(10 - progress);
    };

    // Truncate and pad text for consistent formatting
    const trackName = (currentTrack?.name || 'Unknown Track').substring(0, 30).padEnd(30);
    const artistName = (currentTrack?.artist || 'Unknown Artist').substring(0, 25).padEnd(25);
    const genreName = (currentTrack?.genre || 'Unknown').substring(0, 20).padEnd(20);
    const currentTimeStr = formatTime(currentTime || 0).padStart(5);
    const durationStr = formatTime(duration || 0).padEnd(5);
    const volumeStr = Math.round((volume || 0) * 100).toString().padStart(3);
    const trackPosition = `${(musicPlayerState.currentTrackIndex || 0) + 1}/${playlist.length}`.padEnd(5);

    return () => `🎵 Now Playing:
╭─────────────────────────────────────────────────────────╮
│  ♪ ${trackName}                          │
│  🎤 Artist: ${artistName}                   │
│  🎼 Genre:  ${genreName}                        │
│                                                         │
│  ⏱️  ${currentTimeStr} ${progressBar(currentTime || 0, duration || 0)} ${durationStr}              │
│  🔊 Volume: ${volumeStr}%                                        │
│  📀 Track:  ${trackPosition}                                     │
│                                                         │
│  Status: 🎵 Playing - Enjoy the music! 🎶             │
╰─────────────────────────────────────────────────────────╯`;
  };

  // Navigation commands that work with your Portfolio component
  const navigationCommands = {
    home: () => {
      setTimeout(() => onNavigate('home'), 500);
      return '🏠 Navigating to home page...';
    },
    about: () => {
      setTimeout(() => onNavigate('about'), 500);
      return '👨‍💻 Loading about section...';
    },
    skills: () => {
      setTimeout(() => onNavigate('skills'), 500);
      return '🛠️ Loading skills & expertise showcase...';
    },
    projects: () => {
      setTimeout(() => onNavigate('projects'), 500);
      return '🚀 Opening projects showcase...';
    },
    contact: () => {
      setTimeout(() => onNavigate('contact'), 500);
      return '📧 Opening contact information...';
    },
    portfolio: () => {
      setTimeout(() => onSwitchView('portfolio'), 500);
      return '🚀 Switching to portfolio view...';
    },
    theme: () => {
      toggleDarkMode();
      return `🎨 Theme switched to ${isDark ? 'light' : 'dark'} mode successfully!`;
    },
    close: () => {
      setTimeout(() => onToggle(), 500);
      return '👋 Closing terminal... See you later!';
    },
    // Move changeSize here since it affects terminal state
    changesize: () => {
      setIsMaximized(!isMaximized);
      return `${!isMaximized ? '⬆️ Terminal maximized' : '⬇️ Terminal restored'}`;
    },
    // Dynamic music command
    music: createMusicCommand()
  };

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal becomes visible
  useEffect(() => {
    if (isVisible && inputRef.current && !isMinimized) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isVisible, isMinimized]);

  // Update music command when music state changes
  useEffect(() => {
    navigationCommands.music = createMusicCommand();
  }, [musicPlayerState]);

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
    
    // Check navigation commands first (includes dynamic music command)
    if (navigationCommands[command]) {
      const output = navigationCommands[command]();
      newHistory.push(output, '');
      setHistory(newHistory);
      return;
    }
    
    // Then check your existing commands from commands.js (excluding music since it's overridden)
    if (commands && commands[command] && command !== 'music') {
      const output = commands[command]();
      newHistory.push(output, '');
      setHistory(newHistory);
      return;
    }
    
    // Command not found
    if (command) {
      newHistory.push(
        `Command not found: ${command}`, 
        '💡 Tip: Type "help" for available commands or use Tab for suggestions.', 
        ''
      );
      setHistory(newHistory);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Get all available commands for autocomplete
  const allCommands = [
    ...Object.keys(navigationCommands),
    ...Object.keys(commands || {})
  ];

  // If terminal is not visible, show the floating button
  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          isDark 
            ? 'bg-gray-800 text-green-400 hover:bg-gray-700 border border-gray-600' 
            : 'bg-white text-green-600 hover:bg-gray-50 border border-gray-300'
        }`}
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <>
      {/* Backdrop for maximized mode */}
      {isMaximized && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" 
          onClick={() => setIsMaximized(false)} 
        />
      )}
      
      {/* Terminal Container */}
      <div className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isMaximized 
          ? 'inset-4' 
          : isMinimized
            ? 'bottom-4 right-4 w-80 h-12'
            : 'bottom-4 left-4 right-4 h-80 max-w-4xl mx-auto'
      }`}>
        
        <div className={`rounded-lg shadow-2xl overflow-hidden border h-full transition-all duration-300 ${
          isDark 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-gray-100 border-gray-300'
        }`}>
          
          {/* Terminal Header - Pass required props */}
          <TerminalHeader 
            onSwitchView={onSwitchView}
            isMaximized={isMaximized}
            setIsMaximized={setIsMaximized}
            onToggle={onToggle}
            onMinimize={handleMinimize}
            isDarkMode={isDark}
            onToggleTheme={toggleDarkMode}
          />

          {/* Terminal Content */}
          {!isMinimized && (
            <div 
              ref={terminalRef}
              onClick={handleTerminalClick}
              className={`font-mono text-sm p-6 h-full overflow-auto cursor-text scrollbar-thin transition-colors ${
                isDark 
                  ? 'bg-black text-green-400 scrollbar-thumb-gray-600 scrollbar-track-gray-800' 
                  : 'bg-gray-50 text-green-700 scrollbar-thumb-gray-400 scrollbar-track-gray-200'
              }`}
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
                availableCommands={allCommands}
              />

              {/* Terminal Footer */}
              <TerminalFooter />
            </div>
          )}
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 blur-3xl transition-opacity ${
          isVisible ? 'opacity-20' : 'opacity-0'
        } ${isDark ? 'bg-green-400/20' : 'bg-green-600/10'}`} />
      </div>
    </>
  );
};

export default Terminal;