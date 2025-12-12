import React, { useEffect, useState, useRef } from 'react';
import FadeIn from './FadeIn';

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Ease out expo: starts fast, slows down gently
      if (progress < duration) {
        const easeOutExpo = 1 - Math.pow(2, -10 * (progress / duration));
        setCount(Math.floor(end * easeOutExpo));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, prefix = '', suffix = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2500, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group relative p-6">
      <div className="text-5xl md:text-6xl font-bold font-display text-white mb-3 tabular-nums tracking-tighter">
        <span className="text-orange-500 opacity-60 text-4xl mr-1 align-top font-sans font-light">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-orange-500 opacity-60 text-4xl ml-1 font-sans font-light">{suffix}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-orange-500 transition-colors duration-300" />
         <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold group-hover:text-white transition-colors duration-300">
            {label}
         </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-orange-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </div>
  );
};

const StatsTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#050a14] border-b border-white/5 relative z-20 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x divide-white/5">
            <StatItem value={6500} label="Violations Resolved" suffix="+" />
            <StatItem value={750} label="Revenue Protected" prefix="$" suffix="M+" />
            <StatItem value={500} label="Accounts Reinstated" suffix="+" />
        </FadeIn>
      </div>
    </div>
  );
};

export default StatsTicker;