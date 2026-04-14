import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import WaveTransition from '../components/WaveTransition';
import PageContactCta from '../components/PageContactCta';
import { LightbulbIcon } from '../components/Icons';
import { FlowingWater } from '../components/OceanWave';

const statementText =
  'My work combines UX and UI design with graphic design to create digital experiences that feel intuitive, personal, and a little less serious. I am interested in how design shapes not just what people do, but how they feel while doing it. In a time where everything feels increasingly serious and overwhelming, I use my work to bring lightness back into everyday interactions. My goal is to design interfaces that feel easy, familiar, and quietly uplifting. I primarily work with Figma and the Adobe Creative Suite to build clean, structured interfaces that balance usability with personality. While I value minimal, sleek design, I am equally drawn to subtle details that add character like the hidden arrow in the FedEx logo, which reminds me that the smallest, almost invisible decisions can completely transform how something is experienced. That idea drives my work: thoughtful design should reward attention without demanding it. In my UI/UX projects, I explore how humor and relatability can coexist with clarity. A simple interaction, a playful line of text, or an unexpected visual can turn a routine task into something memorable without sacrificing function. Whether it is through tone, layout, or interaction, I design things that feel like they actually want you to succeed, not fight you the whole time. At its core, my work is about making design feel lighter and more approachable. I am motivated by the idea that if my creations can make someone smile, even briefly, it has already done more than just function. I want my designs to feel like they were made by someone real, not something distant or overly serious. If my work is simple enough for my grandma to understand but still engaging enough that younger generations enjoy using it, then I have done my job.';

const readingMoodQuotes = [
  "Life. A party, but I'm the pinata.",
  "At the end of the day, it's night.",
  "One day, I'm gonna make the onions cry.",
  "When life shuts a door...open it again. It's a door. That's how they work.",
];

