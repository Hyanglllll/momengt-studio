'use client';

import Link from 'next/link';
import Seal from '@/components/Seal';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const SUPPORT = [
  {
    en: ['Stress & overwhelm', 'For the nervous system that has forgotten how to rest.'],
    zh: ['压力与不堪重负', '为那个已忘记如何休息的神经系统。'],
  },
  {
    en: ['Anxiety & racing thoughts', "A quieting of the mind that doesn't require effort."],
    zh: ['焦虑与纷飞的思绪', '一种无需费力的心灵宁静。'],
  },
  {
    en: ['Sleep & fatigue', 'Deeper rest, and more energy on the other side of it.'],
    zh: ['睡眠与疲惫', '更深的休息，以及随之而来的更多能量。'],
  },
  {
    en: ['Chronic tension & pain', 'The kind that lives in the jaw, the shoulders, the back.'],
    zh: ['慢性紧绷与疼痛', '那种盘踞在下颌、肩膀与后背的疼痛。'],
  },
  {
    en: ['Emotional processing', 'A safe, quiet space for what needs to move through.'],
    zh: ['情绪的梳理', '为需要流经的情绪，提供一处安全而安静的空间。'],
  },
  {
    en: ['Burnout & disconnection', 'Finding your way back to yourself, moment by moment.'],
    zh: ['倦怠与疏离', '一刻接着一刻，找到回到自己的路。'],
  },
];

export default function ReikiPage() {
  const { lang, t } = useI18n();

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="01" name={['Philosophy', '理念']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <div className="intro-centered">
          <Seal />
          <p className="eyebrow">{t('Ancient Wisdom', '古老智慧')}</p>
          <h1 className="page-h1" tabIndex={-1}>
            {t('What is Reiki?', '什么是灵气？')}
          </h1>
          <p className="page-lead" style={{ fontWeight: 400, color: 'rgba(42,37,32,0.78)', fontSize: 19 }}>
            {t('Reiki is a gentle, non-invasive energy practice.', '灵气是一种轻柔而非侵入式的能量疗法。')}
          </p>
        </div>

        <div className="photo" style={{ maxWidth: 680, width: '100%', marginBottom: 48 }}>
          <img
            src="/assets/stones-circle.jpg"
            alt="Seven healing stones arranged in a circle on soft linen"
            loading="lazy"
          />
        </div>

        <div style={{ maxWidth: 640, textAlign: 'left', fontSize: 15, lineHeight: 1.82, color: 'rgba(42,37,32,0.72)' }}>
          <p>
            {lang === 'zh' ? (
              <>
                「灵气（Reiki）」一词源自两个日文汉字：Rei（宇宙的）与 Ki（生命能量）。它们共同指向世界各地文化早已以不同名字认识的存在——气、Prana、Ruach——那股让万物生生不息的生命力。
              </>
            ) : (
              <>
                The word <em>Reiki</em> comes from two Japanese kanji: <em>Rei</em> (universal) and{' '}
                <em>Ki</em> (life energy). Together, they point to something cultures around the world
                have long recognized under different names — Qi, Prana, Ruach — the vital force that
                animates all living things.
              </>
            )}
          </p>
          <p style={{ marginTop: 16 }}>
            {t(
              'In a session, the practitioner acts as a conduit for this universal energy, placing hands gently on or just above the body to invite energy to flow freely. When energy moves without obstruction, the body is given what modern life rarely allows it: the stillness in which rest and rebalancing become possible.',
              '疗愈师作为宇宙能量的通道，将双手轻放或悬于顾客的身体上，引导能量流动。当能量不受阻碍地流动时，身体便获得了现代生活中难得的东西：让休息与重新平衡成为可能的静谧。'
            )}
          </p>
          <p style={{ marginTop: 16 }}>
            {t(
              'Sessions are quiet and fully clothed. Everyone experiences Reiki differently — some feel warmth or a gentle tingling, others a deep sense of calm. There is no single right response. You only need to arrive and rest.',
              '疗程安静、无需更衣。每个人对灵气的感受都不同——有人感到温暖或轻微的酥麻，有人则是深深的平静。没有唯一正确的反应。你只需到来，然后休息。'
            )}
          </p>

          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: '44px 0 16px', color: 'var(--ink)' }}>
            {t('Reiki and Qi — two traditions, one recognition', '灵气与「气」——两种传统，同一种照见')}
          </h2>
          <p>
            {lang === 'zh' ? (
              <>
                如果你在「气」（氣）的概念中长大——这股贯穿中医、针灸与太极的生命力——灵气会让你倍感熟悉。
              </>
            ) : (
              <>
                If you grew up with the concept of <em>Qi</em> (氣) — the vital life force at the
                heart of Traditional Chinese Medicine, acupuncture, and Tai Chi — Reiki may feel
                immediately familiar.
              </>
            )}
          </p>
          <p style={{ marginTop: 16 }}>
            {t(
              'Both traditions begin from the same observation: the body is more than physical. It carries energy. And when that energy stagnates or falls out of balance, we feel it — as tension, fatigue, restlessness, or a quiet sense of disconnection from ourselves.',
              '两种传统始于同一个观察：身体不止是物质的，它承载着能量。当能量停滞、瘀堵或失衡，我们会感觉到紧绷，疲惫，心绪不宁，或是一种说不清的、与自己失去联结的感觉。'
            )}
          </p>
          <p style={{ marginTop: 16 }}>
            {t(
              "Where Qi describes the energy flowing within the body and the natural world, Reiki works by channeling universal energy through a practitioner to support the body's own movement toward balance. Two traditions, pointing toward the same recognition.",
              '「气」描述的是流动于身体与自然之中的能量；灵气则是疗愈师引导宇宙能量，来支持身体自己走向平衡的过程。'
            )}
          </p>
        </div>

        <div style={{ maxWidth: 640, width: '100%', textAlign: 'left', marginTop: 48 }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20, color: 'var(--ink)' }}>
            {t('What Reiki can support', '灵气能带来的支持')}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(42,37,32,0.72)', marginBottom: 24 }}>
            {t(
              "Reiki is a complementary practice — it works alongside medical care, never in place of it. It doesn't claim to cure. What it does, gently and consistently, is help the body settle into the state where its own healing can begin. Clients most often come to me carrying one of these:",
              '灵气是一种辅助性的练习——它与医疗照护并行，绝不取而代之。它不声称治愈疾病。它温和而持续地做的，是帮助身体回到那个能够开始自我疗愈的状态。来访者最常带着以下其中一种困扰前来：'
            )}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }}>
            {SUPPORT.map((item) => (
              <div key={item.en[0]} style={{ borderTop: '1px solid var(--sand)', paddingTop: 12 }}>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, color: 'var(--ink)' }}>
                  {lang === 'zh' ? item.zh[0] : item.en[0]}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(42,37,32,0.6)', lineHeight: 1.6 }}>
                  {lang === 'zh' ? item.zh[1] : item.en[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn btn-sage">
            {t('Explore sessions', '探索疗程')}
          </Link>
          <Link href="/booking" className="btn btn-terra">
            {t('Book now', '立即预约')}
          </Link>
        </div>
      </div>
    </div>
  );
}
