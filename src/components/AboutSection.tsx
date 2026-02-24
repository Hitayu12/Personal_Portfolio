'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [showResume, setShowResume] = useState(false);

  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'Data Science',
    'Web Development',
    'Machine Learning',
  ];

  return (
    <>
      <section id="about" className="relative min-h-screen py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-[#8B6F47]/20">
                <Image
                  src="/me.jpg"
                  alt="Hitayu Parikh"
                  fill
                  className="object-cover object-center scale-115"
                />
              </div>
            </motion.div>

            {/* Bio and Skills */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-5xl font-light text-[#222222] mb-6">About Me</h2>
                <div className="space-y-4 text-[#708090] leading-relaxed">
                  <p>
                    Hi, I&apos;m Hitayu Parikh. I&apos;m a student at Rutgers University studying Data
                    Science (Computer Science track) and Business Administration on the side.
                    I’m fascinated by how data, strategy, and risk shape decisions in
                    high-pressure environments. I enjoy building systems that turn uncertainty
                    into structured insight and measurable performance.
                  </p>
                  <p>
                    I’m a big Formula 1 fan, and I follow tennis closely. I love the intensity,
                    the strategy, and how small moments can shift everything. Watching how teams
                    and athletes prepare, adapt, and compete has shaped the way I think about
                    focus, discipline, and growth.
                  </p>
                  <p>
                    Outside of school and projects, I train for long-distance races. Running
                    keeps me grounded and reminds me that progress comes from consistency. I’m
                    always excited to learn, build, and connect with people who care about
                    getting better every day.
                  </p>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-light text-[#222222] mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-[#8B6F47]/30 rounded-full text-sm text-[#222222] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Resume Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={() => setShowResume(true)}
                className="group flex items-center gap-2 text-[#1A7B7D] font-mono text-sm tracking-wide cursor-interactive hover:gap-4 transition-all duration-300"
              >
                See Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl border-2 border-[#1A7B7D]/20 overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors cursor-interactive"
              >
                <X className="w-5 h-5 text-[#222222]" />
              </button>

              {/* PDF Viewer */}
              <div className="w-full h-full overflow-auto p-8">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full border-0"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
