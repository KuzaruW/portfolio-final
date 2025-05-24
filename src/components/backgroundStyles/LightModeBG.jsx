import React, { useEffect, useState } from 'react';

const FloatingParticlesBackground = () => {
  const [particles, setParticles] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const floatingParticles = Array.from({ length: 50 }, (_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      color: Math.random() > 0.5 ? 'blue' : Math.random() > 0.5 ? 'purple' : 'indigo',
    }));

    setParticles(floatingParticles);

    // Generate floating bubbles
    const floatingBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: `bubble-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 15 + 8,
      delay: Math.random() * 8,
    }));

    setBubbles(floatingBubbles);
  }, []);

  const getParticleColor = (color, opacity) => {
    const colors = {
      blue: `rgba(59, 130, 246, ${opacity})`,
      purple: `rgba(147, 51, 234, ${opacity})`,
      indigo: `rgba(99, 102, 241, ${opacity})`,
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      
      {/* Soft Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute floating-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              '--particle-color': getParticleColor(particle.color, particle.opacity),
              '--float-duration': `${particle.duration}s`,
              '--float-delay': `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute floating-bubble"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              '--bubble-duration': `${bubble.duration}s`,
              '--bubble-delay': `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 right-1/3 w-4 h-4 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-purple-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/5 right-1/5 w-5 h-5 bg-indigo-300/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        
        <div className="absolute top-1/3 left-1/4 w-6 h-6 border border-blue-300/40 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 border border-purple-300/40 rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .floating-particle {
          background: radial-gradient(circle, var(--particle-color) 0%, transparent 70%);
          border-radius: 50%;
          animation: float var(--float-duration) ease-in-out infinite;
          animation-delay: var(--float-delay);
        }

        .floating-bubble {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.4) 40%,
            rgba(59, 130, 246, 0.1) 60%,
            transparent 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: bubble var(--bubble-duration) ease-in-out infinite;
          animation-delay: var(--bubble-delay);
          backdrop-filter: blur(1px);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-30px) translateX(5px) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes bubble {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) scale(1);
          }
          100% {
            transform: translateY(-20vh) scale(0);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingParticlesBackground;