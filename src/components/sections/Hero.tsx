// src/components/sections/Hero.tsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

function AnimatedDot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="inline-block w-1.5 h-1.5 rounded-full bg-accent-blue"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
      transition={{ duration: 2.4, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#4f8ef7 1px, transparent 1px), linear-gradient(90deg, #4f8ef7 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial gradient center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent-blue opacity-[0.04] blur-[120px]" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-violet opacity-[0.04] blur-[100px]" />
    </div>
  );
}

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <BackgroundGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="pt-28 pb-20 lg:pt-32 lg:pb-24">
          {/* Availability badge */}
          {profile.available && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border-medium bg-bg-card"
            >
              <AnimatedDot delay={0} />
              <span className="font-mono text-xs text-text-secondary">
                Available for internship opportunities
              </span>
            </motion.div>
          )}

          {/* Main title block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            {/* Meta line */}
            <motion.p
              variants={lineVariants}
              className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6"
            >
              B.Tech · AI & Data Science
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={lineVariants}
              className="font-heading font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.95] tracking-tight"
            >
              Honey
              <br />
              <span className="gradient-text">Singh.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={lineVariants}
              className="mt-8 text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl"
            >
              Building software, exploring intelligence,
              <br className="hidden md:block" />
              and turning ideas into products.
            </motion.p>

            {/* Domains */}
            <motion.div
              variants={lineVariants}
              className="mt-6 flex flex-wrap gap-3 items-center"
            >
              {['Software Engineer', 'Backend Development', 'AI & Machine Learning'].map((domain, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-text-muted text-sm">·</span>}
                  <span className="font-mono text-xs text-text-secondary tracking-wide">{domain}</span>
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={lineVariants}
              className="mt-8 text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={lineVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-200 active:scale-[0.98]"
              >
                View My Work
                <ExternalLink size={14} />
              </button>
              {profile.showResume ? (
                <a
                  href={profile.resumeUrl}
                  download="Honey_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-medium text-text-secondary text-sm font-medium hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              ) : (
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-medium text-text-secondary text-sm font-medium hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
                >
                  Get In Touch
                </button>
              )}
              <div className="flex items-center gap-3 ml-1">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-medium transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-medium transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative right side — subtle visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors group pb-10"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-xs tracking-wider">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-64 h-80">
      {/* Code lines visual */}
      <div className="absolute inset-0 rounded-2xl border border-border-subtle bg-bg-card overflow-hidden">
        <div className="p-5">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-text-muted">portfolio.ts</span>
          </div>
          <div className="space-y-2 font-mono text-[11px] leading-relaxed">
            <div><span className="text-accent-violet">const</span> <span className="text-accent-blue">engineer</span> <span className="text-text-muted">= {'{'}</span></div>
            <div className="pl-4"><span className="text-green-400/80">name</span><span className="text-text-muted">: </span><span className="text-amber-400/80">"Honey Singh"</span><span className="text-text-muted">,</span></div>
            <div className="pl-4"><span className="text-green-400/80">focus</span><span className="text-text-muted">: [</span></div>
            <div className="pl-8"><span className="text-amber-400/80">"Backend"</span><span className="text-text-muted">,</span></div>
            <div className="pl-8"><span className="text-amber-400/80">"AI/ML"</span><span className="text-text-muted">,</span></div>
            <div className="pl-8"><span className="text-amber-400/80">"Systems"</span></div>
            <div className="pl-4"><span className="text-text-muted">],</span></div>
            <div className="pl-4"><span className="text-green-400/80">building</span><span className="text-text-muted">: </span><span className="text-accent-blue">true</span></div>
            <div><span className="text-text-muted">{'}'}</span></div>
            <div className="mt-3 flex items-center gap-1">
              <span className="text-text-muted">_</span>
              <motion.span
                className="inline-block w-2 h-3.5 bg-accent-blue/70"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
        {/* Glow bottom */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-accent-blue/5 to-transparent" />
      </div>
      {/* Floating tags */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-8 top-8 px-3 py-1.5 rounded-full bg-bg-tertiary border border-border-subtle font-mono text-[10px] text-accent-blue"
      >
        FastAPI
      </motion.div>
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-10 bottom-16 px-3 py-1.5 rounded-full bg-bg-tertiary border border-border-subtle font-mono text-[10px] text-accent-violet"
      >
        LLM + RAG
      </motion.div>
      <motion.div
        animate={{ y: [-3, 5, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-6 bottom-10 px-3 py-1.5 rounded-full bg-bg-tertiary border border-border-subtle font-mono text-[10px] text-green-400/80"
      >
        Node.js
      </motion.div>
    </div>
  );
}

