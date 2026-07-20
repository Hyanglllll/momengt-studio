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

const TRAINING = [
  {
    level: { en: 'Level I · Shoden', zh: '第一级 · 初传' },
    name: { en: 'The First Door', zh: '第一道门' },
    meta: '1 day · $222 CAD',
    desc: {
      en: 'Your first attunement and the foundation of self-healing. Learn the history, the hand positions, and how to give Reiki to yourself daily. No experience needed.',
      zh: '你的第一次灵授，以及自我疗愈的根基。学习历史、手位，以及如何每日为自己施作灵气。无需任何经验。',
    },
    cta: { en: 'Join the next group →', zh: '加入下一期 →' },
  },
  {
    level: { en: 'Level II · Okuden', zh: '第二级 · 奥传' },
    name: { en: 'The Symbols', zh: '符号' },
    meta: '2 days · $333 CAD',
    desc: {
      en: 'The three traditional symbols, distance healing, and working with others. For those ready to offer Reiki as a practitioner. Level I required.',
      zh: '三个传统符号、远距疗愈，以及为他人施作。适合准备好成为疗愈师的你。需先完成第一级。',
    },
    cta: { en: 'Join the next group →', zh: '加入下一期 →' },
  },
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

        <div style={{ marginTop: 80, maxWidth: 960, width: '100%', textAlign: 'left' }}>
          <p className="eyebrow" style={{ textAlign: 'left' }}>{t('Learn the practice', '学习这门练习')}</p>
          <h2 style={{ ...H2_STYLE, fontSize: 28, margin: '8px 0 12px' }}>
            {t('Train in Reiki yourself', '亲自学习灵气')}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(42,37,32,0.66)', marginBottom: 32, maxWidth: 560 }}>
            {t(
              "Reiki isn't a gift reserved for a few — it's a practice anyone can be attuned to. I teach in small groups, in the traditional Usui lineage, so you leave able to offer Reiki to yourself, your family, and the people you love. Each level includes attunement, hands-on practice, and a printed manual.",
              '灵气并非少数人专属的天赋——任何人都可以被灵授。我以小班形式、依传统臼井体系教学，让你结业后能为自己、家人和所爱的人施作灵气。每个级别都包含灵授、实操练习与一本印制手册。'
            )}
          </p>

          <div className="training-grid">
            {TRAINING.map((tr) => (
              <div className="booking-card" key={tr.level.en} style={{ background: 'var(--sand)', cursor: 'default' }}>
                <p className="card-type">{lang === 'zh' ? tr.level.zh : tr.level.en}</p>
                <h3>{lang === 'zh' ? tr.name.zh : tr.name.en}</h3>
                <p className="card-meta" style={{ marginBottom: 14 }}>{tr.meta}</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(42,37,32,0.75)', marginBottom: 20 }}>
                  {lang === 'zh' ? tr.desc.zh : tr.desc.en}
                </p>
                <Link href="/contact" className="btn btn-sage" style={{ alignSelf: 'flex-start' }}>
                  {lang === 'zh' ? tr.cta.zh : tr.cta.en}
                </Link>
              </div>
            ))}
            <div className="booking-card" style={{ background: 'var(--sand)', cursor: 'default' }}>
              <p className="card-type" style={{ color: 'var(--muted)' }}>{t('Master · Shinpiden', '导师 · 神秘传')}</p>
              <h3>{t("The Teacher's Path", '教师之路')}</h3>
              <p className="card-meta" style={{ marginBottom: 14 }}>{t('Launching soon', '即将推出')}</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(42,37,32,0.75)', marginBottom: 20 }}>
                {t(
                  'The master symbol, the art of attunement, and the path to teaching. A commitment to Reiki as a way of life. This offering is in preparation — stay tuned.',
                  '导师符号、灵授的艺术，以及通往教学之路。将灵气作为一种生活方式的承诺。此课程正在筹备中，敬请期待。'
                )}
              </p>
              <span
                className="btn btn-sage"
                style={{ alignSelf: 'flex-start', opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}
                aria-disabled="true"
              >
                {t('Coming soon', '即将推出')}
              </span>
            </div>
          </div>
          <p style={{ marginTop: 24, fontFamily: "'Abel', sans-serif", fontSize: 12, letterSpacing: '0.06em', color: 'var(--muted)', textTransform: 'uppercase' }}>
            {t('Small groups · Toronto · Certificate & manual included', '小班教学 · 多伦多 · 含证书与手册')}
          </p>
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
