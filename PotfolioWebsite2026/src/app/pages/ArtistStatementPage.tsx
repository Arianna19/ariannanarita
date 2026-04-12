import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
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

export default function ArtistStatementPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);
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

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(readingMoodQuotes.length - 1, Math.floor(latest * readingMoodQuotes.length));
    setQuoteIndex(nextIndex);
  });

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
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-center">
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
              className="relative order-2 overflow-hidden rounded-[2.5rem] border border-[#D5E7F2] bg-white/95 shadow-2xl backdrop-blur-sm lg:order-1"
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

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:sticky lg:top-32 lg:order-2"
            >
              <div className="rounded-[2rem] border border-[#D5E7F2] bg-white/92 p-6 shadow-lg backdrop-blur-sm">
                <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.18em] text-[#BF8351]">
                  Relatable Mood Right Now
                </p>
                <motion.h2
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 font-['Ojuju:Bold',sans-serif] text-3xl leading-tight text-[#5B8FA3]"
                >
                  {readingMoodQuotes[quoteIndex]}
                </motion.h2>
                <p className="mt-5 font-['Poppins:Regular',sans-serif] text-sm leading-7 text-[#4A5565]">
                  A small side note while the main statement stays front and center.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

      <div className="mt-24">
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

