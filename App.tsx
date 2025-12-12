import React, { useState } from 'react';
import { Eye, ShieldAlert, ArrowUpRight, RefreshCw, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import StatsTicker from './components/StatsTicker';
import Section from './components/Section';
import FadeIn from './components/FadeIn';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BookingModal from './components/BookingModal';
import TrustedBy from './components/TrustedBy';
import FAQ from './components/FAQ';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#050a14] min-h-screen text-white font-sans antialiased selection:bg-orange-500 selection:text-white cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Marquee />
      <TrustedBy />
      <StatsTicker />

      {/* Reactive vs Proactive Section */}
      <Section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[1px] bg-orange-500"></div>
                    <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">The Shift</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display leading-[0.9]">
                  REACTIVE IS <br/>
                  <span className="text-orange-600 stroke-text-none">OBSOLETE</span>
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-xl text-slate-400 leading-relaxed mb-8 border-l-2 border-slate-800 pl-6">
                  <span className="line-through opacity-50 text-slate-600">Waiting for suspension emails</span> is the old way. We catch problems before they escalate. 
                  Systematic daily monitoring combined with expert human analysis.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-sm bg-slate-900/30 border border-slate-800">
                    <div className="text-4xl font-bold text-white mb-2 font-display">24/7</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Vigilance</div>
                  </div>
                  <div className="p-6 rounded-sm bg-slate-900/30 border border-slate-800">
                    <div className="text-4xl font-bold text-white mb-2 font-display">100%</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Policy Fluency</div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={600} className="relative h-[600px] rounded-sm overflow-hidden border border-slate-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2574&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                alt="Amazon Logistics"
              />
              {/* Overlay Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-mono text-orange-500 uppercase">Monitoring Active</span>
                </div>
                <h3 className="text-2xl font-bold">Compliance Confidence, Delivered Daily.</h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-32 bg-black relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <FadeIn className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">Services</span>
              <h2 className="text-5xl font-bold font-display mb-6">PROTECTION PROTOCOL</h2>
              <p className="text-slate-400 text-lg">
                We remove the anxiety so you can focus on growth. Expert eyes on your account, every single day.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                index={0}
                icon={Eye}
                title="Account Monitoring"
                desc="Daily health checks by human experts. We spot policy violations and performance dips before Amazon's bots do."
              />
              <FeatureCard 
                index={1}
                icon={ShieldAlert}
                title="Violation Resolution"
                desc="IP complaints? Listing takedowns? We draft the appeals and manage the case logs until the issue is resolved."
              />
              <FeatureCard 
                index={2}
                icon={RefreshCw}
                title="Reinstatements"
                desc="Suspended? We handle the complex Plan of Action (POA) and appeals process to get your selling privileges restored fast."
              />
            </div>
          </div>
      </Section>

      <FAQ />

      {/* CTA Section */}
      <Section className="py-32 flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[80px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <FadeIn>
            <h2 className="text-5xl md:text-8xl font-black font-display mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              SECURE YOUR<br/>REVENUE
            </h2>
           </FadeIn>
           <FadeIn delay={200}>
             <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
               Don't wait for a red flag. Join the sellers who sleep soundly knowing we are watching.
             </p>
           </FadeIn>
           <FadeIn delay={400} className="flex justify-center">
             <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full md:w-auto px-12 py-5 bg-black text-white font-bold rounded-sm border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               <span className="relative z-10">GET PROTECTED NOW</span>
               <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </FadeIn>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default App;