import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, X } from 'lucide-react';

const MusicPlayer = ({ isOpen, onToggle, audioSrc = "/assets/bgm.mp3" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
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
      {/* Music Player Popup - positioned relative to navbar */}
      <div className="fixed top-16 right-6 z-40 bg-white dark:bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-[320px] animate-fade-in">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 dark:text-white font-semibold text-sm flex items-center gap-2">
              🎵 Background Music
            </h3>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"
              title="Close music player"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Now Playing Info */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm">
                <div className="font-medium text-gray-900 dark:text-white">Portfolio BGM</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isPlaying ? '♪ Now Playing' : '⏸ Paused'}
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={togglePlay}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 ${
                isPlaying 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
              }`}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>

            <div className="flex-1 mx-4">
              <div className="text-center mb-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Volume: {Math.round(volume * 100)}%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {volume === 0 ? (
                  <VolumeX size={14} className="text-gray-400" />
                ) : (
                  <Volume2 size={14} className="text-gray-400" />
                )}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer music-slider"
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">Status:</span>
              <span className={`font-medium ${
                isPlaying 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {isPlaying ? '🎵 Playing' : '⏸ Stopped'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      />

      {/* Custom Slider Styles */}
      <style jsx>{`
        .music-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .music-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;