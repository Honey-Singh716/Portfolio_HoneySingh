// src/components/navigation/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { profile } from '@/data/profile';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'projects', 'engineering', 'journey', 'contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-violet z-[60]"
        style={{ width: `${progress * 100}%` }}
        transition={{ duration: 0 }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center font-heading font-bold text-white text-sm group-hover:bg-blue-500 transition-colors">
                H
              </div>
              <span className="font-heading font-semibold text-text-primary hidden sm:block">
                Honey Singh
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-bg-tertiary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {profile.showResume && (
                <a
                  href={profile.resumeUrl}
                  download="Honey_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-medium text-text-secondary text-sm hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
                >
                  <Download size={14} />
                  Resume
                </a>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden overflow-hidden border-t border-border-subtle bg-bg-primary/95 backdrop-blur-xl"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className={`py-3 text-base font-medium border-b border-border-subtle last:border-0 transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-accent-blue'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex items-center gap-4 mt-4 pt-4">
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  {profile.showResume && (
                    <a
                      href={profile.resumeUrl}
                      download="Honey_Singh_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full border border-border-medium text-text-secondary text-sm hover:border-accent-blue hover:text-accent-blue transition-all"
                    >
                      <Download size={14} /> Resume
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

