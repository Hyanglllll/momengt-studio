'use client';

import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const SESSIONS = [
  {
    num: '01',
    rot: { en: 'In-Person', zh: '面对面' },
    name: { en: 'In-Person Reiki Session', zh: '面对面灵气疗程' },
    price: 'Toronto · 60 min · $137 CAD',
    desc: {
      en: "Held in a calm, private studio in downtown Toronto. You'll lie fully clothed — shoes off — on a treatment table while Meng works with your energy field, using light touch or hands hovering just above the body. Each session is shaped around what you're carrying that day: physical tension, emotional weight, or simply the need to be still.",
      zh: '在多伦多市中心一间安静、私密的工作室进行。每一次疗程都围绕你当天的能量状态展开。',
    },
    photo: '/assets/palo-santo.jpg',
    alt: 'Palo santo sticks with clear quartz and an amber sphere on linen',
  },
  {
    num: '02',
    rot: { en: 'Distance', zh: '远程' },
    name: { en: 'Distance Reiki Session', zh: '远程灵气疗程' },
    price: 'Worldwide · 60 min · $117 CAD',
    desc: {
      en: "Reiki tradition holds that energy is not bound by physical distance. A distance session is conducted with the same care and structure as in-person work: we connect by video, talk briefly about how you're arriving, and then you simply rest while I work. All you need is a quiet space, a comfortable position, and an open mind. Available worldwide, across all North American time zones and beyond.",
      zh: '在灵气的框架下，能量不受物理距离的限制。我们通过视频连线，先简单聊聊你此刻的状态，然后你只需要安静地休息，我会在屏幕另一端工作。你需要准备的，只是一个不被打扰的角落、一个舒服的姿势，和一颗开放的心。',
    },
    photo: '/assets/amethyst-pendulum.jpg',
    alt: 'An amethyst pendulum hanging on a fine silver chain',
  },
];

const BUNDLES = [
  { en: '3 In-Person Sessions', zh: '3 次面对面疗程', price: 331, url: 'https://square.link/u/LGc4hl2p' },
  { en: '3 Distance Sessions', zh: '3 次远程疗程', price: 281, url: 'https://square.link/u/q5RAomJP' },
];


const H2_STYLE = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 700,
  letterSpacing: '-0.025em',
  color: 'var(--ink)',
} as const;

export default function ServicesPage() {
  const { lang, t } = useI18n();

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="03" name={['Offerings', '服务项目']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <p className="eyebrow">{t('Offerings', '服务项目')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t('Choose your path', '选择你的路径')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            'Two ways to experience Reiki — both 60 minutes. Whether you arrive in person or settle into your own space at home, the energy meets you where you are.',
            '体验灵气的两种方式——皆为 60 分钟。无论你亲临现场，还是安顿于自己的空间，能量都会在你所在之处与你相遇。'
          )}
        </p>

        <div className="services-grid">
          {SESSIONS.map((s) => (
            <article className="proj-card" key={s.num}>
              <div className="proj-meta">
                <span className="proj-idx">{s.num}</span>
                <span className="proj-rot">{lang === 'zh' ? s.rot.zh : s.rot.en}</span>
              </div>
              <div className="proj-body">
                <h3>{lang === 'zh' ? s.name.zh : s.name.en}</h3>
                <p className="proj-sub">{s.price}</p>
                <p className="proj-text">{lang === 'zh' ? s.desc.zh : s.desc.en}</p>
                <Link href="/booking" className="proj-link">
                  {t('Reserve a moment', '预约一个片刻')}
                </Link>
              </div>
              <div className="proj-img">
                <img src={s.photo} alt={s.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 64, maxWidth: 700, width: '100%', textAlign: 'left' }}>
          <p className="eyebrow" style={{ textAlign: 'left' }}>{t('Bundles', '套餐')}</p>
          <h2 style={{ ...H2_STYLE, fontSize: 28, margin: '8px 0 12px' }}>
            {t('Healing is a practice', '疗愈是一种持续的练习')}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(42,37,32,0.75)', marginBottom: 24 }}>
            {t('A practice deepens with rhythm. Bundles are for those ready to make stillness a habit rather than an exception.', '把灵气疗愈融入你的生活。')}
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <tbody>
                {BUNDLES.map((b, i) => (
                  <tr key={b.en} style={i < BUNDLES.length - 1 ? { borderBottom: '1px solid var(--sand)' } : undefined}>
                    <td style={{ padding: '14px 0' }}>{lang === 'zh' ? b.zh : b.en}</td>
                    <td style={{ textAlign: 'right', color: 'var(--terra)', fontFamily: "'Abel', sans-serif", paddingRight: 16 }}>
                      ${b.price} CAD
                    </td>
                    <td style={{ textAlign: 'right', padding: '8px 0' }}>
                      <a href={b.url} target="_blank" rel="noopener noreferrer" className="bundle-book">
                        {t('Book →', '预约 →')}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-sage">{t('Ask about bundles', '咨询套餐')}</Link>
          </div>
        </div>

        <div style={{ marginTop: 72, maxWidth: 700, width: '100%', textAlign: 'left', borderTop: '1px solid var(--sand)', paddingTop: 40 }}>
          <p className="eyebrow" style={{ textAlign: 'left' }}>{t('Stay connected', '保持联系')}</p>
          <h2 style={{ ...H2_STYLE, fontSize: 24, letterSpacing: '-0.02em', margin: '8px 0 12px' }}>
            {t('Reiki shares & continuing practice', '灵气共修与持续练习')}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(42,37,32,0.64)', marginBottom: 20 }}>
            {t(
              'Once a month, students and practitioners gather to give and receive Reiki together — a relaxed evening of practice, questions, and community. Open to anyone who has completed Level I, with me or with another teacher. Pay what you can.',
              '每月一次，学员与疗愈师齐聚，彼此施作与接受灵气——一个轻松的夜晚，练习、提问、共聚。欢迎任何完成第一级的人参加（无论师承我或其他老师）。随心付费。'
            )}
          </p>
          <Link href="/contact" className="btn btn-sage">{t('Ask about the next share', '咨询下一次共修')}</Link>
        </div>

        <p style={{ marginTop: 56, maxWidth: 640, fontSize: 12.5, lineHeight: 1.8, color: 'rgba(42,37,32,0.45)', borderTop: '1px solid rgba(42,37,32,0.1)', paddingTop: 24, textAlign: 'left' }}>
          {t(
            'Reiki is a complementary relaxation practice. It is not a medical treatment, and it is not a substitute for diagnosis or care from a physician or other regulated health professional. Meng does not diagnose conditions, prescribe, or advise any changes to medical treatment. If you have a health concern, please speak with your healthcare provider — and know that Reiki will be here to complement, never replace, that care.',
            '灵气是一种辅助性的放松练习，不是医疗行为，不能替代医生或其他注册医疗专业人员的诊断与治疗。Meng 不做诊断、不开处方、也不建议任何医疗方案的更改。如有健康方面的疑虑，请咨询你的医疗服务提供者——灵气会在那份照护之侧陪伴你，而非取代它。'
          )}
        </p>
      </div>
    </div>
  );
}
