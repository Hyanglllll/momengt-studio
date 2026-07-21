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

const P_STYLE = { fontSize: 15, lineHeight: 1.82, color: 'rgba(42,37,32,0.68)', maxWidth: 460 } as const;

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

        <div className="intro-centered">
          <Seal />
          <p className="eyebrow">{t("The Founder's Story", '创始人的故事')}</p>
          <h1 className="page-h1" tabIndex={-1}>
            {t('A journey from pain to presence', '一段从伤痛到当下的旅程')}
          </h1>
          <p className="page-lead">
            {t(
              'From corporate burnout to Reiki Master — meet Meng, the founder of MoMengt Studio, and the path that brought her here.',
              '从企业倦怠到灵气导师——认识 MoMengt Studio 的创始人 Meng，以及把她带到这里的旅程。'
            )}
          </p>
        </div>

        <div className="about-grid">
          <div className="photo">
            <img
              src="/assets/meng-portrait.jpg"
              alt="Meng, founder of MoMengt Studio, smiling by a sunlit window"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow" style={{ textAlign: 'left' }}>{t('Origin', '缘起')}</p>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.22, margin: '14px 0 22px', color: 'var(--ink)' }}>
              {t('A breakthrough between migraines', '偏头痛之间的转机')}
            </h2>
            <p style={P_STYLE}>
              {t('In 2020, I started having migraines from grinding my teeth in my sleep.', '2020年，我开始因为睡梦中磨牙而偏头痛。')}
            </p>
            <p style={{ ...P_STYLE, marginTop: 16 }}>
              {t(
                'I was working a demanding corporate job in Toronto, and stress had quietly accumulated in my body — tightening my jaw so severely that on bad days I could only eat soft food. My dentist recommended Botox injections. They helped, for a while. But numbing the pain wasn\'t the same as understanding it.',
                '尽管我觉得自己年轻，身体状况良好，工作和生活的压力在我身体里悄悄累积。下颌肌肉严重紧张的时候，我只能咀嚼软的食物。牙医建议我打肉毒杆菌，确实管用了一阵子。但麻痹疼痛，和真正理解它，是两回事。'
              )}
            </p>
            <p style={{ ...P_STYLE, marginTop: 16 }}>
              {t(
                'The turning point came during a migraine that had persisted, on and off, for over a week. Frustrated, I was willing to try almost anything. That was when I received Reiki for the first time — without fully knowing what it was. What I felt surprised me: the tension softened, and a quiet wave of calm moved through my body.',
                '转折发生在一次断断续续持续了一周多的偏头痛里。我第一次接受了灵气疗愈——尽管过程中我根本对它一无所知。令我意外的是，我紧绷的神经似乎开始松动。'
              )}
            </p>
            <p style={{ ...P_STYLE, marginTop: 16 }}>
              {t(
                'I went home and started reading. Then I started training. Eventually, I earned my Usui Reiki Master certificate. I began practicing on friends and family, and what they described often mirrored my own experience. Watching Reiki become part of how they cared for themselves — not just how I cared for myself — is what moved me to open MoMengt Studio.',
                '回家后我开始查资料，然后开始学习，最终取得了臼井灵气师（Usui Reiki Master）认证。最初我只打算通过灵气帮助身边亲友，但随着时间推移，越来越多对此抱有好奇的人找到我，于是我决定开设 MoMengt Studio。'
              )}
            </p>
            <p style={{ ...P_STYLE, marginTop: 16 }}>
              {t(
                'This is my story, not a promise of yours. Every body arrives differently, and every body responds in its own time. My work is simply to hold the space.',
                '这是我的故事，而不是对你的承诺。每个身体到来的状态不同，回应的节奏也不同。我的工作，只是守护这个空间。'
              )}
            </p>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 460 }}>
              {CREDENTIALS.map((c) => (
                <div key={c.num} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Abel', sans-serif", fontSize: 12, letterSpacing: '0.08em', color: 'var(--terra)', paddingTop: 3, whiteSpace: 'nowrap' }}>
                    {c.num}
                  </span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 3, color: 'var(--ink)' }}>
                      {lang === 'zh' ? c.zh[0] : c.en[0]}
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(42,37,32,0.6)' }}>
                      {lang === 'zh' ? c.zh[1] : c.en[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/reiki" className="btn btn-sage">
                {t('Learn about Reiki', '了解灵气 →')}
              </Link>
              <Link href="/booking" className="btn btn-terra">
                {t('Book a session', '预约疗程')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
