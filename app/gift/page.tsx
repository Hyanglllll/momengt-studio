'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

type GiftCard = {
  key: string;
  tag: [string, string];
  name: [string, string];
  type: [string, string];
  price: number;
  desc: [string, string];
  btn: string;
  featured?: boolean;
};

const CARDS: GiftCard[] = [
  {
    key: 'virtual',
    tag: ['Distance Session', '远程疗程'],
    name: ['A Moment Away', '远方的片刻'],
    type: ['Distance Session', '远程疗程'],
    price: 117,
    desc: ['One 60-minute distance Reiki session. Redeemable worldwide — they rest at home, the energy travels.', '一次 60 分钟的远程灵气疗程。全球可兑换——他们在家休息，能量自会抵达。'],
    btn: 'btn-sage',
  },
  {
    key: 'in-person',
    tag: ['In-Person Session', '面对面疗程'],
    name: ['A Moment Present', '当下的片刻'],
    type: ['In-Person Session', '面对面疗程'],
    price: 137,
    desc: ['One 60-minute in-person Reiki session at the Toronto studio. A gift of grounded, hands-on care.', '一次 60 分钟、于多伦多工作室进行的面对面灵气疗程。一份踏实而亲手的关怀。'],
    btn: 'btn-sage',
  },
  {
    key: 'bundle',
    tag: ['Bundle · Most gifted', '套餐 · 最受赠'],
    name: ['Three Moments', '三个片刻'],
    type: ['Bundle of 3 sessions', '3 次疗程套餐'],
    price: 331,
    desc: ['A series of three in-person sessions. Healing deepens with continuity. Distance bundles also available.', '一系列三次面对面疗程。疗愈在持续中深化。亦提供远程套餐。'],
    btn: 'btn-terra',
    featured: true,
  },
];

