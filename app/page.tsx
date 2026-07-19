'use client';

import Link from 'next/link';
import HomeMotion from '@/components/HomeMotion';
import SceneDots from '@/components/SceneDots';
import { useI18n } from '@/lib/i18n';

const SCENES = [
  {
    num: '01',
    side: { en: 'Philosophy', zh: '理念' },
    title: { en: 'What is Reiki', zh: '什么是灵气' },
    desc: {
      en: 'Reiki is a gentle, non-invasive energy practice. Rei — universal, Ki — life energy: the vital force cultures around the world have long recognized as Qi, Prana, Ruach. You only need to arrive, and rest.',
      zh: '灵气是一种轻柔而非侵入式的能量疗法。你只需要到来，然后休息。',
    },
    href: '/reiki',
    photo: '/assets/scene-reiki.jpg',
    kind: 'photo',
  },
  {
    num: '02',
    side: { en: 'The Founder', zh: '创始人' },
    title: { en: 'About', zh: '关于' },
    desc: {
      en: 'In 2020, migraines from grinding my teeth led me to Reiki. What I felt surprised me: the tension softened, and a quiet wave of calm moved through my body. This is the story of how MoMengt Studio began.',
      zh: '2020年，一场偏头痛把我带向了灵气。紧绷的神经开始松动——这是 MoMengt Studio 开始的故事。',
    },
    href: '/about',
    photo: '/assets/white-orchid.jpg',
    kind: 'photo',
  },
  {
    num: '03',
    side: { en: 'Offerings', zh: '服务项目' },
    title: { en: 'Services', zh: '服务' },
    desc: {
      en: "Two ways to experience Reiki — in a calm, private studio in downtown Toronto, or by distance from anywhere in the world. Both 60 minutes, each shaped around what you're carrying that day.",
      zh: '两种方式体验灵气——多伦多市中心的安静工作室，或全球远程。皆为 60 分钟，围绕你当天的状态展开。',
    },
    href: '/services',
    photo: '/assets/palo-santo.jpg',
    kind: 'photo',
  },
  {
    num: '04',
    side: { en: 'Questions', zh: '问题' },
    title: { en: 'FAQ', zh: '常见问题' },
    desc: {
      en: 'What a session feels like, why people come, whether you need to believe for it to work, and how to prepare — answered honestly, with no pressure.',
      zh: '疗程是什么样的、大家为什么来、需不需要「相信」、如何准备——真诚作答，没有压力。',
    },
    href: '/faq',
    kind: 'dark',
  },
  {
    num: '05',
    side: { en: 'Begin', zh: '开始' },
    title: { en: 'Booking', zh: '预约' },
    desc: {
      en: 'Choose in-person or distance, a single session or a bundle, and reserve a moment. Sessions are offered Monday through Saturday, by appointment. New clients are warmly welcomed.',
      zh: '选择线下或远程、单次或套组，预约一个属于你的片刻。周一至周六，需提前预约。',
    },
    href: '/booking',
    photo: '/assets/scene-booking.jpg',
    kind: 'photo',
  },
  {
    num: '06',
    side: { en: 'A Gift', zh: '一份礼物' },
    title: { en: 'Gift Certificates', zh: '礼品卡' },
    desc: {
      en: 'Give someone an hour that belongs entirely to them — a meaningful offering for anyone moving through stress, burnout, grief, or simply the weight of a busy life.',
      zh: '送Ta一小时完全属于Ta自己的时间——给正在经历压力、倦怠或迷茫的人一份温柔的礼物。',
    },
    href: '/gift',
    photo: '/assets/scene-gift.jpg',
    kind: 'photo',
  },
  {
    num: '07',
    side: { en: 'Reach Out', zh: '联系方式' },
    title: { en: 'Contact', zh: '联系' },
    desc: {
      en: 'Curious about Reiki, unsure which session suits you, or simply wanting to say hello — there are no wrong questions. I try to respond within 48 hours.',
      zh: '对灵气好奇、不确定哪种疗程适合你，或只是想打个招呼——没有错误的问题。48小时内回复。',
    },
    href: '/contact',
    kind: 'dark',
  },
];

export default function HomePage() {
  const { lang } = useI18n();

  return (
    <>
      <HomeMotion />
      <div className="home-atmos" aria-hidden="true" />
      <div className="home-intro" id="home-intro" aria-hidden="true" />
      <SceneDots />

      {/* Act I — hero, headline lower-left */}
      <div className="home-scene hero-scene">
        <div className="hero-art" aria-hidden="true">
          <div className="art-line" />
          <div className="art-color c1" />
          <div className="art-color c2" />
          <div className="art-color c3" />
          <div className="art-color c4" />
          <div className="art-color c5" />
          <div className="art-color c6" />
        </div>
        <div className="home-hero">
          <p className="home-headline" style={{ fontFamily: "'Playfair Display'" }}>
            {lang === 'zh' ? (
              <>此刻，由内而愈。</>
            ) : (
              <>Moment by moment,<br />heal from within.</>
            )}
          </p>
        </div>
        <button
          type="button"
          className="scroll-cue"
          aria-label="Scroll to explore"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span>{lang === 'zh' ? '滚动' : 'Scroll'}</span>
          <i />
        </button>
      </div>

      {/* One scroll-scene per menu item */}
      {SCENES.map((s) => (
        <div key={s.num} className={`home-scene ${s.kind === 'photo' ? 'scene-photo' : 'scene-dark'}`}>
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
              {lang === 'zh' ? '查看' : 'Read more'}
            </Link>
          </div>
        </div>
      ))}

      {/* Testimonials — quiet placeholder band */}
      <div className="testimonial-band">
        <span className="scene-num">{lang === 'zh' ? '客户评价' : 'Testimonials'}</span>
        <p className="testimonial-note">
          {lang === 'zh'
            ? '客户的分享将在这里呈现。如果你曾体验过 Meng 的疗程，愿意分享你的感受，欢迎联系我。'
            : "Client testimonials will appear here. If you've had a session with Meng and would like to share your experience, please get in touch."}
        </p>
        <Link href="/contact" className="proj-link">
          {lang === 'zh' ? '分享你的感受' : 'Share your experience'}
        </Link>
      </div>
    </>
  );
}
