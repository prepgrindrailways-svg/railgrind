import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: string; // e.g. '30s', '120s'
}

export default function Marquee({ children, speed }: MarqueeProps) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content" style={speed ? { animationDuration: speed } : undefined}>
        {/* Render children twice to allow seamless infinite scrolling */}
        {children}
        {children}
      </div>
    </div>
  );
}
