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

        <div className="intro-centered reveal">
          <Seal />
          <p className="eyebrow">{t('Ancient Wisdom', '古老智慧')}</p>
          <h1 className="page-h1" tabIndex={-1}>
            {t('What is Reiki?', '什么是灵气？')}
          </h1>
          <p className="page-lead" style={{ fontWeight: 400, color: 'rgba(239,233,221,0.78)', fontSize: 19 }}>
            {t(
              "Reiki is a gentle, non-invasive healing practice that works with your body's natural energy.",
              '灵气是一种温和、非侵入式的疗法，与你身体自身的能量协作。'
            )}
          </p>
        </div>

        <div className="photo reveal" style={{ maxWidth: 680, height: 420, marginBottom: 48 }}>
          <img
            src="/assets/fxn-pink-wildflowers.JPG"
            alt="Delicate pink wildflowers in full bloom, shot on film"
            loading="lazy"
          />
        </div>

        <div className="prose reveal" style={{ maxWidth: 640, textAlign: 'left' }}>
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
          <p>
            {t(
              "A Reiki practitioner acts as a conduit for this universal energy, placing hands gently on or near the body to encourage energy to flow freely. When energy moves without obstruction, the body's own capacity for healing is restored.",
              '灵气疗愈师如同这股宇宙能量的通道，将双手轻放于身体之上或附近，引导能量自由流动。当能量不受阻碍地流动时，身体自身的疗愈力便得以恢复。'
            )}
          </p>
          <p>
            {t(
              'Sessions are quiet and fully clothed. Everyone experiences Reiki differently — some feel warmth or a gentle tingling, others a deep sense of calm. There is no single right response. You only need to arrive and rest.',
              '疗程安静、无需更衣。每个人对灵气的感受都不同——有人感到温暖或轻微的酥麻，有人则是深深的平静。没有唯一正确的反应。你只需到来，然后休息。'
            )}
          </p>

          <h2>{t('Reiki and Qi — Two traditions, one truth', '灵气与气——两种传统，同一真理')}</h2>
          <p>
            {lang === 'zh' ? (
              <>
                如果你在「气」（氣）的概念中长大——这股贯穿中医、针灸与太极的生命力——灵气会让你倍感熟悉。
              </>
            ) : (
              <>
                If you've grown up with the concept of <em>Qi</em> (氣) — the vital life force at the
                heart of Traditional Chinese Medicine, acupuncture, and Tai Chi — Reiki may feel
                immediately familiar.
              </>
            )}
          </p>
          <p>
            {t(
              'Both traditions recognize that the body is more than physical. It carries energy. And when that energy stagnates, becomes blocked, or falls out of balance, we feel it — as pain, fatigue, anxiety, or a quiet sense of disconnection.',
              '两种传统都认识到，身体不只是物质。它承载着能量。当能量停滞、阻塞或失衡时，我们会感受到它——化作疼痛、疲惫、焦虑，或一种隐隐的疏离感。'
            )}
          </p>
          <p>
            {t(
              "Where Qi describes the energy that flows within the body and the natural world, Reiki works by channeling universal energy through a practitioner to support the body's own healing. Different traditions, pointing toward the same truth.",
              '「气」描述的是流动于身体与自然之中的能量，而灵气则透过疗愈师引导宇宙能量，支持身体自身的疗愈。不同的传统，指向同一个真理。'
            )}
          </p>

          <h2>{t('What Reiki can support', '灵气能带来的支持')}</h2>
          <p>
            {t(
              "Reiki is a complementary practice — it works alongside medical care, never in place of it. It doesn't claim to cure. What it does, gently and consistently, is help the body settle into the state where its own healing can begin. Clients most often come to me carrying one of these:",
              '灵气是一种辅助性的练习——它与医疗照护并行，绝不取而代之。它不声称治愈疾病。它温和而持续地做的，是帮助身体回到那个能够开始自我疗愈的状态。来访者最常带着以下其中一种困扰前来：'
            )}
          </p>
        </div>

        <div className="support-grid reveal" style={{ maxWidth: 880 }}>
          {SUPPORT.map((item) => (
            <div className="support-item" key={item.en[0]}>
              <p className="support-title">{lang === 'zh' ? item.zh[0] : item.en[0]}</p>
              <p className="support-desc">{lang === 'zh' ? item.zh[1] : item.en[1]}</p>
            </div>
          ))}
        </div>

        <div className="cta-row reveal" style={{ marginTop: 56, marginBottom: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
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
