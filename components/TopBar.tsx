'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useI18n } from '@/lib/i18n';

export default function TopBar({
  isMenuOpen,
  onMenuToggle,
}: {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}) {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 60) {
        setHidden(false);
      } else if (y > lastY.current + 6) {
        setHidden(true);
      } else if (y < lastY.current - 6) {
        setHidden(false);
      }
      lastY.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-bar ${scrolled ? 'scrolled' : ''} ${hidden && !isMenuOpen ? 'bar-hidden' : ''}`}>
      <Link href="/" className="logo-link" aria-label="moMENGt Studio — home">
        <Logo size={30} />
        <span className="logo-wordmark">
          mo<span className="meng">MENG</span>t
        </span>
      </Link>
      <div className="top-bar-right">
        <div role="group" aria-label="Language">
          <button
            type="button"
            className={`lang-toggle ${lang === 'en' ? 'active' : ''}`}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span className="lang-sep">/</span>
          <button
            type="button"
            className={`lang-toggle ${lang === 'zh' ? 'active' : ''}`}
            aria-pressed={lang === 'zh'}
            onClick={() => setLang('zh')}
          >
            中文
          </button>
        </div>
        <button
          type="button"
          className="menu-trigger"
          aria-expanded={isMenuOpen}
          aria-controls="nav-overlay"
          onClick={onMenuToggle}
        >
          <span className="dot-grid" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} />
            ))}
          </span>
          <span>{t('Menu', '菜单')}</span>
        </button>
      </div>
    </header>
  );
}
