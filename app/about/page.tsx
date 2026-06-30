'use client';

import Link from 'next/link';
import Seal from '@/components/Seal';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const CREDENTIALS = [
  {
    num: '01',
    en: ['Usui Reiki Master & Teacher', 'Trained in the traditional Usui lineage, certified through Master level.'],
    zh: ['臼井灵气导师与教师', '师承传统臼井体系，取得导师级别认证。'],
  },
  {
    num: '02',
    en: ['Rooted in Qi', 'As a first-generation immigrant from China, I carry a lifelong connection to the concept of vital energy.'],
    zh: ['根植于「气」', '作为第一代华人移民，我对「生命能量」这一概念怀有终身的连结。'],
  },
  {
    num: '03',
    en: ['Pressure-free by principle', 'No upselling, no expectation. You only ever do what feels right for you.'],
    zh: ['以无压力为原则', '不推销、不期待。你永远只做让自己感到舒服的选择。'],
  },
];

export default function AboutPage() {
  const { lang, t } = useI18n();

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="02" name={['The Founder', '创始人']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <div className="intro-centered reveal">
          <Seal />
          <p className="eyebrow">{t("The Founder's Story", '创始人的故事')}</p>
          <h1 className="page-h1" tabIndex={-1}>
            {t('A journey from pain to presence', '一段从伤痛到当下的旅程')}
          </h1>
          <p className="page-lead" style={{ fontWeight: 400, color: 'rgba(239,233,221,0.78)', fontSize: 19 }}>
            {t(
              'From corporate burnout to Reiki Master — meet Meng, the founder of MoMengt Studio, and the path that brought her here.',
              '从企业倦怠到灵气导师——认识 MoMengt Studio 的创始人 Meng，以及把她带到这里的旅程。'
            )}
          </p>
        </div>

        <div className="photo reveal" style={{ maxWidth: 680, height: 540, marginBottom: 48 }}>
          <img
            src="/assets/fxn-meadow-path.JPG"
            alt="A winding path through tall wild grasses and trees, shot on film — evoking MQ's journey from corporate life to Reiki practice"
            loading="lazy"
          />
        </div>

        <div className="about-grid reveal">
          <div className="about-text">
            <p className="eyebrow">{t('Origin', '缘起')}</p>
            <h2 className="scene-h" style={{ marginBottom: 18 }}>
              {t('A breakthrough between migraines', '偏头痛之间的转机')}
            </h2>
            <p>{t('In 2020, I started having migraines for grinding my teeth in sleep.', '2020 年，我因睡眠中磨牙开始出现偏头痛。')}</p>
            <p>
              {t(
                'Working a demanding corporate job in Toronto, stress had quietly accumulated in my body — tightening my jaw so severely that on bad days, I could only eat soft food. My dentist recommended Botox injections. They helped, for a while. But numbing the pain wasn\'t the same as healing it.',
                '在多伦多做着一份高压的企业工作，压力悄然在身体里累积——让我的下颌紧绷到状态差的日子里只能吃软食。牙医建议我打肉毒杆菌。它确实缓解了一阵子。但麻痹疼痛，并不等于疗愈它。'
              )}
            </p>
            <p>
              {t(
                'The turning point came during a migraine that had persisted, on and off, for over a week. Frustrated, I was trying anything I could. It was during this search that I received Reiki for the first time — without fully knowing what it was. What I felt surprised me. The tension softened. A quiet wave of calm moved through my body.',
                '转折发生在一次断断续续持续了一周多的偏头痛中。我很沮丧，几乎什么方法都愿意尝试。正是在这样的寻找中，我第一次接受了灵气——当时我甚至还不完全明白那是什么。我的感受让我惊讶。紧绷松开了。一股安静的平静流过我的身体。'
              )}
            </p>
            <p>
              {t(
                'I went home and started researching. Then I started training. Eventually, I earned my Usui Reiki Master certificate. I began practicing on friends and family, and their experiences mirrored my own. Watching Reiki become part of their healing — not just mine — is what moved me to open MoMengt Studio.',
                '我回到家开始研究，然后开始学习。最终，我取得了臼井灵气导师（Usui Reiki Master）认证。我开始为亲友施作灵气，他们的感受与我如出一辙。看着灵气成为他们疗愈的一部分——而不只是我的——正是这份感动让我开设了 MoMengt Studio。'
              )}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CREDENTIALS.map((c) => (
              <div className="training-card" key={c.num}>
                <p className="training-level">{c.num}</p>
                <p className="training-name">{lang === 'zh' ? c.zh[0] : c.en[0]}</p>
                <p className="training-desc">{lang === 'zh' ? c.zh[1] : c.en[1]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-row reveal" style={{ marginTop: 56, marginBottom: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reiki" className="btn btn-sage">
            {t('Learn about Reiki →', '了解灵气 →')}
          </Link>
          <Link href="/booking" className="btn btn-terra">
            {t('Book a session', '预约疗程')}
          </Link>
        </div>
      </div>
    </div>
  );
}
