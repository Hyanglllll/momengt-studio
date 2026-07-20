'use client';

import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Apple-store-style horizontal carousel: on desktop the section pins and
// vertical scroll translates the card track sideways to reveal off-screen
// cards. On mobile / reduced-motion it falls back to a native swipe row.
export default function GiftCarousel({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);
      if (distance() <= 0) return; // everything fits — no scroll-jack needed

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => '+=' + distance(),
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: 'transform' });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="gift-hscroll" ref={sectionRef}>
      <div className="gift-htrack" ref={trackRef}>
        {children}
      </div>
    </div>
  );
}
