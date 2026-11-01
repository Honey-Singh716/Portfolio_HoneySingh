// src/components/projects/ProjectCard.tsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { TechTag } from '@/components/ui/TechTag';
import { ProjectVisual } from './ProjectPreviews';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'grid';
  index?: number;
}

export function ProjectCard({ project, variant = 'grid', index = 0 }: ProjectCardProps) {
  if (variant === 'featured') {
    return <FeaturedProjectCard project={project} index={index} />;
  }
  return <GridProjectCard project={project} />;
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Visual side */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card aspect-[4/3]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <ProjectVisual projectId={project.id} />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Content side */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.filter(c => c !== 'All').map((cat) => (
            <span key={cat} className="font-mono text-[10px] text-accent-blue tracking-wider uppercase">
              {cat}
            </span>
          )).reduce((acc: JSX.Element[], el, i, arr) => {
            acc.push(el);
            if (i < arr.length - 1) acc.push(<span key={`dot-${i}`} className="text-text-muted text-xs">·</span>);
            return acc;
          }, [])}
        </div>

        <h3 className="font-heading text-xl md:text-2xl font-semibold text-text-primary mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-text-secondary text-base leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.slice(0, 5).map((t) => (
            <TechTag key={t} label={t} size="md" />
          ))}
          {project.tech.length > 5 && (
            <span className="font-mono text-[11px] text-text-muted px-2.5 py-1">+{project.tech.length - 5}</span>
          )}
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-text-primary transition-colors group"
            >
              <Github size={15} />
              <span>Source</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.liveUrl && (
            <div className="flex flex-col gap-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-blue text-sm hover:text-blue-400 transition-colors group"
              >
                <ExternalLink size={15} />
                <span>Live</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {project.liveNote && (
                <p className="font-mono text-[10px] text-text-muted italic leading-snug max-w-[220px]">
                  {project.liveNote}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function GridProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="group p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-300 relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.category.filter(c => c !== 'All').slice(0, 2).map((cat) => (
            <span key={cat} className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
              {cat}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-blue transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-heading font-semibold text-text-primary mb-2 leading-snug group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-5">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <TechTag key={t} label={t} />
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-[10px] text-text-muted px-2 py-1">+{project.tech.length - 4}</span>
        )}
      </div>
    </motion.article>
  );
}

function ProjectPlaceholder({ title, categories }: { title: string; categories: string[] }) {
  const colors: Record<string, string> = {
    'AI / ML': '#22c55e',
    Backend: '#7c5cbf',
    Software: '#4f8ef7',
    Systems: '#f59e0b',
    'Data Science': '#ec4899',
  };
  const mainCat = categories.find((c) => c !== 'All') ?? 'Software';
  const color = colors[mainCat] ?? '#4f8ef7';

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, #0f0f1a 0%, ${color}18 100%)` }}
    >
      <div className="text-center px-6">
        <div
          className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
        >
          <span style={{ color, fontSize: '1.5rem', fontWeight: 700 }}>
            {title.charAt(0)}
          </span>
        </div>
        <p className="font-mono text-xs text-text-muted">{mainCat}</p>
      </div>
    </div>
  );
}

