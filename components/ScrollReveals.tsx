'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollReveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const triggers: ScrollTrigger[] = [];
    const triggered = new WeakSet<Element>();
    const revealed = new WeakSet<Element>();

    // React can reuse a DOM node across two differently-keyed conditional
    // renders (same tag, same position) and overwrite its className whole —
    // wiping the 'in' class we add imperatively. So on every scan we both
    // pick up brand-new .reveal nodes AND restore 'in' on ones that already
    // crossed the threshold but lost the class to a className overwrite.
    const scan = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        if (revealed.has(el)) {
          if (!el.classList.contains('in')) el.classList.add('in');
          return;
        }
        if (triggered.has(el)) return;
        triggered.add(el);
        if (reduced) {
          el.classList.add('in');
          revealed.add(el);
          return;
        }
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              el.classList.add('in');
              revealed.add(el);
            },
          })
        );
      });
    };

    scan();
    if (!reduced) ScrollTrigger.refresh();

    const mo = new MutationObserver(() => {
      scan();
      if (!reduced) requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      mo.disconnect();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
