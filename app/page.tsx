'use client';

import Link from 'next/link';
import Scene from '@/components/Scene';
import HomeMotion from '@/components/HomeMotion';
import { useI18n } from '@/lib/i18n';

const SCENES = [
  {
    num: '01',
    side: { en: 'Philosophy', zh: '理念' },
    title: { en: 'What is Reiki', zh: '什么是灵气' },
    desc: {
      en: "Reiki is a gentle, non-invasive Japanese healing practice that channels universal life energy through light touch. Rei — universal, Ki — life energy: the vital force that animates all living things, and that the body uses to restore its own balance.",
      zh: '一种温和、非侵入式的日本疗法，与你身体自身的能量协作。',
    },
    href: '/reiki',
    photo: '/assets/fxn-pink-wildflowers.JPG',
    kind: 'photo',
  },
  {
    num: '02',
    side: { en: 'The Founder', zh: '创始人' },
    title: { en: 'About', zh: '关于' },
    desc: {
      en: 'From chronic migraines and corporate burnout to Usui Reiki Master — the story of Meng, her first encounter with Reiki between migraines, and the path that brought her to open MoMengt Studio.',
      zh: '从企业倦怠到灵气导师——认识 Meng，以及把她带到这里的旅程。',
    },
    href: '/about',
    photo: '/assets/fxn-meadow-path.JPG',
    kind: 'photo',
  },
  {
    num: '03',
    side: { en: 'Offerings', zh: '服务项目' },
    title: { en: 'Services', zh: '服务' },
    desc: {
      en: 'Two ways to experience Reiki — in person in Toronto, or virtually from anywhere in the world. Both 60 minutes. Choose a single session, or commit to your wellbeing with a multi-session bundle.',
      zh: '面对面与线上疗程，以及套餐——皆为 60 分钟，皆能修复身心。',
    },
    href: '/services',
    photo: '/assets/fxn-green-berries.JPG',
    kind: 'photo',
  },
  {
    num: '04',
    side: { en: 'Questions', zh: '问题' },
    title: { en: 'FAQ', zh: '常见问题' },
    desc: {
      en: 'What a session feels like, whether you need to believe for it to work, how many sessions you might need, whether distance Reiki is effective, and how to prepare — answered honestly, with no pressure.',
      zh: '为初次到访者最常提出的问题，给出真诚的解答。',
    },
    href: '/faq',
    kind: 'dark',
  },
  {
    num: '05',
    side: { en: 'Begin', zh: '开始' },
    title: { en: 'Booking', zh: '预约' },
    desc: {
      en: 'Choose in-person or virtual, select a single session or a bundle, and reserve a moment. Sessions are offered Monday through Saturday, by appointment. New clients are warmly welcomed.',
      zh: '选择你的疗程，预约一个属于你的片刻，周一至周六。',
    },
    href: '/booking',
    photo: '/assets/fqs-stone-texture.JPG',
    kind: 'photo',
  },
  {
    num: '06',
    side: { en: 'Reach Out', zh: '联系方式' },
    title: { en: 'Contact', zh: '联系' },
    desc: {
      en: 'Curious about Reiki, unsure which session suits you, or simply wanting to say hello — there are no wrong questions. Send a note and Meng will respond within 48 hours.',
      zh: '开始之前有疑问？联系我——我会在 48 小时内回复。',
    },
    href: '/contact',
    kind: 'dark',
  },
  {
    num: '07',
    side: { en: 'A Gift', zh: '一份礼物' },
    title: { en: 'Gift Certificates', zh: '礼品卡' },
    desc: {
      en: 'Give someone you love the gift of stillness. Digital gift certificates are available for both virtual and in-person sessions, redeemable for any session type — a thoughtful offering for any occasion.',
      zh: '把静谧作为礼物，送给你所爱的人。',
    },
    href: '/gift',
    photo: '/assets/fxn-pink-wildflowers.JPG',
    kind: 'photo',
  },
];

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <>
      <HomeMotion />
      <div className="home-intro-veil" id="home-intro-veil" aria-hidden="true" />
      <div className="hero-atmos" aria-hidden="true" />

      <Scene className="hero-scene">
        <h1 className="hero-headline" style={{ fontFamily: "'Playfair Display', var(--display)" }}>
          {lang === 'zh' ? (
            <>此刻复此刻，<br />由内而愈。</>
          ) : (
            <>Moment by moment,<br />heal from within.</>
          )}
        </h1>
        <button
          type="button"
          className="scroll-cue"
          aria-label="Scroll to explore"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span>{lang === 'zh' ? '滚动' : 'Scroll'}</span>
        </button>
      </Scene>

      {SCENES.map((s) => (
        <Scene key={s.num} className={s.kind === 'photo' ? 'scene-photo' : 'scene-dark'}>
          {s.kind === 'photo' && (
            <div className="scene-panel">
              <div className="scene-bg" style={{ backgroundImage: `url('${s.photo}')` }} />
            </div>
          )}
          <div className="scene-inner">
            <span className="scene-num">{s.num}</span>
            <span className="scene-side">{lang === 'zh' ? s.side.zh : s.side.en}</span>
            <h2 className="scene-title">{lang === 'zh' ? s.title.zh : s.title.en}</h2>
            <p className="scene-intro">{lang === 'zh' ? s.desc.zh : s.desc.en}</p>
            <Link href={s.href} className="proj-link">
              {lang === 'zh' ? '查看' : 'Enter'}
            </Link>
          </div>
        </Scene>
      ))}
    </>
  );
}
