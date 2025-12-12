import React from 'react';
import { LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc, index }) => {
  return (
    <FadeIn
      delay={index * 100}
      className="group relative p-8 rounded-sm bg-slate-900/40 border border-white/5 backdrop-blur-md hover:bg-slate-800/60 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
          <Icon size={24} className="text-slate-200 group-hover:text-orange-500 transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white font-display tracking-tight">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm border-l-2 border-transparent group-hover:border-orange-500 pl-0 group-hover:pl-4 transition-all duration-300">
            {desc}
        </p>
      </div>
    </FadeIn>
  );
};

export default FeatureCard;