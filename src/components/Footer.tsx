'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="relative w-10 h-10 opacity-60">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Logo-1760670575435.jpg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#708090] font-mono">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </motion.footer>
  );
}