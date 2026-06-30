'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const CALENDLY_URL = 'https://calendly.com/momengtstudio/1-hour-reiki-session';

type SessionType = 'in-person' | 'virtual';
type PackageKey = 'single' | '3-pack' | '5-pack';

const PRICING: Record<SessionType, Record<PackageKey, number>> = {
  'in-person': { single: 137, '3-pack': 323, '5-pack': 513 },
  virtual: { single: 113, '3-pack': 271, '5-pack': 423 },
};

const TYPES: { key: SessionType; tag: [string, string]; name: [string, string]; price: string; desc: [string, string] }[] = [
  {
    key: 'in-person',
    tag: ['In-Person · Toronto', '面对面 · 多伦多'],
    name: ['In-Person Session', '面对面疗程'],
    price: '60 min · $137 CAD',
    desc: ['Hands-on Reiki at the Toronto studio. You arrive, you rest, you leave restored.', '在多伦多工作室进行的亲身灵气疗程。你到来，你休息，你带着焕然一新离开。'],
  },
  {
    key: 'virtual',
    tag: ['Virtual · Worldwide', '线上 · 全球'],
    name: ['Virtual Session', '线上疗程'],
    price: '60 min · $113 CAD',
    desc: ['Reiki at a distance. Equally powerful. You rest at home; the energy meets you there.', '远距灵气，同样有力。你在家中休息，能量在那里与你相遇。'],
  },
];

const PACKAGES: { key: PackageKey; tag: [string, string]; name: [string, string]; desc: [string, string]; badge?: string }[] = [
  {
    key: 'single',
    tag: ['Single Session', '单次疗程'],
    name: ['One session', '一次疗程'],
    desc: ['Try Reiki, no commitment needed', '尝试灵气，无需任何承诺'],
  },
  {
    key: '3-pack',
    tag: ['Bundle · Most Popular', '套餐 · 最受欢迎'],
    name: ['3-session bundle', '3 次疗程套餐'],
    desc: ['Healing deepens with continuity', '疗愈在持续中深化'],
    badge: 'Save $88',
  },
  {
    key: '5-pack',
    tag: ['Bundle · Best Value', '套餐 · 超值之选'],
    name: ['5-session bundle', '5 次疗程套餐'],
    desc: ['Commit to your wellbeing over time', '长期投入你的身心健康'],
    badge: 'Save $172',
  },
];

export default function BookingPage() {
  const { lang, t } = useI18n();
  const [step, setStep] = useState<1 | 2>(1);
  const [sessionType, setSessionType] = useState<SessionType | null>(null);
  const [pkg, setPkg] = useState<PackageKey | null>(null);

  const step2Title = sessionType === 'in-person' ? t('In-Person Session', '面对面疗程') : t('Virtual Session', '线上疗程');

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="05" name={['Begin', '开始']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <div className="reveal">
          <p className="eyebrow">{t('Begin', '开始')}</p>
          <h1 className="page-h1">{t('Book your session', '预约你的疗程')}</h1>
          <p className="page-lead">
            {t(
              'Choose the type of session that feels right for you. Sessions are offered Monday through Saturday by appointment.',
              '选择最适合你的疗程类型。疗程于周一至周六提供，需提前预约。'
            )}
          </p>
        </div>

        {step === 1 && (
          <div className="booking-step reveal">
            <p className="eyebrow">{t('Step 1 of 2 — Choose Session Type', '第 1 步 / 共 2 步 — 选择疗程类型')}</p>
            <div className="session-type-grid">
              {TYPES.map((ty) => (
                <button
                  key={ty.key}
                  type="button"
                  className="type-card"
                  style={{ backgroundImage: "linear-gradient(rgba(16,13,9,0.86), rgba(16,13,9,0.92)), url('/assets/fqs-stone-texture.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                  onClick={() => {
                    setSessionType(ty.key);
                    setPkg(null);
                    setStep(2);
                  }}
                >
                  <p className="type-label">{lang === 'zh' ? ty.tag[1] : ty.tag[0]}</p>
                  <p className="type-name">{lang === 'zh' ? ty.name[1] : ty.name[0]}</p>
                  <p className="type-price">{ty.price}</p>
                  <p className="type-desc">{lang === 'zh' ? ty.desc[1] : ty.desc[0]}</p>
                </button>
              ))}
            </div>
            <p className="cs-fine">{t('New clients warmly welcomed · No prior experience needed', '热忱欢迎新来访者 · 无需任何经验')}</p>
            <p className="scene-body" style={{ marginTop: 14 }}>
              {t('Questions before booking? ', '预约前有疑问？')}
              <Link href="/contact" className="proj-link" style={{ display: 'inline-flex' }}>
                {t('Contact Meng', '联系 Meng')}
              </Link>
            </p>
          </div>
        )}

        {step === 2 && sessionType && (
          <div className="booking-step reveal">
            <button type="button" className="back-btn" style={{ padding: '0 0 14px' }} onClick={() => setStep(1)}>
              {t('← Back to session type', '← 返回选择疗程类型')}
            </button>
            <p className="eyebrow">{t('Step 2 of 2 — Choose Package', '第 2 步 / 共 2 步 — 选择方案')}</p>
            <h2 className="scene-h" style={{ marginBottom: 18 }}>{step2Title}</h2>

            <div className="bundle-grid">
              {PACKAGES.map((p) => {
                const price = PRICING[sessionType][p.key];
                const selected = pkg === p.key;
                return (
                  <button
                    key={p.key}
                    type="button"
                    className={`bundle-option${selected ? ' selected' : ''}`}
                    aria-pressed={selected}
                    onClick={() => setPkg(p.key)}
                  >
                    <span>
                      <span className="bundle-name">{lang === 'zh' ? p.name[1] : p.name[0]}</span>
                      <span className="bundle-desc">{lang === 'zh' ? p.desc[1] : p.desc[0]}{p.badge ? ` · ${p.badge}` : ''}</span>
                    </span>
                    <span className="bundle-price">${price} CAD</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="btn btn-terra"
              disabled={!pkg}
              onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener')}
            >
              {t('Continue to scheduling →', '继续预约时间 →')}
            </button>
            <p className="cs-fine" style={{ marginTop: 14 }}>
              {"You'll be directed to our secure scheduling platform"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
