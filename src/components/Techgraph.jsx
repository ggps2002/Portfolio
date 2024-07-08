import React, { useEffect, useState, useRef } from 'react';

const Techgraph = ({ index, tech }) => {
  const radius = 50;
  const strokeWidth = 5;
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationTimeout;

    const startAnimation = () => {
      let start = null;
      const duration = 2000; // duration of the animation in milliseconds

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const currentPercent = Math.round(progress * tech.percentage);
        setPercent(currentPercent);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    if (isVisible) {
      animationTimeout = setTimeout(startAnimation, 500 * index); // Add delay based on index or remove it for immediate animation
    }

    return () => {
      clearTimeout(animationTimeout); // Clear timeout if component unmounts or becomes invisible before animation starts
      setPercent(0); // Reset percentage on unmount
    };
  }, [index, isVisible, tech.percentage]);

  const offset = circumference - (percent / 100) * circumference;

  return (
    <div ref={techRef} className='flex-col'>
      <div className="relative" style={{ width: diameter + strokeWidth, height: diameter + strokeWidth }}>
        <svg width={diameter + strokeWidth} height={diameter + strokeWidth} viewBox={`0 0 ${diameter + strokeWidth} ${diameter + strokeWidth}`} className="transform -rotate-90">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6B66FF', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#8457FF', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#A748FF', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#C13AFF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E22BFF', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            className="text-primary"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={(diameter + strokeWidth) / 2}
            cy={(diameter + strokeWidth) / 2}
          />
          <circle
            className="text-[#915eff]"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={(diameter + strokeWidth) / 2}
            cy={(diameter + strokeWidth) / 2}
            style={{ transition: 'stroke-dashoffset 0.5s linear, stroke 0.5s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={tech.icon} alt="" className='w-10 h-10' />
        </div>
      </div>
      <div className="text-xl font-bold w-24 text-center mt-2">{percent}%</div>
    </div>
  );
};

export default Techgraph;
