import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, X, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.js';

const MusicPlayer = ({ isOpen, onToggle, onStateChange }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState('playlist'); // 'none', 'track', 'playlist'
  const audioRef = useRef(null);
  
  const playlist = portfolioData.playlist;
  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Always set volume to 30% when track changes
    audio.volume = 0.3;
    setVolume(0.3);
    
    // Only update src when track changes, not when volume changes
    if (audio.src !== currentTrack.src || !audio.src) {
      audio.src = currentTrack.src;
      // Reset time and duration when loading new track
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentTrackIndex, currentTrack.src]);

  // Separate effect for volume changes only
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  // Report state changes to parent component and handle player close
  useEffect(() => {
    if (onStateChange) {
      onStateChange({
        isPlaying: isOpen ? isPlaying : false, // Set to paused when player is closed
        currentTrack,
        currentTrackIndex,
        currentTime,
        duration,
        volume
      });
    }
  }, [isOpen, isPlaying, currentTrack, currentTrackIndex, currentTime, duration, volume, onStateChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleCanPlay = () => {
      // Ensure duration is set when audio can play
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleLoadedData = () => {
      // Another opportunity to get duration
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('ended', handleEnded);

    // Try to get duration immediately if it's already available
    if (audio.duration && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure volume is at 30% when starting playback
        audioRef.current.volume = 0.3;
        setVolume(0.3);
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    if (repeatMode === 'track') {
      // Replay current track
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    let nextIndex;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentTrackIndex + 1) % playlist.length;
    }
    
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    
    // Reset volume to 30% for new track
    setVolume(0.3);
    
    // Auto-play next track if currently playing
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(console.error);
        }
      }, 100);
    }
  };

  const handlePrevious = () => {
    // If more than 3 seconds into track, restart current track
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    let prevIndex;
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * playlist.length);
    } else {
      prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    }
    
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);
    
    // Reset volume to 30% for new track
    setVolume(0.3);
    
    // Auto-play previous track if currently playing
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(console.error);
        }
      }, 100);
    }
  };

  const handleVolumeChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    // Apply volume change directly without triggering other effects
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const newTime = (clickX / progressBar.offsetWidth) * duration;
    
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
    // Reset volume to 30% when changing playback mode
    setVolume(0.3);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  };

  const toggleRepeat = () => {
    const modes = ['playlist', 'track', 'none'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setRepeatMode(nextMode);
    
    // Reset volume to 30% when changing playback mode
    setVolume(0.3);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Music Player Popup - Bottom positioned and compact, moved more to the right */}
      <div className="fixed bottom-6 right-8 z-40 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-purple-500/20 w-80 animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-purple-500/20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-pink-500 dark:to-purple-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">♪</span>
            </div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-xs">Background Music</h3>
          </div>
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-white/10"
            title="Close music player"
          >
            <X size={14} />
          </button>
        </div>
        
        {/* Current Track Display */}
        <div className="p-3">
          <div className="flex items-center gap-3 mb-3">
            {/* Album Cover */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 dark:from-purple-600 dark:to-pink-600 flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
              {currentTrack.cover ? (
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-lg">♪</span>
              )}
            </div>
            
            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-gray-900 dark:text-white font-medium text-xs truncate">{currentTrack.name}</h4>
              <p className="text-blue-600 dark:text-purple-300 text-xs truncate">{currentTrack.artist}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{currentTrack.genre}</p>
            </div>
            
            {/* Track Counter */}
            <div className="text-blue-600 dark:text-purple-300 text-xs flex-shrink-0">
              {currentTrackIndex + 1}/{playlist.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : currentTrack.duration || '0:00'}</span>
            </div>
            <div 
              className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer group"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-pink-500 dark:to-purple-600 rounded-full transition-all duration-300 relative group-hover:shadow-lg group-hover:shadow-blue-500/30 dark:group-hover:shadow-purple-500/30"
                style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-3">
            {/* Shuffle */}
            <button
              onClick={toggleShuffle}
              className={`p-1.5 rounded-md transition-all duration-300 ${
                isShuffled 
                  ? 'text-blue-600 bg-blue-500/20 dark:text-purple-400 dark:bg-purple-500/20' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
              title="Shuffle"
            >
              <Shuffle size={14} />
            </button>

            {/* Previous */}
            <button
              onClick={handlePrevious}
              className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-all duration-300"
              title="Previous"
            >
              <SkipBack size={16} />
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg ${
                isPlaying 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-pink-500 dark:to-purple-600 dark:hover:from-pink-600 dark:hover:to-purple-700' 
                  : 'bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-500 dark:hover:to-gray-600'
              }`}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-all duration-300"
              title="Next"
            >
              <SkipForward size={16} />
            </button>

            {/* Repeat */}
            <button
              onClick={toggleRepeat}
              className={`p-1.5 rounded-md transition-all duration-300 relative ${
                repeatMode !== 'none' 
                  ? 'text-blue-600 bg-blue-500/20 dark:text-purple-400 dark:bg-purple-500/20' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
              title={`Repeat: ${repeatMode}`}
            >
              <Repeat size={14} />
              {repeatMode === 'track' && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-600 dark:bg-purple-400 rounded-full"></span>
              )}
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            {volume === 0 ? (
              <VolumeX size={14} className="text-gray-400 flex-shrink-0" />
            ) : (
              <Volume2 size={14} className="text-gray-400 flex-shrink-0" />
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              onInput={handleVolumeChange}
              className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer music-slider"
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 w-8 text-right flex-shrink-0">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        volume={0.3}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => {
          if (e.target.duration && !isNaN(e.target.duration)) {
            setDuration(e.target.duration);
          }
        }}
        onCanPlay={(e) => {
          if (e.target.duration && !isNaN(e.target.duration)) {
            setDuration(e.target.duration);
          }
        }}
        onError={(e) => console.error('Audio error:', e)}
      />

      {/* Custom Slider Styles */}
      <style jsx>{`
        .music-slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
          transition: all 0.2s ease;
        }

        .dark .music-slider::-webkit-slider-thumb {
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }
        
        .music-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.6);
        }

        .dark .music-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.6);
        }
        
        .music-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
        }

        .dark .music-slider::-moz-range-thumb {
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }

        .music-slider::-webkit-slider-track {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          height: 4px;
          border-radius: 2px;
        }

        .dark .music-slider::-webkit-slider-track {
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Glassmorphism effect */
        .music-player-bg {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;