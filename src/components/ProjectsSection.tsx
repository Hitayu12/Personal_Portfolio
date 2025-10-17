'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Interactive Portfolio Website – Minimalist Personal Branding Platform',
    description: 'A sleek, minimalist personal portfolio website designed to present my projects and technical background through an interactive grid-based interface. Built with React, Tailwind, and Framer Motion, it blends clean digital minimalism with a calming natural palette.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['React.js', 'TailwindCSS', 'Framer Motion', 'JavaScript', 'Figma'],
    slug: 'interactive-portfolio',
  },
  {
    id: 2,
    title: 'PreIPOConnect – AI-Based Pre-IPO Company Recommendation Chatbot',
    description: 'An AI-powered chatbot that connects students and early-career professionals to promising pre-IPO companies aligned with their interests. Combining Flask, Twilio, and SendGrid, it delivers curated recommendations through a conversational SMS workflow.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    tags: ['Python', 'Flask', 'Twilio API', 'SendGrid', 'Pandas'],
    slug: 'preipoconnect',
  },
  {
    id: 3,
    title: '3D-Interactive Personal Portfolio Website',
    description: 'A fully 3D interactive web portfolio built using Three.js and Blender, blending responsive holographic animations with immersive design. Visitors can explore my projects in a dynamic 3D space while interacting with draggable code elements.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    tags: ['JavaScript', 'Three.js', 'Blender', 'HTML', 'CSS'],
    slug: '3d-portfolio',
  },
  {
    id: 4,
    title: 'EVision – Personalized Electric Vehicle Recommendation System',
    description: 'An intelligent EV recommendation engine that personalizes car suggestions based on cost, range, and charging preferences. By combining machine learning (KMeans clustering) with an interactive Streamlit dashboard, EVision simplifies the electric vehicle selection process.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    slug: 'evision',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-light text-[#222222] mb-16"
          >
            Recent Projects
          </motion.h2>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-interactive"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#1A7B7D]/30 transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Teal glow effect */}
                  <div className="absolute inset-0 shadow-lg shadow-[#1A7B7D]/0 group-hover:shadow-[#1A7B7D]/20 transition-shadow duration-500" />
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl font-light text-[#222222] group-hover:text-[#1A7B7D] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-[#708090] px-2 py-1 bg-gray-50 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#8B6F47]/20 overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors cursor-interactive"
              >
                <X className="w-5 h-5 text-[#222222]" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left: Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-light text-[#222222] mb-3">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs font-mono text-[#708090] px-3 py-1 bg-gray-50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[#708090] leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <Link
                    href={`/project/${selectedProject.slug}`}
                    className="group inline-flex items-center gap-2 text-[#1A7B7D] font-mono text-sm tracking-wide cursor-interactive hover:gap-4 transition-all duration-300"
                  >
                    See More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#8B6F47]/20">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}