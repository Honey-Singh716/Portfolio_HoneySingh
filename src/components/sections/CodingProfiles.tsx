// src/components/sections/CodingProfiles.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { socialProfiles } from '@/data/socialLinks';
import { profile } from '@/data/profile';
import { ArrowUpRight, Github, Code2, BarChart2, Linkedin, Terminal, CheckCircle2, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Code2,
  BarChart2,
};

const platformAccents: Record<string, string> = {
  github: '#f0f0f5',
  linkedin: '#4f8ef7',
  leetcode: '#f59e0b',
  kaggle: '#22c55e',
};

const dsaTopics = [
  'Data Structures & Algorithms in C++',
  'Binary Search & Two-Pointer Strategies',
  'Tree & Graph Traversal (DFS / BFS)',
  'Dynamic Programming Fundamentals',
  'Hash Maps & Heap Data Structures',
  'Time & Space Complexity Optimization',
];

export function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profiles & Presence"
          title="Coding & profiles."
          subtitle="Direct links to my active development platforms, coding accounts, and problem-solving practice."
        />

        {/* Profiles Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialProfiles.map((sp, i) => {
            const Icon = iconMap[sp.icon] ?? Github;
            const accent = platformAccents[sp.id] ?? '#4f8ef7';

            return (
              <FadeInView key={sp.id} delay={i * 0.08}>
                <a
                  href={sp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-300 flex flex-col justify-between overflow-hidden block h-full"
                >
                  {/* Subtle hover glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="relative flex items-center justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}25` }}
                    >
                      <Icon size={18} style={{ color: accent }} />
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <p className="font-heading font-semibold text-text-primary mb-0.5">
                      {sp.platform}
                    </p>
                    <p className="font-mono text-xs text-text-muted mb-2">
                      @{sp.username}
                    </p>
                    <p className="text-text-secondary text-xs">{sp.label}</p>
                  </div>
                </a>
              </FadeInView>
            );
          })}
        </div>

        {/* Problem Solving & DSA Practice Card */}
        <FadeInView delay={0.3} className="mt-8">
          <div className="p-8 rounded-2xl border border-border-subtle bg-bg-card relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Terminal size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-lg">
                    Algorithmic &amp; Problem-Solving Practice
                  </h3>
                  <p className="font-mono text-xs text-text-muted">
                    Solved 500+ Data Structures &amp; Algorithms problems on LeetCode
                  </p>
                </div>
              </div>

              <a
                href={profile.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 text-xs font-mono hover:bg-amber-500/10 transition-colors w-fit"
              >
                View LeetCode Profile
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
                Selected Focus Areas &amp; Practice Highlights
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {dsaTopics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-tertiary/60 border border-border-subtle text-xs text-text-secondary"
                  >
                    <CheckCircle2 size={13} className="text-amber-400 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Email + resume download shortcuts */}
        <FadeInView delay={0.4} className={`mt-8 ${profile.showResume ? 'grid sm:grid-cols-2' : ''} gap-5`}>
          <a
            href={`mailto:${profile.email}`}
            className="group p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-200 flex items-center justify-between"
          >
            <div>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Direct Contact</p>
              <p className="text-text-primary font-medium text-sm">{profile.email}</p>
            </div>
            <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent-blue transition-colors" />
          </a>
          {profile.showResume && (
            <a
              href={profile.resumeUrl}
              download="Honey_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-200 flex items-center justify-between"
            >
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Curriculum Vitae</p>
                <p className="text-text-primary font-medium text-sm">Download Resume (PDF)</p>
              </div>
              <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent-blue transition-colors" />
            </a>
          )}
        </FadeInView>
      </div>
    </section>
  );
}
