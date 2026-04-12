import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import WaveTransition from '../components/WaveTransition';
import { DesignIcon, BrandingIcon, CodeIcon, PrototypeIcon, UserIcon } from '../components/Icons';
import { FlowingWater, JapaneseWave, OceanBubbles } from '../components/OceanWave';
import portraitImage from '../../imports/arianna-portrait.jpg';

const projects = [
  {
    id: '1',
    title: 'Tidal Brand System',
    category: 'Graphic Design + Branding',
    blurb: 'A placeholder identity case study for a brand that needed clarity, cohesion, and fewer decisions made in a sleep-deprived spiral.',
  },
  {
    id: '2',
    title: 'Current Mobile Experience',
    category: 'UI/UX Design',
    blurb: 'A placeholder app redesign focused on stronger flows, cleaner decisions, and fewer moments where a user mutters "why is this like this?"',
  },
  {
    id: '3',
    title: 'Drift Editorial Platform',
    category: 'Editorial + Digital',
    blurb: 'A placeholder publishing concept that balances expressive visuals with practical reading experiences and just a hint of overthinking.',
  },
];

const quotes = [
  'Design won’t save the world. But it damn sure makes it look good.',
  '“How’s life?” So much panic, very little disco.',
  'I’m silently judging your font choice.',
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
            className={index === 1 ? 'lg:translate-y-14' : index === 2 ? 'lg:-translate-y-6' : ''}
          >
            <Link
              to={`/project/${project.id}`}
              className="group block overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-white/95 shadow-xl transition-all hover:-translate-y-2 hover:border-[#BF8351] hover:shadow-2xl"
            >
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

              <div className="space-y-4 p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-sm text-[#BF8351]">
                    {project.category}
                  </p>
                  <span className="text-[#7DB1D4] transition-transform group-hover:translate-x-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl leading-none text-[#1E2939] transition-colors group-hover:text-[#7DB1D4]">
                  {project.title}
                </h3>

                <p className="font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565]">
                  {project.blurb}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-[#D5E7F2] px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#5B8FA3]">
                    Thesis
                  </span>
                  <span className="bg-[#E6C4A8] px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#A66D42]">
                    Process
                  </span>
                  <span className="bg-[#D5E7F2] px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#5B8FA3]">
                    Outcome
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WisdomSection() {
  return (
    <div className="relative grid gap-8 lg:grid-cols-3">
      {quotes.map((quote, index) => (
        <motion.article
          key={quote}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[1.75rem] border border-[#D5E7F2] bg-white/95 p-8 shadow-lg"
        >
          <div className="absolute inset-x-0 top-0 h-16 opacity-20">
            <FlowingWater className="h-full w-full" />
          </div>
          <p className="relative font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            {quote}
          </p>
        </motion.article>
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
                <h1 className="font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.92] text-[#1E2939] drop-shadow-[0_1px_0_rgba(255,255,255,0.28)] md:text-7xl">
                  Arianna Sanchez Narita
                </h1>
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
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-lg"
                >
                  See Selected Work
                </a>
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
                Case studies with process, not just pretty screenshots
              </h2>
            </div>
            <p className="max-w-xl font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565]">
              Each project opens into a narrative structure: thesis, ideation, approach, creative work, and role definition.
              Recruiters can skim it quickly. Curious people can dig deeper. Everyone else can admire the fact that the buttons are not having an identity crisis.
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
              A few designer truths from the tide pool
            </h2>
          </motion.div>

          <WisdomSection />
        </div>
      </section>

      <WaveTransition variant="blue" flip />

      <section className="relative px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[#D5E7F2] bg-white/95 p-8 shadow-xl md:p-10"
          >
            <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
              Contact
            </p>
            <h2 className="mt-3 font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2]">
              Easy ways to reach me
            </h2>
            <p className="mt-5 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
              If you are hiring, collaborating, or just want to discuss a project that needs clearer thinking and stronger visuals,
              I am very reachable and only mildly overattached to good type hierarchy, honest feedback, and coffee strong enough to negotiate with my overthinking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-lg"
              >
                Open Contact Page
              </Link>
              <a
                href="mailto:hello@arianna.design"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#ABCEE2] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-lg"
              >
                hello@arianna.design
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ABCEE2] to-[#BF8351] p-8 shadow-xl md:p-10"
          >
            <div className="absolute inset-0 opacity-15">
              <FlowingWater className="h-full w-full" />
            </div>
            <div className="relative">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-4xl text-white">Best fit work</h3>
              <ul className="mt-6 space-y-4 font-['Poppins:Regular',sans-serif] text-base leading-7 text-white/95">
                <li>Brand systems that need digital consistency</li>
                <li>UI / UX projects that need structure and polish</li>
                <li>Portfolio-worthy visual storytelling for campaigns</li>
                <li>Design problems that deserve more than a rushed template</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#D5E7F2] bg-white/90 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[#4A5565] md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins:Regular',sans-serif]">Copyright 2026 Arianna. Built to be clear, quick to skim, and slightly powered by caffeine.</p>
          <p className="font-['Poppins:Regular',sans-serif]">Graphic Design, UI, UX</p>
        </div>
      </footer>
    </motion.div>
  );
}
