import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'motion/react';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import WaveTransition from '../components/WaveTransition';
import PageContactCta from '../components/PageContactCta';
import SeigaihaClusterBackground from '../components/SeigaihaClusterBackground';
import { UserIcon, DesignIcon, BrandingIcon, CodeIcon } from '../components/Icons';
import {
  ChatGptLogoIcon,
  ClaudeLogoIcon,
  GeminiLogoIcon,
  PerplexityLogoIcon,
  CopilotLogoIcon,
  HtmlLogoIcon,
  CssLogoIcon,
  JavascriptLogoIcon,
  P5LogoIcon,
  PythonLogoIcon,
  GithubLogoIcon,
} from '../components/Icons';
import portraitImage from '../../imports/me.png';
import { AudioLines, Bot, ChevronLeft, ChevronRight, Figma, Github, Layers3, MonitorSmartphone, PenTool, Sparkles } from 'lucide-react';

const biographyParagraphs = [
  "Arianna Sanchez Narita's introduction to design began informally, experimenting with Microsoft PowerPoint in elementary school. While others focused on content, she became absorbed in layout, composition, and how far she could push the software visually. This curiosity developed further in high school, where she spent much of her time in the computer lab teaching herself Adobe Photoshop. What began as a way to fill empty lunch hours evolved into a genuine connection to visual design, driven by instinct, experimentation, and a fascination with digital creation.",
  'Despite this early passion, Arianna stepped away from the art world in CEGEP to pursue computer science, following a more conventional path. This marked a period where she felt increasingly disconnected from herself. The structure of the field contrasted sharply with the creativity she had relied on, leading to frustration and loss. After shifting into psychology in search of direction, she realized through a game development course that the design aspects still mattered most to her.',
  "Recognizing she had abandoned something essential, she redirected her path and entered Concordia University's Computation Arts program, reestablishing her place within design. During her studies, Arianna developed a strong focus on UX and UI design, working with tools such as Figma and the Adobe Creative Suite to create user-centered digital experiences. Although she briefly explored 3D modeling, she recognized it did not align with her interests.",
  'In contrast, she discovered a passion for sound design, creating audio for characters and environments and collaborating with an emerging film director on creature-based elements. Alongside this, she continued advancing her UX and graphic design practice, including contributing visual work for IA Financial Group.',
  'Across her work, Arianna has become critical of the seriousness that dominates both design culture and everyday life. She challenges the idea that professionalism must come at the cost of personality, questioning why design often feels rigid and controlled. Through her work, she resists this by incorporating humor, relatability, and informality. She embraces the idea that being playful, imperfect, or even absurd is not only acceptable, but necessary to create meaningful human connection.',
  'Her current practice combines UX, UI, graphic design, and sound to create immersive digital experiences. Moving forward, her work is shaped by the reality of the world around her, from global conflict and economic instability to rising costs, distrust in leadership, and AI reshaping industries. In the midst of this, design has become her way of staying grounded, a space to think clearly and create freely. Through her work, she aims to offer moments of relief, humor, and connection, something that cuts through the noise and reminds people that not everything has to feel so heavy. Ultimately, her goal is to create work that not only functions well, but helps people breathe a little easier in an overwhelming world.',
];

const journey = [
  {
    icon: DesignIcon,
    border: 'border-[#ABCEE2]',
    title: 'Early Visual Curiosity',
    company: 'Elementary school to high school',
    description:
      'Started by pushing Microsoft PowerPoint far beyond its intended purpose, then taught herself Photoshop in the high school computer lab. Layout, experimentation, and visual instinct came first.',
  },
  {
    icon: CodeIcon,
    border: 'border-[#BF8351]',
    title: 'Finding the Way Back',
    company: 'CEGEP to Concordia',
    description:
      'Stepped into computer science, moved through psychology, then realized through game development that design was still the real pull. That realization led her back into Computation Arts.',
  },
  {
    icon: BrandingIcon,
    border: 'border-[#ABCEE2]',
    title: 'Current Practice',
    company: 'UX, UI, graphic design, and sound',
    description:
      'Builds user-centered digital experiences with humor, personality, and clarity, while also exploring sound design, immersive storytelling, and collaborative creative work.',
  },
];

const education = [
  {
    title: 'Computation Arts Specialization',
    detail: 'Concordia University',
    meta: '2023 - Present',
    note: 'Currently studying in the Computation Arts specialization, with a practice shaped by digital design, interaction, and creative technology.',
  },
  {
    title: 'International Baccalaureate',
    detail: 'Pensionnat Saint-Nom-de-Marie',
    meta: 'Graduated 2020',
    note: 'Completed high school through the International Baccalaureate program.',
  },
];

