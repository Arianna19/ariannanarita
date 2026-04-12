import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect } from 'react';
import WaveTransition from '../components/WaveTransition';
import { DesignIcon, LightbulbIcon, CodeIcon, UserIcon } from '../components/Icons';

const projectContent: Record<
  string,
  {
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
  }
> = {
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
  },
};

export default function ProjectDetailPage() {
  const { id = '1' } = useParams();
  const project = projectContent[id] ?? projectContent['1'];

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
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 border-b-2 border-transparent font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-colors hover:border-[#ABCEE2] hover:text-[#5B8FA3]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to selected work
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            className="grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#D6A882] shadow-2xl"
          >
            <div className="rounded-[1.5rem] border-2 border-dashed border-white/60 bg-white/75 px-10 py-10 text-center backdrop-blur-sm">
              <DesignIcon className="mx-auto h-24 w-24" />
              <p className="mt-4 font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                Project hero placeholder
              </p>
              <p className="mt-2 font-['Ojuju:Bold',sans-serif] text-2xl text-[#7DB1D4]">
                Replace with final project imagery
              </p>
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
            <div className="grid min-h-[14rem] place-items-center rounded-[1.5rem] border border-[#D5E7F2] bg-[#F9FAFB]">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#7DB1D4]">
                Research / sketch placeholder
              </p>
            </div>
            <div className="grid min-h-[14rem] place-items-center rounded-[1.5rem] border border-[#E6C4A8] bg-[#FFF8F3]">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                Concept development placeholder
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
            {[
              'Placeholder for strategy and key decisions',
              'Placeholder for how the design evolved',
              'Placeholder for user or audience considerations',
              'Placeholder for constraints and how they were handled',
            ].map((item, index) => (
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
            This area is ready for final images, mockups, spreads, flows, and system details once your real project assets are added, preferably before the caffeine wears off.
          </p>

          <div className="mt-8 space-y-6">
            <div className="grid min-h-[20rem] place-items-center rounded-[1.75rem] border border-[#D5E7F2] bg-gradient-to-br from-[#D5E7F2] to-[#ABCEE2]">
              <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-white">
                Full-width hero showcase placeholder
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid min-h-[16rem] place-items-center rounded-[1.5rem] border border-[#E6C4A8] bg-[#FFF8F3]">
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#BF8351]">
                  Detail placeholder
                </p>
              </div>
              <div className="grid min-h-[16rem] place-items-center rounded-[1.5rem] border border-[#D5E7F2] bg-[#F9FAFB]">
                <p className="font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.16em] text-[#7DB1D4]">
                  Process artifact placeholder
                </p>
              </div>
            </div>
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
