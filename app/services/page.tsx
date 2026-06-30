'use client';

import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const SESSIONS = [
  {
    num: '01',
    tag: { en: 'In-Person', zh: '面对面' },
    name: { en: 'In-Person Reiki Session', zh: '面对面灵气疗程' },
    price: 'Toronto · 60 min · $137 CAD',
    desc: {
      en: "Held in a calm, private setting in Toronto. You'll lie fully clothed — shoes off — on a treatment table while Meng works with your energy field using light touch or hands hovering just above the body.",
      zh: '在多伦多一处宁静、私密的空间进行。你将着装躺下——脱去鞋子——躺在理疗床上，由 Meng 以轻触或悬于身体上方的双手，与你的能量场协作。',
    },
    photo: '/assets/fxn-green-berries.JPG',
    alt: 'Dense green foliage with bright red berries',
  },
  {
    num: '02',
    tag: { en: 'Virtual', zh: '线上' },
    name: { en: 'Virtual Reiki Session', zh: '线上灵气疗程' },
    price: 'Worldwide · 60 min · $113 CAD',
    desc: {
      en: 'Reiki is not bound by physical distance. Distance healing draws on the same principles as in-person work, and many clients find it just as effective. All you need is a quiet space.',
      zh: '灵气不受物理距离的束缚。远距疗愈与面对面施作遵循相同的原理，许多来访者发现它同样有效。你只需要一处安静的空间。',
    },
    photo: '/assets/fxn-pink-wildflowers.JPG',
    alt: 'Pink wildflowers scattered freely',
  },
];

const BUNDLES = [
  { en: '3 In-Person Sessions', zh: '3 次面对面疗程', price: 323 },
  { en: '5 In-Person Sessions', zh: '5 次面对面疗程', price: 513 },
  { en: '3 Virtual Sessions', zh: '3 次线上疗程', price: 271 },
  { en: '5 Virtual Sessions', zh: '5 次线上疗程', price: 423 },
];

