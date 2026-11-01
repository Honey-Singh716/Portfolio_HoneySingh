// src/components/sections/Journey.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { journey, currentlyExploring } from '@/data/journey';

export function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
          {/* Timeline */}
          <div>
            <SectionHeading
              eyebrow="My Journey"
              title="How I got here."
              subtitle="A personal timeline of learning, building, and growing as an engineer."
            />

            <div className="mt-16 relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/40 via-accent-violet/30 to-transparent" />

              <div className="space-y-10">
                {journey.map((milestone, i) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 flex items-center justify-center">
                      {milestone.isCurrent ? (
                        <motion.div
                          className="w-8 h-8 rounded-full border-2 border-accent-blue bg-bg-primary flex items-center justify-center"
                          animate={{ boxShadow: ['0 0 0 0 rgba(79,142,247,0)', '0 0 0 8px rgba(79,142,247,0)', '0 0 0 0 rgba(79,142,247,0)'] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 rounded-full bg-accent-blue" />
                        </motion.div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border border-border-medium bg-bg-card flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`p-5 rounded-xl border transition-all duration-200 ${milestone.isCurrent ? 'border-accent-blue/30 bg-accent-blue/5' : 'border-border-subtle bg-bg-card'}`}>
                      {milestone.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent-blue uppercase tracking-widest mb-2">
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          Current
                        </span>
                      )}
                      <h3 className="font-heading font-semibold text-text-primary mb-2">
                        {milestone.phase}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">
                        {milestone.description}
                      </p>
                      {milestone.highlights && (
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.highlights.map((h) => (
                            <span
                              key={h}
                              className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-tertiary text-text-muted border border-border-subtle"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently exploring sidebar */}
          <div className="lg:pt-24">
            <FadeInView delay={0.3}>
              <div className="sticky top-24 p-7 rounded-2xl border border-border-subtle bg-bg-card">
                <p className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-4">
                  Currently exploring
                </p>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                  What I'm focused on now.
                </h3>
                <div className="space-y-3">
                  {currentlyExploring.map((topic, i) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border-subtle hover:border-border-medium transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{topic}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border-subtle">
                  <p className="text-text-muted text-xs leading-relaxed">
                    Always learning. The goal is to build meaningful software that solves real problems at scale.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}