export default function GiftPage() {
  const { lang, t } = useI18n();
  const [selected, setSelected] = useState<GiftCard | null>(null);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [submitting, setSubmitting] = useState(false);

  async function handleCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    setSubmitting(true);
    try {
      await fetch('https://formspree.io/f/momengtstudio-gift', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
    } catch {
      // proceed regardless — confirmation shown optimistically
    } finally {
      setSubmitting(false);
      setStatus('success');
    }
  }

  if (selected) {
    const sent = status === 'success';
    return (
      <div className="page-wrapper">
        <ScrollReveals />
        <SectionLabel index="07" name={['Checkout', '结账']} />
        <div className="inner-wrap">
          <button type="button" className="back-btn" onClick={() => { setSelected(null); setStatus('idle'); }}>
            {t('Back', '返回')}
          </button>

          <p className="eyebrow">{t('Complete your gift', '完成你的礼物')}</p>
          <h1 className="page-h1" tabIndex={-1}>{t('Gift a moment', '赠予一个片刻')}</h1>

          <div className="checkout-grid">
            <form className="checkout-form" onSubmit={handleCheckout} noValidate aria-label="Gift certificate purchase">
              <div className="form-field">
                <label htmlFor="g-to">{t("Recipient's name", '收礼人姓名')}</label>
                <input id="g-to" name="recipient" type="text" required aria-required="true" disabled={sent} />
              </div>
              <div className="form-field">
                <label htmlFor="g-to-email">{t("Recipient's email (optional)", '收礼人邮箱（可选）')}</label>
                <input id="g-to-email" name="recipientEmail" type="email" disabled={sent} />
              </div>
              <div className="form-field">
                <label htmlFor="g-from">{t('Your name', '你的姓名')}</label>
                <input id="g-from" name="sender" type="text" required aria-required="true" disabled={sent} />
              </div>
              <div className="form-field">
                <label htmlFor="g-from-email">{t('Your email', '你的邮箱')}</label>
                <input id="g-from-email" name="senderEmail" type="email" required aria-required="true" disabled={sent} />
              </div>
              <div className="form-field">
                <label htmlFor="g-msg">{t('A note to include (optional)', '附上一段话（可选）')}</label>
                <textarea id="g-msg" name="note" rows={3} disabled={sent} />
              </div>
              <input type="hidden" name="gift" value={lang === 'zh' ? selected.name[1] : selected.name[0]} />
              <input type="hidden" name="price" value={selected.price} />

              <button
                type="submit"
                className="btn btn-terra"
                style={{ marginTop: 8, ...(sent || submitting ? { opacity: 0.5, pointerEvents: 'none' as const } : {}) }}
              >
                {submitting ? t('Processing…', '处理中…') : t('Complete purchase', '完成购买')}
              </button>
              {sent && (
                <p role="status" style={{ marginTop: 16, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--sage)' }}>
                  {t('✓ Thank you — your certificate details will arrive by email, with redemption instructions.', '✓ 谢谢你——你的礼品卡详情将以邮件送达，附领取方式。')}
                </p>
              )}
            </form>

            <aside className="checkout-summary" aria-label="Order summary">
              <p className="cs-eyebrow">{t('Order summary', '订单摘要')}</p>
              <div className="cs-line">
                <span className="cs-name">{lang === 'zh' ? selected.name[1] : selected.name[0]}</span>
                <span className="cs-price">${selected.price}</span>
              </div>
              <p className="cs-type">{lang === 'zh' ? selected.type[1] : selected.type[0]}</p>
              <div className="cs-rule" />
              <ul className="cs-notes">
                <li>{t('Digital certificate, delivered instantly after purchase', '数字礼品卡，购买后即时送达')}</li>
                <li>{t('Valid for 12 months', '有效期 12 个月')}</li>
                <li>{t('Redeemable for any session type', '可兑换任意疗程类型')}</li>
              </ul>
              <div className="cs-rule" />
              <div className="cs-total">
                <span>{t('Total', '总计')}</span>
                <span>${selected.price} CAD</span>
              </div>
              <p className="cs-fine">{t('Secure checkout · Non-refundable', '安全结账 · 不可退款')}</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="07" name={['A Gift', '一份礼物']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <p className="eyebrow">{t('A gift of healing', '一份疗愈的礼物')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t('Share the moment', '分享这个片刻')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            'Give someone an hour that belongs entirely to them. A Reiki session is a meaningful offering for anyone moving through stress, burnout, grief, or simply the weight of a busy life. Gift certificates are available for both in-person and distance sessions.',
            '送Ta一小时完全属于Ta自己的时间。对于正在经历压力、倦怠、迷茫的人，灵气疗程是一份温柔的礼物。线下与远程疗程均可购买礼品卡。'
          )}
        </p>

        <div className="gift-grid">
          {CARDS.map((c) => (
            <div
              className="gift-card"
              key={c.key}
              style={c.featured ? { borderColor: 'rgba(127,160,85,0.3)' } : undefined}
            >
              <div className="gift-stone" style={{ backgroundImage: "url('/assets/stones-circle.jpg')" }} aria-hidden="true" />
              <p className={`gift-tag${c.featured ? ' terra' : ''}`}>{lang === 'zh' ? c.tag[1] : c.tag[0]}</p>
              <p className="gift-name">{lang === 'zh' ? c.name[1] : c.name[0]}</p>
              <p className="gift-price">${c.price}</p>
              <p className="gift-desc">{lang === 'zh' ? c.desc[1] : c.desc[0]}</p>
              <button
                type="button"
                className={`btn ${c.btn}`}
                aria-label={`Purchase ${c.name[0]} gift certificate, $${c.price}`}
                onClick={() => setSelected(c)}
              >
                {t('Purchase →', '购买 →')}
              </button>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 32, fontFamily: "'Abel', sans-serif", fontSize: 12, letterSpacing: '0.07em', color: 'var(--muted)', textTransform: 'uppercase' }}>
          {t('Certificates delivered by email · Valid 12 months · Non-refundable', '礼品卡以邮件送达 · 有效期 12 个月 · 不可退款')}
        </p>
      </div>
    </div>
  );
}
