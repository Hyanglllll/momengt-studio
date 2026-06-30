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
      <p className="footer-copy">
        © {year ?? ''} · USUI REIKI · TORONTO
      </p>
      <div className="footer-clock" aria-hidden="true">
        Toronto<b>{time}</b>
      </div>
      <p className="footer-tag">{t('Return to the moment.', '回到当下。')}</p>
    </footer>
  );
}
