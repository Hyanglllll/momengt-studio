'use client';

import { useEffect } from 'react';

// Design behaviour: when a page becomes visible, every direct child of its
// .inner-wrap fades up in a slow stagger (80ms lead-in, 85ms per item).
export default function ScrollReveals() {
  useEffect(() => {
    const wrap = document.querySelector('.inner-wrap');
    if (!wrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = Array.from(wrap.children) as HTMLElement[];
    const timers = items.map((el, i) => {
      el.classList.add('fade-up');
      return setTimeout(() => el.classList.add('in'), 80 + i * 85);
    });
    return () => {
      timers.forEach(clearTimeout);
      items.forEach((el) => el.classList.remove('fade-up', 'in'));
    };
  }, []);

  return null;
}
