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
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      // Clamp out iOS/Android rubber-band overscroll, which can push scrollY
      // negative or above the max scroll — left unclamped, that noise made the
      // bar flicker in and out near the top and bottom on mobile.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.min(Math.max(window.scrollY, 0), Math.max(max, 0));
      if (y < 60) {
        setHidden(false);
      } else if (y > lastY.current + 6) {
        setHidden(true);
      } else if (y < lastY.current - 6) {
        setHidden(false);
      }
      lastY.current = y;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-bar ${hidden && !isMenuOpen ? 'bar-hidden' : ''}`} role="banner">
      <Link href="/" className="logo-link" aria-label="moMENGt — Return to home">
        <Logo size={34} />
      </Link>
      <div className="top-center" role="group" aria-label="Language">
        <button
          type="button"
          className={`lang-toggle ${lang === 'en' ? 'active' : ''}`}
          aria-pressed={lang === 'en'}
          aria-label="Switch to English"
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <span className="lang-sep" aria-hidden="true" />
        <button
          type="button"
          className={`lang-toggle ${lang === 'zh' ? 'active' : ''}`}
          aria-pressed={lang === 'zh'}
          aria-label="切换到中文 / Switch to Chinese"
          onClick={() => setLang('zh')}
        >
          中文
        </button>
      </div>
      <div className="top-right">
        <Link href="/booking" className="top-book">
          {t('Book a session', '预约')}
        </Link>
        <button
          type="button"
          className="menu-trigger"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-overlay"
          onClick={onMenuToggle}
        >
          <span>{t('Menu', '菜单')}</span>
          <span className="menu-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
