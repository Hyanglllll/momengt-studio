'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

const LINKS = [
  { href: '/reiki', idx: '01', en: 'What is Reiki', zh: '什么是灵气', img: '/assets/fxn-pink-wildflowers.JPG' },
  { href: '/about', idx: '02', en: 'About', zh: '关于', img: '/assets/fxn-meadow-path.JPG' },
  { href: '/services', idx: '03', en: 'Services', zh: '服务', img: '/assets/fxn-green-berries.JPG' },
  { href: '/faq', idx: '04', en: 'FAQ', zh: '常见问题', img: '/assets/fxn-pink-wildflowers.JPG' },
  { href: '/booking', idx: '05', en: 'Booking', zh: '预约', img: '/assets/fqs-stone-texture.JPG' },
  { href: '/contact', idx: '06', en: 'Contact', zh: '联系', img: '/assets/fxn-meadow-path.JPG' },
  { href: '/gift', idx: '07', en: 'Gift Certificates', zh: '礼品卡', img: '/assets/fqs-stone-texture.JPG' },
];

export default function NavOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { lang } = useI18n();
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>('a, button');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      id="nav-overlay"
      ref={overlayRef}
      className={`nav-overlay ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Site navigation"
    >
      <button type="button" className="nav-close" onClick={onClose} aria-label="Close menu" tabIndex={isOpen ? 0 : -1}>
        {lang === 'zh' ? '关闭 ✕' : 'Close ✕'}
      </button>
      <div className="nav-overlay-inner">
        <div
          className={`nav-preview ${previewImg ? 'show' : ''}`}
          style={previewImg ? { backgroundImage: `url('${previewImg}')` } : undefined}
          aria-hidden="true"
        />
        <nav aria-label="Pages">
          <ul className="nav-links">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onMouseEnter={() => setPreviewImg(link.img)}
                  onMouseLeave={() => setPreviewImg(null)}
                  onFocus={() => setPreviewImg(link.img)}
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                  data-idx={link.idx}
                >
                  {lang === 'zh' ? link.zh : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
