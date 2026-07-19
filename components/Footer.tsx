'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const [time, setTime] = useState('—');
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    function tick() {
      const fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Toronto',
      }).format(new Date());
      setTime(fmt);
      setYear(new Date().getFullYear());
    }
    tick();
    const id = setInterval(tick, 1000 * 20);
    return () => clearInterval(id);
  }, []);

  return (
    <footer role="contentinfo">
      <p className="footer-copy">© {year ?? ''} · USUI REIKI · TORONTO</p>
      <div className="footer-clocks" aria-hidden="true">
        <span>
          Toronto<b>{time}</b>
        </span>
      </div>
      <p className="footer-tag">{t('Return to the moment.', '回到当下。')}</p>
      <a
        className="footer-xhs"
        href="https://www.xiaohongshu.com/user/profile/6182d74c000000001000a6d8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="rednote (小红书) — moMENGt Studio"
      >
        <svg viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="0.5" y="0.5" width="47" height="19" rx="4" stroke="currentColor" strokeWidth="1" />
          <text
            x="24"
            y="13.5"
            textAnchor="middle"
            fontFamily="'PingFang SC','Microsoft YaHei',sans-serif"
            fontSize="9"
            fontWeight="600"
            fill="currentColor"
          >
            {t('rednote', '小红书')}
          </text>
        </svg>
      </a>
    </footer>
  );
}
