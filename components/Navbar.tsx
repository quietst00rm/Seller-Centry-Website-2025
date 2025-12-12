import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileClick = () => {
    setIsMobileMenuOpen(false);
    onOpenModal();
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 flex justify-between items-center transition-all duration-300 ${
          scrolled || isMobileMenuOpen ? 'bg-[#050a14]/90 backdrop-blur-md border-b border-white/5' : 'bg-gradient-to-b from-[#050a14] via-[#050a14]/80 to-transparent'
        }`}
      >
        {/* Brand */}
        <div className="flex items-center space-x-3 relative z-50">
          <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center relative overflow-hidden group shadow-[0_0_15px_rgba(230,126,34,0.3)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="w-4 h-4 border-2 border-white transform rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display text-white">SELLER CENTRY</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-bold tracking-widest uppercase text-slate-300">
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
          
          {/* Services Dropdown */}
          <div className="relative group h-full py-2">
              <button className="flex items-center gap-2 group-hover:text-orange-500 transition-colors duration-300 focus:outline-none">
                Services
                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-orange-500" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-[#0f172a] border border-slate-700/50 rounded-sm shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-3xl relative">
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
                    
                    <div className="flex flex-col py-2 relative z-10">
                      {[
                        "Account Monitoring",
                        "Violation Resolution", 
                        "Reinstatements"
                      ].map((item) => (
                        <a key={item} href="#" className="group/item relative px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                          <span className="text-xs font-bold tracking-wider text-slate-400 group-hover/item:text-white transition-colors relative z-10">{item}</span>
                          {/* Hover Indicator */}
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300" />
                          
                          {/* Left Border Accent */}
                          <div className="absolute inset-y-0 left-0 w-[2px] bg-orange-500 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center" />
                        </a>
                      ))}
                    </div>
                </div>
              </div>
          </div>

          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Resources</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact Us</a>
        </div>

        {/* Desktop CTA Button */}
        <button 
          onClick={onOpenModal}
          className="hidden md:flex relative overflow-hidden group bg-orange-600 text-white px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,126,34,0.5)] hover:-translate-y-0.5 border border-orange-500/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">GET PROTECTED</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 text-white hover:text-orange-500 transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050a14] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-8 pb-10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <div className="flex flex-col space-y-8 overflow-y-auto">
            <a href="#" className="text-3xl font-bold font-display tracking-tight text-white hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#" className="text-3xl font-bold font-display tracking-tight text-white hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="text-sm font-mono text-orange-500 tracking-widest uppercase block mb-2">Services</span>
              {[
                "Account Monitoring",
                "Violation Resolution", 
                "Reinstatements"
              ].map((item) => (
                <a key={item} href="#" className="block text-xl font-medium text-slate-300 hover:text-white transition-colors pl-4 border-l border-slate-800 hover:border-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>

            <a href="#" className="text-3xl font-bold font-display tracking-tight text-white hover:text-orange-500 transition-colors pt-4 border-t border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
            <a href="#" className="text-3xl font-bold font-display tracking-tight text-white hover:text-orange-500 transition-colors pt-4 border-t border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
         </div>

         {/* Mobile Menu CTA */}
         <div className="mt-auto pt-8">
           <button 
            onClick={handleMobileClick}
            className="w-full py-4 bg-orange-600 text-white font-bold text-sm uppercase tracking-widest rounded-sm border border-orange-500/50 hover:bg-orange-500 transition-colors"
           >
             GET PROTECTED
           </button>
         </div>
      </div>
    </>
  );
};

export default Navbar;