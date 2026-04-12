import { AnimatePresence, motion } from 'motion/react';

function HomeSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="site-skeleton h-5 w-64 rounded-full" />
          <div className="site-skeleton h-20 w-full max-w-3xl rounded-[1.75rem]" />
          <div className="site-skeleton h-14 w-full max-w-2xl rounded-[1.5rem]" />
          <div className="site-skeleton h-24 w-full max-w-2xl rounded-[1.75rem]" />
        </div>
        <div className="flex gap-4">
          <div className="site-skeleton h-14 w-48 rounded-full" />
          <div className="site-skeleton h-14 w-44 rounded-full" />
        </div>
      </div>
      <div className="site-skeleton h-[32rem] rounded-[2.5rem]" />
    </div>
  );
}

function ArtistStatementSkeleton() {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <div className="site-skeleton mx-auto h-5 w-48 rounded-full" />
        <div className="site-skeleton mx-auto h-20 w-full max-w-3xl rounded-[1.75rem]" />
        <div className="site-skeleton mx-auto h-7 w-full max-w-2xl rounded-full" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="site-skeleton min-h-[34rem] rounded-[2.5rem]" />
        <div className="site-skeleton h-64 rounded-[2rem]" />
      </div>
    </div>
  );
}

function BiographySkeleton() {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="site-skeleton mx-auto h-[4.5rem] w-[4.5rem] rounded-full" />
        <div className="site-skeleton mx-auto h-16 w-72 rounded-[1.5rem]" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="site-skeleton h-[34rem] rounded-[2.25rem]" />
        <div className="space-y-6">
          <div className="site-skeleton h-72 rounded-[2rem]" />
          <div className="site-skeleton h-64 rounded-[2rem]" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="site-skeleton h-52 rounded-[1.75rem]" />
            <div className="site-skeleton h-52 rounded-[1.75rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="site-skeleton h-5 w-32 rounded-full" />
        <div className="site-skeleton h-20 w-full max-w-3xl rounded-[1.75rem]" />
        <div className="site-skeleton h-24 w-full max-w-2xl rounded-[1.75rem]" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="site-skeleton min-h-[38rem] rounded-[2.25rem]" />
        <div className="space-y-6">
          <div className="site-skeleton h-48 rounded-[2rem]" />
          <div className="site-skeleton h-44 rounded-[1.75rem]" />
          <div className="site-skeleton h-40 rounded-[1.75rem]" />
        </div>
      </div>
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="space-y-8">
      <div className="site-skeleton h-5 w-44 rounded-full" />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="flex gap-3">
            <div className="site-skeleton h-10 w-32 rounded-full" />
            <div className="site-skeleton h-10 w-40 rounded-full" />
          </div>
          <div className="site-skeleton h-20 w-full max-w-3xl rounded-[1.75rem]" />
          <div className="site-skeleton h-28 w-full max-w-2xl rounded-[1.75rem]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="site-skeleton h-24 rounded-[1.5rem]" />
            <div className="site-skeleton h-24 rounded-[1.5rem]" />
            <div className="site-skeleton h-24 rounded-[1.5rem]" />
            <div className="site-skeleton h-24 rounded-[1.5rem]" />
          </div>
        </div>
        <div className="site-skeleton h-[28rem] rounded-[2.5rem]" />
      </div>
    </div>
  );
}

function getSkeleton(pathname: string) {
  if (pathname === '/artist-statement') {
    return <ArtistStatementSkeleton />;
  }

  if (pathname === '/biography') {
    return <BiographySkeleton />;
  }

  if (pathname === '/contact') {
    return <ContactSkeleton />;
  }

  if (pathname.startsWith('/project/')) {
    return <ProjectSkeleton />;
  }

  return <HomeSkeleton />;
}

export default function RouteLoadingOverlay({ active, pathname }: { active: boolean; pathname: string }) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="pointer-events-none fixed inset-0 z-[70] overflow-hidden bg-white/86 backdrop-blur-sm dark:bg-[#09141a]/86"
        >
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-5 pb-14 pt-32 md:px-8">
            {getSkeleton(pathname)}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
