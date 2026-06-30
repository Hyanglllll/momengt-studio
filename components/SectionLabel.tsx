'use client';

import { useI18n } from '@/lib/i18n';

export default function SectionLabel({ index, name }: { index: string; name: [string, string] }) {
  const { lang } = useI18n();
  return (
    <div className="section-label" aria-hidden="true">
      <span className="idx">{index}</span>
      <span>{lang === 'zh' ? name[1] : name[0]}</span>
    </div>
  );
}
