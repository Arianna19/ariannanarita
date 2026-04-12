import { AnimatePresence, motion } from 'motion/react';
import { LoaderCircle } from 'lucide-react';

export default function RouteLoadingOverlay({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-white/72 backdrop-blur-sm dark:bg-[#09141a]/76"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="w-[min(92vw,28rem)] rounded-[2rem] border border-[#D5E7F2] bg-white/92 p-6 shadow-2xl dark:bg-[rgba(10,26,33,0.92)]"
          >
            <div className="mb-5 flex items-center gap-3">
              <LoaderCircle className="site-spinner h-6 w-6 text-[#5B8FA3]" />
              <div>
                <p className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#5B8FA3]">Loading the next page</p>
                <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#4A5565] dark:text-[#d7e7ed]">
                  Please enjoy these aggressively on-brand skeletons.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="site-skeleton h-10 w-2/3 rounded-full" />
              <div className="site-skeleton h-5 w-full rounded-full" />
              <div className="site-skeleton h-5 w-5/6 rounded-full" />
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="site-skeleton h-24 rounded-[1.5rem]" />
                <div className="site-skeleton h-24 rounded-[1.5rem]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
