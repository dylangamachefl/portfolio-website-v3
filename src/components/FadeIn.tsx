import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
    rootMargin: '-50px 0px', // Wait until element is slightly inside the viewport
  });

  const getDirectionClass = () => {
      switch (direction) {
          case 'up': return 'translate-y-8';
          case 'down': return '-translate-y-8';
          case 'left': return 'translate-x-8';
          case 'right': return '-translate-x-8';
          case 'none': return '';
          default: return 'translate-y-8';
      }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        inView 
            ? 'opacity-100 translate-x-0 translate-y-0' 
            : `opacity-0 ${getDirectionClass()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};