import { motion, useScroll, useTransform } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Accessibility, BookOpenText, ChefHat, DollarSign, Eye, HandHeart, Landmark, LayoutGrid, Search, Soup, TrendingUp, Type, UtensilsCrossed } from 'lucide-react';
import WaveTransition from '../components/WaveTransition';
import PageContactCta from '../components/PageContactCta';
import { DesignIcon, LightbulbIcon, CodeIcon, UserIcon } from '../components/Icons';
import { FlowingWater, OceanBubbles } from '../components/OceanWave';

type ProjectRecord = {
  title: string;
  categories: string[];
  summary: string;
  role: string;
  duration: string;
  year: string;
  client: string;
  thesis: string;
  ideation: string;
  approach: string;
  roleNotes: string[];
  creativeNotes: string[];
  approachBullets?: string[];
  ideationPanels?: string[];
  creativeSections?: string[];
};

const projectContent: Record<string, ProjectRecord> = {
  '1': {
    title: 'IA Financial Group',
    categories: ['Logo Design', 'Brand Identity'],
    summary:
      'A refined financial advisor identity created through a collaborative process with the client, built to feel simple, professional, and instantly legible across touchpoints.',
    role: 'Logo design and client collaboration',
    duration: '4 weeks',
    year: '2026',
    client: 'Guillaume-René Lalumière at IA Financial Group',
    thesis:
      'The client wanted something simple and terribly clear. I worked closely with him to refine every element until the mark felt confident, easily readable, and fit the business tone without unnecessary detail.',
    ideation:
      'This project was rooted in direct client collaboration. After the first round of visual directions, I narrowed the options to a simple monogram system and tested it in practical applications to confirm the mark held up across digital and printed brand assets.',
    approach:
      'The final identity leaned into clean geometry, strong typographic rhythm, and a restrained color palette. I prioritized the advisor’s desire for calm clarity, so every decision from spacing to iconography was checked against the brief for professionalism and ease of recognition.',
    roleNotes: [
      'Led the logo concept, visual system, and brand applications.',
      'Worked one-on-one with the advisor to keep the identity aligned with his communication goals.',
      'Delivered a simple, flexible mark that reads clearly in small and large formats.',
    ],
    creativeNotes: ['Monogram mark', 'Logo clarity', 'Financial identity'],
    approachBullets: [
      'Built the identity around a monogram system that could stay clear at small sizes and on social platforms.',
      'Tested the mark in multiple lockups and color versions to make sure it stayed professional and flexible.',
      'Kept the visual language restrained so the logo feels trustworthy instead of overdesigned.',
      'Refined spacing, contrast, and typography to support readability across digital and print uses.',
    ],
  },
  '2': {
    title: 'Flavor Bridge',
    categories: ['UX Research', 'Mobile App Design', 'Interaction Design'],
    summary:
      'A mobile app concept designed to help mixed-culture couples navigate different eating habits through recipe discovery, shared matching, and a cooking flow inspired by familiar social app patterns.',
    role: 'Researcher, UX/UI designer, and prototype designer',
    duration: '3 months',
    year: '2025',
    client: 'Young adults',
    thesis:
      'Flavor Bridge asks how a digital product could help mixed-culture couples overcome different eating habits at home. The project centers on a simple idea: bridge cultures one recipe at a time by making discovery, compromise, and cooking feel more approachable.',
    ideation:
      'The process began by comparing multiple community problem spaces, then narrowing toward mixed relationships and food habits. Interviews and observations surfaced recurring friction around cravings, spice tolerance, ingredient knowledge, cooking confidence, and the time it takes couples to find a middle ground.',
    approach:
      'The concept evolved from recipe and culture websites into a mobile app after the research highlighted convenience, recognition, and always-on access. The final direction reframed recipe discovery like a dating app: users swipe through dishes, match on recipes with a partner, then move into ingredient lists, recipe banks, and role-based cooking steps.',
    roleNotes: [
      'Defined the problem space, research question, themes, and overall product direction.',
      'Conducted and synthesized interviews and observations around mixed-culture food habits and household decision-making.',
      'Developed low-fidelity and high-fidelity prototypes, then pivoted the final solution from website to mobile app.',
    ],
    creativeNotes: ['Culture discovery', 'Recipe matching', 'Shared cooking flow'],
    ideationPanels: ['Interviews and observations', 'Culture and cuisine friction'],
    approachBullets: [
      'Research showed that not knowing how to cook, where to find ingredients, and how to compromise were major barriers.',
      'The design pivoted from website to mobile because cooking happens away from desktops and younger users already live on their phones.',
      'The interface leans on recognition over recall, familiar patterns, and visible system feedback to reduce friction.',
      'The final concept blends recipe discovery with a light dating-app logic so matching feels intuitive and social.',
    ],
    creativeSections: [
      'Onboarding introduces the app, sign-up flow, and country selection to emphasize cultural discovery from the start.',
      'The main app centers on recipe swiping, matches, ingredients, a recipe bank, and a role-based step flow for cooking together.',
      'The profile area keeps flavor preferences editable so the experience stays flexible as tastes change over time.',
    ],
  },
  '3': {
    title: 'The Center Cannot Hold',
    categories: ['UX/UI Redesign', 'Accessibility', 'Information Architecture'],
    summary:
      'A redesign of The Center Cannot Hold centered on accessibility for neurodivergent users, with focused work on hierarchy, plain language, page organization, and navigation clarity while respecting the site\'s artistic atmosphere.',
    role: 'UX/UI designer and information architecture collaborator',
    duration: '3 months',
    year: '2026',
    client: 'Post Marginal / The Center Cannot Hold',
    thesis:
      'This project asked how The Center Cannot Hold could remain immersive and artistically unconventional while becoming more accessible for disabled users, especially neurodivergent and blind visitors. The redesign focused on reducing cognitive load without flattening the personality of the site.',
    ideation:
      'Our process started with information-architecture analysis, precedent research, and early sitemap and low-fidelity testing. We reviewed accessibility references like WCAG and ARIA patterns, mapped cluttered and uncategorized content, and used user feedback to identify where wording, section titles, and information flow were making the site harder to navigate.',
    approach:
      'The redesign introduced clearer headings, more predictable sectioning, a persistent navigation system, and tighter control over how much information appears at once. Long parallax-heavy experiences were restructured into more distinct sections so users could orient themselves more easily, while the visual language stayed thematic and immersive.',
    roleNotes: [
      'Helped reorganize the main pages of the site with stronger hierarchy and clearer information grouping.',
      'Reworked titles, wording, and content flow to support neurodivergent users and reduce cognitive overload.',
      'Contributed to prototypes, accessibility decisions, and iterative changes shaped by research and user feedback.',
    ],
    creativeNotes: ['Accessible hierarchy', 'Navigation redesign', 'Information clarity'],
    approachBullets: [
      'Mapped the existing information architecture to identify cluttered content, uncategorized material, and areas with excessive tags.',
      'Introduced clearer headings, more readable text layout, and a more obvious accessibility entry point.',
      'Used a persistent navbar and more structured sections to improve orientation for neurodivergent users.',
      'Iterated from user testing, including feedback from a neurodivergent artist and earlier blind-user accessibility findings.',
    ],
    creativeSections: [
      'The redesign tightened page hierarchy so users could understand what matters first without being overwhelmed.',
      'Navigation, menu consistency, and wording were refined to support orientation and reduce confusion.',
      'The visual language stayed atmospheric, but the information was edited and grouped with more intention.',
    ],
  },
};

