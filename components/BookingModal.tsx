import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setLoading(false);
    }
  }, [isOpen]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050a14]/90 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0a1120] border border-slate-700/50 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10 p-2"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          {step === 'form' ? (
            <>
              <div className="mb-8">
                <span className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-2 block">Initiate Protocol</span>
                <h2 className="text-3xl font-bold font-display text-white mb-2">SECURE YOUR STORE</h2>
                <p className="text-slate-400 text-sm">Enter your details to generate a preliminary risk assessment.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-[#050a14] border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Business Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-[#050a14] border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-slate-700"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Amazon Store URL</label>
                  <input 
                    type="url" 
                    required 
                    className="w-full bg-[#050a14] border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-slate-700"
                    placeholder="https://amazon.com/shops/..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-sm uppercase tracking-widest transition-all duration-300 mt-4 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Start Protection
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-slate-600 uppercase tracking-wide mt-4">
                  Encrypted Transmission • NDA Protected
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">REQUEST RECEIVED</h3>
              <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                Our team is analyzing your store metrics. You will receive a secure briefing link via email shortly.
              </p>
              <button 
                onClick={onClose}
                className="text-sm font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;