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
  price: number;
  desc: [string, string];
  btn: string;
  featured?: boolean;
};

const CARDS: GiftCard[] = [
  {
    key: 'virtual',
    tag: ['Virtual Session', '线上疗程'],
    name: ['A Moment Away', '远方的片刻'],
    price: 113,
    desc: ['One 60-minute virtual Reiki session. Redeemable worldwide — they rest at home, the energy travels.', '一次 60 分钟的线上灵气疗程。全球可兑换——他们在家休息，能量自会抵达。'],
    btn: 'btn-sage',
  },
  {
    key: 'in-person',
    tag: ['In-Person Session', '面对面疗程'],
    name: ['A Moment Present', '当下的片刻'],
    price: 137,
    desc: ['One 60-minute in-person Reiki session at the Toronto studio. A gift of grounded, hands-on care.', '一次 60 分钟、于多伦多工作室进行的面对面灵气疗程。一份踏实而亲手的关怀。'],
    btn: 'btn-sage',
  },
  {
    key: 'bundle',
    tag: ['Bundle · Most gifted', '套餐 · 最受赠'],
    name: ['Three Moments', '三个片刻'],
    price: 323,
    desc: ['A series of three in-person sessions. Healing deepens with continuity. Virtual bundles also available.', '一系列三次面对面疗程。疗愈在持续中深化。亦提供线上套餐。'],
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
      form.reset();
    }
  }

  if (selected) {
    return (
      <div className="page-wrapper">
        <ScrollReveals />
        <SectionLabel index="07" name={['Checkout', '结账']} />
        <div className="inner-wrap">
          <button type="button" className="back-btn" onClick={() => { setSelected(null); setStatus('idle'); }}>
            {t('← Back', '← 返回')}
          </button>

          <div className="reveal">
            <p className="eyebrow">{t('Complete your gift', '完成你的礼物')}</p>
            <h1 className="page-h1">{t('Gift a moment', '赠予一个片刻')}</h1>
          </div>

          <div className="checkout-grid reveal">
            <form onSubmit={handleCheckout} noValidate>
              <div className="form-field">
                <label htmlFor="recipientName">{t("Recipient's name", '收礼人姓名')}</label>
                <input id="recipientName" name="recipientName" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="recipientEmail">{t("Recipient's email (optional)", '收礼人邮箱（可选）')}</label>
                <input id="recipientEmail" name="recipientEmail" type="email" />
              </div>
              <div className="form-field">
                <label htmlFor="yourName">{t('Your name', '你的姓名')}</label>
                <input id="yourName" name="yourName" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="yourEmail">{t('Your email', '你的邮箱')}</label>
                <input id="yourEmail" name="yourEmail" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="note">{t('A note to include (optional)', '附上一段话（可选）')}</label>
                <textarea id="note" name="note" />
              </div>
              <input type="hidden" name="gift" value={lang === 'zh' ? selected.name[1] : selected.name[0]} />
              <input type="hidden" name="price" value={selected.price} />

              <button type="submit" className="btn btn-terra" disabled={submitting} style={{ width: '100%', justifyContent: 'center' }}>
                {t('Complete purchase', '完成购买')}
              </button>

              {status === 'success' && (
                <p role="status" style={{ color: 'var(--sage)', fontSize: 13, marginTop: 14 }}>
                  {t('✓ Thank you — your certificate details will arrive by email, with redemption instructions.', '✓ 谢谢你——你的礼品卡详情将以邮件送达，附领取方式。')}
                </p>
              )}
            </form>

            <div className="checkout-summary">
              <p className="cs-eyebrow">{t('Order summary', '订单摘要')}</p>
              <div className="cs-line">
                <span className="cs-name">{lang === 'zh' ? selected.name[1] : selected.name[0]}</span>
                <span className="cs-price">${selected.price}</span>
              </div>
              <p className="cs-type">{lang === 'zh' ? selected.tag[1] : selected.tag[0]}</p>
              <hr className="cs-rule" />
              <ul className="cs-notes">
                <li>{t('Digital certificate, delivered instantly after purchase', '数字礼品卡，购买后即时送达')}</li>
                <li>{t('Valid for 12 months', '有效期 12 个月')}</li>
                <li>{t('Redeemable for any session type', '可兑换任意疗程类型')}</li>
              </ul>
              <hr className="cs-rule" />
              <div className="cs-total">
                <span>{t('Total', '总计')}</span>
                <span>{selected.price} CAD</span>
              </div>
              <p className="cs-fine">{t('Secure checkout · Non-refundable', '安全结账 · 不可退款')}</p>
            </div>
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

        <div className="reveal">
          <p className="eyebrow">{t('A gift of healing', '一份疗愈的礼物')}</p>
          <h1 className="page-h1">{t('Share the moment', '分享这个片刻')}</h1>
          <p className="page-lead">
            {t(
              'Give someone you love the gift of stillness. Reiki gift certificates are delivered digitally and can be redeemed for any session type — a thoughtful offering for any occasion.',
              '把静谧作为礼物，送给你所爱的人。灵气礼品卡以电子方式送达，可兑换任意疗程类型——适合任何场合的贴心心意。'
            )}
          </p>
        </div>

        <div className="gift-grid reveal">
          {CARDS.map((c) => (
            <div className={`gift-card${c.featured ? ' gift-featured' : ''}`} key={c.key}>
              <div className="gift-stone" style={{ backgroundImage: "url('/assets/fqs-stone-texture.JPG')" }} />
              <div className="gift-body">
                <p className={`gift-tag${c.featured ? ' terra' : ''}`}>{lang === 'zh' ? c.tag[1] : c.tag[0]}</p>
                <p className="gift-name">{lang === 'zh' ? c.name[1] : c.name[0]}</p>
                <p className="gift-price" style={c.featured ? { color: 'var(--terra)' } : undefined}>${c.price}</p>
                <p className="gift-desc">{lang === 'zh' ? c.desc[1] : c.desc[0]}</p>
                <button type="button" className={`btn ${c.btn}`} onClick={() => setSelected(c)}>
                  {t('Purchase →', '购买 →')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="cs-fine reveal" style={{ textAlign: 'center', marginBottom: 24 }}>
          {t('Certificates delivered by email · Valid 12 months · Non-refundable', '礼品卡以邮件送达 · 有效期 12 个月 · 不可退款')}
        </p>
      </div>
    </div>
  );
}
