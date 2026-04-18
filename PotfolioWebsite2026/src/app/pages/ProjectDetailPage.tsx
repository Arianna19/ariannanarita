import { motion, useScroll, useTransform } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Accessibility, BookOpenText, Boxes, ChefHat, ChevronLeft, ChevronRight, DollarSign, Eye, Flame, Globe, HandHeart, Landmark, LayoutGrid, Mail, MessageCircleMore, Search, Shield, Soup, TrendingUp, Type, UtensilsCrossed } from 'lucide-react';
import WaveTransition from '../components/WaveTransition';
import PageContactCta from '../components/PageContactCta';
import { DesignIcon, LightbulbIcon, CodeIcon, UserIcon } from '../components/Icons';
import { FlowingWater, OceanBubbles } from '../components/OceanWave';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '../constants/contact';

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
    creativeSections: [
      'Process: direct client collaboration and iterative form studies helped define a mark that stayed clear, professional, and distinct across touchpoints.',
      'Output: the final identity system included a refined monogram, stronger typography decisions, and polished lockups for advisor branding use cases.',
      'Outcome: the logo held up cleanly across profile images, social graphics, and brand materials while communicating clarity and credibility.',
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
      'Process: interviews, synthesis, and concept pivots helped define how mixed-culture couples navigate food habits, compromise, and shared cooking decisions.',
      'Output: the final mobile concept included onboarding, recipe swiping, matches, ingredient views, and role-based cooking flows designed around recognition and ease of use.',
      'Outcome: the prototype translated research into a warmer, more social app direction that made cultural discovery and cooking together feel approachable.',
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
  '4': {
    title: 'Wasteland Survivors',
    categories: ['Collaborative Board Game', 'Visual Design', 'Art Direction'],
    summary:
      'A collaborative board game concept built around survival, scarcity, and tactical card play, where I helped shape the overall design direction, card language, and visual presentation of the experience.',
    role: 'Collaborative designer, visual direction, and game presentation',
    duration: '2 months',
    year: '2024',
    client: 'Collaborative studio team',
    thesis:
      'Wasteland Survivors explored how a tabletop game could feel tactile, strategic, and visually coherent while communicating survival mechanics clearly. My contribution focused on helping direct the look of the game so the cards, play surface, and overall tone felt like one world instead of disconnected pieces.',
    ideation:
      'The project developed through collaborative concepting, system discussions, and repeated design decisions around how players would read scarcity, resources, and risk at a glance. I helped push the visual direction toward a distressed survival aesthetic with stronger consistency across icons, typography, card framing, and the broader presentation of the game.',
    approach:
      'I treated the game like a visual system as much as a board game concept. That meant making the card hierarchy readable, reinforcing the world through texture and illustration choices, and using playtest presentation as a design tool to see what felt intuitive, memorable, and worth refining. A lot of my role was directional: helping the team make clearer aesthetic and system-level design decisions so the concept felt more intentional overall.',
    roleNotes: [
      'Helped direct the overall visual language so the board game concept felt cohesive across cards, components, and presentation materials.',
      'Contributed to the card design system, including how resource types, boosters, and medkit or food categories were framed and read during play.',
      'Supported collaborative iteration and playtesting by shaping design decisions that balanced atmosphere, clarity, and usability.',
    ],
    creativeNotes: ['Card system', 'Survival theme', 'Collaborative direction'],
    approachBullets: [
      'Built a more unified visual system so the cards felt like they belonged to the same survival world rather than separate assets.',
      'Used iconography, framing, and contrast to make resource categories and scoring rules easier to parse during play.',
      'Leaned into worn textures, muted earth tones, and bold outlines to support the post-apocalyptic board game tone.',
      'Made directional design calls that helped the team refine the concept through both aesthetic cohesion and clearer table presence.',
    ],
    creativeSections: [
      'Process: collaborative design decisions focused on building a consistent card system, survival-themed visual language, and a clearer relationship between icons, rules, and category types.',
      'Output: the final deck language included resource, booster, medkit, and food cards that felt unified through texture, framing, and a more intentional post-apocalyptic tone.',
      'Outcome: playtest materials and table presence showed the concept working as a cohesive board game experience rather than a loose set of standalone graphics.',
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
  frameBefore: encodeURI(`${import.meta.env.BASE_URL}tcch/frame-30-before.png`),
  resourcesWireframeBefore: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-wireframe-1-before.png`),
  veroniqueAfter: encodeURI(`${import.meta.env.BASE_URL}tcch/veronique-after-final.png`),
  resourcesAfterPrimary: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-after-primary.png`),
  resourcesAfterSecondary: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-after-secondary.png`),
  profilesWireframe: encodeURI(`${import.meta.env.BASE_URL}tcch/profiles-wireframe.png`),
  resourcesWireframeTwo: encodeURI(`${import.meta.env.BASE_URL}tcch/resources-wireframe-2.png`),
};
const wastelandVisuals = [
  {
    src: encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-1.png`),
    alt: 'Wasteland Survivors resource and booster card lineup',
  },
  {
    src: encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-2.png`),
    alt: 'Wasteland Survivors medkit cards',
  },
  {
    src: encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-3.png`),
    alt: 'Wasteland Survivors food resource cards',
  },
  {
    src: encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-4.png`),
    alt: 'Wasteland Survivors playtest hand and game table',
  },
  {
    src: encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-5.png`),
    alt: 'Wasteland Survivors collaborative playtest overview',
  },
];

