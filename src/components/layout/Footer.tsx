// src/components/layout/Footer.tsx
import { Github, Linkedin, Mail, Code2, BarChart2 } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: profile.social.leetcode, label: 'LeetCode' },
    { icon: BarChart2, href: profile.social.kaggle, label: 'Kaggle' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-accent-blue flex items-center justify-center font-heading font-bold text-white text-xs">
                H
              </div>
              <span className="font-heading font-semibold text-text-primary text-sm">Honey Singh</span>
            </div>
            <p className="font-mono text-xs text-text-muted">Designed and built with curiosity.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-text-muted">
            © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

