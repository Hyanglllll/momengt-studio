'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scenes = Array.from(document.querySelectorAll<HTMLElement>('.home-scene'));
    const intro = document.getElementById('home-intro');
    const atmos = document.querySelector('.home-atmos');
    const hl = document.querySelector('.home-headline');

    if (reduced) {
      scenes.forEach((s) => {
        s.classList.add('in-view');
        s.style.opacity = '1';
      });
      intro?.classList.add('gone');
      atmos?.classList.add('revealed');
      hl?.classList.add('in');
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

    // Film dissolve — neighbours fade to 70% entering/leaving viewport centre
    const tweens = scenes.flatMap((s) => [
      gsap.fromTo(
        s,
        { opacity: 0.7 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: s, start: 'top bottom', end: 'top center', scrub: 0.6 },
        }
      ),
      gsap.fromTo(
        s,
        { opacity: 1 },
        {
          opacity: 0.7,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: { trigger: s, start: 'bottom center', end: 'bottom top', scrub: 0.6 },
        }
      ),
    ]);

    // first scene visible immediately
    scenes[0]?.classList.add('in-view');

    ScrollTrigger.refresh();

    // Black intro veil: atmos fades in, veil lifts, headline eases up
    const timers = [
      setTimeout(() => atmos?.classList.add('revealed'), 60),
      setTimeout(() => intro?.classList.add('gone'), 700),
      setTimeout(() => hl?.classList.add('in'), 700),
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