function MoodScrollerSection() {
  const moodRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: moodRef,
    offset: ['start start', 'end start'],
  });
  const trackX = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={moodRef} className="relative h-[280vh] md:h-[300vh]">
      <div className="sticky top-24 overflow-hidden py-6 md:top-28 md:py-8">
        <div className="px-5 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col gap-2">
              <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.18em] text-[#BF8351]">
                Relatable Mood
              </p>
              <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#5B8FA3] md:text-4xl">
                The side commentary kicks in after the statement.
              </h2>
            </div>

            <motion.div style={{ x: trackX }} className="flex w-max gap-5 pr-5 md:gap-6">
              {readingMoodQuotes.map((quote, index) => (
                <div
                  key={quote}
                  className={`flex min-h-[24vh] w-[52vw] max-w-[34rem] shrink-0 flex-col justify-between overflow-hidden rounded-[1.6rem] border p-4 shadow-2xl md:min-h-[28vh] md:p-5 ${
                    index % 2 === 0
                      ? 'border-[#D5E7F2] bg-white/95'
                      : 'border-[#E6C4A8] bg-[#FFF8F3]/95'
                  }`}
                >
                  <div className="pointer-events-none absolute opacity-0" />
                  <div className="space-y-4">
                    <span className="inline-flex rounded-full bg-[#F1F8FC] px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-[10px] uppercase tracking-[0.16em] text-[#5B8FA3]">
                      Scroll-held mood board
                    </span>
                    <p
                      className={`max-w-4xl ${
                        index === 0
                      ? "font-['Ojuju:Bold',sans-serif] text-3xl italic leading-[0.98] text-[#5B8FA3] md:text-5xl"
                      : index === 1
                            ? "font-['Poppins:ExtraBold',sans-serif] text-2xl uppercase leading-[1] tracking-[0.04em] text-[#BF8351] md:text-4xl"
                            : index === 2
                              ? "font-['Ojuju:Regular',sans-serif] text-3xl leading-[1] text-[#1E2939] md:text-5xl"
                              : "font-['Poppins:Medium',sans-serif] text-xl italic leading-[1.18] text-[#5B8FA3] md:text-3xl"
                      }`}
                    >
                      {quote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-2 flex-1 rounded-full bg-[#D5E7F2]/70">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#BF8351] via-[#ABCEE2] to-[#5B8FA3]"
                        style={{ width: `${((index + 1) / readingMoodQuotes.length) * 100}%` }}
                      />
                    </div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.16em] text-[#BF8351]">
                      {index + 1} / {readingMoodQuotes.length}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ArtistStatementPage() {
  const statementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const statementY = useTransform(scrollYProgress, [0, 1], [32, -18]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.45, 1, 1]);
  const accentY = useTransform(scrollYProgress, [0, 1], [0, -26]);
  const accentScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);
  const railScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const warmGlowY = useTransform(scrollYProgress, [0, 1], [0, 22]);

  const buildSeigaihaCluster = (strokeColor: string, variant: 'wide' | 'compact' | 'split') =>
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="640" height="220" viewBox="0 0 640 220" fill="none">
        <g stroke="${strokeColor}" stroke-width="7" fill="none" stroke-linecap="round" opacity="1">
          ${(variant === 'wide'
            ? [
                [164, 58],
                [112, 94],
                [164, 94],
                [216, 94],
                [86, 130],
                [138, 130],
                [190, 130],
                [242, 130],
                [430, 94],
                [482, 94],
                [534, 94],
              ]
            : variant === 'compact'
              ? [
                  [176, 66],
                  [136, 96],
                  [176, 96],
                  [216, 96],
                  [96, 126],
                  [136, 126],
                  [176, 126],
                  [216, 126],
                  [256, 126],
                ]
              : [
                  [146, 74],
                  [102, 108],
                  [146, 108],
                  [190, 108],
                  [420, 90],
                  [376, 124],
                  [420, 124],
                  [464, 124],
                ]).map(([x, y]) => `
            <path d="M${x - 30} ${y}a30 30 0 0 1 60 0" />
            <path d="M${x - 20} ${y}a20 20 0 0 1 40 0" />
            <path d="M${x - 10} ${y}a10 10 0 0 1 20 0" />
          `).join('')}
        </g>
      </svg>
    `);

  const lightSeigaihaSvgs = [
    buildSeigaihaCluster('#7DB1D4', 'wide'),
    buildSeigaihaCluster('#5B8FA3', 'compact'),
    buildSeigaihaCluster('#ABCEE2', 'split'),
  ];
  const darkSeigaihaSvgs = [
    buildSeigaihaCluster('#ABCEE2', 'wide'),
    buildSeigaihaCluster('#7DB1D4', 'compact'),
    buildSeigaihaCluster('#D5E7F2', 'split'),
  ];

  const patternPlacements = [
    { top: '4%', left: '4%', width: '18rem', height: '5rem', opacity: 0.14, variant: 0 },
    { top: '12%', right: '6%', width: '16rem', height: '4.5rem', opacity: 0.12, variant: 2 },
    { top: '26%', left: '18%', width: '17rem', height: '5rem', opacity: 0.14, variant: 1 },
    { top: '40%', right: '12%', width: '18rem', height: '5rem', opacity: 0.13, variant: 0 },
    { top: '56%', left: '10%', width: '16rem', height: '4.5rem', opacity: 0.12, variant: 2 },
    { top: '70%', right: '20%', width: '17rem', height: '5rem', opacity: 0.14, variant: 1 },
    { top: '84%', left: '28%', width: '18rem', height: '5rem', opacity: 0.13, variant: 0 },
    { top: '94%', right: '10%', width: '16rem', height: '4.5rem', opacity: 0.12, variant: 2 },
  ] as const;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pb-20 pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {patternPlacements.map((placement, index) => (
          <div
            key={`light-cloud-${index}`}
            className="absolute dark:hidden"
            style={{
              top: placement.top,
              left: 'left' in placement ? placement.left : undefined,
              right: 'right' in placement ? placement.right : undefined,
              width: `clamp(12rem, 28vw, ${placement.width})`,
              height: `clamp(3.5rem, 7vw, ${placement.height})`,
            }}
          >
            <div
              className="h-full w-full"
              style={{
                opacity: placement.opacity,
                backgroundImage: `url("data:image/svg+xml,${lightSeigaihaSvgs[placement.variant]}")`,
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        ))}

        {patternPlacements.map((placement, index) => (
          <div
            key={`dark-cloud-${index}`}
            className="absolute hidden dark:block"
            style={{
              top: placement.top,
              left: 'left' in placement ? placement.left : undefined,
              right: 'right' in placement ? placement.right : undefined,
              width: `clamp(12rem, 28vw, ${placement.width})`,
              height: `clamp(3.5rem, 7vw, ${placement.height})`,
            }}
          >
            <div
              className="h-full w-full"
              style={{
                opacity: Math.max(0.1, placement.opacity - 0.02),
                backgroundImage: `url("data:image/svg+xml,${darkSeigaihaSvgs[placement.variant]}")`,
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-18"
        >
          <div className="mb-5 inline-flex items-center gap-4">
            <LightbulbIcon className="h-16 w-16" />
            <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.18em] text-[#BF8351]">
              Artist Statement
            </p>
          </div>
          <h1 className="max-w-4xl font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.94] text-[#ABCEE2] md:text-7xl">
            Design should feel like it knows you are human.
          </h1>
          <p className="mt-6 max-w-3xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            This statement is the clearest explanation of how I think, what I value, and why I want digital work to feel lighter to live with.
          </p>
        </motion.div>

        <div ref={statementRef} className="relative">
          <motion.div
            style={{ y: accentY, scale: accentScale }}
            className="pointer-events-none absolute right-[10%] top-10 hidden h-36 w-36 rounded-full bg-[#D5E7F2]/65 blur-3xl lg:block"
          />
          <motion.div
            style={{ y: warmGlowY }}
            className="pointer-events-none absolute left-[12%] bottom-16 hidden h-28 w-28 rounded-full bg-[#E6C4A8]/60 blur-3xl lg:block"
          />

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ y: statementY, opacity: statementOpacity }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#D5E7F2] bg-white/95 shadow-2xl backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-15">
              <FlowingWater className="h-full w-full" />
            </div>

            <div className="grid gap-0 lg:grid-cols-[22px_1fr]">
              <div className="relative hidden lg:block">
                <div className="absolute bottom-10 left-1/2 top-10 w-px -translate-x-1/2 bg-[#D5E7F2]" />
                <motion.div
                  style={{ scaleY: railScale }}
                  className="absolute bottom-10 left-1/2 top-10 w-1 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[#BF8351] via-[#ABCEE2] to-[#5B8FA3]"
                />
              </div>

              <div className="relative px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-[4.5rem]">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                  <span className="rounded-full bg-[#FFF8F3] px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#BF8351]">
                    Human-centered clarity
                  </span>
                  <span className="rounded-full bg-[#F1F8FC] px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#5B8FA3]">
                    Quiet humor
                  </span>
                  <span className="rounded-full bg-[#F1F8FC] px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#5B8FA3]">
                    Details that reward attention
                  </span>
                </div>

                <p className="mx-auto max-w-3xl first-letter:float-left first-letter:mr-3 first-letter:font-['Ojuju:Bold',sans-serif] first-letter:text-6xl first-letter:leading-[0.82] first-letter:text-[#BF8351] text-left font-['Poppins:Regular',sans-serif] text-lg leading-9 text-[#364153] sm:text-[1.15rem] sm:leading-10">
                  {statementText}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      <div className="mt-12">
        <MoodScrollerSection />
      </div>

      <div className="mt-8">
        <WaveTransition variant="gradient" />
      </div>

      <div className="mt-16 px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <PageContactCta
            label="Continue the Conversation"
            title="If the dramatic scrolling worked, the email probably will too."
            body="This page is the long-form version of how I think. If you want to turn that into a real project, collaboration, or conversation, I am very reachable."
            accent="blue"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
