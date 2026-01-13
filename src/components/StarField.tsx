import { useEffect, useRef } from "react";

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random animation duration and delay
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      const maxOpacity = Math.random() * 0.5 + 0.3;
      
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--max-opacity', `${maxOpacity}`);
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }

    // Create a few larger, brighter stars
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      const size = Math.random() * 2 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.boxShadow = `0 0 ${size * 2}px ${size}px hsl(270 60% 70% / 0.3)`;
      
      const duration = Math.random() * 4 + 3;
      const delay = Math.random() * 5;
      
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--max-opacity', '0.8');
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="starfield"
      aria-hidden="true"
    />
  );
};

export default StarField;
