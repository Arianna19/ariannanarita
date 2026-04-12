import { AnimatePresence, motion } from 'motion/react';

export default function RouteLoadingOverlay({ active }: { active: boolean }) {
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
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-5 pt-32 pb-14 md:px-8">
            <div className="space-y-4">
              <div className="site-skeleton h-12 w-52 rounded-full" />
              <div className="site-skeleton h-16 w-full max-w-4xl rounded-[1.75rem]" />
              <div className="site-skeleton h-6 w-full max-w-2xl rounded-full" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="site-skeleton h-72 rounded-[2rem]" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="site-skeleton h-28 rounded-[1.75rem]" />
                  <div className="site-skeleton h-28 rounded-[1.75rem]" />
                </div>
              </div>
              <div className="site-skeleton h-[28rem] rounded-[2.25rem]" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
