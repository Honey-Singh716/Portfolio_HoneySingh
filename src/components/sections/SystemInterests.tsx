// src/components/sections/SystemInterests.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { exploringTopics } from '@/data/skills';
import { Network, Database, Cpu, Shield, Cloud, Server, Share2, Layers, type LucideIcon } from 'lucide-react';

const topicIcons: Record<string, LucideIcon> = {
  'System Design': Layers,
  'Distributed Systems': Share2,
  'Database Internals': Database,
  'Networking': Network,
  'Scalability': Server,
  'Cloud Infrastructure': Cloud,
  'Security': Shield,
  'AI Engineering': Cpu,
};

const topicDescriptions: Record<string, string> = {
  'System Design': 'Architectural tradeoffs, modularization, and designing scalable system components.',
  'Distributed Systems': 'Consensus algorithms, replication strategies, and fault tolerance at scale.',
  'Database Internals': 'Storage engines, B-trees, WAL logs, indexing algorithms, and caching layers.',
  'Networking': 'TCP/UDP mechanics, HTTP/3, socket programming, and low-latency packet flow.',
  'Scalability': 'Load balancing, horizontal partitioning, rate limiting, and throughput bottlenecks.',
  'Cloud Infrastructure': 'Containerization, orchestration primitives, edge compute, and object storage.',
  'Security': 'Authentication mechanics, TLS handshakes, zero-trust patterns, and cryptographic keys.',
  'AI Engineering': 'Serving architectures, model inference pipelines, and vector store indexing.',
};

export function SystemInterests() {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  return (
    <section id="exploring" className="py-24 lg:py-32 section-border relative overflow-hidden">
      {/* Background constellation pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="constellation-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#4f8ef7" />
              <line x1="40" y1="40" x2="80" y2="40" stroke="#4f8ef7" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="40" x2="40" y2="80" stroke="#4f8ef7" strokeWidth="0.5" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Curiosity & Depth"
          title="Things I'm exploring."
          subtitle="Areas of system architecture and infrastructure I study to build stronger mental models for large-scale engineering. Presented as genuine learning interests."
        />

        {/* Visual Constellation / Typographic Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploringTopics.map((topic, i) => {
            const Icon = topicIcons[topic] ?? Layers;
            const isHovered = hoveredTopic === topic;

            return (
              <FadeInView key={topic} delay={i * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredTopic(topic)}
                  onMouseLeave={() => setHoveredTopic(null)}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative group cursor-default h-full flex flex-col justify-between ${
                    isHovered
                      ? 'border-accent-blue/50 bg-bg-card shadow-[0_0_30px_rgba(79,142,247,0.12)]'
                      : 'border-border-subtle bg-bg-card/70 hover:border-border-medium'
                  }`}
                >
                  {/* Subtle top indicator line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-accent-blue to-transparent transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                          isHovered
                            ? 'bg-accent-blue/20 text-accent-blue'
                            : 'bg-bg-tertiary text-text-muted group-hover:text-text-secondary'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                        #{String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-text-primary text-lg mb-2 group-hover:text-white transition-colors">
                      {topic}
                    </h3>

                    <p className="text-text-muted text-xs leading-relaxed">
                      {topicDescriptions[topic] || 'Continuous study of core concepts and design tradeoffs.'}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                    <span className="font-mono text-[10px] text-accent-blue uppercase tracking-wider">
                      Study Focus
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 group-hover:scale-125 transition-transform" />
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