const flavorBridgeVisuals = [
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Vector.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Swiping.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Swiping 2.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Swiping 3.png`),
];
const flavorBridgeSupportingVisuals = [
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Home Screen.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Ingredients List.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Sign up - Setup.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/User Profile - Edit profile.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/User Profile - Select interests.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Sign up - Profile Setup Step 3.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Sign up - Profile Setup Step 4.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/User Profile.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/User Profile - Logout.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Image.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Image-1.png`),
  encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Image-2.png`),
];
const flavorBridgeLogo = encodeURI(`${import.meta.env.BASE_URL}flavor-bridge-exports/Vector.png`);
const iaFinancialLogoPng = encodeURI(`${import.meta.env.BASE_URL}ia-financial/GuilaumeNoText.png`);
const iaFinancialSocialImage = encodeURI(`${import.meta.env.BASE_URL}ia-financial/imageGL.png`);
const iaFinancialFullLogo = encodeURI(`${import.meta.env.BASE_URL}ia-financial/GuillaumelogoFINAL-1.png`);
const iaFinancialPdfImages = [
  iaFinancialFullLogo,
  encodeURI(`${import.meta.env.BASE_URL}ia-financial/Screenshot 2026-01-18 150458.png`),
  iaFinancialLogoPng,
];
const tcchIcon = encodeURI(`${import.meta.env.BASE_URL}tcch-icon-white.png`);
const tcchBackground = encodeURI(`${import.meta.env.BASE_URL}tcch-hero-bg.jpg`);
const tcchBeforeAfterImages = {
  veroniqueBefore: encodeURI(`${import.meta.env.BASE_URL}tcch/veronique-before.png`),
  veroniqueAfter: encodeURI(`${import.meta.env.BASE_URL}tcch/veronique-after.png`),
  resourcesBefore: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-before.png`),
  resourcesAfter: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-after.png`),
  resourcesAfterDetail: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-after-detail.png`),
  profilesWireframe: encodeURI(`${import.meta.env.BASE_URL}tcch/profiles-wireframe.png`),
  resourcesWireframeTwo: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-wireframe-2.png`),
};

export default function ProjectDetailPage() {
  const { id = '1' } = useParams();
  const project = projectContent[id] ?? projectContent['1'];
  const isFlavorBridge = id === '2';
  const isIAFinancial = id === '1';
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const approachItems = project.approachBullets ?? [];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingScreensY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const floatingLogoY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const financeIconY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const financeIconYAlt = useTransform(scrollYProgress, [0, 1], [0, 95]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative min-h-screen pb-20 pt-32 ${
        isIAFinancial
          ? 'bg-[radial-gradient(circle_at_top,#f3f8ff_0%,#d2e0f7_40%,#abc0ec_100%)]'
          : isFlavorBridge
            ? 'bg-[radial-gradient(circle_at_top,#fff0a8_0%,#ffd560_14%,#b9b40f_40%,#a3a207_100%)]'
            : id === '3'
              ? 'bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)]'
              : ''
      }`}
    >
      {isIAFinancial ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: financeIconY }} className="absolute left-[7%] top-[13rem] text-[#1E3A8A]/18">
            <DollarSign className="h-20 w-20" />
          </motion.div>
          <motion.div style={{ y: financeIconYAlt }} className="absolute right-[8%] top-[16rem] text-[#1E3A8A]/16">
            <TrendingUp className="h-24 w-24" />
          </motion.div>
          <motion.div style={{ y: financeIconY }} className="absolute left-[10%] top-[44rem] hidden text-[#5B8FA3]/18 lg:block">
            <Landmark className="h-24 w-24" />
          </motion.div>
        </div>
      ) : isFlavorBridge ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: floatingLogoY }} className="absolute left-[6%] top-[10rem] text-[#B90D37]/18">
            <ChefHat className="h-20 w-20 md:h-24 md:w-24" />
          </motion.div>
          <motion.div style={{ y: floatingScreensY }} className="absolute right-[8%] top-[18rem] hidden text-[#7B7F26]/18 lg:block">
            <UtensilsCrossed className="h-24 w-24 md:h-28 md:w-28" />
          </motion.div>
          <motion.div style={{ y: orbY }} className="absolute left-[10%] top-[42rem] hidden text-[#FFC126]/30 xl:block">
            <Soup className="h-24 w-24" />
          </motion.div>
          <motion.div style={{ y: financeIconYAlt }} className="absolute right-[12%] top-[46rem] hidden text-[#B90D37]/16 xl:block">
            <BookOpenText className="h-24 w-24" />
          </motion.div>
          <motion.div style={{ y: financeIconY }} className="absolute left-[14%] top-[28rem] hidden text-[#7B7F26]/15 xl:block">
            <Search className="h-20 w-20" />
          </motion.div>
        </div>
      ) : id === '3' ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: floatingLogoY }} className="absolute left-[6%] top-[12rem] hidden opacity-20 lg:block">
            <img src={tcchIcon} alt="" className="h-24 w-24 object-contain" />
          </motion.div>
          <motion.div style={{ y: financeIconY }} className="absolute right-[8%] top-[15rem] hidden text-[#FDE047]/20 lg:block">
            <Accessibility className="h-20 w-20" />
          </motion.div>
          <motion.div style={{ y: financeIconYAlt }} className="absolute left-[10%] top-[42rem] hidden text-[#93C5FD]/18 xl:block">
            <Type className="h-20 w-20" />
          </motion.div>
          <motion.div style={{ y: orbY }} className="absolute right-[10%] top-[44rem] hidden text-[#E2E8F0]/14 xl:block">
            <Eye className="h-24 w-24" />
          </motion.div>
        </div>
      ) : null}

      <div ref={heroRef} className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/#work"
          className={`inline-flex items-center gap-2 border-b-2 border-transparent font-['Poppins:SemiBold',sans-serif] transition-colors ${
            isFlavorBridge
              ? 'text-[#7D1F33] hover:border-[#7D1F33] hover:text-[#5f1527]'
              : 'text-[#7DB1D4] hover:border-[#ABCEE2] hover:text-[#5B8FA3]'
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to selected work
        </Link>

        <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ y: heroY }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-3">
              {project.categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-sm shadow-sm ${
                    isIAFinancial
                      ? index % 2 === 0
                        ? 'bg-[#E8F0FF] text-[#1E3A8A]'
                        : 'bg-[#D0E1FF] text-[#1E3A8A]'
                      : index % 2 === 0
                        ? 'bg-[#D5E7F2] text-[#5B8FA3]'
                        : 'bg-[#E6C4A8] text-[#A66D42]'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className={`font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.95] md:text-7xl ${isIAFinancial ? 'text-[#1E3A8A]' : id === '3' ? 'text-[#F8FAFC]' : 'text-[#ABCEE2]'}`}>
              {project.title}
            </h1>

            <p className={`max-w-3xl font-['Poppins:Regular',sans-serif] text-xl leading-8 ${id === '3' ? 'text-[#D5E7F2]' : 'text-[#4A5565]'}`}>
              {project.summary}
            </p>

            <div className="grid gap-6 rounded-[1.75rem] border border-[#D5E7F2] bg-white/95 p-8 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Role', project.role],
                ['Duration', project.duration],
                ['Year', project.year],
                ['Client', project.client],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#BF8351]">
                    {label}
                  </p>
                  <p className="mt-2 font-['Poppins:Regular',sans-serif] text-base text-[#1E2939]">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] shadow-2xl ${
              isIAFinancial
                ? 'border border-[#1E3A8A]/20 bg-[radial-gradient(circle_at_top,#f7fbff_0%,#d8e8ff_60%,#b4d2ff_100%)]'
                : isFlavorBridge
                  ? 'border border-white/55 bg-[radial-gradient(circle_at_top,#ffd561_0%,#e2c018_24%,#a8a70c_100%)]'
                  : id === '3'
                    ? 'border border-white/10 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)]'
                    : 'border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#D6A882]'
            }`}
          >
            <motion.div style={{ y: orbY }} className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
            <motion.div style={{ y: heroY }} className="absolute inset-x-0 bottom-0 opacity-20">
              <FlowingWater className="h-48 w-full" />
            </motion.div>
            {isFlavorBridge ? (
              <>
                <div className="absolute inset-x-0 top-16 opacity-35">
                  <FlowingWater className="h-28 w-full" />
                </div>
                <div className="absolute inset-x-0 bottom-8 opacity-35">
                  <FlowingWater className="h-28 w-full" />
                </div>
              </>
            ) : null}
            <OceanBubbles className="absolute left-8 top-8 h-24 w-24 opacity-60" />
            <div className="relative grid w-full gap-4 p-6 sm:p-8">
              <div className={`grid min-h-[10rem] place-items-center rounded-[1.75rem] p-6 shadow-lg ${
                isFlavorBridge
                  ? 'border border-white/40 bg-white/20 backdrop-blur-sm'
                  : isIAFinancial
                    ? 'border border-white/60 bg-[#dcecff]'
                    : id === '3'
                      ? 'overflow-hidden border border-white/10 bg-[#111827]'
                      : 'border border-white/60 bg-white/70 backdrop-blur-sm'
              }`}>
                {isFlavorBridge ? (
                  <img src={flavorBridgeLogo} alt="Flavor Bridge logo" className="h-28 w-28 object-contain md:h-36 md:w-36" />
                ) : isIAFinancial ? (
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 rounded-[1.25rem] bg-[#dcecff]" />
                    <div className="absolute inset-4 rounded-[1.25rem] border border-white/70 bg-[#cfe2fb] shadow-[0_18px_36px_rgba(30,58,138,0.1)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={iaFinancialFullLogo} alt="IA Financial Group logo" className="h-24 w-full object-contain px-8 md:h-28" />
                    </div>
                  </div>
                ) : id === '3' ? (
                  <div className="relative h-full w-full">
                    <img
                      src={tcchBackground}
                      alt="The Center Cannot Hold project hero"
                      className="absolute inset-0 h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/35 via-[#1e3a8a]/25 to-[#111827]/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={tcchIcon} alt="The Center Cannot Hold logo" className="h-24 w-24 object-contain md:h-32 md:w-32" />
                    </div>
                  </div>
                ) : (
                  <DesignIcon className="h-[4.5rem] w-[4.5rem]" />
                )}
              </div>

              {isFlavorBridge ? (
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: Search, label: 'Taste profiles' },
                      { icon: HandHeart, label: 'Recipe matching' },
                      { icon: LayoutGrid, label: 'Shared cooking' },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={`rounded-[1.5rem] border p-5 backdrop-blur-sm ${
                          index === 1 ? 'border-[#ffd986]/80 bg-[#fff4cf]/85' : 'border-white/55 bg-white/72'
                        }`}
                      >
                        <item.icon className="h-5 w-5 text-[#B90D37]" />
                        <p className="mt-3 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#7B7F26]">
                          Focus
                        </p>
                        <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-xl text-[#7D1F33] dark:text-[#5b1020]">{item.label}</p>
                      </div>
                    ))}
                </div>
              ) : id === '3' ? (
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Accessibility, label: 'Accessibility' },
                    { icon: Type, label: 'Hierarchy' },
                    { icon: Eye, label: 'Orientation' },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.5rem] border p-5 backdrop-blur-sm ${
                        index === 1 ? 'border-[#FDE047]/40 bg-white/10' : 'border-white/10 bg-white/6'
                      }`}
                    >
                      <item.icon className="h-5 w-5 text-[#FDE047]" />
                      <p className="mt-3 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#93C5FD]">
                        Focus
                      </p>
                      <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-xl text-[#F8FAFC]">{item.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.creativeNotes.map((note, index) => (
                    <div
                      key={note}
                      className={`rounded-[1.5rem] border p-5 backdrop-blur-sm ${
                        index % 2 === 0 ? 'border-white/55 bg-white/72' : 'border-[#E6C4A8]/70 bg-[#FFF8F3]/85'
                      }`}
                    >
                      <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#5B8FA3]">
                        Focus
                      </p>
                      <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939]">{note}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <WaveTransition variant="blue" />
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 md:px-8">
        <section className={`rounded-[2rem] p-10 shadow-xl ${isFlavorBridge ? 'border border-[#ffd986] bg-white/88 backdrop-blur-sm' : 'border border-[#E6C4A8] bg-white/95'}`}>
          <div className="mb-5 flex items-center gap-4">
            <LightbulbIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${isFlavorBridge ? 'text-[#B90D37]' : 'text-[#BF8351]'}`}>Thesis</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${isFlavorBridge ? 'text-[#364153] dark:text-[#1f2937]' : 'text-[#364153]'}`}>{project.thesis}</p>
        </section>

        <section className={`rounded-[2rem] p-10 shadow-xl ${isFlavorBridge ? 'border border-[#c8ddbd] bg-[#f8f9ef]/92 backdrop-blur-sm' : 'border border-[#D5E7F2] bg-white/95'}`}>
          <div className="mb-5 flex items-center gap-4">
            <UserIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${isFlavorBridge ? 'text-[#7B7F26]' : isIAFinancial ? 'text-[#1E3A8A]' : 'text-[#ABCEE2]'}`}>Ideation</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${isFlavorBridge ? 'text-[#364153] dark:text-[#1f2937]' : isIAFinancial ? 'text-[#364153]' : 'text-[#364153]'}`}>{project.ideation}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {isIAFinancial ? (
              <>
                <div className="rounded-[1.5rem] border border-[#D0E1FF] bg-[#F5F9FF] p-6">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#1E3A8A]">
                    Research + form study
                  </p>
                  <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">
                    The early directions leaned into a `G` and `L` monogram, testing how the initials could feel trustworthy and dynamic at the same time. A big part of the research phase was making sure Guillaume&apos;s mark did not slip too close to a logo shape people already know, so the final form had to stay distinct while still feeling familiar enough to read quickly.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#D0E1FF] bg-[#FFF8F3] p-6">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                    Social platform fit
                  </p>
                  <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">
                    This logo also had to perform well on social media, where it often appears small, cropped, and surrounded by other visual noise. That constraint shaped the simplicity of the icon and the contrast of the typography, because the mark needed to stay recognizable on profile images, story graphics, and short-form content.
                  </p>
                </div>
                <img
                  src={iaFinancialSocialImage}
                  alt="IA Financial Group branding used across social media platforms"
                  className="h-[18rem] w-full rounded-[1.5rem] bg-[#dcecff] object-contain p-6 shadow-lg md:col-span-2"
                />
              </>
            ) : id === '3' ? (
              <>
                <div className="rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl md:col-span-2">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#93C5FD]">
                    Structure studies
                  </p>
                  <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                    The redesign work included wireframing how information could be grouped more intentionally, especially on profile and resource-heavy pages where hierarchy and reading flow had to do more work for neurodivergent visitors.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 shadow-xl">
                  <img
                    src={tcchBeforeAfterImages.profilesWireframe}
                    alt="Wireframe structure for The Center Cannot Hold profiles page redesign"
                    className="h-[22rem] w-full object-contain object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 shadow-xl">
                  <img
                    src={tcchBeforeAfterImages.resourcesWireframeTwo}
                    alt="Wireframe structure for The Center Cannot Hold resources page redesign"
                    className="h-[22rem] w-full object-contain object-top"
                  />
                </div>
              </>
            ) : (
              <>
                <div className={`grid min-h-[14rem] place-items-center rounded-[1.5rem] p-6 text-center ${isFlavorBridge ? 'border border-[#c8ddbd] bg-white' : 'border border-[#D5E7F2] bg-[#F9FAFB]'}`}>
                  <p className={`font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] ${isFlavorBridge ? 'text-[#7B7F26]' : 'text-[#7DB1D4]'}`}>
                    {isFlavorBridge ? project.ideationPanels?.[0] : project.creativeNotes[0]}
                  </p>
                </div>
                <div className={`grid min-h-[14rem] place-items-center rounded-[1.5rem] p-6 text-center ${isFlavorBridge ? 'border border-[#ffd986] bg-[#fff6da]' : 'border border-[#E6C4A8] bg-[#FFF8F3]'}`}>
                  <p className={`font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] ${isFlavorBridge ? 'text-[#B90D37]' : 'text-[#BF8351]'}`}>
                    {isFlavorBridge ? project.ideationPanels?.[1] : project.creativeNotes[1]}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className={`rounded-[2rem] p-10 shadow-xl ${isFlavorBridge ? 'border border-[#ffd986] bg-white/88 backdrop-blur-sm' : 'border border-[#E6C4A8] bg-white/95'}`}>
          <div className="mb-5 flex items-center gap-4">
            <CodeIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${isFlavorBridge ? 'text-[#B90D37]' : 'text-[#BF8351]'}`}>Approach</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${isFlavorBridge ? 'text-[#364153] dark:text-[#1f2937]' : 'text-[#364153]'}`}>{project.approach}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {approachItems.map((item, index) => (
              <li
                key={item}
                className={`rounded-[1.25rem] p-5 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153] ${
                  isFlavorBridge
                    ? index % 2 === 0
                      ? 'bg-[#f6f8ef]'
                      : 'bg-[#fff6da]'
                    : index % 2 === 0
                      ? 'bg-[#F9FAFB]'
                      : 'bg-[#FFF8F3]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        </div>

        <section className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y px-5 py-16 md:px-8 ${
          isFlavorBridge
            ? 'border-[#c8ddbd]/10 bg-transparent'
            : isIAFinancial
              ? 'border-[#1E3A8A]/10 bg-[linear-gradient(180deg,rgba(30,58,138,0.04),rgba(210,224,247,0.16))]'
              : id === '3'
                ? 'border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.94))]'
                : 'border-[#D5E7F2]/20 bg-white/80'
        }`}>
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <div className="absolute left-0 top-8 w-full">
              <FlowingWater className="h-24 w-full" />
            </div>
            <div className="absolute bottom-8 left-0 w-full opacity-80">
              <FlowingWater className="h-24 w-full" />
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl">
          <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${
            isFlavorBridge
              ? 'text-[#7B7F26] dark:text-[#5d6612]'
              : isIAFinancial
                ? 'text-[#1E3A8A]'
                : id === '3'
                  ? 'text-[#F8FAFC]'
                  : 'text-[#ABCEE2]'
          }`}>Creative Works</h2>
          <p className={`mt-4 font-['Poppins:Regular',sans-serif] text-lg leading-8 ${
            isFlavorBridge || isIAFinancial
              ? 'text-[#364153] dark:text-[#1f2937]'
              : id === '3'
                ? 'text-[#D5E7F2]'
                : 'text-[#364153]'
          }`}>
            {isFlavorBridge
              ? 'Flavor Bridge moved through paper and Figma prototyping before settling into a mobile-first direction. The final app uses familiar interaction patterns to make recipe exploration feel light, social, and easier to navigate for couples with different tastes.'
              : isIAFinancial
                ? 'A clear identity system for Guillaume-Rene Lalumiere designed to feel professional, direct, and easy to use across digital touchpoints and printed advisor materials.'
                : id === '3'
                  ? 'The redesign centered on clearer structure, stronger orientation, and more accessible information flow while preserving the site\'s immersive artistic atmosphere.'
                  : 'This area is ready for final images, mockups, spreads, flows, and system details once your real project assets are added, preferably before the caffeine wears off.'}
          </p>

          <div className="mt-8 space-y-6">
            {isFlavorBridge ? (
              <div className="grid gap-6 md:grid-cols-3">
                {[...flavorBridgeVisuals, ...flavorBridgeSupportingVisuals].map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSelectedImage({ src, alt: `Flavor Bridge supporting screen ${index + 1}` })}
                    className="overflow-hidden rounded-[1.5rem] border border-[#c8ddbd] bg-white/90 p-3 text-left shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <img
                      src={src}
                      alt={`Flavor Bridge supporting screen ${index + 1}`}
                      className="h-[22rem] w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : isIAFinancial ? (
              <div className="grid gap-6 md:grid-cols-2">
                {iaFinancialPdfImages.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSelectedImage({ src, alt: `IA Financial Group creative asset ${index + 1}` })}
                    className="overflow-hidden rounded-[1.5rem] border border-[#1E3A8A]/15 bg-white/90 p-3 text-left shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <img
                      src={src}
                      alt={`IA Financial Group creative asset ${index + 1}`}
                      className="h-[22rem] w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : id === '3' ? (
              <>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#93C5FD]">
                      Before
                    </p>
                    <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                      Earlier pages were visually compelling but often dense, with long vertical passages, weaker hierarchy, and titles that did not help users quickly understand where they were or what to focus on next.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#93C5FD]">
                      After
                    </p>
                    <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                      The redesign introduced clearer sectioning, more readable titles, better control of information load, and a structure that made pages easier to scan and easier to navigate without losing the site&apos;s atmosphere.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-6">
                    <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#93C5FD]">
                      Before pages
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.veroniqueBefore, alt: 'The Center Cannot Hold page before redesign' })}
                      className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.veroniqueBefore}
                        alt="The Center Cannot Hold page before redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesBefore, alt: 'The Center Cannot Hold resources page before redesign' })}
                      className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.resourcesBefore}
                        alt="The Center Cannot Hold resources page before redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                  </div>
                  <div className="space-y-6">
                    <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#FDE047]">
                      After pages
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.veroniqueAfter, alt: 'The Center Cannot Hold Veronique West page after redesign' })}
                      className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.veroniqueAfter}
                        alt="The Center Cannot Hold Veronique West page after redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesAfter, alt: 'The Center Cannot Hold resources page after redesign' })}
                      className="overflow-hidden rounded-[1.5rem] border border-[#334155] bg-[#0f172a]/88 text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.resourcesAfter}
                        alt="The Center Cannot Hold resources page after redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesAfterDetail, alt: 'Detailed redesigned resources page for The Center Cannot Hold' })}
                  className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                >
                  <img
                    src={tcchBeforeAfterImages.resourcesAfterDetail}
                    alt="Detailed redesigned resources page for The Center Cannot Hold"
                    className="h-[32rem] w-full object-contain object-top"
                  />
                </button>
              </>
            ) : null}
          </div>
          </div>
        </section>

      <section className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y px-5 py-8 md:px-8 ${isFlavorBridge ? 'border-[#c8ddbd]/20 bg-[linear-gradient(180deg,rgba(201,221,189,0.05),rgba(171,206,226,0.08))]' : isIAFinancial ? 'border-[#1E3A8A]/10 bg-[linear-gradient(180deg,rgba(30,58,138,0.05),rgba(210,224,247,0.1))]' : 'border-[#D5E7F2]/20 bg-white/80'}`}>
        <div className="mx-auto mb-6 flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="max-w-2xl">
            <p className={`font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] ${isFlavorBridge ? 'text-[#B90D37]' : isIAFinancial ? 'text-[#1E3A8A]' : 'text-[#BF8351]'}`}>
              Role Definition
            </p>
            <h3 className={`mt-3 font-['Ojuju:Bold',sans-serif] text-3xl md:text-4xl ${isFlavorBridge ? 'text-[#7B7F26]' : isIAFinancial ? 'text-[#1E3A8A]' : 'text-[#5B8FA3]'}`}>
              Here's what I actually did
            </h3>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl snap-x snap-mandatory justify-center gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.roleNotes.map((note, index) => (
            <article
              key={`${note}-${index}`}
              className={`min-w-[18rem] snap-start rounded-[1.5rem] border p-6 shadow-lg md:min-w-[22rem] ${
                isFlavorBridge
                  ? 'border-[#ffd986] bg-[#fffdf5]'
                  : isIAFinancial
                  ? 'border-[#D0E1FF] bg-white'
                  : 'border-[#D5E7F2] bg-white/95'
              }`}
            >
              <p className={`font-['Poppins:Regular',sans-serif] text-base leading-7 ${isFlavorBridge ? 'text-[#4f4b17]' : isIAFinancial ? 'text-[#364153]' : 'text-[#364153]'}`}>
                {note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`relative left-1/2 mt-16 w-screen -translate-x-1/2 px-5 py-18 md:px-8 ${isFlavorBridge ? 'bg-[linear-gradient(180deg,rgba(201,221,189,0.1),rgba(171,206,226,0.16))]' : ''}`}>
        <div className="mx-auto max-w-7xl">
          <PageContactCta
            label={isFlavorBridge ? 'Cook Up Something Together' : 'Contact Me'}
            title={
              isFlavorBridge
                ? 'If this project feels like the kind of product thinking your team needs, let\'s talk.'
                : 'If you made it this far, we should probably talk.'
            }
            body={
              isFlavorBridge
                ? 'For UX research, interface design, and product stories that need clarity, warmth, and a little more personality, I am happy to connect.'
                : undefined
            }
            accent={isFlavorBridge ? 'blue' : 'mixed'}
          />
        </div>
      </section>

      {selectedImage ? (
        <button
          type="button"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center bg-[#020617]/88 p-6 backdrop-blur-sm"
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0f172a] p-3 shadow-2xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[84vh] max-w-[84vw] object-contain"
            />
            <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.12em] text-white">
              Close
            </span>
          </div>
        </button>
      ) : null}
    </motion.div>
  );
}
