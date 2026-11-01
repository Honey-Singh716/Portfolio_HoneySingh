// src/components/sections/Engineering.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechTag } from '@/components/ui/TechTag';
import { FadeInView } from '@/components/animations/FadeInView';
import { skillDomains } from '@/data/skills';
import { Code, Server, Sparkles, BarChart2, ArrowRight, type LucideIcon } from 'lucide-react';

const domainIcons: Record<string, LucideIcon> = {
  software: Code,
  backend: Server,
  'ai-ml': Sparkles,
  'data-science': BarChart2,
};

const domainRelatedProjects: Record<string, { title: string; id: string }[]> = {
  software: [
    { title: 'MiniRedis (C++)', id: 'mini-redis' },
    { title: 'FileCompressor', id: 'file-compressor' },
    { title: 'TaskManager', id: 'task-manager' },
  ],
  backend: [
    { title: 'ResolveX (Multi-Tenant)', id: 'resolvex' },
    { title: 'AI-Powered Resume Matching', id: 'ai-resume-matching' },
    { title: 'MiniRedis (RESP & Sockets)', id: 'mini-redis' },
  ],
  'ai-ml': [
    { title: 'AI-Powered Resume Matching & Recs', id: 'ai-resume-matching' },
    { title: 'AI Text Assistant', id: 'ai-text-assistant' },
  ],
  'data-science': [
    { title: 'Resume Embeddings Analysis', id: 'ai-resume-matching' },
    { title: 'Statistical Modeling Experiments', id: 'ai-text-assistant' },
  ],
};

export function Engineering() {
  const [activeId, setActiveId] = useState(skillDomains[0].id);
  const activeDomain = skillDomains.find((d) => d.id === activeId) ?? skillDomains[0];

  const scrollToProject = (_id: string) => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="engineering" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Domains"
          title="What I build with."
          subtitle="Four core technical domains where I design systems, write code, and solve problems."
        />

        {/* 4 Distinct Domain Navigation / Selector */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skillDomains.map((domain) => {
            const Icon = domainIcons[domain.id] ?? Code;
            const isActive = activeId === domain.id;

            return (
              <button
                key={domain.id}
                onClick={() => setActiveId(domain.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                  isActive
                    ? 'border-border-medium bg-bg-card shadow-lg'
                    : 'border-border-subtle bg-bg-card/50 hover:border-border-medium hover:bg-bg-card'
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-domain-bar"
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: domain.accent }}
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: isActive ? `${domain.accent}25` : '#181828',
                      border: `1px solid ${isActive ? domain.accent + '40' : '#262638'}`,
                    }}
                  >
                    <Icon size={18} style={{ color: domain.accent }} />
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    {domain.skills.length} skills
                  </span>
                </div>

                <h3 className={`font-heading font-semibold text-base transition-colors ${
                  isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                }`}>
                  {domain.label}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Focus Showcase */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-8 sm:p-10 rounded-2xl border border-border-subtle bg-bg-card relative overflow-hidden"
            >
              {/* Radial ambient glow for domain */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-15 pointer-events-none"
                style={{ backgroundColor: activeDomain.accent }}
              />

              <div className="relative grid lg:grid-cols-3 gap-8 items-start">
                {/* Domain Overview */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <span
                      className="font-mono text-xs tracking-widest uppercase font-medium inline-block mb-2"
                      style={{ color: activeDomain.accent }}
                    >
                      Engineering Domain · {activeDomain.id.toUpperCase()}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                      {activeDomain.label}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {activeDomain.tagline}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                      Core Technologies &amp; Competencies
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {activeDomain.skills.map((skill) => (
                        <TechTag
                          key={skill}
                          label={skill}
                          accent={activeDomain.accent}
                          size="md"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Domain Applied Projects */}
                <div className="p-6 rounded-xl border border-border-subtle bg-bg-tertiary/70 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                      Applied In Projects
                    </p>
                    <div className="space-y-2.5">
                      {(domainRelatedProjects[activeDomain.id] || []).map((p) => (
                        <button
                          key={p.title}
                          onClick={() => scrollToProject(p.id)}
                          className="w-full text-left p-3 rounded-lg border border-border-subtle bg-bg-card/70 hover:border-accent-blue/50 hover:bg-bg-card transition-all duration-200 group flex items-center justify-between cursor-pointer"
                        >
                          <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary">
                            {p.title}
                          </span>
                          <ArrowRight
                            size={12}
                            className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-1 transition-all"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <p className="font-mono text-[11px] text-text-muted leading-relaxed">
                      Engineered with practical design patterns, verifiable testability, and clean architecture.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
