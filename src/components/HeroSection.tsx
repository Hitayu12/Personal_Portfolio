'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Large "Hi" greeting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-light leading-none tracking-tight select-none"
          style={{ 
            color: '#708090'
          }}
        >
          Hi<span style={{ color: '#1A7B7D' }}>.</span>
        </h1>
      </motion.div>

      {/* Scroll down prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-12 left-12 flex flex-col items-start gap-2 cursor-interactive"
        onClick={scrollToWork}
      >
        <motion.p
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-sm text-[#708090] font-mono tracking-wider"
        >
          Scroll down
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="flex flex-col gap-1"
        >
          <ChevronDown className="w-5 h-5 text-[#1A7B7D]" strokeWidth={1.5} />
          <ChevronDown className="w-5 h-5 text-[#1A7B7D] -mt-3 opacity-50" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}