const practiceNotes = [
  'UX and UI design centered on people, not just polished screens',
  'Graphic design that stays human, relatable, and a little less rigid',
  'Sound design for characters, environments, and creature-based storytelling',
  'Visual work contributed for IA Financial Group',
];

const philosophy = [
  'Humor belongs in design when it helps people feel more human.',
  'Professional does not need to mean stiff, distant, or joyless.',
  'Good digital experiences should create clarity and a little breathing room.',
];

type SkillChip = string | { label: string; icon: ({ className }: { className?: string }) => JSX.Element };

const skills = {
  design: ['Figma', 'Adobe Photoshop', 'Adobe Creative Suite', 'Graphic Design', 'Visual Storytelling'] as SkillChip[],
  digital: ['UX Design', 'UI Design', 'User-Centered Design', 'Prototyping', 'Game Development Context'] as SkillChip[],
  code: [
    { label: 'HTML', icon: HtmlLogoIcon },
    { label: 'CSS', icon: CssLogoIcon },
    { label: 'JavaScript', icon: JavascriptLogoIcon },
    { label: 'p5.js', icon: P5LogoIcon },
    { label: 'Python', icon: PythonLogoIcon },
    { label: 'GitHub', icon: GithubLogoIcon },
  ] as SkillChip[],
  expanded: ['Sound Design', 'Creature Audio', 'Environmental Audio', 'Creative Collaboration', 'Immersive Experiences'] as SkillChip[],
  ai: [
    { label: 'ChatGPT', icon: ChatGptLogoIcon },
    { label: 'Claude', icon: ClaudeLogoIcon },
    { label: 'Gemini', icon: GeminiLogoIcon },
    { label: 'Perplexity', icon: PerplexityLogoIcon },
    { label: 'GitHub Copilot', icon: CopilotLogoIcon },
  ] as SkillChip[],
};

const skillTracks = [
  {
    title: 'Design Tools',
    icon: Figma,
    tone: 'blue',
    items: skills.design,
  },
  {
    title: 'Digital Practice',
    icon: MonitorSmartphone,
    tone: 'warm',
    items: skills.digital,
  },
  {
    title: 'Code + Web',
    icon: Github,
    tone: 'blue',
    items: skills.code,
  },
  {
    title: 'Expanded Creative Work',
    icon: AudioLines,
    tone: 'blue',
    items: skills.expanded,
  },
  {
    title: 'AI Tools',
    icon: Bot,
    tone: 'warm',
    items: skills.ai,
  },
];

const loopingSkillTracks = [...skillTracks, ...skillTracks];

