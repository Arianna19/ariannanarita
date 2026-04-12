import { motion, useScroll, useTransform } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import WaveTransition from '../components/WaveTransition';
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
  actions?: { label: string; href: string; external?: boolean }[];
  approachBullets?: string[];
  ideationPanels?: string[];
  creativeSections?: string[];
};

const projectContent: Record<string, ProjectRecord> = {
  '1': {
    title: 'Tidal Brand System',
    categories: ['Graphic Design', 'Brand Strategy'],
    summary:
      'Placeholder case study for a brand identity system that needed to feel clearer, more memorable, and more cohesive across digital and print.',
    role: 'Lead Designer',
    duration: '8 weeks',
    year: '2026',
    client: 'Placeholder client',
    thesis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, lectus eget volutpat suscipit, urna magna eleifend lacus, vitae congue neque neque vitae lorem.',
    ideation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat lacus non justo laoreet, non fringilla arcu pellentesque. Suspendisse potenti.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut urna quis massa porttitor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    roleNotes: [
      'Placeholder for clarifying your exact design leadership and deliverables',
      'Placeholder for any collaboration with strategy, copy, or development partners',
      'Placeholder for what you owned fully versus what was shared with the team',
    ],
    creativeNotes: ['Identity concepts', 'System applications', 'Brand touchpoints'],
  },
  '2': {
    title: 'Current Mobile Experience',
    categories: ['UI/UX Design', 'Product Thinking'],
    summary:
      'Placeholder case study for a mobile interface redesign focused on navigation clarity, trust, and a less confusing user journey.',
    role: 'UI/UX Designer',
    duration: '10 weeks',
    year: '2026',
    client: 'Placeholder organization',
    thesis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, eros ut interdum pellentesque, neque arcu vulputate nisi, at cursus lorem tortor nec nisi.',
    ideation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae justo commodo, tristique ipsum vitae, molestie erat. Proin in aliquam urna.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sapien non ipsum semper, a imperdiet augue aliquam. Quisque nec leo sit amet mi egestas egestas.',
    roleNotes: [
      'Placeholder for research, flows, wireframes, and UI ownership',
      'Placeholder for testing, iteration, and rationale for key decisions',
      'Placeholder for how you collaborated with developers or stakeholders',
    ],
    creativeNotes: ['User flows', 'Interface studies', 'Wireframe to polish progression'],
  },
  '3': {
    title: 'Drift Editorial Platform',
    categories: ['Editorial Design', 'Digital Experience'],
    summary:
      'Placeholder case study for an editorial platform that balances expressive layouts with readability, hierarchy, and stronger storytelling.',
    role: 'Designer',
    duration: '6 weeks',
    year: '2026',
    client: 'Placeholder publication',
    thesis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate egestas tellus, vitae consequat justo tristique vel. Etiam rhoncus lectus a metus accumsan.',
    ideation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus velit sed neque facilisis, eget suscipit lacus aliquam. In eu est luctus, pretium sem et, cursus libero.',
    approach:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ligula et turpis tincidunt, nec viverra turpis tristique. Integer ut nulla turpis.',
    roleNotes: [
      'Placeholder for visual system, layout, and production responsibilities',
      'Placeholder for collaborator credits and the boundaries of your contribution',
      'Placeholder for how research or audience needs shaped the design direction',
    ],
    creativeNotes: ['Editorial grids', 'Reading rhythm', 'Story pacing across screens'],
  },
  '4': {
    title: 'Flavor Bridge',
    categories: ['UX Research', 'Mobile App Design', 'Interaction Design'],
    summary:
      'A mobile app concept designed to help mixed-culture couples navigate different eating habits through recipe discovery, shared matching, and a cooking flow inspired by familiar social app patterns.',
    role: 'Researcher, UX/UI designer, and prototype designer',
    duration: 'Course project',
    year: '2025',
    client: 'CART-310 Final Project',
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
    creativeNotes: ['Cultural filters', 'Recipe matching', 'Shared cooking flow'],
    actions: [
      {
        label: 'Open process PDF',
        href: `${import.meta.env.BASE_URL}flavor-bridge-process.pdf`,
      },
      {
        label: 'Open Figma prototype',
        href: 'https://www.figma.com/design/ZcQSKyHfiE2xAhBulbS7Xc/Prototype-2---High-Fidelity-Figma?node-id=46-700&t=vE0pEd62EsnCGPGh-1',
        external: true,
      },
    ],
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
};

export default function ProjectDetailPage() {
  const { id = '1' } = useParams();
  const project = projectContent[id] ?? projectContent['1'];
  const approachItems = project.approachBullets ?? [
    'Placeholder for strategy and key decisions',
    'Placeholder for how the design evolved',
    'Placeholder for user or audience considerations',
    'Placeholder for constraints and how they were handled',
  ];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pb-20 pt-32"
    >
      <div ref={heroRef} className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 border-b-2 border-transparent font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-colors hover:border-[#ABCEE2] hover:text-[#5B8FA3]"
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
                    index % 2 === 0 ? 'bg-[#D5E7F2] text-[#5B8FA3]' : 'bg-[#E6C4A8] text-[#A66D42]'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="font-['Ojuju:Bold',sans-serif] text-5xl leading-[0.95] text-[#ABCEE2] md:text-7xl">
              {project.title}
            </h1>

            <p className="max-w-3xl font-['Poppins:Regular',sans-serif] text-xl leading-8 text-[#4A5565]">
              {project.summary}
            </p>

            {project.actions?.length ? (
              <div className="flex flex-wrap gap-4">
                {project.actions.map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-['Poppins:SemiBold',sans-serif] transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                      index === 0
                        ? 'bg-[#BF8351] text-white hover:bg-[#A66D42]'
                        : 'border-2 border-[#ABCEE2] bg-white/80 text-[#7DB1D4] hover:bg-[#D5E7F2]'
                    }`}
                  >
                    {action.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : null}

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
            className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#D6A882] shadow-2xl"
          >
            <motion.div style={{ y: orbY }} className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/35 blur-3xl" />
            <motion.div style={{ y: heroY }} className="absolute inset-x-0 bottom-0 opacity-20">
              <FlowingWater className="h-48 w-full" />
            </motion.div>
            <OceanBubbles className="absolute left-8 top-8 h-24 w-24 opacity-60" />
            <div className="relative grid w-full gap-4 p-6 sm:p-8">
              <div className="rounded-[1.75rem] border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                      {id === '4' ? 'Research-led concept' : 'Project snapshot'}
                    </p>
                    <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939]">
                      {id === '4' ? 'Matching tastes across cultures' : 'Visual direction and decision-making'}
                    </p>
                  </div>
                  <DesignIcon className="h-[4.5rem] w-[4.5rem]" />
                </div>
              </div>
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
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <WaveTransition variant="blue" />
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-5 py-20 md:px-8">
        <section className="rounded-[2rem] border border-[#E6C4A8] bg-white/95 p-10 shadow-xl">
          <div className="mb-5 flex items-center gap-4">
            <LightbulbIcon className="h-14 w-14" />
            <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#BF8351]">Thesis</h2>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">{project.thesis}</p>
        </section>

        <section className="rounded-[2rem] border border-[#D5E7F2] bg-white/95 p-10 shadow-xl">
          <div className="mb-5 flex items-center gap-4">
            <UserIcon className="h-14 w-14" />
            <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2]">Ideation</h2>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">{project.ideation}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="grid min-h-[14rem] place-items-center rounded-[1.5rem] border border-[#D5E7F2] bg-[#F9FAFB] p-6 text-center">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#7DB1D4]">
                {id === '4' ? project.ideationPanels?.[0] : 'Research / sketch placeholder'}
              </p>
            </div>
            <div className="grid min-h-[14rem] place-items-center rounded-[1.5rem] border border-[#E6C4A8] bg-[#FFF8F3] p-6 text-center">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                {id === '4' ? project.ideationPanels?.[1] : 'Concept development placeholder'}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#E6C4A8] bg-white/95 p-10 shadow-xl">
          <div className="mb-5 flex items-center gap-4">
            <CodeIcon className="h-14 w-14" />
            <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#BF8351]">Approach</h2>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">{project.approach}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {approachItems.map((item, index) => (
              <li
                key={item}
                className={`rounded-[1.25rem] p-5 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153] ${
                  index % 2 === 0 ? 'bg-[#F9FAFB]' : 'bg-[#FFF8F3]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-[#D5E7F2] bg-white/95 p-10 shadow-xl">
          <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2]">Creative Works</h2>
          <p className="mt-4 font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            {id === '4'
              ? 'Flavor Bridge moved through paper and Figma prototyping before settling into a mobile-first direction. The final app uses familiar interaction patterns to make recipe exploration feel light, social, and easier to navigate for couples with different tastes.'
              : 'This area is ready for final images, mockups, spreads, flows, and system details once your real project assets are added, preferably before the caffeine wears off.'}
          </p>

          <div className="mt-8 space-y-6">
            <div className="grid min-h-[20rem] place-items-center rounded-[1.75rem] border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] to-[#ABCEE2] p-8 text-center">
              <div>
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-white">
                  {id === '4' ? 'Final concept direction' : 'Full-width hero showcase placeholder'}
                </p>
                <p className="mt-4 font-['Ojuju:Bold',sans-serif] text-3xl text-white">
                  {id === '4' ? 'A dating-style recipe app that helps couples discover meals they can both say yes to.' : 'Replace with final project imagery'}
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid min-h-[16rem] place-items-center rounded-[1.5rem] border border-[#E6C4A8] bg-[#FFF8F3] p-6 text-center">
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                  {id === '4' ? project.creativeSections?.[0] : 'Detail placeholder'}
                </p>
              </div>
              <div className="grid min-h-[16rem] place-items-center rounded-[1.5rem] border border-[#D5E7F2] bg-[#F9FAFB] p-6 text-center">
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#7DB1D4]">
                  {id === '4' ? project.creativeSections?.[1] : 'Process artifact placeholder'}
                </p>
              </div>
            </div>
            {id === '4' ? (
              <div className="grid min-h-[16rem] place-items-center rounded-[1.5rem] border border-[#E6C4A8] bg-white p-6 text-center">
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                  {project.creativeSections?.[2]}
                </p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#E6C4A8] bg-white/95 p-10 shadow-xl">
          <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#BF8351]">Role Definition</h2>
          <p className="mt-4 font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            This section is intentionally explicit so you can show your contribution clearly without over-claiming team work or sounding like you personally invented the internet.
          </p>
          <ul className="mt-6 space-y-4">
            {project.roleNotes.map((note, index) => (
              <li key={note} className="flex items-start gap-3">
                <span className={`mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full ${index % 2 === 0 ? 'bg-[#ABCEE2]' : 'bg-[#BF8351]'}`} />
                <span className="font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
