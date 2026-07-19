'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const BOOKING_URL = 'https://app.squareup.com/appointments/book/4aleo9t8pwmze0/LAVYHJMNM9TF8/start';

type SessionType = 'in-person' | 'virtual';
type PackageKey = 'single' | '3-pack';

const PRICING: Record<SessionType, Record<PackageKey, number>> = {
  'in-person': { single: 137, '3-pack': 331 },
  virtual: { single: 117, '3-pack': 281 },
};

const TYPES: { key: SessionType; tag: [string, string]; name: [string, string]; meta: string; desc: [string, string]; aria: string }[] = [
  {
    key: 'in-person',
    tag: ['In-Person · Toronto', '面对面 · 多伦多'],
    name: ['In-Person Session', '面对面疗程'],
    meta: '60 min · $137 CAD',
    desc: ['Hands-on Reiki at the Toronto studio. You arrive, you rest, you leave restored.', '在多伦多工作室进行的亲身灵气疗程。你到来，你休息，你带着焕然一新离开。'],
    aria: 'Choose In-Person Session, Toronto, 60 minutes, $137 CAD',
  },
  {
    key: 'virtual',
    tag: ['Distance · Worldwide', '远程 · 全球'],
    name: ['Distance Session', '远程疗程'],
    meta: '60 min · $117 CAD',
    desc: ['Reiki at a distance. Equally powerful. You rest at home; the energy meets you there.', '远距灵气，同样有力。你在家中休息，能量在那里与你相遇。'],
    aria: 'Choose Distance Session, worldwide, 60 minutes, $117 CAD',
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
  },
];

const STEP_LABEL_STYLE = {
  fontFamily: "'Abel', sans-serif",
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--terra)',
  marginBottom: 20,
  textAlign: 'center',
} as const;

export default function BookingPage() {
  const { lang, t } = useI18n();
  const [step, setStep] = useState<1 | 2>(1);
  const [sessionType, setSessionType] = useState<SessionType | null>(null);
  const [pkg, setPkg] = useState<PackageKey | null>(null);

  const step2Title = sessionType === 'in-person' ? t('In-Person Session', '面对面疗程') : t('Distance Session', '远程疗程');

  function selectType(key: SessionType) {
    setSessionType(key);
    setPkg(null);
    setStep(2);
  }

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="05" name={['Begin', '开始']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <p className="eyebrow">{t('Begin', '开始')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t('Book your session', '预约你的疗程')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            'Choose the type of session that feels right for you. Sessions are offered Monday through Saturday by appointment.',
            '选择最适合你的疗程类型。疗程于周一至周六提供，需提前预约。'
          )}
        </p>

        {step === 1 && (
          <div className="booking-step">
            <p style={STEP_LABEL_STYLE}>{t('Step 1 of 2 — Choose Session Type', '第 1 步 / 共 2 步 — 选择疗程类型')}</p>

            <div className="booking-wrap">
              {TYPES.map((ty) => (
                <div
                  key={ty.key}
                  className="booking-card"
                  role="button"
                  tabIndex={0}
                  aria-label={ty.aria}
                  onClick={() => selectType(ty.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectType(ty.key);
                    }
                  }}
                >
                  <div className="booking-stone-bg" style={{ backgroundImage: "url('/assets/stones-circle.jpg')" }} aria-hidden="true" />
                  <p className="card-type">{lang === 'zh' ? ty.tag[1] : ty.tag[0]}</p>
                  <h3>{lang === 'zh' ? ty.name[1] : ty.name[0]}</h3>
                  <p className="card-meta">{ty.meta}</p>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(42,37,32,0.58)', marginBottom: 24 }}>
                    {lang === 'zh' ? ty.desc[1] : ty.desc[0]}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 32, fontFamily: "'Abel', sans-serif", fontSize: 12, letterSpacing: '0.07em', color: 'var(--muted)', textTransform: 'uppercase' }}>
              {t('New clients warmly welcomed · No prior experience needed', '热忱欢迎新来访者 · 无需任何经验')}
            </p>
            <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(42,37,32,0.6)' }}>
              {t('Questions before booking? ', '预约前有疑问？')}
              <Link href="/contact" style={{ color: 'var(--terra)', textDecoration: 'underline', textUnderlineOffset: 2 }}>
                {t('Contact Meng', '联系 Meng')}
              </Link>
            </p>
          </div>
        )}

        {step === 2 && sessionType && (
          <div className="booking-step">
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setSessionType(null);
                setPkg(null);
              }}
              style={{
                fontFamily: "'Abel', sans-serif", fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer',
                marginBottom: 24, padding: '8px 0', transition: 'color 0.2s', alignSelf: 'flex-start',
              }}
            >
              {t('← Back to session type', '← 返回选择疗程类型')}
            </button>

            <p style={STEP_LABEL_STYLE}>{t('Step 2 of 2 — Choose Package', '第 2 步 / 共 2 步 — 选择方案')}</p>

            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 32, textAlign: 'center', color: 'var(--ink)' }}>
              {step2Title}
            </h2>

            <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
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
                    style={p.key === '3-pack' ? { marginBottom: 32 } : undefined}
                  >
                    <span className="bundle-row">
                      <span>
                        <span className="bundle-tag" style={{ display: 'block' }}>{lang === 'zh' ? p.tag[1] : p.tag[0]}</span>
                        <span className="bundle-name" style={{ display: 'block' }}>{lang === 'zh' ? p.name[1] : p.name[0]}</span>
                        <span className="bundle-desc" style={{ display: 'block' }}>{lang === 'zh' ? p.desc[1] : p.desc[0]}</span>
                      </span>
                      <span className="bundle-price">${price}</span>
                    </span>
                  </button>
                );
              })}

              <button
                type="button"
                className="btn btn-terra"
                disabled={!pkg}
                onClick={() => window.open(BOOKING_URL, '_blank', 'noopener')}
                style={{ width: '100%', maxWidth: 400, margin: '0 auto', display: 'flex', padding: '16px 32px', fontSize: 13 }}
              >
                {t('Continue to scheduling →', '继续预约时间 →')}
              </button>
              <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(42,37,32,0.65)', textAlign: 'center' }}>
                {"You'll be directed to our secure scheduling platform"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
