'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
    >
      <motion.a
        href="mailto:parikhhitayu12@Gmail.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-[#1A7B7D] hover:shadow-md transition-all duration-300 cursor-interactive"
      >
        <Mail className="w-5 h-5 text-[#708090] group-hover:text-[#1A7B7D] transition-colors" strokeWidth={1.5} />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/hitayu-parikh/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-[#1A7B7D] hover:shadow-md transition-all duration-300 cursor-interactive"
      >
        <Linkedin className="w-5 h-5 text-[#708090] group-hover:text-[#1A7B7D] transition-colors" strokeWidth={1.5} />
      </motion.a>

      {/* Mobile version - horizontal at bottom */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        <motion.a
          href="mailto:parikhhitayu12@Gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-[#1A7B7D] hover:shadow-md transition-all duration-300 cursor-interactive"
        >
          <Mail className="w-5 h-5 text-[#708090] group-hover:text-[#1A7B7D] transition-colors" strokeWidth={1.5} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/hitayu-parikh/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-[#1A7B7D] hover:shadow-md transition-all duration-300 cursor-interactive"
        >
          <Linkedin className="w-5 h-5 text-[#708090] group-hover:text-[#1A7B7D] transition-colors" strokeWidth={1.5} />
        </motion.a>
      </div>
    </motion.div>
  );
}