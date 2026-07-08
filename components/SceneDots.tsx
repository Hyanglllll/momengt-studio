'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LABELS = ['Home', 'What is Reiki', 'About', 'Services', 'FAQ', 'Booking', 'Gift Certificates', 'Contact'];

export default function SceneDots() {
  const [active, setActive] = useState(0);
  const scenesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scenes = Array.from(document.querySelectorAll<HTMLElement>('.home-scene'));
    scenesRef.current = scenes;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const triggers = scenes.map((s, i) =>
      ScrollTrigger.create({
        trigger: s,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) setActive(i);
        },
      })
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  function jump(i: number) {
    const s = scenesRef.current[i];
    if (!s) return;
    const y = s.getBoundingClientRect().top + window.pageYOffset;
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <nav className="scene-dots" aria-label="Section navigation">
      {LABELS.map((label, i) => (
        <button
          key={label}
          type="button"
          className={`scene-dot ${active === i ? 'active' : ''}`}
          aria-label={`Go to ${label}`}
          onClick={() => jump(i)}
        >
          <span className="lbl">{label}</span>
          <span className="mk" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}