export default function BiographyPage() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsViewportRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const [manualTrackOffset, setManualTrackOffset] = useState(0);
  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ['start start', 'end start'],
  });
  const trackX = useTransform(skillsProgress, [0, 1], ['0%', '-50%']);
  const combinedTrackX = useMotionTemplate`calc(${trackX} - ${manualTrackOffset}px)`;

  useEffect(() => {
    if (location.hash === '#skills-tools') {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById('skills-tools')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash]);

  const nudgeSkillsTrack = (direction: 'left' | 'right') => {
    const viewportWidth = skillsViewportRef.current?.clientWidth ?? 0;
    const nudgeAmount = Math.max(220, Math.round(viewportWidth * 0.38));
    setManualTrackOffset((current) =>
      direction === 'right'
        ? Math.min(current + nudgeAmount, 2400)
        : Math.max(current - nudgeAmount, 0)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pb-20 pt-28 md:pt-32"
    >
      <SeigaihaClusterBackground />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-5 inline-block md:mb-6">
            <UserIcon className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#5B8FA3] drop-shadow-[0_1px_0_rgba(255,255,255,0.35)] sm:text-6xl">
            Biography
          </h1>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#ABCEE2] to-[#BF8351] md:mt-6 md:w-32" />
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-3 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="rounded-[2rem] bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:sticky lg:top-32">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#E6C4A8]">
                <img
                  src={portraitImage}
                  alt="Portrait illustration for Arianna Sanchez Narita"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <h2 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939]">Arianna Sanchez Narita</h2>
              <p className="mb-6 mt-2 font-['Poppins:Regular',sans-serif] text-[#BF8351]">
                UX/UI Designer, Graphic Designer, and Sound Explorer
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#4A5565]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ABCEE2]" />
                  <span className="font-['Poppins:Regular',sans-serif]">Based in Montreal</span>
                </div>
                <div className="flex items-center gap-3 text-[#4A5565]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#BF8351]" />
                  <span className="font-['Poppins:Regular',sans-serif]">Interested in digital experiences with personality</span>
                </div>
                <div className="flex items-center gap-3 text-[#4A5565]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ABCEE2]" />
                  <span className="font-['Poppins:Regular',sans-serif]">Open to conversation, collaboration, and thoughtful projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:col-span-2 lg:space-y-8"
          >
            <div className="rounded-[2rem] bg-white/95 p-7 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="mb-6 font-['Ojuju:Bold',sans-serif] text-3xl text-[#BF8351] sm:text-4xl lg:mb-8">
                My Story
              </h2>

              <div className="space-y-5 md:space-y-6">
                {biographyParagraphs.slice(0, 3).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-justify font-['Poppins:Regular',sans-serif] text-base leading-relaxed text-[#364153] sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {isStoryExpanded ? (
                  <motion.div
                    key="story-extra"
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.38, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 pt-5 md:space-y-6">
                      {biographyParagraphs.slice(3).map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-justify font-['Poppins:Regular',sans-serif] text-base leading-relaxed text-[#364153] sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsStoryExpanded((expanded) => !expanded)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5E7F2] bg-[#F7FBFD] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-sm text-[#5B8FA3] transition-colors hover:bg-[#ECF5FA]"
                >
                  {isStoryExpanded ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/95 p-7 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
              <h2 className="mb-6 font-['Ojuju:Bold',sans-serif] text-3xl text-[#5B8FA3] sm:text-4xl lg:mb-8">
                Journey Through Design
              </h2>

              <div className="space-y-8">
                {journey.map((item) => (
                  <div key={item.title} className={`border-l-4 ${item.border} pl-5 sm:pl-8`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                      <item.icon className="h-11 w-11 flex-shrink-0 sm:h-12 sm:w-12" />
                      <div>
                        <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939]">{item.title}</h3>
                        <p className="mb-3 mt-2 font-['Poppins:SemiBold',sans-serif] text-[#BF8351]">{item.company}</p>
                        <p className="font-['Poppins:Regular',sans-serif] leading-relaxed text-[#364153]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white/95 p-7 shadow-lg backdrop-blur-sm sm:p-8">
                <h3 className="mb-6 font-['Ojuju:Bold',sans-serif] text-2xl text-[#5B8FA3]">Education</h3>
                <div className="space-y-5">
                  {education.map((item) => (
                    <div key={item.title} className="rounded-[1.25rem] border border-[#D5E7F2] bg-[#F9FAFB]/95 p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="mb-1 font-['Poppins:SemiBold',sans-serif] text-[#1E2939]">{item.title}</h4>
                          <p className="font-['Poppins:Medium',sans-serif] text-sm text-[#5B8FA3]">{item.detail}</p>
                        </div>
                        <span className="inline-flex w-fit rounded-full bg-[#E6C4A8] px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-xs text-[#A66D42]">
                          {item.meta}
                        </span>
                      </div>
                      <p className="mt-3 font-['Poppins:Regular',sans-serif] text-sm leading-6 text-[#4A5565]">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-white/95 p-7 shadow-lg backdrop-blur-sm sm:p-8">
                <h3 className="mb-6 font-['Ojuju:Bold',sans-serif] text-2xl text-[#BF8351]">Current Practice</h3>
                <ul className="space-y-3">
                  {practiceNotes.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${
                          index % 2 === 0 ? 'bg-[#BF8351]' : 'bg-[#ABCEE2]'
                        }`}
                      />
                      <span className="font-['Poppins:Regular',sans-serif] text-[#364153]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="blue" />

      <section id="skills-tools" ref={skillsRef} className="relative h-[280vh] md:h-[360vh]">
        <div className="sticky top-24 overflow-hidden py-10 md:top-28 md:py-12">
          <div className="px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 text-center md:mb-14"
            >
              <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#5B8FA3] sm:text-5xl md:text-6xl">
                Skills & Tools
              </h2>
              <p className="mx-auto mt-4 max-w-3xl font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565] md:text-lg">
                These are the skills, tools, and creative strengths I bring into the work.
              </p>
            </motion.div>

            <div className="mx-auto mb-5 flex max-w-7xl items-center justify-center gap-3 text-[#7DB1D4] md:hidden">
              <ChevronLeft className="h-4 w-4" />
              <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.14em]">
                Swipe through
              </p>
              <ChevronRight className="h-4 w-4" />
            </div>

            <div ref={skillsViewportRef} className="relative overflow-hidden">
              <button
                type="button"
                onClick={() => nudgeSkillsTrack('left')}
                className="absolute inset-y-0 left-0 z-10 flex w-10 items-center justify-center bg-gradient-to-r from-white/88 to-white/10 text-[#7DB1D4] transition-colors hover:text-[#5B8FA3] sm:w-12 md:w-14"
                aria-label="Scroll skills left"
              >
                <div className="flex h-full w-full items-center justify-center border-r border-[#D5E7F2]/45">
                  <ChevronLeft className="h-6 w-6" />
                </div>
              </button>
              <button
                type="button"
                onClick={() => nudgeSkillsTrack('right')}
                className="absolute inset-y-0 right-0 z-10 flex w-10 items-center justify-center bg-gradient-to-l from-white/88 to-white/10 text-[#7DB1D4] transition-colors hover:text-[#5B8FA3] sm:w-12 md:w-14"
                aria-label="Scroll skills right"
              >
                <div className="flex h-full w-full items-center justify-center border-l border-[#D5E7F2]/45">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </button>

              <motion.div style={{ x: combinedTrackX }} className="flex w-max gap-8 pr-8 md:gap-10">
                {loopingSkillTracks.map((track, index) => (
                  <div
                    key={`${track.title}-${index}`}
                    className={`w-fit max-w-[26rem] shrink-0 rounded-[2.25rem] border p-7 shadow-xl backdrop-blur-sm sm:max-w-[29rem] sm:p-8 lg:max-w-[31rem] ${
                      track.tone === 'warm'
                        ? 'border-[#E6C4A8] bg-[#FFF8F3]/95'
                        : 'border-[#D5E7F2] bg-[#F9FAFB]/95'
                    }`}
                  >
                    <div>
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className={`rounded-2xl p-4 ${
                            track.tone === 'warm' ? 'bg-[#E6C4A8]/80 text-[#BF8351]' : 'bg-[#D5E7F2]/85 text-[#5B8FA3]'
                          }`}
                        >
                          <track.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="mt-1 font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939] sm:text-4xl">
                            {track.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {track.items.map((item) => (
                          <span
                            key={`${track.title}-${typeof item === 'string' ? item : item.label}-${index}`}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-['Poppins:Medium',sans-serif] text-sm sm:text-base ${
                              track.tone === 'warm' ? 'bg-[#E6C4A8] text-[#A66D42]' : 'bg-[#D5E7F2] text-[#5B8FA3]'
                            }`}
                          >
                            {typeof item === 'string' ? (
                              track.tone === 'warm' ? <Sparkles className="h-4 w-4" /> : <Layers3 className="h-4 w-4" />
                            ) : (
                              <span className="inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-current/20 bg-white/55 p-1 text-[#1E2939] dark:bg-[#0f172a]/45 dark:text-[#F8FAFC]">
                                <item.icon className="h-full w-full" />
                              </span>
                            )}
                            {typeof item === 'string' ? item : item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WaveTransition variant="orange" flip />

      <div className="px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white/95 p-8 shadow-xl backdrop-blur-sm sm:p-10"
          >
            <h3 className="mb-4 font-['Ojuju:Bold',sans-serif] text-3xl text-[#5B8FA3] sm:text-4xl">
              Design Beliefs
            </h3>
            <ul className="space-y-4">
              {philosophy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <PenTool className="mt-1 h-5 w-5 flex-shrink-0 text-[#BF8351]" />
                  <span className="font-['Poppins:Regular',sans-serif] leading-7 text-[#364153]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-[#BF8351] to-[#D6A882] p-8 text-white shadow-xl sm:p-10"
          >
            <h3 className="mb-4 font-['Ojuju:Bold',sans-serif] text-3xl sm:text-4xl">What the work is for</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-lg leading-8 text-white/95">
              Arianna wants her work to do more than function well. She wants it to create clarity, humor, and moments of
              relief in a world that already feels too heavy.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.14em] text-white/95">
              <MonitorSmartphone className="h-4 w-4" />
              UX, graphic design, sound, and personality
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-7xl"
        >
          <PageContactCta
            label="Contact Arianna"
            title="Now you know the backstory, the design obsessions, and the accidental sound-design subplot."
            body="If that sounds like someone you would like on a project, in a collaboration, or in your inbox, this is the point where reaching out becomes a very good idea."
            accent="warm"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

