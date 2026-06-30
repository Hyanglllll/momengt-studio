'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const FAQ_DATA = [
  {
    en: ['What can I expect during a session?', "When you arrive, we'll take a few minutes to talk about what's been going on for you. Then you'll lie fully clothed — shoes off — on a comfortable treatment table, with soft music playing in the background. I'll gently place my hands on or near different areas of your body, following the energy. Most people feel warmth, a gentle tingling, or a deep sense of relaxation. Some fall asleep. Some feel emotional. Some feel very little during the session itself, but notice a shift in their energy in the days or weeks that follow. There is no correct response — Reiki works differently for everyone."],
    zh: ['一次疗程会是怎样的？', '当你到来，我们会先花几分钟聊聊你近来的状态。然后你将着装躺下——脱去鞋子——躺在舒适的理疗床上，柔和的音乐在背景中流淌。我会将双手轻放于你身体的不同部位之上或附近，跟随能量流动。多数人会感到温暖、轻微的酥麻，或深深的放松。有人入睡，有人情绪涌动，也有人在疗程中感受不多，却在之后的日子里察觉到能量的转变。没有正确的反应——灵气对每个人的作用都不同。'],
  },
  {
    en: ['Is Reiki spiritual or religious?', "Reiki is spiritual in the sense that it works with something beyond the purely physical — but it is not religious, and it doesn't require any particular belief system. People of all faiths, and of no faith, both practice and receive Reiki. The only thing required is a willingness to be present."],
    zh: ['灵气是灵性的还是宗教性的？', '灵气是灵性的，因为它与超越纯粹物质的层面协作——但它不属于宗教，也不要求任何特定信仰。各种信仰、乃至没有信仰的人，都在练习与接受灵气。唯一需要的，是愿意临在当下。'],
  },
  {
    en: ['Do I need to believe in Reiki for it to work?', "Skepticism is welcome. Many of my clients — including me, at the beginning — arrived curious but unconvinced. Reiki doesn't ask you to believe anything. It only asks you to show up and rest. The rest tends to take care of itself."],
    zh: ['我需要相信灵气才会有效吗？', '怀疑是受欢迎的。我的许多来访者——包括最初的我自己——都是带着好奇却不信前来的。灵气不要求你相信任何事。它只请你到场、休息。其余的，往往会自然发生。'],
  },
  {
    en: ['How many sessions will I need?', 'That depends on you. Some people feel a meaningful shift after a single session and continue to notice benefits in the weeks that follow. Others find that a series of sessions creates deeper, more lasting change. In general, the longer or more entrenched the energy block, the more sessions may be needed. I suggest starting with one, giving your body a week or two to integrate, and going from there. We can talk through next steps together.'],
    zh: ['我需要做几次疗程？', '这取决于你。有人在一次疗程后便感到明显的转变，并在随后数周持续受益。也有人发现一系列疗程能带来更深、更持久的改变。一般而言，能量阻塞越久、越深，所需的疗程可能越多。我建议先从一次开始，给身体一两周去整合，再看下一步。我们可以一起商量。'],
  },
  {
    en: ['What conditions can Reiki help with?', 'Reiki is a complementary practice — it works alongside conventional medical care, not in place of it. Clients commonly seek Reiki for stress, anxiety, chronic pain, fatigue, emotional processing, and burnout. Many report better sleep, reduced physical tension, and a greater sense of calm and clarity.'],
    zh: ['灵气能帮助哪些状况？', '灵气是一种辅助性练习——它与常规医疗并行，而非取而代之。来访者最常为压力、焦虑、慢性疼痛、疲惫、情绪梳理与倦怠而来。许多人反馈睡眠改善、身体紧绷减轻，以及更深的平静与清明。'],
  },
  {
    en: ['Is virtual Reiki actually effective?', 'Yes — and I understand the skepticism. One of the core principles of Reiki is that energy is not confined by physical proximity. Distance sessions are conducted with the same care and intention as in-person work. Many clients who have experienced both report very little difference in how they feel afterward.'],
    zh: ['线上灵气真的有效吗？', '有效——我也理解这份怀疑。灵气的核心原理之一，便是能量不受物理距离的限制。远距疗程以与面对面同样的用心与意图进行。许多体验过两种方式的来访者表示，事后的感受几乎没有差别。'],
  },
  {
    en: ['How should I prepare?', 'Wear something comfortable. Avoid a heavy meal right before your session. Come hydrated. Most importantly, give yourself permission to receive — you don\'t need to do anything except rest.'],
    zh: ['我该如何准备？', '穿着舒适。疗程前避免大餐。保持水分充足。最重要的是，允许自己去接受——你无需做任何事，只需休息。'],
  },
  {
    en: ['Can I learn Reiki myself?', "Yes — and I would love to teach you. Reiki is passed through attunement, and anyone can be attuned. I run small training groups in the traditional Usui lineage, from Level I (self-healing) through Master. You don't need any prior experience to begin. You'll find the levels and dates on the Services page, or just reach out."],
    zh: ['我可以自己学灵气吗？', '可以——我很乐意教你。灵气透过灵授传递，任何人都可以被灵授。我以小班、依传统臼井体系授课，从第一级（自我疗愈）到导师级。开始无需任何经验。你可以在「服务」页面找到各级别与日期，或直接与我联系。'],
  },
  {
    en: ['What is your cancellation policy?', "Life happens. I ask for 24 hours' notice to reschedule or cancel, which lets me offer the time to someone else. Sessions cancelled with less notice, or missed, are charged in full. Bundles and gift certificates are valid for 12 months."],
    zh: ['你的取消政策是怎样的？', '生活总有变数。我请你提前 24 小时改期或取消，好让我能把时间留给他人。少于此通知或未到场的疗程将全额收费。套餐与礼品卡有效期为 12 个月。'],
  },
];

export default function FaqPage() {
  const { lang, t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="page-wrapper">
      <ScrollReveals />
      <SectionLabel index="04" name={['Questions', '问题']} />
      <div className="inner-wrap">
        <Link href="/" className="back-btn">
          {t('Back', '返回')}
        </Link>

        <div className="reveal">
          <p className="eyebrow">{t('Common Questions', '常见问题')}</p>
          <h1 className="page-h1">{t('Things you might wonder', '你或许会好奇的事')}</h1>
          <p className="page-lead">
            {t(
              "If you have a question that isn't answered here, please reach out. There are no wrong questions, only curious ones.",
              '如果这里没有解答你的疑问，欢迎与我联系。没有错误的问题，只有好奇的心。'
            )}
          </p>
        </div>

        <div className="faq-list reveal">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const [q, a] = lang === 'zh' ? item.zh : item.en;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.en[0]}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{q}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-ans" id={`faq-ans-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div className="faq-ans-inner">{a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 56, marginBottom: 24 }}>
          <p className="page-lead" style={{ margin: '0 auto 20px' }}>{t('Still curious?', '还想了解更多？')}</p>
          <Link href="/contact" className="btn btn-terra">{t('Ask Meng Directly', '直接询问 Meng')}</Link>
        </div>
      </div>
    </div>
  );
}
