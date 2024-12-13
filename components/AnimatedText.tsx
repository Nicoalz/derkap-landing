import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className: string;
  animationDelay?: number;
  isScrollTriggered?: boolean;
}

interface WordSegment {
  word: string;
  isSpan: boolean;
  className?: string;
}

const parseText = (text: string): WordSegment[] => {
  const segments = text.split(/(<span.*?<\/span>)/g);
  
  return segments.flatMap((segment): WordSegment[] => {
    if (segment.startsWith('<span')) {
      const classMatch = segment.match(/className=['"]([^'"]*)['"]/);
      const className = classMatch ? classMatch[1] : '';
      const wordMatch = segment.match(/>([^<]*)</);
      const word = wordMatch ? wordMatch[1] : '';
      
      return [{ word, isSpan: true, className }];
    } else {
      return segment.split(/\s+/)
        .filter(word => word.length > 0)
        .map(word => ({ word, isSpan: false }));
    }
  });
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  animationDelay = 0,
  isScrollTriggered = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.anim-text');
    gsap.set(elements, { y: 100, opacity: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: isScrollTriggered ? {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      } : undefined
    });

    timeline.to(elements, {
      y: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 0.8,
      delay: isScrollTriggered ? 0 : animationDelay,
      ease: "power2.out"
    });

    animationRef.current = timeline;

    return () => {
      animationRef.current?.kill();
    };
  }, [animationDelay, isScrollTriggered]);

  const words = parseText(text);

  return (
    <div ref={containerRef} className={className}>
      {words.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span className={`anim-text inline-block ${item.className || ''}`}>
            {item.word}
            {index !== words.length - 1 && '\u00A0'}
          </span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
