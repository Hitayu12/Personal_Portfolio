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
    title: 'FactorLab — Cross-Asset Factor Research & Backtesting Engine',
    date: 'Jan 2026 - OnGoing',
    tags: ['Python', 'Quant Research', 'FastAPI', 'Celery', 'SQL', 'Docker', 'CI/CD', 'Testing'],
    images: ['/coming-soon.svg'],
    concept: (
      <div className="space-y-4">
        <p>
          Most quant &quot;backtests&quot; are quick to build—and easy to accidentally bias. I&apos;m
          building FactorLab to make factor research feel more like real infrastructure:
          reproducible inputs, standardized signal definitions, and guardrails that prevent silent
          leakage.
        </p>
        <p>
          The goal is a mini research terminal where you can go from data → signals → portfolios →
          backtests with confidence that results are repeatable and defensible. It&apos;s API-first
          (so it can power a UI later), and it&apos;s designed to scale into batch experiments and
          large recomputations using Celery rather than turning into a fragile script pile.
        </p>
      </div>
    ),
    process: (
      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            1. Data Engineering: Research-Grade Inputs (Ingestion + Versioning)
          </h3>
          <p>
            I started by building the &quot;unsexy&quot; parts that make everything else trustworthy.
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Historical Data (Research-Ready)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Asset universe seeding with consistent identifiers</li>
                <li>Price ingestion workflow designed for repeatable runs</li>
                <li>
                  Dataset snapshot/versioning mindset so results are reproducible over time
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Returns Foundation</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Monthly returns pipeline as the canonical evaluation layer</li>
                <li>Consistent frequency alignment to avoid hidden time-scale bugs</li>
              </ul>
            </div>
          </div>
          <p className="mt-2">
            This layer is meant to answer: &quot;If someone reruns this in 3 months, will they get
            the same result—and can we explain changes?&quot;
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            2. Factor Engineering &amp; Research Core (Modular + Comparable)
          </h3>
          <p>
            Next, I built a factor framework that&apos;s easy to extend but hard to misuse.
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Current Factor Families Implemented</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trend</li>
                <li>Cross-Sectional Momentum (XsMom)</li>
                <li>Low Volatility (LowVol)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Framework Design Choices</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standardized factor interfaces so new signals plug in cleanly</li>
                <li>
                  Clear separation between data handling, signal computation, and evaluation
                </li>
                <li>
                  Designed with cross-asset comparability in mind (not one-market hacks)
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-2">
            The main priority here is making it simple to add &quot;factor #4&quot; without rewriting
            the platform.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#222222]">
            3. Production Workflow: Bias Controls + APIs + Orchestration
          </h3>
          <p>
            This is the part that turns FactorLab from &quot;code that runs&quot; into &quot;research
            you can trust.&quot;
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Research Safety (Leakage Defense)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lookahead-bias guards by construction</li>
                <li>Alignment checks to prevent subtle timestamp leakage</li>
                <li>
                  Unit/regression tests that fail fast when research integrity is at risk
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">API-First Backend (FastAPI)</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Endpoints to seed assets, ingest prices, and list factor metadata</li>
                <li>
                  Repeatable compute workflows that can later plug into a UI or experiment runner
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Scalable Compute (Celery — planned)</p>
              <p className="mt-1">Designed to offload heavy jobs like:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>ingestion backfills</li>
                <li>factor recomputes across larger universes</li>
                <li>batch backtests / parameter sweeps</li>
              </ul>
              <p className="mt-2">
                Keeps the system responsive and sets up the future experiments layer cleanly.
              </p>
            </div>
            <div>
              <p className="font-semibold">Reproducibility</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dockerized environment for consistent runs</li>
                <li>CI checks to keep the repo stable as features expand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    outcome: (
      <div className="space-y-4">
        <p>
          <strong>What FactorLab already does (today):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Research core is in place: ingestion/versioning, monthly returns, and a working factor
            framework
          </li>
          <li>Trend / XsMom / LowVol are implemented with lookahead guards + tests</li>
          <li>APIs exist for seeding assets, ingesting price data, and listing factors</li>
          <li>
            Docker + CI keep the project reproducible and &quot;runs clean&quot; like a real system
          </li>
        </ul>
        <p>
          <strong>What&apos;s next (immediately planned):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Turn signals into real portfolios (constraints, turnover controls, rebalancing rules)
          </li>
          <li>Add transaction-cost-aware backtesting (slippage/cost assumptions)</li>
          <li>Build experiment orchestration (Celery) + tracking + reporting/exports</li>
          <li>Ship a UI layer so it feels like an end-to-end research terminal</li>
        </ul>
        <p>
          <strong>Quick takeaway:</strong> FactorLab isn&apos;t just about testing strategies—it&apos;s
          about building the infrastructure that makes systematic research reproducible,
          bias-aware, and scalable.
        </p>
      </div>
    ),
  },
  'f1predict': {
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
          The goal wasn&apos;t just accuracy — it was to build a{' '}
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
                Monaco, who struggles at Suzuka, how teams&apos; pace changes between seasons, etc.
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
                &quot;clean&quot; or &quot;traffic-affected&quot; to avoid misleading the model.
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
                (Driver&apos;s normalized performance at each track)
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
            These production touches make the system feel reliable and &quot;race-ready.&quot;
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
  'signalforge': {
    title: 'SignalForge: Failure Intelligence Studio',
    date: 'Mar 2026',
    tags: [
      'Python',
      'Streamlit',
      'Pandas',
      'scikit-learn',
      'yfinance',
      'Tavily API',
      'Groq API',
      'IBM watsonx.ai',
      'Plotly',
    ],
    images: [
      '/SF_Picture1.png',
      '/SF_Picture2.png',
      '/SF_Picture3.png',
      '/SF_Picture4.png',
      '/SF_Picture5.png',
      '/SF_Picture6.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/rjsCfGC8KqU',
    videoTitle: 'SignalForge Project Video',
    concept: (
      <div className="space-y-4">
        <p>
          I built SignalForge to move beyond static risk dashboards and create a true investigation
          workflow. The goal was to treat each company as a forensic case: verify distress status,
          collect external evidence, quantify financial pressure, compare against survivor peers,
          and produce a prevention-focused explanation that is understandable to both technical and
          non-technical users.
        </p>
        <p>
          SignalForge combines forensic analysis, survivor benchmarking, and counterfactual
          simulation to explain why a company failed and what actions could have reduced collapse
          risk.
        </p>
      </div>
    ),
    process: (
      <div className="space-y-4">
        <p>
          I engineered a 10-step end-to-end pipeline spanning ingest, analysis, reasoning, and
          reporting. The system starts by resolving company input and pulling profile plus statement
          data from Yahoo Finance, then computes 12+ normalized financial metrics including
          leverage, liquidity, cash burn, growth, and margin signals.
        </p>
        <p>
          On the qualitative side, I integrated 7 Tavily evidence channels (failure check, macro,
          micro, industry, news, qualitative, and strategy context), mapped every snippet to
          citation IDs, and enforced citation-linked outputs in downstream reasoning.
        </p>
        <p>
          For the modeling layer, I built a collaborative 4-stage reasoning council with 3 systems:
          Groq draft generation, watsonx critique/review, and a local quantitative sanity model
          before final synthesis. The critique stage explicitly separates supported claims,
          unsupported claims, missing factors, and rewrite suggestions, while synthesis merges
          outputs into one consensus JSON contract with disagreements and overall confidence.
        </p>
        <p>
          I added strict structured-output controls (JSON schema prompting, markdown-fence cleanup,
          parse-repair retry loops, and provider-level failover) so the pipeline stays stable under
          malformed responses or intermittent API errors. For reliability, I added provider
          telemetry, caching keyed by company/ticker/failure-year, external timeout boundaries, and
          graceful degradation so partial outages do not break reporting.
        </p>
        <p>
          In the UI, I implemented 7 analysis/report tabs, including Council Output and Council
          Trace, to make multi-agent reasoning transparent instead of black-box. I also added
          scenario controls and report Q&A so users can interactively stress-test conclusions.
        </p>
      </div>
    ),
    outcome: (
      <div className="space-y-4">
        <p>
          The final platform produces evidence-cited failure narratives with quantitative backing,
          disagreement tracking, and simulation-driven recommendations in one interactive interface.
        </p>
        <p>
          A typical run now unifies 3 reasoning systems, 7 evidence channels, 12+ financial
          signals, and 10 pipeline stages into a single analyst-ready output.
        </p>
        <p>
          This project strengthened my ability to design reliable multi-agent AI systems, enforce
          structured reasoning contracts, and deliver explainable decision products at
          production-style quality.
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
    videoUrl: 'https://www.youtube.com/embed/W2H5PaQu6F0',
    videoTitle: '3D Portfolio Project Video',
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
                    unoptimized={project.images[currentImageIndex]?.endsWith('.svg')}
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
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-contain" unoptimized={image?.endsWith('.svg')} />
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
            {/* Video Section */}
            {project.videoUrl && (
              <div className="border-l-2 border-[#1A7B7D] pl-8">
                <h2 className="text-3xl font-light text-[#222222] mb-4">Project Video</h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#8B6F47]/20">
                  <iframe
                    src={project.videoUrl}
                    title={project.videoTitle ?? `${project.title} Project Video`}
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
