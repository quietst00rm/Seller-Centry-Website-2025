import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HolographicCube from './HolographicCube';
import FadeIn from './FadeIn';
import Section from './Section';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Section className="h-screen overflow-hidden">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 pointer-events-none">
         <HolographicCube />
      </div>
      
      {/* Particles/Stars CSS Fallback */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="stars" />
          <style>{`
            .stars {
               width: 2px; height: 2px;
               background: #64748B;
               box-shadow: 0px 0px 100px white;
               animation: animStar 150s linear infinite;
            }
            @keyframes animStar {
               from { transform: translateY(0px) translateX(0px); box-shadow: 100px 200px white, 300px 600px white, 800px 100px white, 1100px 400px white; }
               to { transform: translateY(-2000px) translateX(-500px); box-shadow: 100px 200px white, 300px 600px white, 800px 100px white, 1100px 400px white; }
            }
          `}</style>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-5xl">
          <FadeIn delay={200}>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter font-display mb-8 mix-blend-overlay">
              ALWAYS<br />
              WATCHING
            </h1>
          </FadeIn>
          
          <FadeIn delay={600} className="flex flex-col md:flex-row items-start md:items-center gap-8 pointer-events-auto">
            <p className="text-xl md:text-2xl text-slate-300 max-w-lg leading-relaxed">
              Proactive protection, not reactive rescue. We monitor your account <span className="text-orange-500 font-bold">every single day</span>.
            </p>
            <button 
              onClick={onOpenModal}
              className="group flex items-center gap-3 px-8 py-4 bg-orange-600/10 backdrop-blur-md border border-orange-500/50 rounded-sm hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">Start Monitoring</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </div>

      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 animate-bounce hover:text-orange-500 transition-colors cursor-pointer z-20"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </Section>
  );
};

export default Hero;