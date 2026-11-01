// src/components/animations/FadeInView.tsx
import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, defaultTransition } from '@/lib/motion';

interface FadeInViewProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeInView({
  children,
  delay = 0,
  className = '',
  once = true,
  ...props
}: FadeInViewProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

