// src/components/sections/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects, featuredProjects } from '@/data/projects';
import type { ProjectCategory } from '@/data/projects';

const CATEGORIES: ProjectCategory[] = ['All', 'Software', 'Backend', 'AI / ML', 'Data Science', 'Systems'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Things I've built."
          subtitle="A collection of projects spanning backend systems, AI applications, and systems engineering."
        />

        {/* Featured projects */}
        <div className="mt-20 space-y-24 lg:space-y-32">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="featured" index={i} />
          ))}
        </div>

        {/* All projects grid */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <p className="font-heading text-xl font-semibold text-text-primary">All Projects</p>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-accent-blue text-white'
                      : 'border border-border-medium text-text-secondary hover:text-text-primary hover:border-border-medium'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="grid" />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