function renderLeadWord(text: string, accentClass: string) {
  const [firstWord, ...rest] = text.split(' ');

  return (
    <>
      <span className={`font-['Poppins:Bold',sans-serif] ${accentClass}`}>{firstWord}</span>
      {rest.length ? ` ${rest.join(' ')}` : ''}
    </>
  );
}

export default function ProjectDetailPage() {
  const { id = '1' } = useParams();
  const project = projectContent[id] ?? projectContent['1'];
  const isFlavorBridge = id === '2';
  const isIAFinancial = id === '1';
  const isTCCH = id === '3';
  const isWasteland = id === '4';
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoom, setZoom] = useState(1);
  const approachItems = project.approachBullets ?? [];
  const roleAccentClass = isFlavorBridge
    ? 'text-[#B90D37]'
    : isIAFinancial
      ? 'text-[#1E3A8A]'
      : isTCCH
        ? 'text-[#FDE047]'
        : isWasteland
          ? 'text-[#8B4E2B]'
          : 'text-[#BF8351]';
  const heroRef = useRef<HTMLDivElement>(null);
  const zoomContainerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    setZoom(1);
  }, [selectedImage]);

  useEffect(() => {
    const container = zoomContainerRef.current;
    if (!selectedImage || !container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      setZoom((currentZoom) => {
        const nextZoom = event.deltaY < 0 ? currentZoom + 0.15 : currentZoom - 0.15;
        return Math.min(4, Math.max(1, Number(nextZoom.toFixed(2))));
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [selectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative min-h-screen pb-20 pt-32 ${
        isIAFinancial
          ? 'bg-[radial-gradient(circle_at_top,#f3f8ff_0%,#d2e0f7_40%,#abc0ec_100%)] dark:bg-[radial-gradient(circle_at_top,#162338_0%,#111c2d_42%,#0b1220_100%)]'
          : isFlavorBridge
            ? 'bg-[radial-gradient(circle_at_top,#fff0a8_0%,#ffd560_14%,#b9b40f_40%,#a3a207_100%)] dark:bg-[radial-gradient(circle_at_top,#6a5a12_0%,#4f4710_26%,#272a08_100%)]'
            : isWasteland
              ? 'bg-[radial-gradient(circle_at_top,#f3dfcc_0%,#cf9b72_28%,#845033_62%,#2a1710_100%)] dark:bg-[radial-gradient(circle_at_top,#5a3424_0%,#352015_35%,#140c08_100%)]'
            : id === '3'
              ? 'bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] dark:bg-[linear-gradient(180deg,#09111f_0%,#050b16_100%)]'
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
      ) : isWasteland ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: floatingLogoY }} className="absolute left-[6%] top-[11rem] text-[#f4d6bd]/22">
            <Shield className="h-20 w-20 md:h-24 md:w-24" />
          </motion.div>
          <motion.div style={{ y: financeIconYAlt }} className="absolute right-[8%] top-[16rem] hidden text-[#f6e7d8]/16 lg:block">
            <LayoutGrid className="h-24 w-24 md:h-28 md:w-28" />
          </motion.div>
          <motion.div style={{ y: orbY }} className="absolute left-[10%] top-[42rem] hidden text-[#f6c79d]/20 xl:block">
            <HandHeart className="h-24 w-24" />
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

      <div ref={heroRef} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/#work"
          className={`inline-flex items-center gap-2 border-b-2 border-transparent font-['Poppins:SemiBold',sans-serif] transition-colors ${
            isFlavorBridge
              ? 'text-[#7D1F33] hover:border-[#7D1F33] hover:text-[#5f1527]'
              : isWasteland
                ? 'text-[#4c2a1a] hover:border-[#8B4E2B] hover:text-[#2e160d]'
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
                      : isWasteland
                        ? index % 2 === 0
                          ? 'bg-[#f6e5d6] text-[#6e3d25]'
                          : 'bg-[#d8b193] text-[#4c2a1a]'
                      : index % 2 === 0
                        ? 'bg-[#D5E7F2] text-[#5B8FA3]'
                        : 'bg-[#E6C4A8] text-[#A66D42]'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className={`font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.95] md:text-7xl ${isIAFinancial ? 'text-[#1E3A8A]' : isWasteland ? 'text-[#F8E6D8]' : id === '3' ? 'text-[#F8FAFC]' : 'text-[#ABCEE2]'}`}>
              {project.title}
            </h1>

            <p className={`max-w-3xl font-['Poppins:Regular',sans-serif] text-xl leading-8 ${id === '3' ? 'text-[#D5E7F2]' : isWasteland ? 'text-[#F4DCCB]' : 'text-[#4A5565]'}`}>
              {project.summary}
            </p>

            <button
              type="button"
              onClick={() => document.getElementById('creative-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={`inline-flex w-fit items-center gap-2 rounded-full border px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                isFlavorBridge
                  ? 'border-[#ffd986] bg-white/88 text-[#7D1F33] hover:bg-[#fff2c8]'
                  : isIAFinancial
                    ? 'border-[#d0e1ff] bg-white/88 text-[#1E3A8A] hover:bg-[#eef5ff]'
                    : isWasteland
                      ? 'border-[#d2a47f] bg-[#2a1710]/72 text-[#F8E6D8] hover:bg-[#3a2117]'
                    : id === '3'
                      ? 'border-white/12 bg-[#111827]/78 text-[#F8FAFC] hover:bg-[#182235]'
                      : 'border-[#D5E7F2] bg-white/88 text-[#5B8FA3] hover:bg-[#F7FBFD]'
              }`}
            >
              Jump to Images
              <ChevronRight className="h-4 w-4" />
            </button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative grid min-h-[42rem] place-items-center overflow-hidden rounded-[2rem] shadow-2xl md:min-h-0 md:aspect-[4/3] ${
              isIAFinancial
                ? 'border border-[#1E3A8A]/20 bg-[radial-gradient(circle_at_top,#f7fbff_0%,#d8e8ff_60%,#b4d2ff_100%)]'
                : isFlavorBridge
                  ? 'border border-white/55 bg-[radial-gradient(circle_at_top,#ffd561_0%,#e2c018_24%,#a8a70c_100%)]'
                  : isWasteland
                    ? 'border border-[#d9c4ae]/55 bg-[radial-gradient(circle_at_top,#e7d6c7_0%,#ceb29b_38%,#b79379_100%)]'
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
            <div className={`relative grid w-full gap-4 ${isWasteland ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}`}>
              <div className={`grid min-h-[10rem] place-items-center rounded-[1.75rem] p-6 shadow-lg ${
                isFlavorBridge
                  ? 'border border-white/40 bg-white/20 backdrop-blur-sm'
                  : isIAFinancial
                    ? 'overflow-hidden border border-white/60 bg-[#dcecff]'
                    : isWasteland
                      ? 'overflow-hidden border border-[#f2e5db]/80 bg-[#efe1d4]/82 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]'
                    : id === '3'
                      ? 'overflow-hidden border border-white/10 bg-[#111827]'
                      : 'border border-white/60 bg-white/70 backdrop-blur-sm'
              }`}>
                {isFlavorBridge ? (
                  <img src={flavorBridgeLogo} alt="Flavor Bridge logo" className="h-28 w-28 object-contain md:h-36 md:w-36" />
                ) : isIAFinancial ? (
                  <img src={iaFinancialLogoPng} alt="IA Financial Group logo" className="h-24 w-full object-contain px-10 md:h-28" />
                ) : isWasteland ? (
                  <img
                    src={encodeURI(`${import.meta.env.BASE_URL}wasteland-survivors/wasteland-0.png`)}
                    alt="Wasteland Survivors title artwork"
                    className="h-full w-full scale-[0.8] object-contain"
                  />
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
                      { icon: Search, label: 'Research process' },
                      { icon: HandHeart, label: 'Interaction flow' },
                      { icon: LayoutGrid, label: 'Final prototype' },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={`rounded-[1.5rem] border p-5 backdrop-blur-sm ${
                          index === 1 ? 'border-[#ffd986]/80 bg-[#fff4cf]/85' : 'border-[#fff1b6]/70 bg-[#fff8e0]/78'
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
              ) : isWasteland ? (
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Boxes, label: 'Supply system' },
                    { icon: Flame, label: 'Survival theme' },
                    { icon: Shield, label: 'Playtest balance' },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.5rem] border p-4 backdrop-blur-sm ${
                        index === 1 ? 'border-[#f7eab0]/80 bg-[#fff3d0]/85' : 'border-[#f7efc7]/70 bg-[#fff8e0]/78'
                      }`}
                    >
                      <item.icon className="h-5 w-5 text-[#C41E3A]" />
                      <p className="mt-3 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#8c8a21]">
                        Focus
                      </p>
                      <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-lg leading-tight text-[#8B2A3E]">{item.label}</p>
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
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Landmark, label: 'Client process' },
                    { icon: Type, label: 'Identity system' },
                    { icon: Eye, label: 'Final output' },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.5rem] border p-5 backdrop-blur-sm ${
                        index === 1 ? 'border-[#BF8351]/30 bg-[#FFF8F3]/88' : 'border-[#d8e8ff]/80 bg-[#f7fbff]/88'
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${index === 1 ? 'text-[#BF8351]' : 'text-[#1E3A8A]'}`} />
                      <p className="mt-3 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#5B8FA3]">
                        Focus
                      </p>
                      <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-xl leading-none text-[#1E2939]">{item.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="relative left-1/2 mt-10 w-screen -translate-x-1/2 px-5 py-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={`grid gap-0 overflow-hidden rounded-[1.75rem] border shadow-lg sm:grid-cols-2 xl:grid-cols-4 ${
            isFlavorBridge
              ? 'border-[#ffd986] bg-white/85'
              : isIAFinancial
                ? 'border-[#D0E1FF] bg-white/90'
                : isWasteland
                  ? 'border-[#d8b193] bg-[#fffaf6]'
                  : isTCCH
                    ? 'border-[#d9dee8] bg-white'
                    : 'border-[#D5E7F2] bg-white/95'
          }`}>
            {[
              ['Role', project.role],
              ['Duration', project.duration],
              ['Year', project.year],
              ['Client', project.client],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`px-6 py-6 md:px-8 ${
                  index > 0
                    ? isTCCH
                      ? 'border-t border-[#e6ebf2] sm:border-l sm:border-t-0'
                      : isWasteland
                        ? 'border-t border-[#ecd7c7] sm:border-l sm:border-t-0'
                        : 'border-t border-[#E7EDF4] sm:border-l sm:border-t-0'
                    : ''
                }`}
              >
                <p className={`font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.18em] ${
                  isFlavorBridge
                    ? 'text-[#B90D37]'
                    : isIAFinancial
                      ? 'text-[#1E3A8A]'
                      : isWasteland
                        ? 'text-[#8B4E2B]'
                        : isTCCH
                          ? 'text-[#6b7280]'
                          : 'text-[#BF8351]'
                }`}>
                  {label}
                </p>
                <p className={`mt-3 max-w-[18rem] font-['Poppins:Medium',sans-serif] leading-8 ${
                  'text-[1.2rem]'
                } ${
                  isFlavorBridge
                    ? 'text-[#3f3b18]'
                    : isIAFinancial
                      ? 'text-[#1E2939]'
                      : isWasteland
                        ? 'text-[#4f3427]'
                        : isTCCH
                          ? 'text-[#111827]'
                          : 'text-[#1E2939]'
                }`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <WaveTransition variant="blue" />
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 md:px-8">
        <section className={`rounded-[2rem] p-10 shadow-xl ${
          isFlavorBridge
            ? 'border border-[#ffd986] bg-white/88 backdrop-blur-sm'
            : isWasteland
              ? 'border border-[#d8b193] bg-[#f9efe7]/96'
              : 'border border-[#E6C4A8] bg-white/95'
        }`}>
          <div className="mb-5 flex items-center gap-4">
            <LightbulbIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${isFlavorBridge ? 'text-[#B90D37]' : isWasteland ? 'text-[#6e3d25]' : 'text-[#BF8351]'}`}>Thesis</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${isFlavorBridge ? 'text-[#364153] dark:text-[#1f2937]' : isWasteland ? 'text-[#4f3427]' : 'text-[#364153]'}`}>{project.thesis}</p>
        </section>

        <section className={`rounded-[2rem] p-10 shadow-xl ${
          isFlavorBridge
            ? 'border border-[#c8ddbd] bg-[#f8f9ef]/92 backdrop-blur-sm dark:border-[#3e4715] dark:bg-[#15190d]/92'
            : isWasteland
              ? 'border border-[#e3c8b4] bg-[#fcf5ef]/95'
              : 'border border-[#D5E7F2] bg-white/95'
        }`}>
          <div className="mb-5 flex items-center gap-4">
            <UserIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${isFlavorBridge ? 'text-[#7B7F26]' : isIAFinancial ? 'text-[#1E3A8A]' : isWasteland ? 'text-[#8B4E2B]' : 'text-[#ABCEE2]'}`}>Ideation</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${isFlavorBridge ? 'text-[#364153] dark:text-[#475569]' : isWasteland ? 'text-[#4f3427]' : isIAFinancial ? 'text-[#364153]' : 'text-[#364153]'}`}>{project.ideation}</p>
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
            ) : isWasteland ? (
              <>
                <div className="rounded-[1.5rem] border border-[#e0b48d] bg-[#f7e7d9] p-6">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#8B4E2B]">
                    System direction
                  </p>
                  <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4f3427]">
                    Early decisions focused on how players would quickly distinguish resources, boosters, and special card behaviors. I helped guide those choices so the game could feel thematic without becoming visually muddy or harder to learn at the table.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[#d6a985] bg-[#fff7f0] p-6">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#6e3d25]">
                    Playtest readability
                  </p>
                  <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4f3427]">
                    The collaborative process made it easier to judge what was landing visually in context. Seeing the cards in-hand and on the table helped reinforce which details felt clear, which textures supported the theme, and where stronger direction improved the overall presentation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(wastelandVisuals[3])}
                  className="overflow-hidden rounded-[1.5rem] border border-[#d8b193] bg-[#2a1710] shadow-lg transition-transform hover:-translate-y-1 md:col-span-2"
                >
                  <img
                    src={wastelandVisuals[3].src}
                    alt={wastelandVisuals[3].alt}
                    className="h-[20rem] w-full object-cover"
                  />
                </button>
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

        <section className={`rounded-[2rem] p-10 shadow-xl ${
          isFlavorBridge
            ? 'border border-[#ffd986] bg-white/88 backdrop-blur-sm'
            : isWasteland
              ? 'border border-[#d6a985] bg-[#fff7f0]/96'
            : isTCCH
              ? 'border border-[#334155] bg-[#0f172a]/90'
              : 'border border-[#E6C4A8] bg-white/95'
        }`}>
          <div className="mb-5 flex items-center gap-4">
            <CodeIcon className="h-14 w-14" />
            <h2 className={`font-['Ojuju:Bold',sans-serif] text-4xl ${
              isFlavorBridge ? 'text-[#B90D37]' : isWasteland ? 'text-[#8B4E2B]' : isTCCH ? 'text-[#F8FAFC]' : 'text-[#BF8351]'
            }`}>Approach</h2>
          </div>
          <p className={`font-['Poppins:Regular',sans-serif] text-lg leading-8 ${
            isFlavorBridge
              ? 'text-[#364153] dark:text-[#1f2937]'
              : isWasteland
                ? 'text-[#4f3427]'
              : isTCCH
                ? 'text-[#D5E7F2]'
                : 'text-[#364153]'
          }`}>{project.approach}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {approachItems.map((item, index) => (
              <li
                key={item}
                className={`rounded-[1.25rem] border p-5 font-['Poppins:Regular',sans-serif] text-base leading-7 ${
                  isFlavorBridge
                    ? index % 2 === 0
                      ? 'border-[#c8ddbd] bg-[#f6f8ef] text-[#364153]'
                      : 'border-[#ffd986] bg-[#fff6da] text-[#364153]'
                    : isWasteland
                      ? index % 2 === 0
                        ? 'border-[#e0b48d] bg-[#f7e7d9] text-[#4f3427]'
                        : 'border-[#d6a985] bg-[#fff1e5] text-[#4f3427]'
                    : isTCCH
                      ? index % 2 === 0
                        ? 'border-[#334155] bg-[#111827] text-[#E2E8F0]'
                        : 'border-[#475569] bg-[#172033] text-[#E2E8F0]'
                    : index % 2 === 0
                      ? 'border-[#D5E7F2] bg-[#F9FAFB] text-[#364153]'
                      : 'border-[#E6C4A8] bg-[#FFF8F3] text-[#364153]'
                }`}
              >
                {renderLeadWord(item, roleAccentClass)}
              </li>
            ))}
          </ul>
        </section>

        </div>

        <section id="creative-works" className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y px-5 py-16 md:px-8 ${
          isFlavorBridge
            ? 'border-[#c8ddbd]/10 bg-transparent'
            : isIAFinancial
              ? 'border-[#1E3A8A]/10 bg-[linear-gradient(180deg,rgba(30,58,138,0.04),rgba(210,224,247,0.16))]'
              : isWasteland
                ? 'border-[#8B4E2B]/12 bg-[linear-gradient(180deg,rgba(248,236,224,0.55),rgba(229,197,170,0.32))]'
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
                : isWasteland
                  ? 'text-[#6e3d25]'
                : id === '3'
                  ? 'text-[#F8FAFC]'
                  : 'text-[#ABCEE2]'
          }`}>Creative Works</h2>
          <p className={`mt-4 font-['Poppins:Regular',sans-serif] text-lg leading-8 ${
            isFlavorBridge || isIAFinancial
              ? 'text-[#364153] dark:text-[#1f2937]'
              : isWasteland
                ? 'text-[#4f3427]'
              : id === '3'
                ? 'text-[#D5E7F2]'
                : 'text-[#364153]'
          }`}>
            {isFlavorBridge
              ? 'Flavor Bridge moved through paper and Figma prototyping before settling into a mobile-first direction. The final app uses familiar interaction patterns to make recipe exploration feel light, social, and easier to navigate for couples with different tastes.'
              : isIAFinancial
                ? 'A clear identity system for Guillaume-Rene Lalumiere designed to feel professional, direct, and easy to use across digital touchpoints and printed advisor materials.'
                : isWasteland
                  ? 'These visuals show the system language and collaborative playtest context for Wasteland Survivors, from resource and medkit cards to the game in use on the table.'
                : id === '3'
                  ? 'The redesign centered on clearer structure, stronger orientation, and more accessible information flow while preserving the site\'s immersive artistic atmosphere.'
                  : 'This area is ready for final images, mockups, spreads, flows, and system details once your real project assets are added, preferably before the caffeine wears off.'}
          </p>

          <div className="mt-8 space-y-6">
            {isFlavorBridge ? (
              <>
                <div className="grid gap-6 lg:grid-cols-3">
                  {project.creativeSections?.map((section, index) => (
                    <div
                      key={section}
                      className={`rounded-[1.75rem] border p-6 shadow-xl ${
                        index === 1 ? 'border-[#ffd986] bg-[#fff5db]' : 'border-[#c8ddbd] bg-[#fffdf5]'
                      }`}
                    >
                      <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#B90D37]">
                        Creative focus {index + 1}
                      </p>
                      <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4f4b17]">
                        {section}
                      </p>
                    </div>
                  ))}
                </div>
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
              </>
            ) : isIAFinancial ? (
              <>
                <div className="grid gap-6 lg:grid-cols-3">
                  {project.creativeSections?.map((section, index) => (
                    <div
                      key={section}
                      className={`rounded-[1.75rem] border p-6 shadow-xl ${
                        index === 1 ? 'border-[#E6C4A8] bg-[#FFF8F3]' : 'border-[#D0E1FF] bg-[#F7FBFF]'
                      }`}
                    >
                      <p className={`font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] ${
                        index === 1 ? 'text-[#BF8351]' : 'text-[#1E3A8A]'
                      }`}>
                        Creative focus {index + 1}
                      </p>
                      <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">
                        {section}
                      </p>
                    </div>
                  ))}
                </div>
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
              </>
            ) : isWasteland ? (
              <>
                <div className="grid gap-6 lg:grid-cols-3">
                  {project.creativeSections?.map((section, index) => (
                    <div
                      key={section}
                      className={`rounded-[1.75rem] border p-6 shadow-xl ${
                        index === 1 ? 'border-[#d8b193] bg-[#fff5ec]' : 'border-[#e8cdb8] bg-[#fcf5ef]'
                      }`}
                    >
                      <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#8B4E2B]">
                        Creative focus {index + 1}
                      </p>
                      <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4f3427]">
                        {section}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {wastelandVisuals.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`overflow-hidden rounded-[1.5rem] border p-3 text-left shadow-lg transition-transform hover:-translate-y-1 ${
                        index >= 3 ? 'md:col-span-2 xl:col-span-1' : ''
                      } border-[#d8b193] bg-[#fffaf5]`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full rounded-[1rem] object-cover ${index >= 3 ? 'h-[20rem]' : 'h-[18rem]'}`}
                      />
                    </button>
                  ))}
                </div>
              </>
            ) : id === '3' ? (
              <>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#93C5FD]">
                      Before: original page flow
                    </p>
                    <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                      These earlier screens show the denser, less guided structure. The atmosphere was strong, but the hierarchy and page framing did less to help users quickly understand what they were seeing.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#FDE047]">
                      After: clearer hierarchy
                    </p>
                    <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                      The redesign uses more direct titles, cleaner grouping, and stronger orientation cues so the pages feel easier to parse while still keeping the project&apos;s atmosphere intact.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#93C5FD]">
                    Before examples
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.frameBefore, alt: 'The Center Cannot Hold page before redesign' })}
                      className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.frameBefore}
                        alt="The Center Cannot Hold page before redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesWireframeBefore, alt: 'The Center Cannot Hold resources page before redesign' })}
                      className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.resourcesWireframeBefore}
                        alt="The Center Cannot Hold resources page before redesign"
                        className="h-[24rem] w-full object-contain object-top"
                      />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#FDE047]">
                    After examples
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.veroniqueAfter, alt: 'The Center Cannot Hold Veronique West page after redesign' })}
                      className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.veroniqueAfter}
                        alt="The Center Cannot Hold Veronique West page after redesign"
                        className="h-[28rem] w-full object-contain object-top"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesAfterPrimary, alt: 'The Center Cannot Hold primary resources page after redesign' })}
                      className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.resourcesAfterPrimary}
                        alt="The Center Cannot Hold primary resources page after redesign"
                        className="h-[28rem] w-full object-contain object-top"
                      />
                    </button>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: tcchBeforeAfterImages.resourcesAfterSecondary, alt: 'The Center Cannot Hold secondary resources page after redesign' })}
                      className="overflow-hidden rounded-[1.75rem] border border-[#334155] bg-[#0f172a] text-left shadow-xl transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={tcchBeforeAfterImages.resourcesAfterSecondary}
                        alt="The Center Cannot Hold secondary resources page after redesign"
                        className="h-[28rem] w-full object-contain object-top"
                      />
                    </button>
                    <div className="rounded-[1.75rem] border border-[#334155] bg-[#0f172a]/88 p-6 shadow-xl">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#FDE047]">
                        Key redesign moves
                      </p>
                      <p className="mt-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#E2E8F0]">
                        Titles became more direct, sections were grouped with more intention, and the pages were edited so neurodivergent users could orient themselves faster without losing the site&apos;s atmosphere.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          </div>
        </section>

      <section className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y px-5 py-8 md:px-8 ${
        isFlavorBridge
          ? 'border-[#c8ddbd]/20 bg-[linear-gradient(180deg,rgba(201,221,189,0.05),rgba(171,206,226,0.08))]'
          : isIAFinancial
            ? 'border-[#1E3A8A]/10 bg-[linear-gradient(180deg,rgba(30,58,138,0.05),rgba(210,224,247,0.1))]'
            : isWasteland
              ? 'border-[#8B4E2B]/10 bg-[linear-gradient(180deg,rgba(255,245,236,0.72),rgba(229,197,170,0.26))]'
            : isTCCH
              ? 'border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(10,15,28,0.98))]'
              : 'border-[#D5E7F2]/20 bg-white/80'
      }`}>
        <div className="mx-auto mb-6 flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="max-w-2xl">
            <p className={`font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] ${isFlavorBridge ? 'text-[#B90D37]' : isIAFinancial ? 'text-[#1E3A8A]' : isWasteland ? 'text-[#8B4E2B]' : 'text-[#BF8351]'}`}>
              Role Definition
            </p>
            <h3 className={`mt-3 font-['Ojuju:Bold',sans-serif] text-3xl md:text-4xl ${
              isFlavorBridge
                ? 'text-[#7B7F26]'
                : isIAFinancial
                  ? 'text-[#1E3A8A]'
                  : isWasteland
                    ? 'text-[#6e3d25]'
                  : isTCCH
                    ? 'text-[#F8FAFC]'
                    : 'text-[#5B8FA3]'
            }`}>
              Here's what I actually did
            </h3>
            <p className={`mt-3 font-['Poppins:Regular',sans-serif] text-sm leading-7 ${
              isFlavorBridge
                ? 'text-[#4f4b17]'
                : isIAFinancial
                  ? 'text-[#364153]'
                  : isWasteland
                    ? 'text-[#4f3427]'
                  : isTCCH
                    ? 'text-[#CBD5E1]'
                    : 'text-[#4A5565]'
            }`}>
              Structured so employers can scan responsibilities, collaboration, and outcomes quickly.
            </p>
          </div>
        </div>

        <div className={`mx-auto mb-4 flex max-w-7xl items-center justify-center gap-3 md:hidden ${
          isFlavorBridge
            ? 'text-[#7B7F26]'
            : isIAFinancial
              ? 'text-[#1E3A8A]'
              : isWasteland
                ? 'text-[#8B4E2B]'
              : 'text-[#93C5FD]'
        }`}>
          <ChevronLeft className="h-4 w-4" />
          <p className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.14em]">
            Swipe through
          </p>
          <ChevronRight className="h-4 w-4" />
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
                    : isWasteland
                      ? 'border-[#d8b193] bg-[#fff7f0]'
                    : isTCCH
                      ? 'border-[#334155] bg-[#111827]/92'
                      : 'border-[#D5E7F2] bg-white/95'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`rounded-full px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-[0.7rem] uppercase tracking-[0.18em] ${
                  isFlavorBridge
                    ? 'bg-[#fff0b5] text-[#B90D37]'
                    : isIAFinancial
                      ? 'bg-[#E8F0FF] text-[#1E3A8A]'
                      : isWasteland
                        ? 'bg-[#f7e7d9] text-[#8B4E2B]'
                      : isTCCH
                        ? 'bg-[#172033] text-[#FDE047]'
                        : 'bg-[#FFF8F3] text-[#BF8351]'
                }`}>
                  Focus {index + 1}
                </span>
                <div className={`h-px flex-1 ${
                  isFlavorBridge
                    ? 'bg-[#ffd986]'
                    : isIAFinancial
                      ? 'bg-[#D0E1FF]'
                      : isWasteland
                        ? 'bg-[#d8b193]'
                      : isTCCH
                        ? 'bg-[#334155]'
                        : 'bg-[#E6C4A8]'
                }`} />
              </div>
              <p className={`mt-4 font-['Poppins:Regular',sans-serif] text-base leading-7 ${
                isFlavorBridge
                  ? 'text-[#4f4b17]'
                  : isIAFinancial
                    ? 'text-[#364153]'
                    : isWasteland
                      ? 'text-[#4f3427]'
                    : isTCCH
                      ? 'text-[#E2E8F0]'
                      : 'text-[#364153]'
              }`}>
                {renderLeadWord(note, roleAccentClass)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={`relative left-1/2 mt-16 w-screen -translate-x-1/2 px-5 py-18 md:px-8 ${
        isFlavorBridge
          ? 'bg-[linear-gradient(180deg,rgba(201,221,189,0.1),rgba(171,206,226,0.16))]'
          : isIAFinancial
            ? 'bg-[linear-gradient(180deg,rgba(30,58,138,0.08),rgba(210,224,247,0.18))]'
          : isWasteland
            ? 'bg-[linear-gradient(180deg,rgba(251,242,234,0.88),rgba(205,155,114,0.18))]'
          : isTCCH
            ? 'bg-[linear-gradient(180deg,rgba(15,23,42,0.22),rgba(9,14,24,0.48))]'
            : ''
      }`}>
        <div className="mx-auto max-w-7xl">
          {isIAFinancial ? (
            <section className="relative overflow-hidden rounded-[2.25rem] border border-[#D0E1FF] bg-[radial-gradient(circle_at_top,#f8fbff_0%,#e6f0ff_46%,#d6e6ff_100%)] px-6 py-10 shadow-2xl sm:px-8 md:px-10 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="absolute -left-8 top-6 h-28 w-28 rounded-full bg-[#93C5FD]/28 blur-3xl" />
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#1E3A8A]/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-28 w-28 rounded-full bg-[#BF8351]/12 blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm">
                    <MessageCircleMore className="h-4 w-4 text-[#1E3A8A]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#1E3A8A]">
                      Brand clarity + polished identity
                    </span>
                  </div>
                  <h3 className="mt-5 font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.95] text-[#1E3A8A] md:text-5xl">
                    If your team needs branding that feels clear, credible, and genuinely polished, let&apos;s talk.
                  </h3>
                  <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
                    I love identity work that has to feel strong and professional without becoming stiff or forgettable.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E3A8A] px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#18317a] hover:shadow-lg"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                    Contact Page
                  </Link>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ABCEE2] bg-white/85 px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D0E1FF] bg-white/75 px-7 py-4 font-['Poppins:Medium',sans-serif] text-[#4A5565] shadow-sm">
                    <Globe className="h-4 w-4 text-[#5B8FA3]" />
                    Montreal + remote worldwide
                  </div>
                </div>
              </div>
            </section>
          ) : isFlavorBridge ? (
            <section className="relative overflow-hidden rounded-[2.25rem] border border-[#c8ddbd] bg-[radial-gradient(circle_at_top,#fff7c8_0%,#fff3ae_28%,#eef5cf_100%)] px-6 py-10 shadow-2xl sm:px-8 md:px-10 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -left-8 top-4 h-28 w-28 rounded-full bg-[#ffd561]/30 blur-3xl" />
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#B90D37]/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[#7B7F26]/16 blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm">
                    <MessageCircleMore className="h-4 w-4 text-[#B90D37]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#B90D37]">
                      Product thinking with personality
                    </span>
                  </div>
                  <h3 className="mt-5 font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.95] text-[#7B7F26] md:text-5xl">
                    If your product needs research, warmth, and a little more personality, let&apos;s talk.
                  </h3>
                  <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#4f4b17]">
                    I love shaping product ideas that feel intuitive, emotionally smart, and easy for people to actually use together.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B90D37] px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#96102f] hover:shadow-lg"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                    Contact Page
                  </Link>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ABCEE2] bg-white/85 px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8ddbd] bg-white/75 px-7 py-4 font-['Poppins:Medium',sans-serif] text-[#4A5565] shadow-sm">
                    <Globe className="h-4 w-4 text-[#5B8FA3]" />
                    Montreal + remote worldwide
                  </div>
                </div>
              </div>
            </section>
          ) : isTCCH ? (
            <section className="relative overflow-hidden rounded-[2.25rem] border border-[#334155] bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(17,24,39,0.98))] px-6 py-10 shadow-2xl sm:px-8 md:px-10 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-[#1D4ED8]/25 blur-3xl" />
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FDE047]/12 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-[#93C5FD]/12 blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#334155] bg-[#111827]/80 px-4 py-2 shadow-sm">
                    <MessageCircleMore className="h-4 w-4 text-[#FDE047]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#FDE047]">
                      Accessibility-minded collaboration
                    </span>
                  </div>
                  <h3 className="mt-5 font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.95] text-[#F8FAFC] md:text-5xl">
                    If your team needs thoughtful redesign work without flattening the soul out of it, let&apos;s talk.
                  </h3>
                  <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#CBD5E1]">
                    I love projects that need structure, accessibility, and a strong visual atmosphere to coexist without fighting each other.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FDE047] px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#0f172a] transition-all hover:-translate-y-0.5 hover:bg-[#fde96f] hover:shadow-lg"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                    Contact Page
                  </Link>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#475569] bg-[#111827]/80 px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#E2E8F0] transition-all hover:-translate-y-0.5 hover:border-[#93C5FD] hover:bg-[#172033] hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#334155] bg-[#111827]/65 px-7 py-4 font-['Poppins:Medium',sans-serif] text-[#93C5FD] shadow-sm">
                    <Globe className="h-4 w-4 text-[#FDE047]" />
                    Montreal + remote worldwide
                  </div>
                </div>
              </div>
            </section>
          ) : isWasteland ? (
            <section className="relative overflow-hidden rounded-[2.25rem] border border-[#d8b193] bg-[radial-gradient(circle_at_top,#fff7f0_0%,#f3dfcf_36%,#e0b48d_100%)] px-6 py-10 shadow-2xl sm:px-8 md:px-10 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="absolute -left-8 top-6 h-28 w-28 rounded-full bg-[#f5d1b2]/40 blur-3xl" />
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#8B4E2B]/12 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[#4c2a1a]/12 blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm">
                    <MessageCircleMore className="h-4 w-4 text-[#8B4E2B]" />
                    <span className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#8B4E2B]">
                      Collaborative systems + visual direction
                    </span>
                  </div>
                  <h3 className="mt-5 font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.95] text-[#6e3d25] md:text-5xl">
                    If your team needs a strong design direction for a collaborative concept, let&apos;s talk.
                  </h3>
                  <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#4f3427]">
                    I love projects where worldbuilding, structure, and teamwork all have to click at the same time.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B4E2B] px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#6e3d25] hover:shadow-lg"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                    Contact Page
                  </Link>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#d8b193] bg-white/85 px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#6e3d25] transition-all hover:-translate-y-0.5 hover:bg-[#fff2e7] hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e8cdb8] bg-white/75 px-7 py-4 font-['Poppins:Medium',sans-serif] text-[#4f3427] shadow-sm">
                    <Globe className="h-4 w-4 text-[#8B4E2B]" />
                    Montreal + remote worldwide
                  </div>
                </div>
              </div>
            </section>
          ) : (
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
          )}
        </div>
      </section>

      {selectedImage ? (
        <div
          role="presentation"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center bg-[#020617]/88 p-6 backdrop-blur-sm"
        >
          <div
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            ref={zoomContainerRef}
            className="relative max-h-[90vh] max-w-[90vw] rounded-[1.5rem] border border-white/15 bg-[#0f172a] p-3 shadow-2xl"
          >
            <div className="flex max-h-[84vh] max-w-[84vw] overflow-auto rounded-[1rem]">
              <div
                className="flex items-center justify-center transition-[width,height] duration-150 ease-out"
                style={{
                  width: `${zoom * 84}vw`,
                  height: `${zoom * 84}vh`,
                }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.12em] text-white">
              Scroll to zoom
            </span>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-black/60"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}
