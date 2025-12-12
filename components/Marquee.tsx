import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative py-8 bg-black border-y border-white/5 overflow-hidden whitespace-nowrap flex">
      <div className="flex gap-16 items-center animate-marquee">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-4xl md:text-6xl font-bold text-transparent stroke-text font-display">
              ALWAYS WATCHING
            </span>
            <span className="text-4xl md:text-6xl font-bold text-orange-600 opacity-80 font-display">
              ALWAYS AHEAD
            </span>
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Marquee;