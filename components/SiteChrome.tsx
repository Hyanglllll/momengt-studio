'use client';

import { useState } from 'react';
import TopBar from './TopBar';
import NavOverlay from './NavOverlay';

export default function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar isMenuOpen={menuOpen} onMenuToggle={() => setMenuOpen((v) => !v)} />
      <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
