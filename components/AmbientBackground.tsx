'use client';

import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const n = window.innerWidth < 700 ? 7 : 14;
    const nodes: HTMLSpanElement[] = [];
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span');
      p.className = 'pt';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = 40 + Math.random() * 60 + '%';
      p.style.animationDuration = 22 + Math.random() * 8 + 's';
      p.style.animationDelay = -Math.random() * 24 + 's';
      box.appendChild(p);
      nodes.push(p);
    }
    return () => nodes.forEach((n) => n.remove());
  }, []);

  return <div ref={boxRef} className="ambient-bg" aria-hidden="true" />;
}
