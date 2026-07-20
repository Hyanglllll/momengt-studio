'use client';

import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const GIFT_ORDER_URL = 'https://app.squareup.com/gift/ML21MC7JEA85X/order';

export default function GiftPage() {
  const { t } = useI18n();

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
            'Give someone an hour that belongs entirely to them. A Reiki session is a meaningful offering for anyone moving through stress, burnout, grief, or simply the weight of a busy life.',
            '送Ta一小时完全属于Ta自己的时间。对于正在经历压力、倦怠、迷茫的人，灵气疗程是一份温柔的礼物。'
          )}
        </p>

        <div style={{ textAlign: 'left' }}>
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
    </div>
  );
}
