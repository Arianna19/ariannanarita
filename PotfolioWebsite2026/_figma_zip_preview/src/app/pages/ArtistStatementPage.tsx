import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import WaveTransition from '../components/WaveTransition';
import { LightbulbIcon } from '../components/Icons';

export default function ArtistStatementPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <LightbulbIcon className="w-20 h-20" />
          </div>
          <h1 className="font-['Ojuju:Bold',sans-serif] text-6xl text-[#ABCEE2] mb-6">
            Artist Statement
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ABCEE2] to-[#BF8351] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-12 md:p-16 space-y-8"
        >
          <div>
            <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#BF8351] mb-6">
              My Design Philosophy
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="border-l-4 border-[#ABCEE2] pl-8 py-4 bg-[#F9FAFB] rounded-r-2xl">
            <p className="font-['Poppins:Italic',sans-serif] text-xl text-[#1E2939] leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>

          <div>
            <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#ABCEE2] mb-6">
              Approach to Creative Work
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#D5E7F2] rounded-xl p-6">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-xl text-[#1E2939] mb-3">Core Principles</h3>
                <ul className="space-y-2">
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• User-centered thinking</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Iterative refinement</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Meaningful simplicity</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Intentional details</li>
                </ul>
              </div>
              <div className="bg-[#E6C4A8] rounded-xl p-6">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-xl text-[#1E2939] mb-3">Design Values</h3>
                <ul className="space-y-2">
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Accessibility first</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Honest communication</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Collaborative spirit</li>
                  <li className="font-['Poppins:Regular',sans-serif] text-[#364153]">• Continuous learning</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#BF8351] mb-6">
              Vision for Impact
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-32">
        <WaveTransition variant="gradient" />
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-3xl p-12 text-center shadow-xl"
        >
          <h3 className="font-['Ojuju:Bold',sans-serif] text-4xl text-white mb-4">
            Interested in working together?
          </h3>
          <p className="font-['Poppins:Regular',sans-serif] text-xl text-white/90 mb-8">
            Let's discuss how design can solve your challenges
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#ABCEE2] font-['Ojuju:Bold',sans-serif] text-lg px-10 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
