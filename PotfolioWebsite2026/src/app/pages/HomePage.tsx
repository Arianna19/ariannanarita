import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WaveTransition from '../components/WaveTransition';
import PageContactCta from '../components/PageContactCta';
import { DesignIcon, BrandingIcon, CodeIcon, PrototypeIcon } from '../components/Icons';
import { FlowingWater, JapaneseWave, OceanBubbles } from '../components/OceanWave';
import portraitImage from '../../imports/arianna-portrait.jpg';

const flavorBridgeLogo = encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Vector.png`);
const iaFinancialImage = encodeURI(`${import.meta.env.BASE_URL}ia-financial/GuilaumeNoText.png`);
const tcchIcon = encodeURI(`${import.meta.env.BASE_URL}tcch-icon-white.png`);
const tcchBackground = encodeURI(`${import.meta.env.BASE_URL}tcch-hero-bg.jpg`);

const projects = [
  {
    id: '1',
    title: 'IA Financial Group',
    category: 'Logo + Identity',
    blurb: 'A simple, professional advisor logo created with the client through a close, collaborative process focused on clarity, confidence, and legibility.',
  },
  {
    id: '3',
    title: 'The Center Cannot Hold',
    category: 'Accessibility + Website Redesign',
    blurb: 'A collaborative redesign focused on making an arts website more accessible for neurodivergent users through clearer hierarchy, stronger titles, better information organization, and more supportive navigation.',
  },
  {
    id: '2',
    title: 'Flavor Bridge',
    category: 'UX Research + App Design',
    blurb: 'A research-driven mobile concept for mixed-culture couples, built to make recipe discovery, shared cooking, and navigating different food habits feel easier and more playful.',
  },
];

const skillsPreviewTracks = [
  {
    tone: 'blue',
    items: ['Figma', 'Adobe Suite', 'Graphic systems', 'Visual storytelling'],
  },
  {
    tone: 'warm',
    items: ['UX flows', 'UI polish', 'Prototyping', 'User-centered thinking'],
  },
  {
    tone: 'blue',
    items: ['Sound design', 'Creative collaboration', 'Immersive direction'],
  },
];

const quotes = [
  "Design won't save the world. But it damn sure makes it look good.",
  "\"How's life?\" So much panic, very little disco.",
  "I'm silently judging your font choice.",
  'One mental breakdown later.',
  '"Are you and adult?" Me: Yeah, but like not on purpose or anything.',
];

function SelectedWorkSection() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15">
        <JapaneseWave className="absolute -left-10 top-0 h-52 w-96" />
        <FlowingWater className="absolute right-0 top-44 h-44 w-full opacity-80" />
        <FlowingWater className="absolute left-0 top-[22rem] h-44 w-full opacity-60" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <OceanBubbles className="absolute left-[8%] top-24 h-20 w-20 opacity-40" />
        <OceanBubbles className="absolute right-[10%] top-80 h-28 w-28 opacity-30" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className={
              index === 1
                ? 'lg:translate-y-14'
                : index === 2
                  ? 'lg:-translate-y-6'
                  : ''
            }
          >
            <Link
              to={`/project/${project.id}`}
              className="group block overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-white/95 shadow-xl transition-all hover:-translate-y-2 hover:border-[#BF8351] hover:shadow-2xl dark:border-[#334155] dark:bg-[#111827]/92 dark:hover:border-[#BF8351]"
            >
              {project.id === '2' ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_top,#ffd561_0%,#ddb717_28%,#a8a70c_100%)] dark:bg-[radial-gradient(circle_at_top,#7a6a1b_0%,#5b520d_26%,#353609_100%)]">
                  <div className="absolute inset-0 opacity-20">
                    <FlowingWater className="absolute bottom-0 left-0 h-36 w-full text-white" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-full w-full items-center justify-center">
                      <div className="absolute h-52 w-52 rounded-full bg-[#C8DDBD]/80 blur-2xl md:h-64 md:w-64" />
                      <img src={flavorBridgeLogo} alt="Flavor Bridge logo" className="relative h-48 w-48 object-contain drop-shadow-[0_18px_28px_rgba(129,32,28,0.22)] md:h-60 md:w-60" />
                    </div>
                  </div>
                </div>
              ) : project.id === '1' ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF3FF] dark:bg-[#162338]">
                  <img
                    src={iaFinancialImage}
                    alt="IA Financial Group brand preview"
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                </div>
              ) : project.id === '3' ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0F172A] dark:bg-[#09101d]">
                  <img
                    src={tcchBackground}
                    alt="The Center Cannot Hold background artwork"
                    className="h-full w-full object-cover opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/45 via-[#1e3a8a]/25 to-[#111827]/70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={tcchIcon}
                      alt="The Center Cannot Hold logo"
                      className="h-24 w-24 object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.35)] md:h-28 md:w-28"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#D5E7F2] via-white to-[#E6C4A8]">
                  <div className="absolute inset-0 opacity-20">
                    <JapaneseWave className="h-full w-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-[1.5rem] border-2 border-dashed border-[#BF8351]/50 bg-white/70 px-8 py-10 text-center backdrop-blur-sm">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.2em] text-[#BF8351]">
                        Placeholder Visual
                      </p>
                      <p className="mt-3 font-['Ojuju:Bold',sans-serif] text-2xl text-[#7DB1D4]">
                        Drop project image here later
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4 p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-sm text-[#BF8351]">{project.category}</p>
                  <span className="text-[#7DB1D4] transition-transform group-hover:translate-x-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl leading-none text-[#1E2939] transition-colors group-hover:text-[#7DB1D4] dark:text-[#F8FAFC] dark:group-hover:text-[#ABCEE2]">
                  {project.title}
                </h3>

                <p className="font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565] dark:text-[#CBD5E1]">{project.blurb}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {(
                    project.id === '2'
                      ? ['Taste profiles', 'Recipe matching', 'Shared cooking']
                    : project.id === '1'
                        ? ['Client-led', 'Logo', 'Identity']
                        : ['Accessibility', 'Hierarchy', 'Navigation']
                  ).map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs ${
                        tagIndex % 2 === 0
                          ? 'bg-[#D5E7F2] text-[#5B8FA3] dark:bg-[#1e293b] dark:text-[#ABCEE2]'
                          : 'bg-[#E6C4A8] text-[#A66D42] dark:bg-[#3f2d24] dark:text-[#E6C4A8]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsPreviewSection() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#D5E7F2] bg-white/80 px-5 py-8 shadow-[0_18px_48px_rgba(125,177,212,0.08)] md:px-8">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col items-center gap-4 text-center">
        <div className="max-w-2xl">
          <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
            Skills Preview
          </p>
          <h3 className="mt-3 font-['Ojuju:Bold',sans-serif] text-3xl text-[#5B8FA3] md:text-4xl">
            Tiny teaser of some of my skills
          </h3>
        </div>
        <Link
          to="/biography#skills-tools"
          className="inline-flex items-center gap-2 rounded-full border border-[#D5E7F2] bg-white/80 px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-sm text-[#7DB1D4] transition-colors hover:bg-[#F1F8FC]"
        >
          See full set
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-center gap-3 text-[#7DB1D4] md:hidden">
        <ChevronLeft className="h-4 w-4" />
        <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.14em]">
          Swipe through
        </p>
        <ChevronRight className="h-4 w-4" />
      </div>

      <div className="mx-auto flex max-w-7xl snap-x snap-mandatory justify-center gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {skillsPreviewTracks.map((track, index) => (
          <article
            key={`${track.items[0]}-${index}`}
            className={`min-w-[16rem] snap-start rounded-[1.5rem] border p-4 shadow-lg md:min-w-[19rem] ${
              track.tone === 'warm' ? 'border-[#E6C4A8] bg-[#FFF8F3]/95' : 'border-[#D5E7F2] bg-white/95'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {track.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-2 font-['Poppins:Medium',sans-serif] text-xs ${
                    track.tone === 'warm' ? 'bg-[#E6C4A8] text-[#A66D42]' : 'bg-[#D5E7F2] text-[#5B8FA3]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function WisdomSection() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] px-4 py-4 md:min-h-[38rem] md:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <FlowingWater className="absolute left-0 top-6 h-24 w-full" />
        <FlowingWater className="absolute bottom-8 left-0 h-24 w-full opacity-70" />
      </div>

      {quotes.map((quote, index) => (
        <motion.div
          key={quote}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          viewport={{ once: true }}
          className={`relative ${
            index === 0
              ? 'ml-[2%] mt-1 max-w-lg rotate-[-3deg] text-left'
              : index === 1
                ? 'mx-auto mt-10 max-w-xl text-center'
                : index === 2
                  ? 'ml-auto mr-[4%] mt-10 max-w-md rotate-[2deg] text-right'
                  : index === 3
                    ? 'ml-[10%] mt-14 max-w-sm rotate-[-1deg] text-left'
                    : 'mr-[6%] ml-auto mt-12 max-w-2xl text-justify'
          }`}
        >
          {index === 0 ? (
            <p className="font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.98] italic text-[#5B8FA3] drop-shadow-[0_10px_20px_rgba(255,255,255,0.55)] md:text-5xl">
              {quote}
            </p>
          ) : index === 1 ? (
            <p className="font-['Ojuju:Regular',sans-serif] text-3xl leading-[1.02] text-[#BF8351] drop-shadow-[0_10px_20px_rgba(255,255,255,0.55)] md:text-4xl">
              "How's life?"
              <br />
              So much panic, very little disco.
            </p>
          ) : index === 2 ? (
            <p className="font-['Poppins:SemiBold',sans-serif] text-4xl leading-[0.98] uppercase tracking-[0.03em] text-[#7DB1D4] drop-shadow-[0_10px_20px_rgba(255,255,255,0.55)] md:text-5xl">
              {quote}
            </p>
          ) : index === 3 ? (
            <p className="font-['Ojuju:Bold',sans-serif] text-2xl leading-[0.98] italic text-[#1E2939] drop-shadow-[0_10px_20px_rgba(255,255,255,0.55)] md:text-3xl">
              One mental
              <br />
              breakdown later.
            </p>
          ) : (
            <p className="font-['Poppins:Medium',sans-serif] text-3xl leading-[1.08] italic text-[#5B8FA3] drop-shadow-[0_10px_20px_rgba(255,255,255,0.55)] md:text-4xl">
              "Are you and adult?" Me: Yeah,
              <br />
              but like not on purpose or anything.
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const location = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const rawHash = location.hash || window.location.hash;
    const targetId = rawHash.split('#').filter(Boolean).at(-1);

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <section ref={heroRef} className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-12">
          <FlowingWater className="absolute bottom-0 left-0 h-44 w-full opacity-60" />
        </div>

        <motion.div style={{ y: heroY }} className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="max-w-4xl">
                  <h1 className="font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.88] text-[#1E2939] drop-shadow-[0_1px_0_rgba(255,255,255,0.28)] md:text-7xl">
                    Arianna
                  </h1>
                  <h1 className="mt-2 ml-8 font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.88] text-[#BF8351] drop-shadow-[0_1px_0_rgba(255,255,255,0.28)] md:ml-20 md:text-6xl">
                    Sanchez Narita
                  </h1>
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-base uppercase tracking-[0.16em] text-[#BF8351]">
                  Graphic Designer, UI Designer, UX Thinker
                </p>
                <p className="max-w-2xl font-['Ojuju:Bold',sans-serif] text-3xl leading-[1.02] text-[#5B8FA3] md:text-5xl">
                  Designing brands, interfaces, and digital experiences that feel smart, human, and actually usable.
                </p>
              </div>

              <p className="max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#1E2939] md:text-xl">
                I build visual systems and user experiences for organizations that want clear thinking, strong aesthetics,
                and fewer design decisions that make everyone quietly panic in meetings. Powered by caffeine, overthinking,
                and a suspicious amount of care for spacing.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#work"
                  className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-lg"
                >
                  See Selected Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#D6A882] p-6 shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <JapaneseWave className="h-full w-full" />
                </div>
                <div className="relative grid min-h-[30rem] place-items-center">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/20 shadow-xl backdrop-blur-sm">
                    <img
                      src={portraitImage}
                      alt="Portrait illustration for Arianna Sanchez Narita"
                      className="h-[22rem] w-[22rem] object-cover sm:h-[24rem] sm:w-[24rem]"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-10 hidden w-48 rounded-[1.5rem] border border-[#D5E7F2] bg-white/90 p-4 shadow-lg md:block">
                <p className="font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.18em] text-[#7DB1D4]">
                  Currently focused on
                </p>
                <p className="mt-3 font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939]">
                  Graphic systems, interface design, and making polished work while running on less sleep than ideal.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <WaveTransition variant="blue" />

      <section className="relative px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
              Quick Snapshot
            </p>
            <h2 className="mt-3 font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2]">
              What I bring to a team
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: DesignIcon,
                title: 'UI / UX',
                text: 'Clear interaction design, stronger hierarchy, and interfaces that respect the person using them instead of testing their patience for sport.',
              },
              {
                icon: BrandingIcon,
                title: 'Graphic Design',
                text: 'Campaigns, identity systems, and visuals that can carry a message without shouting at everyone or looking like they were approved during a 2 a.m. panic.',
              },
              {
                icon: PrototypeIcon,
                title: 'Process',
                text: 'Research, ideation, iteration, and rationale so the work has more backbone than vibes alone, even when the coffee is doing most of the emotional support.',
              },
              {
                icon: CodeIcon,
                title: 'Systems Thinking',
                text: 'Design systems and reusable decisions that stop projects from reinventing every button every time somebody has a fresh overthinking episode.',
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-[#D5E7F2] bg-white/90 p-8 shadow-lg"
              >
                <item.icon className="mb-5 h-14 w-14" />
                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939]">{item.title}</h3>
                <p className="mt-4 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565]">{item.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-16">
            <SkillsPreviewSection />
          </div>
        </div>
      </section>

      <WaveTransition variant="orange" flip />

      <section id="work" className="relative px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                Selected Work
              </p>
              <h2 className="mt-3 font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2]">
                Here's some work I did
              </h2>
            </div>
            <p className="max-w-xl font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565]">
              Each project opens into the thinking behind it, the decisions that shaped it, and the final work itself.
            </p>
          </motion.div>

          <SelectedWorkSection />
        </div>
      </section>

      <WaveTransition variant="gradient" />

      <section className="relative px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
              Words of Wisdom
            </p>
            <h2 className="mt-3 font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2]">
              Thoughts I have had while moving one thing by 2 pixels
            </h2>
          </motion.div>

          <WisdomSection />
        </div>
      </section>

      <WaveTransition variant="blue" flip />

      <section className="relative px-4 py-24 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <PageContactCta
            label="Reach Out"
            title="If the work made sense and the jokes did not scare you off, we should talk."
            body="For freelance work, collaborations, or projects that need clarity, personality, and fewer weird UX decisions, I am one email away."
            accent="mixed"
          />
        </motion.div>
      </section>

      <footer className="border-t border-[#D5E7F2] bg-white/90 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[#4A5565] md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins:Regular',sans-serif]">Copyright 2026 Arianna. Built to be clear and slightly powered by caffeine.</p>
          <p className="font-['Poppins:Regular',sans-serif]">Graphic Design, UI, UX</p>
        </div>
      </footer>
    </motion.div>
  );
}
