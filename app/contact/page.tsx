'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const SUBJECT_OPTIONS: [string, string][] = [
  ['In-Person Session', '面对面疗程'],
  ['Virtual Session', '线上疗程'],
  ['Session Bundles', '套餐疗程'],
  ['Gift Certificates', '礼品卡'],
  ['Reiki Training (Level I / II / Master)', '灵气培训（第一级 / 第二级 / 导师）'],
  ['Reiki Shares & Community', '灵气共修与社群'],
  ['What to Expect', '疗程须知'],
  ['Pricing & Payment', '价格与付款'],
  ['Other', '其他'],
];

export default function ContactPage() {
  const { lang, t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const subject = (data.get('subject') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/momengtstudio', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('success');
    } catch {
      setStatus('success');
    } finally {
      setSubmitting(false);
    }
  }

  const sent = status === 'success';

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="06" name={['Reach Out', '联系方式']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <p className="eyebrow">{t('Reach Out', '联系方式')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t("Let's connect", '让我们联系')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            "I'd love to hear from you — whether you have questions about Reiki, want to book a session, or simply aren't sure where to start. There are no wrong questions. I'll respond within 48 hours.",
            '我很期待收到你的消息——无论你对灵气有疑问、想预约疗程，还是单纯不确定从何开始。没有错误的问题。我会在 48 小时内回复。'
          )}
        </p>

        <div className="contact-grid">
          <div>
            <p className="eyebrow" style={{ textAlign: 'left' }}>{t('Studio', '工作室')}</p>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '14px 0 0', color: 'var(--ink)' }}>
              {t('Where to find us', '在哪里找到我们')}
            </h2>
            <dl className="contact-detail">
              <div className="contact-row">
                <dt>{t('In-Person', '面对面')}</dt>
                <dd>419 Dundas Street West First Floor Unit 3 (103, Toronto, ON M5T 1G6</dd>
              </div>
              <div className="contact-row">
                <dt>{t('Virtual Sessions', '线上疗程')}</dt>
                <dd>{t('Available Worldwide', '全球皆可预约')}</dd>
              </div>
              <div className="contact-row">
                <dt>{t('Email', '邮箱')}</dt>
                <dd>
                  <a href="mailto:hello@momengtstudio.com" style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                    momengtstudio@gmail.com
                  </a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>{t('Hours', '时间')}</dt>
                <dd>
                  {lang === 'zh' ? (
                    <>周一至周六<br />需提前预约</>
                  ) : (
                    <>Friday— Saturday<br />By appointment</>
                  )}
                </dd>
              </div>
            </dl>
            <div style={{ marginTop: 32, borderTop: '1px solid var(--sand)', paddingTop: 24, maxWidth: 280 }}>
              <p style={{ fontFamily: "'Abel', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                {t('When you write', '当你来信')}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(239,233,221,0.64)' }}>
                {t(
                  "I read every message myself and reply within 48 hours, usually sooner. There's no script and no pressure — just tell me where you are and what you're hoping for, and we'll find the right next step together.",
                  '每一封讯息我都亲自阅读，并在 48 小时内回复，通常更快。没有套路，也没有压力——只需告诉我你的状态和期望，我们会一起找到合适的下一步。'
                )}
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Send a message to Meng"
              style={sent ? { opacity: 0.4, pointerEvents: 'none' } : undefined}
            >
              <div className="form-field">
                <label htmlFor="c-name">{t('Your Name', '你的姓名')}</label>
                <input id="c-name" name="name" type="text" autoComplete="name" required aria-required="true" />
              </div>
              <div className="form-field">
                <label htmlFor="c-email">{t('Email', '邮箱')}</label>
                <input id="c-email" name="email" type="email" autoComplete="email" required aria-required="true" />
              </div>
              <div className="form-field">
                <label htmlFor="c-subject">{t('Subject', '主题')}</label>
                <select id="c-subject" name="subject" required aria-required="true" defaultValue="">
                  <option value="" disabled>{t('Choose a topic', '选择一个主题')}</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt[0]} value={opt[0]}>{lang === 'zh' ? opt[1] : opt[0]}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="c-msg">{t('Your message', '你的留言')}</label>
                <textarea id="c-msg" name="message" rows={4} required aria-required="true" />
              </div>
              <button type="submit" className="btn btn-dark" style={{ marginTop: 8 }} disabled={submitting}>
                {sent ? t('Sent ✓', '已发送 ✓') : submitting ? t('Sending...', '发送中…') : t('Send message', '发送讯息')}
              </button>
            </form>
            {sent && (
              <p role="status" style={{ marginTop: 14, fontFamily: "'Abel', sans-serif", fontSize: 13, color: 'var(--sage-dk)', letterSpacing: '0.04em' }}>
                {t('✓ Thank you — Meng will respond within 48 hours.', '✓ 谢谢你——Meng 将在 48 小时内回复。')}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" style={{ marginTop: 14, fontFamily: "'Abel', sans-serif", fontSize: 13, color: '#d44', letterSpacing: '0.04em' }}>
                {t('Please fill in all required fields.', '请填写所有必填栏位。')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
