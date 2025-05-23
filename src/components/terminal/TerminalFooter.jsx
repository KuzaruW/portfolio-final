import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Clock } from 'lucide-react';

const TerminalFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setUptime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  return (
    <div className="mt-8 pt-4 border-t border-gray-800">
      <div className="flex justify-between items-center">
        {/* System Info */}
        <div className="text-gray-500 text-xs space-y-1">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Last login: {currentTime.toLocaleString()}</span>
          </div>
          <div>Shell: portfolio-bash 1.0.0</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System ready • Uptime: {formatUptime(uptime)}</span>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-3 text-gray-500">
          <div className="flex items-center gap-1">
            <Wifi className="w-3 h-3" />
            <span className="text-xs">Connected</span>
          </div>
          <div className="flex items-center gap-1">
            <Battery className="w-3 h-3" />
            <span className="text-xs">100%</span>
          </div>
          <div className="text-xs">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Terminal Stats */}
      <div className="mt-3 pt-3 border-t border-gray-900 grid grid-cols-3 gap-4 text-xs text-gray-600">
        <div>
          <span className="text-green-400">●</span> Commands: 7
        </div>
        <div>
          <span className="text-blue-400">●</span> Memory: 2.4MB
        </div>
        <div>
          <span className="text-purple-400">●</span> CPU: 0.1%
        </div>
      </div>
    </div>
  );
};

export default TerminalFooter;