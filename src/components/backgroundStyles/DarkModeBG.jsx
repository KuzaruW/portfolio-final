import React, { useEffect, useState } from 'react';

const ShootingStarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate static stars
    const staticStars = Array.from({ length: 100 }, (_, i) => ({
      id: `static-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 3,
    }));

    setStars(staticStars);

    // Generate shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      const shootingStar = {
        id: `shooting-${Date.now()}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        isShooting: true,
        angle: Math.random() * 360,
        duration: Math.random() * 2 + 1,
      };

      setStars(prev => [...prev, shootingStar]);

      // Remove shooting star after animation
      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== shootingStar.id));
      }, shootingStar.duration * 1000);
    }, 2000); // New shooting star every 2 seconds

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Stars Container */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${star.isShooting ? 'shooting-star' : 'static-star'}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-opacity': star.opacity,
              '--twinkle-delay': `${star.twinkleDelay}s`,
              '--shooting-angle': `${star.angle}deg`,
              '--shooting-duration': `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .static-star {
          background: radial-gradient(circle, rgba(255, 255, 255, var(--star-opacity)) 0%, transparent 70%);
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
          animation-delay: var(--twinkle-delay);
        }

        .shooting-star {
          background: linear-gradient(
            var(--shooting-angle),
            transparent 0%,
            rgba(255, 255, 255, 0.8) 30%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 70%,
            transparent 100%
          );
          border-radius: 50%;
          animation: shooting var(--shooting-duration) ease-out forwards;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          transform: translate(-50%, -50%) rotate(var(--shooting-angle));
          opacity: 0.8;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: var(--star-opacity);
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shooting {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) scale(0);
          }
          10% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(200px) translateY(200px) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStarsBackground;