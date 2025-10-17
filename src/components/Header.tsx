'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = 0;

    const updateHidden = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateHidden);
    return () => window.removeEventListener('scroll', updateHidden);
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/20 bg-white"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-12 h-12 z-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Logo-1760674219470.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-12">
          <Link
            href="/#projects"
            className="font-mono text-sm tracking-wider transition-all relative text-[#222222]/70 hover:text-[#222222] group"
          >
            PROJECTS
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#708090] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            />
          </Link>
          <Link
            href="/#work"
            className="font-mono text-sm tracking-wider transition-all relative text-[#222222]/70 hover:text-[#222222] group"
          >
            WORK
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#708090] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            />
          </Link>
          <Link
            href="/#about"
            className="font-mono text-sm tracking-wider transition-all relative text-[#222222]/70 hover:text-[#222222] group"
          >
            ABOUT ME
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#708090] opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}