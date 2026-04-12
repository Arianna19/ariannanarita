import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import WaveTransition from '../components/WaveTransition';
import { UserIcon, DesignIcon, BrandingIcon, CodeIcon } from '../components/Icons';

export default function BiographyPage() {
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
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <UserIcon className="w-20 h-20" />
          </div>
          <h1 className="font-['Ojuju:Bold',sans-serif] text-6xl text-[#ABCEE2] mb-6">
            Biography
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ABCEE2] to-[#BF8351] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-32">
              <div className="aspect-square bg-gradient-to-br from-[#D5E7F2] to-[#ABCEE2] rounded-2xl mb-6 flex items-center justify-center">
                <UserIcon className="w-48 h-48" />
              </div>
              <h2 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-2">
                Your Name Here
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-[#BF8351] mb-6">
                UI/UX Designer & Creative
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#4A5565]">
                  <div className="w-2 h-2 bg-[#ABCEE2] rounded-full" />
                  <span className="font-['Poppins:Regular',sans-serif]">Based in City, Country</span>
                </div>
                <div className="flex items-center gap-3 text-[#4A5565]">
                  <div className="w-2 h-2 bg-[#BF8351] rounded-full" />
                  <span className="font-['Poppins:Regular',sans-serif]">Available for projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#BF8351] mb-8">
                My Story
              </h2>

              <div className="space-y-6">
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-12">
              <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2] mb-8">
                Experience & Expertise
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-[#ABCEE2] pl-8">
                  <div className="flex items-start gap-6">
                    <DesignIcon className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-2">
                        Senior UI/UX Designer
                      </h3>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[#BF8351] mb-3">
                        Company Name | 2020 - Present
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#364153] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[#BF8351] pl-8">
                  <div className="flex items-start gap-6">
                    <BrandingIcon className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-2">
                        Product Designer
                      </h3>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[#BF8351] mb-3">
                        Previous Company | 2018 - 2020
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#364153] leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[#ABCEE2] pl-8">
                  <div className="flex items-start gap-6">
                    <CodeIcon className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-2">
                        Junior Designer
                      </h3>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[#BF8351] mb-3">
                        Startup Name | 2016 - 2018
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#364153] leading-relaxed">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#ABCEE2] mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1E2939] mb-1">
                      Master of Design
                    </h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#4A5565] text-sm">
                      University Name | 2014 - 2016
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1E2939] mb-1">
                      Bachelor of Arts
                    </h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#4A5565] text-sm">
                      College Name | 2010 - 2014
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#BF8351] mb-6">
                  Recognition
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#BF8351] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Award Name 2024
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ABCEE2] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Featured in Publication
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#BF8351] rounded-full mt-2 flex-shrink-0" />
                    <span className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Speaker at Conference
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="blue" />

      {/* Skills Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2] mb-6">
              Skills & Tools
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-[#F9FAFB] rounded-2xl p-8 border-l-4 border-[#ABCEE2]">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-xl text-[#1E2939] mb-6">
                Design Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'Photoshop', 'After Effects'].map((tool) => (
                  <span key={tool} className="bg-[#D5E7F2] text-[#5B8FA3] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 border-l-4 border-[#BF8351]">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-xl text-[#1E2939] mb-6">
                Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {['HTML/CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="bg-[#E6C4A8] text-[#A66D42] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 border-l-4 border-[#ABCEE2]">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-xl text-[#1E2939] mb-6">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {['UX Research', 'Prototyping', 'Design Systems', 'Accessibility', 'Branding', 'Motion Design'].map((spec) => (
                  <span key={spec} className="bg-[#D5E7F2] text-[#5B8FA3] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="orange" flip />

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-3xl p-12 text-center shadow-xl"
        >
          <h3 className="font-['Ojuju:Bold',sans-serif] text-4xl text-white mb-4">
            Want to know more?
          </h3>
          <p className="font-['Poppins:Regular',sans-serif] text-xl text-white/90 mb-8">
            Let's have a conversation about your project
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#BF8351] font-['Ojuju:Bold',sans-serif] text-lg px-10 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
