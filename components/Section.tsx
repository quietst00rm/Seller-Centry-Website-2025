import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => (
  <section className={`min-h-screen flex flex-col justify-center relative z-10 ${className}`}>
    {children}
  </section>
);

export default Section;