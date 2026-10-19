'use client';

import AnimatedSection from './AnimatedSection';
import { Download } from 'lucide-react';

const RESUME_PATH = '/Sandeep_Kumar_Bollavaram_Resume.pdf';

const HIGHLIGHTS = [
  {
    role: 'Freelance AI/ML Engineer',
    org: 'Algorithec Private Limited · Remote',
    period: 'Jun 2026 — Present',
    points: [
      "Core contributor to Algorithec's AI-driven commerce decision engine (pre-launch), shaping its core architecture across backend services and the decision-engine layer.",
      'Joined as AI/ML Engineer Intern (Jun – Aug 2026) and led the engineering team on assigned initiatives through standups, sprint planning and weekly reviews with the founder.',
      'Own the API integration with ONDC (Open Network for Digital Commerce) and built the firewall layer securing the commerce workflows.',
    ],
  },
  {
    role: 'Architect & Tech Lead — Complaint Intelligence Platform',
    org: 'Vastu Housing Finance · Prototype',
    period: '2026',
    points: [
      'Lead a pre-production fintech platform: omnichannel complaint intake including a 7-language voice agent.',
      'Evidence-cited investigations, human-approved resolutions and a hash-chained audit log, backed by ~990 automated tests.',
    ],
  },
  {
    role: 'President & Team Lead',
    org: 'Entrepreneurship Cell (E-Cell), SCSVMV University',
    period: '2026 — Present',
    points: [
      'Lead a 16-member core team across event programming, outreach, sponsorship and campus startup initiatives.',
      "Organised 4+ events under E-Cell IIT Bombay's National Entrepreneurship Challenge, including YUKTI '26 (The Big Idea Pitch) where 15 startup teams pitched to an expert jury.",
      'Designed, built, deployed and maintain the official website at ecellscsvmv.in.',
    ],
  },
  {
    role: 'Open Source Engineering',
    org: 'Independent',
    period: 'Ongoing',
    points: [
      '2,000+ GitHub contributions and 20+ shipped projects across Kubernetes operators, AI agent infrastructure and developer tools.',
      'Ship production-grade software with releases, CI, tests and documentation — VORTEX, Kairo, Shukra, ALOS and Anything Download.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '112px 24px', background: '#F3F2EF' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{
              color: '#6366F1', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              Experience Highlights
            </p>
            <h2 className="section-title">
              Building real <span style={{ color: '#6366F1' }}>products</span>
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {HIGHLIGHTS.map((h, i) => (
            <AnimatedSection key={h.role} delay={i * 90}>
              <div style={{
                background: '#FFFFFF', border: '1px solid #EBEBEB', borderRadius: '16px',
                padding: '26px 28px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', marginBottom: '14px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#0F0E14', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                      {h.role}
                    </h3>
                    <p style={{ color: '#6366F1', fontSize: '0.85rem', fontWeight: 600 }}>{h.org}</p>
                  </div>
                  <span style={{ color: '#9CA3AF', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    {h.period}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {h.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#6366F1', flexShrink: 0 }}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={120}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <a href={RESUME_PATH} download className="hero-cta hero-cta--primary">
              <Download size={16} /> Download Full Resume
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
