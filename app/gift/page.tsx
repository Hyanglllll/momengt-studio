'use client';

import Link from 'next/link';
import GiftCarousel from '@/components/GiftCarousel';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const GIFT_ORDER_URL = 'https://app.squareup.com/gift/ML21MC7JEA85X/order';

type GiftCard = {
  key: string;
  tag: [string, string];
  name: [string, string];
  price: number;
  desc: [string, string];
  featured?: boolean;
};

const CARDS: GiftCard[] = [
  {
    key: 'distance',
    tag: ['Distance Session', '远程疗程'],
    name: ['A Moment Away', '远方的片刻'],
    price: 117,
    desc: [
      'One 60-minute distance Reiki session. Redeemable worldwide — they rest at home, the energy travels.',
      '一次 60 分钟的远程灵气疗程。全球可兑换——他们在家休息，能量自会抵达。',
    ],
  },
  {
    key: 'in-person',
    tag: ['In-Person Session', '面对面疗程'],
    name: ['A Moment Present', '当下的片刻'],
    price: 137,
    desc: [
      'One 60-minute in-person Reiki session at the Toronto studio. A gift of grounded, hands-on care.',
      '一次 60 分钟、于多伦多工作室进行的面对面灵气疗程。一份踏实而亲手的关怀。',
    ],
  },
  {
    key: 'distance-bundle',
    tag: ['Bundle · Distance', '套餐 · 远程'],
    name: ['Three Moments Away', '远方的三个片刻'],
    price: 281,
    desc: [
      'A series of three distance sessions. Redeemable worldwide, wherever they call home.',
      '一系列三次远程疗程。全球可兑换，无论他们身在何处。',
    ],
  },
  {
    key: 'in-person-bundle',
    tag: ['Bundle · Most gifted', '套餐 · 最受赠'],
    name: ['Three Moments', '三个片刻'],
    price: 331,
    desc: [
      'A series of three in-person sessions. Healing deepens with continuity.',
      '一系列三次面对面疗程。疗愈在持续中深化。',
    ],
    featured: true,
  },
];

export default function GiftPage() {
  const { lang, t } = useI18n();

  return (
    <div className="page-wrapper">
      <SectionLabel index="07" name={['A Gift', '一份礼物']} />

      <div className="gift-head">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <p className="eyebrow">{t('A gift of healing', '一份疗愈的礼物')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t('Share the moment', '分享这个片刻')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            'Give someone an hour that belongs entirely to them. A Reiki session is a meaningful offering for anyone moving through stress, burnout, grief, or simply the weight of a busy life.',
            '送Ta一小时完全属于Ta自己的时间。对于正在经历压力、倦怠、迷茫的人，灵气疗程是一份温柔的礼物。'
          )}
        </p>
      </div>

      <GiftCarousel>
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
          </div>
        ))}
      </GiftCarousel>

      <div className="gift-foot">
        <a
          href={GIFT_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-terra"
        >
          {t('Purchase a gift card →', '购买礼品卡 →')}
        </a>
        <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(42,37,32,0.65)' }}>
          {t("You'll be directed to our secure ordering platform", '你将被引导至我们的安全下单平台')}
        </p>
      </div>
    </div>
  );
}
