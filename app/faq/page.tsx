'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveals from '@/components/ScrollReveals';
import SectionLabel from '@/components/SectionLabel';
import { useI18n } from '@/lib/i18n';

const FAQ_DATA = [
  {
    en: ['What can I expect during a session?', "When you arrive, we'll take a few minutes to talk about what's been going on for you. Then you'll lie fully clothed — shoes off — on a comfortable treatment table, with soft music playing in the background. I'll gently place my hands on or near different areas of your body, following the energy. Most people feel warmth, a gentle tingling, or deep relaxation. Some fall asleep. Some feel emotional. Some feel very little during the session itself, but notice a shift in the days that follow. There is no correct response — every body receives Reiki in its own way."],
    zh: ['一次疗程会是怎样的？', '当你到来，我们会先花几分钟聊聊你近来的状态。然后你将着装躺下——脱去鞋子——躺在舒适的理疗床上，柔和的音乐在背景中流淌。我会将双手轻放于你身体的不同部位之上或附近，跟随能量流动。多数人会感到温暖、轻微的酥麻，或深深的放松。有人入睡，有人情绪涌动，也有人在疗程中感受不多，却在之后的日子里察觉到能量的转变。没有标准答案——每个身体都以自己的方式接收灵气。'],
  },
  {
    en: ['Is Reiki spiritual or religious?', "Reiki is spiritual in the sense that it works with something beyond the purely physical — but it is not religious, and it asks for no particular belief. People of all faiths, and of none, practice and receive Reiki. The only requirement is a willingness to be present."],
    zh: ['灵气是灵性的还是宗教性的？', '灵气是灵性的，因为它与超越纯粹物质的层面协作——但它不属于宗教，也不要求任何特定信仰。各种信仰、乃至没有信仰的人，都在练习与接受灵气。唯一需要的，是愿意临在当下。'],
  },
  {
    en: ['Do I need to believe in Reiki for it to work?', "Skepticism is welcome. Many of my clients — myself included, at the beginning — arrived curious but unconvinced. Reiki doesn't ask you to believe anything. It only asks you to show up and rest. The rest tends to take care of itself."],
    zh: ['我需要「相信」灵气才有用吗？', '欢迎带着怀疑来。我的很多客人——包括最初的我自己——都对这看不见摸不着的「气」存有疑虑。灵气不要求你相信什么，它只需要你出现，然后休息。剩下的事，往往会自己发生。'],
  },
  {
    en: ['How many sessions will I need?', "That's yours to decide, and there's no formula. Some people feel a meaningful shift after a single session; others find that a rhythm of sessions creates a deeper sense of steadiness over time. I suggest starting with one, giving yourself a week or two to notice what follows, and going from there. We can talk it through together — I'll never push you toward more than you need."],
    zh: ['我需要做几次？', '这由你决定。有人一次之后就感到明显的变化，有人则发现有节奏地接受疗愈，会带来更深、更稳的改善。如果你的身心长期处于低能量的状态，一个小时往往不够。我的建议是先做一次，给自己一两周的时间去觉察身体以及心灵的感受，再决定下一步。我们可以一起商量——我真诚希望可以用最少的疗程帮到你。'],
  },
  {
    en: ['Why do people come for Reiki?', "People come for many reasons: stress, burnout, difficulty sleeping, emotional heaviness, grief, life transitions, or simply the sense of being stretched too thin for too long. What they're seeking is usually the same thing — an hour of genuine rest, and a way back to themselves. To be clear about what Reiki is and isn't: Reiki is a complementary relaxation practice. It does not diagnose, treat, or cure any medical condition, and it is never a substitute for care from your doctor or other regulated health professionals. It works best alongside the care you're already receiving."],
    zh: ['大家为什么来做灵气？', '原因各不相同：压力、倦怠、睡不好、沉重或堵塞的情绪、人生的转折期，或者只是「绷得太紧、太久了」。需要说清楚的是：灵气是一种辅助性的疗愈手段。它不诊断、不治疗、也不治愈任何疾病，永远不能替代医生或其他注册医疗专业人员的照护。它可以与你正在接受的医疗照护并行。'],
  },
  {
    en: ['Does distance Reiki really work?', "I understand the skepticism — I had it too. What I can tell you honestly is this: a core principle of Reiki is that energy is not confined by physical proximity, and distance sessions are conducted with the same care and intention as in-person work. Clients who have experienced both often tell me the two feel remarkably similar. Whether that will be true for you, only your own experience can answer. I'd rather you arrive curious than convinced."],
    zh: ['远程灵气真的有用吗？', '我理解这个怀疑——我曾经也有。我能诚实告诉你的是：当我给远在地球另一边的客户进行远程灵气时，Ta 给我的反馈与多伦多本地客户并无不同。至于对你是否如此，只有你自己的体验能回答。比起「被说服」，我更希望你带着好奇来。'],
  },
  {
    en: ['How should I prepare?', "Wear something comfortable. Avoid a heavy meal right before your session. Most importantly, give yourself permission to receive — you don't need to do anything except rest."],
    zh: ['我该如何准备？', '穿舒服的衣服，疗程前避免吃得太饱。最重要的是：允许自己「接收」——你不需要做任何事，只需要休息。'],
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

        <p className="eyebrow">{t('Common Questions', '常见问题')}</p>
        <h1 className="page-h1" tabIndex={-1}>{t('Things you might wonder', '你或许会好奇的事')}</h1>
        <p className="page-lead" style={{ textAlign: 'left' }}>
          {t(
            "If you have a question that isn't answered here, please reach out. There are no wrong questions, only curious ones.",
            '如果这里没有解答你的疑问，欢迎与我联系。没有错误的问题，只有好奇的心。'
          )}
        </p>

        <div className="faq-list" role="list">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const [q, a] = lang === 'zh' ? item.zh : item.en;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.en[0]} role="listitem">
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
                  {a}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 52 }}>
          <p style={{ fontFamily: "'Abel', sans-serif", fontSize: 13, color: 'var(--muted)', marginBottom: 14, letterSpacing: '0.04em' }}>
            {t('Still curious?', '还想了解更多？')}
          </p>
          <Link href="/contact" className="btn btn-terra">{t('Ask Meng Directly', '直接询问 Meng')}</Link>
        </div>
      </div>
    </div>
  );
}
