'use client';

import type { FeatureItem } from '@/types';

const FEATURES: FeatureItem[] = [
  {
    id: 'fluid',
    icon: '◈',
    title: 'Tactile Liquid Glass',
    description:
      'GPU-accelerated fluid simulation responds to every gesture with rainbow-spectrum displacement.',
    color: 'var(--color-rainbow-cyan)',
    delay: 0,
  },
  {
    id: 'narrative',
    icon: '◉',
    title: 'Corruption Narrative',
    description:
      'A six-state machine drives the entire interface — from pristine silence to transcendent chaos.',
    color: 'var(--color-rainbow-purple)',
    delay: 100,
  },
  {
    id: 'cursor',
    icon: '◎',
    title: 'Elastic Cursor',
    description:
      'Spring-physics cursor trails your movements, morphing on interactive elements.',
    color: 'var(--color-rainbow-magenta)',
    delay: 200,
  },
  {
    id: 'audio',
    icon: '◐',
    title: 'Spatial Audio',
    description:
      'Web Audio API synthesizes reactive tones that mirror the corruption state in real time.',
    color: 'var(--color-rainbow-green)',
    delay: 300,
  },
  {
    id: 'glass',
    icon: '◑',
    title: 'Glassmorphism System',
    description:
      'Layered backdrop-blur surfaces with semantic shadow tokens and reduced-transparency support.',
    color: 'var(--color-rainbow-blue)',
    delay: 400,
  },
  {
    id: 'tokens',
    icon: '◒',
    title: 'Design Token System',
    description:
      'Every value — color, spacing, easing, duration — lives in CSS custom properties mapped to Tailwind.',
    color: 'var(--color-rainbow-orange)',
    delay: 500,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-rainbow-cyan font-mono text-xs tracking-[0.3em] uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-gradient-rainbow font-display font-bold text-4xl md:text-5xl mb-4">
            Built Different
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Every layer designed to compound — visuals, sound, narrative, and physics working as one system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="glass-card glass-card-hover p-6 transition-all duration-500"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div
                className="text-3xl mb-4"
                style={{ color: feature.color }}
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
