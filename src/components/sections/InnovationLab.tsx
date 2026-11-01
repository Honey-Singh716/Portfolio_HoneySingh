// src/components/sections/InnovationLab.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { TechTag } from '@/components/ui/TechTag';
import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

// Pick projects that span multiple domains
const labProjects = projects.filter(
  (p) => p.category.length >= 2 && p.category.some((c) => c === 'AI / ML' || c === 'Backend')
);

export function InnovationLab() {
  return (
    <section id="innovation" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Innovation Lab"
          title="Where software meets intelligence."
          subtitle="Projects that live at the intersection of multiple engineering domains — combining backend systems, AI, and data into complete products."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {labProjects.map((project, i) => (
            <FadeInView key={project.id} delay={i * 0.1}>
              <div className="relative group p-7 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-300 overflow-hidden h-full">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-[60px] group-hover:bg-accent-blue/10 transition-colors duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Domain tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.category.filter(c => c !== 'All').map((cat) => {
                      const catColors: Record<string, string> = {
                        'AI / ML': '#22c55e',
                        Backend: '#7c5cbf',
                        Software: '#4f8ef7',
                        Systems: '#f59e0b',
                        'Data Science': '#ec4899',
                      };
                      return (
                        <span
                          key={cat}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                          style={{
                            color: catColors[cat] ?? '#4f8ef7',
                            backgroundColor: `${catColors[cat] ?? '#4f8ef7'}15`,
                            border: `1px solid ${catColors[cat] ?? '#4f8ef7'}30`,
                          }}
                        >
                          {cat}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 5).map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-text-muted text-sm hover:text-accent-blue transition-colors group/link"
                    >
                      View on GitHub
                      <ArrowUpRight
                        size={13}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

