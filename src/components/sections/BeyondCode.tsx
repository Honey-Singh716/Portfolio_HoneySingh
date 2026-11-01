// src/components/sections/BeyondCode.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { Pencil, Music2, Piano, Lightbulb, BookOpen } from 'lucide-react';

const interests = [
  {
    icon: Pencil,
    title: 'Pencil Sketching',
    description: 'Drawing has always been a way for me to slow down and observe. I sketch when I need to think visually.',
    accent: '#f59e0b',
  },
  {
    icon: Music2,
    title: 'Music',
    description: 'Music is deeply tied to how I experience the world. I listen, explore, and occasionally try to understand theory.',
    accent: '#4f8ef7',
  },
  {
    icon: Piano,
    title: 'Piano & Harmonium',
    description: 'Learning to play — slowly and patiently. Piano and harmonium are two instruments I\'ve started exploring.',
    accent: '#7c5cbf',
  },
  {
    icon: Lightbulb,
    title: 'Creative Experimentation',
    description: 'I like experimenting with ideas outside my usual domain — creativity bleeds into how I approach engineering problems.',
    accent: '#22c55e',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Curiosity is the constant. I read about things I don\'t understand and try to connect ideas across domains.',
    accent: '#ec4899',
  },
];

export function BeyondCode() {
  return (
    <section id="beyond" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond Code"
          title="The human side."
          subtitle="Engineering is what I do. But curiosity, creativity, and learning are who I am."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-300 relative overflow-hidden h-full">
                  {/* Subtle bg glow */}
                  <div
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: item.accent }}
                  />
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.accent}15`, border: `1px solid ${item.accent}25` }}
                  >
                    <Icon size={18} style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInView>
            );
          })}
        </div>

        {/* Quote */}
        <FadeInView delay={0.4} className="mt-16">
          <div className="p-8 rounded-2xl border border-border-subtle bg-bg-card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-violet/5 pointer-events-none" />
            <p className="relative font-heading text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              "Building software is just one expression of curiosity. The real goal is to keep learning and create things that matter."
            </p>
            <p className="relative mt-4 font-mono text-xs text-text-muted">— Honey Singh</p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

