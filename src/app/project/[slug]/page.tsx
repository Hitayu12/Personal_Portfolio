'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';

const projectData: Record<string, any> = {
  'interactive-portfolio': {
    title: 'Interactive Portfolio Website – Minimalist Personal Branding Platform',
    date: 'Oct 2025',
    tags: ['React.js', 'TailwindCSS', 'Framer Motion', 'JavaScript', 'Figma'],
    images: [
      '/Personal_P_HP.png',
      '/Personal_P_WE.png',
      '/Personal_P_AM.png',
    ],
    concept: 'This project was born from a desire to create a personal brand experience that feels both technically advanced and aesthetically grounded. I designed a grid-pattern interface inspired by the visual rhythm of math notebooks and digital sketchpads, symbolizing structured creativity.',
    process: 'The custom animated cursor and hover-triggered motion effects give users a sense of discovery as they navigate my work—an intentional nod to how curiosity drives both design and data science. The color palette—white, teal, walnut brown, and slate blue—was chosen to create a sense of balance between the modern digital world and natural calmness.',
    outcome: 'I wanted recruiters and collaborators to navigate my background effortlessly, so I integrated a scrollable résumé modal directly within the About section. The site is fully responsive and ADA-compliant, ensuring anyone—on any device—can interact seamlessly. Every feature was built from scratch, ensuring scalability for future updates.',
  },
  'preipoconnect': {
    title: 'PreIPOConnect – AI-Based Pre-IPO Company Recommendation Chatbot',
    date: 'Nov 2025',
    tags: ['Python', 'Flask', 'Twilio API', 'SendGrid', 'Pandas'],
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80',
    ],
    concept: 'PreIPOConnect was inspired by my fascination with how data can guide career discovery. Many students want to join innovative startups but don\'t know where to begin. This led me to design a chatbot experience that feels conversational, not corporate—a tool that simplifies complex startup data into accessible insights.',
    process: 'The user journey begins with an SMS-based workflow, where individuals choose their preferred industry and receive a customized list of pre-IPO companies projected for high growth. To ensure the suggestions were meaningful, I engineered a ranking algorithm that factors in venture capital funding, employee growth, and Glassdoor sentiment analysis.',
    outcome: 'I used SendGrid\'s email automation to send tailored recommendations instantly, reducing delivery latency by 70%. The interface design philosophy leaned on simplicity—light backgrounds, soft teal highlights, and rounded message bubbles—to evoke reliability and optimism. Recognized by hackathon mentors, PreIPOConnect bridges data-driven analysis and human-centered design.',
  },
  '3d-portfolio': {
    title: '3D-Interactive Personal Portfolio Website',
    date: 'May 2023',
    tags: ['JavaScript', 'Three.js', 'Blender', 'HTML', 'CSS'],
    images: [
      '/Personal_Portfolio_old_H.png',
      '/Personal_Portfolio_old_O.png',
      '/Personal_Portfolio_old_CM.png',
    ],
    concept: 'This project marked my first deep dive into 3D web design, where I wanted to break away from static layouts and instead build something alive and exploratory. Using Three.js and Blender, I designed a portfolio that feels like a 3D workspace—each element floating organically in space, symbolizing how creativity and structure coexist in technology.',
    process: 'The holographic animation aesthetic—soft gradients, glowing blue edges, and glass-like effects—was influenced by futuristic user interfaces seen in sci-fi design systems. My intent was to represent how technology feels tactile yet limitless. The interactive coding section allows users to drag elements and simulate code interactions.',
    outcome: 'Behind the visuals, I also prioritized practicality. The Google Sheets contact form ensures I can capture and manage user inquiries efficiently, bridging creativity with functionality. This project helped me refine my UI/UX instincts and sparked my ongoing interest in interactive front-end experiences.',
  },
  'evision': {
    title: 'EVision – Personalized Electric Vehicle Recommendation System',
    date: 'Jan 2025',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    images: [
      '/Evision_D.png',
      '/Evision_L.png',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80',
    ],
    concept: 'EVision emerged from my curiosity about how data science can solve real consumer problems. With so many EV models entering the market, buyers often struggle to find the right balance between price, range, and charging efficiency. My goal was to make this decision process transparent, interactive, and personalized.',
    process: 'I designed a weighted scoring algorithm that assigns importance to user-defined factors, achieving a 95% ranking precision. Using KMeans clustering, I categorized vehicles by their specifications, revealing market patterns that helped users understand trade-offs intuitively.',
    outcome: 'The visual interface, built in Streamlit, uses calm gradients of green and blue to represent sustainability and trust. Interactive sliders let users adjust preferences dynamically, offering real-time feedback. By integrating preprocessing pipelines in Python, I reduced data normalization time by 30%. EVision merges data science, sustainability, and design thinking.',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projectData[params.slug];

  if (!project) {
    return (
      <>
        <CustomCursor />
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-[#708090]">Project not found</p>
        </div>
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <CustomCursor />
      <Header />
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#708090] hover:text-[#1A7B7D] transition-colors mb-12 cursor-interactive"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#222222] mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-sm text-[#708090]">{project.date}</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs font-mono text-[#708090] px-3 py-1 bg-gray-50 rounded-full border border-[#8B6F47]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Gallery/Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#8B6F47]/20 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors cursor-interactive"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#222222]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors cursor-interactive"
                  >
                    <ChevronRight className="w-5 h-5 text-[#222222]" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full shadow-lg">
                <span className="text-sm font-mono text-[#222222]">
                  {currentImageIndex + 1} / {project.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-interactive ${
                    index === currentImageIndex
                      ? 'border-[#1A7B7D]'
                      : 'border-gray-200 opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Description Sections */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            {/* Video Section - Only for 3d-portfolio */}
            {params.slug === '3d-portfolio' && (
              <div className="border-l-2 border-[#1A7B7D] pl-8">
                <h2 className="text-3xl font-light text-[#222222] mb-4">Project Video</h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#8B6F47]/20">
                  <iframe
                    src="https://www.youtube.com/embed/W2H5PaQu6F0"
                    title="3D Portfolio Project Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Concept */}
            <div className="border-l-2 border-[#1A7B7D] pl-8">
              <h2 className="text-3xl font-light text-[#222222] mb-4">Concept</h2>
              <p className="text-[#708090] leading-relaxed text-lg">{project.concept}</p>
            </div>

            {/* Process */}
            <div className="border-l-2 border-[#8B6F47] pl-8">
              <h2 className="text-3xl font-light text-[#222222] mb-4">Process</h2>
              <p className="text-[#708090] leading-relaxed text-lg">{project.process}</p>
            </div>

            {/* Outcome */}
            <div className="border-l-2 border-[#708090] pl-8">
              <h2 className="text-3xl font-light text-[#222222] mb-4">Outcome</h2>
              <p className="text-[#708090] leading-relaxed text-lg">{project.outcome}</p>
            </div>
          </motion.div>

          {/* Back to projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[#1A7B7D] hover:gap-4 transition-all font-mono text-sm cursor-interactive"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}