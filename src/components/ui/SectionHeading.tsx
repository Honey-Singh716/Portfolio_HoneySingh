// src/components/ui/SectionHeading.tsx
import { motion } from 'framer-motion';
import { fadeInUp, defaultTransition } from '@/lib/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={defaultTransition}
          className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ ...defaultTransition, delay: 0.08 }}
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...defaultTransition, delay: 0.16 }}
          className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
          style={align === 'center' ? { margin: '1rem auto 0' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

