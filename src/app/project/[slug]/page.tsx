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
    images: ['/Personal_P_HP.png', '/Personal_P_WE.png', '/Personal_P_AM.png'],
    concept: (
      <p>
        This project was born from a desire to create a personal brand experience that feels both
        technically advanced and aesthetically grounded. I designed a grid-pattern interface
        inspired by the visual rhythm of math notebooks and digital sketchpads, symbolizing
        structured creativity.
      </p>
    ),
    process: (
      <p>
        The custom animated cursor and hover-triggered motion effects give users a sense of
        discovery as they navigate my work—an intentional nod to how curiosity drives both design
        and data science. The color palette—white, teal, walnut brown, and slate blue—was chosen to
        create a sense of balance between the modern digital world and natural calmness.
      </p>
    ),
    outcome: (
      <p>
        I wanted recruiters and collaborators to navigate my background effortlessly, so I
        integrated a scrollable résumé modal directly within the About section. The site is fully
        responsive and ADA-compliant, ensuring anyone—on any device—can interact seamlessly. Every
        feature was built from scratch, ensuring scalability for future updates.
      </p>
    ),
  },
  'preipoconnect': {
    title: 'F1Predict — Real-Time F1 Qualifying Prediction Engine',
    date: 'Nov 2025',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'XGBoost', 'Pandas'],
    images: ['/fst_img_f1_pre.png', '/home_img_f1_pre.png', '/snd_img_f1_pre.png', '/trd_img_f1_pre.png', '/lst_img_f1_pre.png'],
    concept: (
      <div className="space-y-4">
        <p>
          F1 qualifying is unpredictable — track evolution changes every minute, grip increases lap
          by lap, and drivers push on different tire compounds at different times. I wanted to build
          a system that not only understood this complexity, but reacted to it <strong>live</strong>
          .
        </p>
        <p>
          F1Predict is a full end-to-end machine learning engine that forecasts qualifying results
          by combining:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Real-time telemetry streams</strong>
          </li>
          <li>
            <strong>Historical pace data from multiple seasons</strong>
          </li>
          <li>
            <strong>Track-by-track driver performance trends</strong>
          </li>
          <li>
            <strong>Weather and temperature patterns</strong>
          </li>
        </ul>
        <p>
          The goal wasn’t just accuracy — it was to build a{' '}
          <strong>fast, production-style tool</strong> that stays useful during actual race
          weekends.
        </p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            1. Data Engineering: Live + Historical Pipeline
          </h3>
          <p>
            I created a data pipeline capable of handling two very different data sources:
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Historical Data (Multi-Season)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lap times, sectors, mini-sectors</li>
                <li>Compound-specific pace deltas (soft vs. medium vs. hard)</li>
                <li>Driver performance history per circuit</li>
                <li>Team form and development curves</li>
                <li>Weather-adjusted lap performance</li>
                <li>Track evolution modeling across Q1–Q3</li>
              </ul>
              <p className="mt-2">
                This allowed the model to learn long-term patterns: who is typically strong at
                Monaco, who struggles at Suzuka, how teams’ pace changes between seasons, etc.
              </p>
            </div>
            <div>
              <p className="font-semibold">Live Session Data (Real-Time)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Live lap times</li>
                <li>Mini-sector splits</li>
                <li>Speed trap performance</li>
                <li>Tire compound and age</li>
                <li>Track temperature updates</li>
                <li>Red flag/traffic-impacted laps</li>
              </ul>
              <p className="mt-2">
                I designed a preprocessing system that automatically detects whether a lap is
                “clean” or “traffic-affected” to avoid misleading the model.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            2. Feature Engineering &amp; Model Architecture
          </h3>
          <p>
            I trained multiple models, but <strong>XGBoost</strong> ultimately provided the best mix
            of:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fast inference</li>
            <li>Strong performance on non-linear relationships</li>
            <li>Stability when input data changes every few seconds</li>
          </ul>
          <p className="mt-2">Key engineered features include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Circuit-specific driver pace index</strong>{' '}
              <span className="block text-sm">
                (Driver’s normalized performance at each track)
              </span>
            </li>
            <li>
              <strong>Team weekend form score</strong>{' '}
              <span className="block text-sm">
                (Combines practice + historical performance)
              </span>
            </li>
            <li>
              <strong>Tire degradation curves</strong>
            </li>
            <li>
              <strong>Temperature-adjusted pace factor</strong>
            </li>
            <li>
              <strong>Track evolution coefficient</strong>{' '}
              <span className="block text-sm">
                (Quantifies how fast the track gets each session)
              </span>
            </li>
            <li>
              <strong>Driver momentum metric</strong>{' '}
              <span className="block text-sm">
                (Performance trend across last 5–10 races)
              </span>
            </li>
          </ul>
          <p className="mt-2">
            These features gave the model context beyond the raw lap time — helping it understand{' '}
            <em>why</em> a lap is fast, not just <em>how fast</em>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            3. Real-Time Deployment &amp; System Design
          </h3>
          <p>
            I deployed the model behind a <strong>FastAPI</strong> service that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Accepts new telemetry or lap data</li>
            <li>Processes it through the feature pipeline</li>
            <li>Generates updated predictions (rankings + confidence scores)</li>
            <li>Sends results back in under 120 ms</li>
          </ul>
          <p className="mt-2">
            To make debugging easier during live sessions, I also added:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Drift detection</li>
            <li>Flagging unexpected outlier laps</li>
            <li>Confidence interval widening when data is sparse</li>
          </ul>
          <p className="mt-2">
            These production touches make the system feel reliable and “race-ready.”
          </p>
        </div>
      </div>
    ),
    outcome: (
      <div className="space-y-4">
        <p>
          F1Predict delivered meaningful accuracy and real-time responsiveness:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>38% improvement</strong> in prediction stability after adding circuit-specific
            features
          </li>
          <li>
            <strong>&lt;120 ms latency</strong> on every prediction cycle
          </li>
          <li>Consistent Q1–Q3 ranking accuracy even with limited laps</li>
          <li>Seamless fusion of real-time and historical datasets</li>
          <li>Built with production principles: APIs, streaming ingestion, clean data pipelines</li>
        </ul>
        <p>
          More than anything, this project shows my ability to build{' '}
          <strong>real-world machine learning systems</strong> — the kind that combine data
          engineering, modeling, deployment, and optimization into one cohesive product.
        </p>
        <p>
          It reflects exactly the kind of impact I want to make as a{' '}
          <strong>Machine Learning Engineer</strong>.
        </p>
      </div>
    ),
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
    concept: (
      <p>
        This project marked my first deep dive into 3D web design, where I wanted to break away from
        static layouts and instead build something alive and exploratory. Using Three.js and
        Blender, I designed a portfolio that feels like a 3D workspace—each element floating
        organically in space, symbolizing how creativity and structure coexist in technology.
      </p>
    ),
    process: (
      <p>
        The holographic animation aesthetic—soft gradients, glowing blue edges, and glass-like
        effects—was influenced by futuristic user interfaces seen in sci-fi design systems. My
        intent was to represent how technology feels tactile yet limitless. The interactive coding
        section allows users to drag elements and simulate code interactions.
      </p>
    ),
    outcome: (
      <p>
        Behind the visuals, I also prioritized practicality. The Google Sheets contact form ensures
        I can capture and manage user inquiries efficiently, bridging creativity with
        functionality. This project helped me refine my UI/UX instincts and sparked my ongoing
        interest in interactive front-end experiences.
      </p>
    ),
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
    concept: (
      <p>
        EVision emerged from my curiosity about how data science can solve real consumer problems.
        With so many EV models entering the market, buyers often struggle to find the right balance
        between price, range, and charging efficiency. My goal was to make this decision process
        transparent, interactive, and personalized.
      </p>
    ),
    process: (
      <p>
        I designed a weighted scoring algorithm that assigns importance to user-defined factors,
        achieving a 95% ranking precision. Using KMeans clustering, I categorized vehicles by their
        specifications, revealing market patterns that helped users understand trade-offs
        intuitively.
      </p>
    ),
    outcome: (
      <p>
        The visual interface, built in Streamlit, uses calm gradients of green and blue to represent
        sustainability and trust. Interactive sliders let users adjust preferences dynamically,
        offering real-time feedback. By integrating preprocessing pipelines in Python, I reduced
        data normalization time by 30%. EVision merges data science, sustainability, and design
        thinking.
      </p>
    ),
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
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#8B6F47]/20 mb-6 bg-[#F7F7F5]">
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
                    className="object-contain"
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
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-contain" />
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
              <div className="text-[#708090] leading-relaxed text-lg space-y-4">
                {project.concept}
              </div>
            </div>

            {/* Process */}
            <div className="border-l-2 border-[#8B6F47] pl-8">
              <h2 className="text-3xl font-light text-[#222222] mb-4">Process</h2>
              <div className="text-[#708090] leading-relaxed text-lg space-y-4">
                {project.process}
              </div>
            </div>

            {/* Outcome */}
            <div className="border-l-2 border-[#708090] pl-8">
              <h2 className="text-3xl font-light text-[#222222] mb-4">Outcome</h2>
              <div className="text-[#708090] leading-relaxed text-lg space-y-4">
                {project.outcome}
              </div>
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