'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scenes = Array.from(document.querySelectorAll<HTMLElement>('.home-scene'));
    const veil = document.getElementById('home-intro-veil');
    const atmos = document.querySelector('.hero-atmos');
    const hl = document.querySelector('.hero-headline');
    const sub = document.querySelector('.hero-sub');
    const cta = document.querySelector('.hero-cta');

    if (reduced) {
      scenes.forEach((s) => s.classList.add('in-view'));
      veil?.classList.add('gone');
      atmos?.classList.add('revealed');
      hl?.classList.add('in');
      sub?.classList.add('in');
      cta?.classList.add('in');
      return;
    }

    const triggers: ScrollTrigger[] = scenes.map((s) =>
      ScrollTrigger.create({
        trigger: s,
        start: 'top 80%',
        once: true,
        onEnter: () => s.classList.add('in-view'),
      })
    );

    const tweens = scenes.flatMap((s) => [
      gsap.fromTo(
        s,
        { opacity: 0.7 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: s, start: 'top bottom', end: 'top center', scrub: true },
        }
      ),
      gsap.fromTo(
        s,
        { opacity: 1 },
        {
          opacity: 0.7,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: { trigger: s, start: 'bottom center', end: 'bottom top', scrub: true },
        }
      ),
    ]);

    ScrollTrigger.refresh();

    const timers = [
      setTimeout(() => atmos?.classList.add('revealed'), 60),
      setTimeout(() => veil?.classList.add('gone'), 700),
      setTimeout(() => hl?.classList.add('in'), 700),
      setTimeout(() => sub?.classList.add('in'), 1000),
      setTimeout(() => cta?.classList.add('in'), 1350),
    ];

    return () => {
      timers.forEach(clearTimeout);
      triggers.forEach((t) => t.kill());
      tweens.forEach((tw) => tw.scrollTrigger?.kill());
      gsap.killTweensOf(scenes);
    };
  }, []);

  return null;
}
