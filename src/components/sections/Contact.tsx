// src/components/sections/Contact.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInView } from '@/components/animations/FadeInView';
import { profile } from '@/data/profile';
import { Github, Linkedin, Mail, Download, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    accent: '#4f8ef7',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Honey-Singh716',
    href: profile.social.github,
    accent: '#f0f0f5',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'honey-singh-in',
    href: profile.social.linkedin,
    accent: '#4f8ef7',
    external: true,
  },
  {
    icon: Download,
    label: 'Resume',
    value: 'Download PDF',
    href: profile.resumeUrl,
    accent: '#7c5cbf',
    download: true,
  },
];

export function Contact() {
  const activeContactLinks = contactLinks.filter(
    (link) => link.label !== 'Resume' || profile.showResume
  );

  return (
    <section id="contact" className="py-24 lg:py-32 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Big CTA heading */}
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-4">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
            Have an interesting idea?
            <br />
            <span className="gradient-text">Let's build something</span>
            <br />
            meaningful.
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            I'm open to internship opportunities, interesting projects, and good conversations about software, AI, and engineering.
          </p>
        </FadeInView>

        {/* Contact cards */}
        <div className={`grid sm:grid-cols-2 ${profile.showResume ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 max-w-4xl mx-auto`}>
          {activeContactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <FadeInView key={link.label} delay={i * 0.08}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(link.download ? { download: 'Honey_Singh_Resume.pdf', target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group relative p-6 rounded-2xl border border-border-subtle bg-bg-card hover:border-border-medium transition-all duration-300 flex flex-col gap-4 overflow-hidden block text-center"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${link.accent}08 0%, transparent 70%)` }}
                  />
                  <div
                    className="relative mx-auto w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${link.accent}15`, border: `1px solid ${link.accent}20` }}
                  >
                    <Icon size={18} style={{ color: link.accent }} />
                  </div>
                  <div className="relative">
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">{link.label}</p>
                    <p className="text-text-primary text-sm font-medium break-all">{link.value}</p>
                  </div>
                  <ArrowUpRight
                    size={12}
                    className="relative mx-auto text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
              </FadeInView>
            );
          })}
        </div>

        {/* Availability note */}
        {profile.available && (
          <FadeInView delay={0.5} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/5">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent-blue"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-xs text-accent-blue">
                Currently available for internship opportunities
              </span>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
}

