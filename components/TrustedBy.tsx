import React from 'react';
import FadeIn from './FadeIn';

interface LogoProps {
  children: React.ReactNode;
  name: string;
}

const Logo: React.FC<LogoProps> = ({ children, name }) => (
  <div className="group flex items-center justify-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0">
    <div className="text-white group-hover:text-orange-500 transition-colors duration-500">
        {children}
    </div>
    <span className="text-lg font-bold font-display text-white group-hover:text-orange-500 transition-colors duration-500 tracking-widest">{name}</span>
  </div>
);

const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/5 bg-[#050a14] relative z-20">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
            <p className="text-center text-slate-500 text-xs font-mono uppercase tracking-[0.2em] mb-12">
                Trusted by Top Sellers • Protecting over <span className="text-white font-bold">$750M</span> in Annual GMV
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-center">
                {/* Logo 1: APEX */}
                <Logo name="APEX">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2zm0 5.5L17.5 19H6.5L12 7.5z"/>
                   </svg>
                </Logo>
                
                {/* Logo 2: NEXUS */}
                <Logo name="NEXUS">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                       <circle cx="12" cy="12" r="9" />
                       <path d="M12 3v18M3 12h18" strokeWidth="1.5" />
                   </svg>
                </Logo>

                {/* Logo 3: VELOX */}
                <Logo name="VELOX">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M14 2L4 14h6l-2 8 10-12h-6l2-8z"/>
                   </svg>
                </Logo>
                
                 {/* Logo 4: QUANTUM */}
                <Logo name="QUANTUM">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                       <rect x="2" y="2" width="8" height="8" rx="1" />
                       <rect x="14" y="2" width="8" height="8" rx="1" opacity="0.5" />
                       <rect x="2" y="14" width="8" height="8" rx="1" opacity="0.5" />
                       <rect x="14" y="14" width="8" height="8" rx="1" />
                   </svg>
                </Logo>

                {/* Logo 5: VORTEX */}
                <Logo name="VORTEX">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                       <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeOpacity="0.3"/>
                       <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                   </svg>
                </Logo>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TrustedBy;