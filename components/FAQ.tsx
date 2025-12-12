import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all duration-300 focus:outline-none"
      >
        <div className="flex items-center gap-4">
            <span className="font-mono text-orange-500/50 text-xs">0{index + 1}</span>
            <span className={`text-lg md:text-xl font-bold font-display transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-slate-300 group-hover:text-white'}`}>
            {question}
            </span>
        </div>
        <div className={`p-2 rounded-sm border transition-all duration-300 ${isOpen ? 'bg-orange-500 border-orange-500 rotate-90' : 'border-slate-700 bg-slate-900 group-hover:border-slate-500'}`}>
           {isOpen ? <Minus size={16} className="text-black" /> : <Plus size={16} className="text-slate-400" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed pl-10 pr-4 text-sm md:text-base border-l border-slate-800 ml-2">
            {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "WHAT EXACTLY DOES SELLER CENTRY DO?",
      answer: "We monitor your Amazon account health every single day. Our team checks for policy violations, negative feedback, IP complaints, and anything else that could put your account at risk. When we spot a problem, we address it before it escalates into a suspension."
    },
    {
      question: "HOW IS THIS DIFFERENT FROM SUSPENSION SERVICES?",
      answer: "Suspension services help after you're already in trouble. We prevent the trouble in the first place. The best suspension appeal is the one you never have to write. If you do face an issue, we catch it early—when it's a warning, not a catastrophe."
    },
    {
      question: "WHAT DO YOU ACTUALLY MONITOR?",
      answer: "We track policy violations, customer feedback, A-to-Z claims, intellectual property complaints, listing quality issues, and account health metrics. If Amazon is watching it, we're watching it too."
    },
    {
      question: "CAN'T I JUST CHECK ACCOUNT HEALTH MYSELF?",
      answer: "You can. But most sellers check sporadically, miss the nuances of Amazon's enforcement patterns, and don't know how to respond effectively when issues appear. We check daily, understand what Amazon actually cares about, and take action immediately."
    },
    {
      question: "HOW QUICKLY DO YOU CATCH PROBLEMS?",
      answer: "Within 24 hours. We review your account health daily, not weekly or \"when we get to it.\" Early detection is the entire point—a violation addressed on day one is far easier to resolve than one that's been festering for two weeks."
    },
    {
      question: "IS THIS JUST FOR SELLERS WITH PAST ISSUES?",
      answer: "No. Our best clients are sellers who've never been suspended and want to keep it that way. Prevention is easier than recovery. That said, if you've been burned before, you understand exactly why daily monitoring matters."
    },
    {
      question: "WHAT HAPPENS WHEN YOU FIND A PROBLEM?",
      answer: "We assess severity, determine the best response, and take action. For straightforward issues, we handle them directly. For complex situations, we'll loop you in with a clear recommendation. You'll always know what's happening with your account."
    }
  ];

  return (
    <section className="py-24 bg-[#050a14] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
            <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 bg-orange-500 animate-pulse rounded-full" />
                <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Operational Intel</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-16">
                PROTOCOL <span className="text-slate-700">FAQ</span>
            </h2>

            <div className="bg-[#0a1120] border border-slate-800 rounded-sm p-2 md:p-8">
                {faqs.map((faq, index) => (
                    <FAQItem 
                        key={index}
                        index={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;