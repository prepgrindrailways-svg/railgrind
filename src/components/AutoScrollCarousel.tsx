"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: ReactNode;
  speed?: number;
}

export default function AutoScrollCarousel({ children, speed = 1 }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += speed;
        }
      }
    }, 25);
    
    return () => clearInterval(interval);
  }, [isHovered, speed]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div 
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <button 
        onClick={() => scroll('left')}
        style={{ position: 'absolute', left: '-20px', zIndex: 10, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div 
        ref={scrollRef} 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '1.5rem', 
          padding: '1rem 0', 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
          width: '100%', 
          scrollBehavior: isHovered ? 'smooth' : 'auto' 
        }} 
        className="hide-scrollbar"
      >
        {children}
        {children}
      </div>

      <button 
        onClick={() => scroll('right')}
        style={{ position: 'absolute', right: '-20px', zIndex: 10, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
