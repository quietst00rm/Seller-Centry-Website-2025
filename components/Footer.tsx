import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-black text-center relative z-10">
      {/* Branding */}
      <div className="flex items-center justify-center gap-3 mb-10 group cursor-default">
        <div className="p-2 bg-slate-900 rounded-sm border border-white/10 group-hover:border-orange-500/50 transition-colors">
            <ShieldCheck size={24} className="text-orange-500" />
        </div>
        <span className="text-lg font-bold tracking-widest uppercase font-display text-white">Seller Centry</span>
      </div>

      {/* Services Links */}
      <div className="mb-12">
        <span className="text-orange-500 text-[10px] font-mono tracking-[0.2em] uppercase block mb-6 opacity-80">Our Services</span>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-sm font-bold tracking-widest text-slate-300 uppercase">
            <a href="#" className="hover:text-orange-500 hover:scale-105 transition-all duration-300">Account Monitoring</a>
            <div className="hidden md:block w-1 h-1 bg-slate-800 rounded-full" />
            <a href="#" className="hover:text-orange-500 hover:scale-105 transition-all duration-300">Violation Resolution</a>
            <div className="hidden md:block w-1 h-1 bg-slate-800 rounded-full" />
            <a href="#" className="hover:text-orange-500 hover:scale-105 transition-all duration-300">Reinstatements</a>
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center gap-8 mb-8 text-xs font-mono text-slate-600 uppercase tracking-wider">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
      </div>

      <p className="text-slate-800 text-[10px] max-w-md mx-auto leading-relaxed uppercase tracking-widest">
        © 2025 Seller Centry.<br/>The best suspension appeal is the one you never have to write.
      </p>
    </footer>
  );
};

export default Footer;