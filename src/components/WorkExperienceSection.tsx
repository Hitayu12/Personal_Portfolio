'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  techStack: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'SterSoft Solutions Pvt Ltd',
    location: 'Vadodara, Gujarat, India (Remote)',
    period: 'July 2025 – September 2025',
    responsibilities: [
      'Implemented responsive static and dynamic web pages using HTML, CSS, JavaScript, ensuring cross-browser compatibility and mobile-first design',
      'Assisted in developing custom web applications with backend database integration, APIs, and CMS tools to enable features like user/login forms and dashboards',
      'Contributed to e-commerce projects by setting up product catalogs, integrating payment gateway functionality, and optimizing UI/UX for better user engagement',
      'Participated in quality assurance testing, identified and resolved bugs, optimized page load performance, and ensured live sites matched design mockups',
      'Supported deployment and hosting activities with server setup, domain & hosting configuration, and ensured smooth launch of client sites',
      'Collaborated with senior developers/designers to maintain project documentation, refine design wireframes into working components, and adapt code based on feedback',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'APIs', 'CMS', 'Payment Gateway', 'UI/UX', 'Git'],
  },
  {
    id: 2,
    role: 'Client Engagement and Operational Workflow Optimization Specialist',
    company: 'Hollister Co. (Abercrombie & Fitch Co.)',
    location: 'Edison, NJ',
    period: 'Nov 2024 – Sep 2025',
    responsibilities: [
      'Earned Associate of the Month recognition multiple times as the sole recipient for consistently exceeding performance standards, initiative, and leadership',
      'Quickly learned all operational functions including register systems, inventory flow, floor planning, marketing, markdowns and resolving tech issues',
      'Took on manager-level responsibilities such as helping with opening/closing procedures and training new hires',
      'Drove high conversion rates for the brand\'s exclusive membership program by executing strategic marketing and personalized engagement',
      'Curated visually compelling retail displays aligned with corporate branding to enhance customer engagement and sales',
      'Consistently exceeded customer service expectations, fostering a professional atmosphere that strengthened brand loyalty',
    ],
    techStack: ['Customer Service', 'Sales', 'Inventory Management', 'Visual Merchandising', 'Operations', 'Training', 'Marketing'],
  },
];

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-light text-[#222222] mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 border border-[#8B6F47]/20 hover:border-[#1A7B7D]/30 transition-colors duration-300"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-light text-[#222222] mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[#1A7B7D] font-mono text-sm mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-[#1A7B7D]/10 text-[#1A7B7D] rounded-full text-sm font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#708090] text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-[#708090] px-2 py-1 bg-gray-50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                    className="flex gap-3 text-[#708090] leading-relaxed"
                  >
                    <span className="text-[#1A7B7D] mt-1.5 flex-shrink-0">•</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}