const TRAINING = [
  {
    level: { en: 'Level I · Shoden', zh: '第一级 · 初传' },
    name: { en: 'The First Door', zh: '第一道门' },
    price: '1 day · $222 CAD',
    desc: {
      en: 'Your first attunement and the foundation of self-healing. Learn the history, the hand positions, and how to give Reiki to yourself daily. No experience needed.',
      zh: '你的第一次灵授，以及自我疗愈的根基。学习历史、手位，以及如何每日为自己施作灵气。无需任何经验。',
    },
    cta: { en: 'Join the next group →', zh: '加入下一期 →' },
    btn: 'btn-sage',
  },
  {
    level: { en: 'Level II · Okuden', zh: '第二级 · 奥传' },
    name: { en: 'The Symbols', zh: '符号' },
    price: '2 days · $333 CAD',
    desc: {
      en: 'The three traditional symbols, distance healing, and working with others. For those ready to offer Reiki as a practitioner. Level I required.',
      zh: '三个传统符号、远距疗愈，以及为他人施作。适合准备好成为疗愈师的你。需先完成第一级。',
    },
    cta: { en: 'Join the next group →', zh: '加入下一期 →' },
    btn: 'btn-sage',
  },
  {
    level: { en: 'Master · Shinpiden', zh: '导师 · 神秘传' },
    name: { en: "The Teacher's Path", zh: '教师之路' },
    price: '3 days · $555 CAD',
    desc: {
      en: 'The master symbol, the art of attunement, and the path to teaching. A commitment to Reiki as a way of life. By conversation with Meng.',
      zh: '导师符号、灵授的艺术，以及通往教学之路。将灵气作为一种生活方式的承诺。需与 Meng 面谈。',
    },
    cta: { en: 'Apply to train →', zh: '申请学习 →' },
    btn: 'btn-terra',
    terra: true,
  },
];

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

        <div className="reveal">
          <p className="eyebrow">{t('Offerings', '服务项目')}</p>
          <h1 className="page-h1">{t('Choose your path', '选择你的路径')}</h1>
          <p className="page-lead">
            {t(
              "Two ways to experience Reiki — both 60 minutes. Whether you arrive in person or settle into your own space at home, the energy meets you where you are.",
              '体验灵气的两种方式——皆为 60 分钟。无论你亲临现场，还是安顿于自己的空间，能量都会在你所在之处与你相遇。'
            )}
          </p>
        </div>

        <div className="proj-grid reveal">
          {SESSIONS.map((s) => (
            <div className="proj-card" key={s.num}>
              <div className="proj-photo" style={{ backgroundImage: `url('${s.photo}')` }} role="img" aria-label={s.alt} />
              <div className="proj-body">
                <p className="proj-tag">{s.num} · {lang === 'zh' ? s.tag.zh : s.tag.en}</p>
                <p className="proj-name">{lang === 'zh' ? s.name.zh : s.name.en}</p>
                <p className="proj-price">{s.price}</p>
                <p className="proj-desc">{lang === 'zh' ? s.desc.zh : s.desc.en}</p>
                <Link href="/booking" className="proj-link">
                  {t('Reserve a moment', '预约一个片刻')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="section-rule reveal" />

        <div className="reveal">
          <p className="eyebrow">{t('Bundles', '套餐')}</p>
          <h2 className="scene-h" style={{ marginBottom: 12 }}>{t('Healing is a practice', '疗愈是一种持续的练习')}</h2>
          <p className="scene-body" style={{ marginBottom: 8 }}>
            {t('Bundles are for those ready to commit to their wellbeing over time.', '套餐适合愿意长期投入自我身心健康的你。')}
          </p>
          <table className="bundles-table">
            <thead>
              <tr>
                <th>{t('Package', '方案')}</th>
                <th>{t('Price', '价格')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {BUNDLES.map((b) => (
                <tr key={b.en}>
                  <td>{lang === 'zh' ? b.zh : b.en}</td>
                  <td className="price">${b.price} CAD</td>
                  <td>
                    <Link href="/booking" className="proj-link">{t('Book', '预约')}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 20 }}>
            <Link href="/contact" className="btn btn-sage">{t('Ask about bundles', '咨询套餐')}</Link>
          </div>
        </div>

        <div className="section-rule reveal" />

        <div className="reveal">
          <p className="eyebrow">{t('Learn the practice', '学习这门练习')}</p>
          <h2 className="scene-h" style={{ marginBottom: 12 }}>{t('Train in Reiki yourself', '亲自学习灵气')}</h2>
          <p className="scene-body" style={{ maxWidth: 640 }}>
            {t(
              "Reiki isn't a gift reserved for a few — it's a practice anyone can be attuned to. I teach in small groups, in the traditional Usui lineage, so you leave able to offer Reiki to yourself, your family, and the people you love. Each level includes attunement, hands-on practice, and a printed manual.",
              '灵气并非少数人专属的天赋——任何人都可以被灵授。我以小班形式、依传统臼井体系教学，让你结业后能为自己、家人和所爱的人施作灵气。每个级别都包含灵授、实操练习与一本印制手册。'
            )}
          </p>

          <div className="training-grid">
            {TRAINING.map((tr) => (
              <div className="training-card" key={tr.level.en}>
                <p className="training-level" style={tr.terra ? { color: 'var(--terra)' } : undefined}>
                  {lang === 'zh' ? tr.level.zh : tr.level.en}
                </p>
                <p className="training-name">{lang === 'zh' ? tr.name.zh : tr.name.en}</p>
                <p style={{ fontSize: 13, color: 'var(--terra)', marginBottom: 10 }}>{tr.price}</p>
                <p className="training-desc" style={{ marginBottom: 14 }}>{lang === 'zh' ? tr.desc.zh : tr.desc.en}</p>
                <Link href="/contact" className={`btn ${tr.btn}`} style={{ fontSize: 11, padding: '9px 16px' }}>
                  {lang === 'zh' ? tr.cta.zh : tr.cta.en}
                </Link>
              </div>
            ))}
          </div>
          <p className="cs-fine" style={{ marginTop: 18 }}>
            {t('Small groups · Toronto · Certificate & manual included', '小班教学 · 多伦多 · 含证书与手册')}
          </p>
        </div>

        <div className="section-rule reveal" />

        <div className="reveal" style={{ marginBottom: 24 }}>
          <p className="eyebrow">{t('Stay connected', '保持联系')}</p>
          <h2 className="scene-h" style={{ marginBottom: 12 }}>{t('Reiki shares & continuing practice', '灵气共修与持续练习')}</h2>
          <p className="scene-body" style={{ maxWidth: 640, marginBottom: 18 }}>
            {t(
              'Once a month, students and practitioners gather to give and receive Reiki together — a relaxed evening of practice, questions, and community. Open to anyone who has completed Level I, with me or with another teacher. Pay what you can.',
              '每月一次，学员与疗愈师齐聚，彼此施作与接受灵气——一个轻松的夜晚，练习、提问、共聚。欢迎任何完成第一级的人参加（无论师承我或其他老师）。随心付费。'
            )}
          </p>
          <Link href="/contact" className="btn btn-sage">{t('Ask about the next share', '咨询下一次共修')}</Link>
        </div>
      </div>
    </div>
  );
}
