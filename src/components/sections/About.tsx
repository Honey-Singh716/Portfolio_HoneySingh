// src/components/sections/About.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { profile } from '@/data/profile';
import { Music, Pencil, Piano, Sparkles } from 'lucide-react';

const interests = [
  { icon: Pencil, label: 'Pencil Sketching', color: '#f59e0b' },
  { icon: Music, label: 'Music', color: '#4f8ef7' },
  { icon: Piano, label: 'Piano & Harmonium', color: '#7c5cbf' },
  { icon: Sparkles, label: 'Creative Exploration', color: '#22c55e' },
];

const traits = [
  { label: 'Builder', desc: 'I like shipping actual things — not just prototypes.' },
  { label: 'Curious', desc: 'I dig into how things work at a fundamental level.' },
  { label: 'Learner', desc: 'Always exploring new domains, tools, and ideas.' },
  { label: 'Engineer', desc: 'I think in systems, tradeoffs, and architecture.' },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — story */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="The person behind the code."
            />

            <FadeInView delay={0.2} className="mt-8 space-y-5 text-text-secondary leading-relaxed text-base">
              <p>
                I'm Honey Singh, a 3rd year B.Tech student in{' '}
                <span className="text-text-primary">Artificial Intelligence and Data Science</span>{' '}
                at <span className="text-text-primary">IIT Jodhpur</span>.
                I got into programming because I was genuinely fascinated by how software works —
                not just what it does, but how it's built.
              </p>
              <p>
                Over time, that curiosity evolved into building real things:{' '}
                <span className="text-text-primary">backend systems</span>,{' '}
                <span className="text-text-primary">AI-powered applications</span>,{' '}
                <span className="text-text-primary">systems-level tools</span>.
                I enjoy working at the intersection of software engineering and intelligent systems.
              </p>
              <p>
                I spend a lot of time thinking about{' '}
                <span className="text-text-primary">system architecture</span>,{' '}
                <span className="text-text-primary">scalability</span>, and{' '}
                <span className="text-text-primary">how things work at scale</span>.
                When I'm not building software, I'm probably exploring something new — a paper,
                a concept, or a problem I haven't solved before.
              </p>
            </FadeInView>

            {/* Trait cards */}
            <FadeInView delay={0.3} className="mt-10 grid grid-cols-2 gap-3">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="p-4 rounded-xl border border-border-subtle bg-bg-card hover:border-border-medium transition-colors duration-200"
                >
                  <p className="font-heading font-semibold text-text-primary text-sm mb-1">{t.label}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </FadeInView>
          </div>

          {/* Right — photo + interests */}
          <div className="space-y-10">
            {/* Photo / Visual */}
            {profile.showPhoto ? (
              <FadeInView delay={0.15}>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-sm mx-auto lg:mx-0 bg-bg-card border border-border-subtle">
                    <img
                      src={profile.photo}
                      alt="Honey Singh"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback placeholder if photo not found
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('photo-placeholder');
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent pointer-events-none" />
                  </div>
                  {/* Education badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="absolute -bottom-4 -right-4 lg:-right-6 p-4 rounded-xl bg-bg-card border border-border-medium"
                  >
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">Education</p>
                    <p className="font-heading font-semibold text-text-primary text-sm">B.Tech — AI & DS</p>
                    <p className="font-mono text-[10px] text-accent-blue mt-0.5">IIT Jodhpur · 3rd Year</p>
                  </motion.div>
                </div>
              </FadeInView>
            ) : (
              <FadeInView delay={0.15}>
                <div className="p-8 rounded-2xl border border-border-subtle bg-bg-card relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center font-heading font-bold text-accent-blue text-xl mb-4">
                    HS
                  </div>
                  <p className="font-mono text-[11px] text-accent-blue uppercase tracking-widest mb-1">Core Identity</p>
                  <h3 className="font-heading font-semibold text-text-primary text-xl mb-2">Honey Singh</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    3rd year B.Tech student in Artificial Intelligence &amp; Data Science at IIT Jodhpur, with a core engineering focus on backend infrastructure, distributed systems, and intelligent applications.
                  </p>
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-text-muted uppercase">Degree</p>
                      <p className="text-xs font-medium text-text-primary">B.Tech (AI &amp; DS)</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-text-muted uppercase">Status</p>
                      <p className="text-xs font-mono text-green-400">Pursuing</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            )}

            {/* Interests */}
            <FadeInView delay={0.35}>
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Beyond code</p>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle bg-bg-card group hover:border-border-medium transition-colors duration-200"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon size={14} style={{ color }} />
                      </div>
                      <span className="text-text-secondary text-xs font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>

      {/* Placeholder style for when photo fails */}
      <style>{`
        .photo-placeholder {
          display: flex !important;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #12121e 0%, #1a1a2e 100%);
        }
        .photo-placeholder::after {
          content: 'H';
          font-family: 'Space Grotesk', sans-serif;
          font-size: 96px;
          font-weight: 700;
          color: rgba(79, 142, 247, 0.3);
        }
      `}</style>
    </section>
  );
}

