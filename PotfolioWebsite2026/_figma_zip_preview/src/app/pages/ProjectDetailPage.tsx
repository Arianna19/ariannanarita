import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect } from 'react';
import WaveTransition from '../components/WaveTransition';
import { DesignIcon, LightbulbIcon, CodeIcon, UserIcon } from '../components/Icons';

export default function ProjectDetailPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pt-32 pb-20"
    >
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-['Poppins:SemiBold',sans-serif] text-[#ABCEE2] hover:text-[#7DB1D4] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#D5E7F2] text-[#5B8FA3] font-['Poppins:SemiBold',sans-serif] px-6 py-2 rounded-full">
              UI/UX Design
            </span>
            <span className="bg-[#E6C4A8] text-[#A66D42] font-['Poppins:SemiBold',sans-serif] px-6 py-2 rounded-full">
              Branding
            </span>
          </div>
          <h1 className="font-['Ojuju:Bold',sans-serif] text-6xl md:text-7xl text-[#ABCEE2] mb-6">
            Project Title Here
          </h1>
          <p className="font-['Poppins:Regular',sans-serif] text-2xl text-[#4A5565] max-w-3xl">
            A comprehensive redesign that transformed the user experience and elevated brand perception through thoughtful design decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h3 className="font-['Ojuju:Bold',sans-serif] text-[#BF8351] text-sm mb-2">ROLE</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[#1E2939]">Lead Designer</p>
          </div>
          <div>
            <h3 className="font-['Ojuju:Bold',sans-serif] text-[#BF8351] text-sm mb-2">DURATION</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[#1E2939]">3 months</p>
          </div>
          <div>
            <h3 className="font-['Ojuju:Bold',sans-serif] text-[#BF8351] text-sm mb-2">YEAR</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[#1E2939]">2024</p>
          </div>
          <div>
            <h3 className="font-['Ojuju:Bold',sans-serif] text-[#BF8351] text-sm mb-2">CLIENT</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[#1E2939]">Company Name</p>
          </div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full aspect-video bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#BF8351] rounded-3xl shadow-2xl flex items-center justify-center"
        >
          <div className="text-center">
            <DesignIcon className="w-32 h-32 mx-auto mb-4" />
            <p className="font-['Poppins:Regular',sans-serif] text-white text-lg">Project Hero Image</p>
          </div>
        </motion.div>
      </div>

      <WaveTransition variant="blue" />

      {/* Thesis Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <LightbulbIcon className="w-16 h-16" />
              <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#BF8351]">
                Thesis
              </h2>
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl p-10 border-l-4 border-[#BF8351]">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-6">
                The Challenge
              </h3>
              <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#D5E7F2] rounded-xl p-6 text-center">
                <p className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2] mb-2">45%</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">Metric improvement</p>
              </div>
              <div className="bg-[#E6C4A8] rounded-xl p-6 text-center">
                <p className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#BF8351] mb-2">3x</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">User engagement</p>
              </div>
              <div className="bg-[#D5E7F2] rounded-xl p-6 text-center">
                <p className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2] mb-2">98%</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">Satisfaction rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="orange" flip />

      {/* Ideation Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <UserIcon className="w-16 h-16" />
              <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2]">
                Ideation
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-4">
                  Research & Discovery
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                {/* Image Placeholder */}
                <div className="w-full aspect-video bg-gradient-to-br from-[#D5E7F2] to-[#ABCEE2] rounded-2xl shadow-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <UserIcon className="w-24 h-24 mx-auto mb-3" />
                    <p className="font-['Poppins:Regular',sans-serif] text-white">Research Findings Image</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-4">
                  User Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#ABCEE2]">
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1E2939] mb-3">Pain Point 1</h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#4A5565]">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#BF8351]">
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1E2939] mb-3">Pain Point 2</h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#4A5565]">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="gradient" />

      {/* Approach Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <CodeIcon className="w-16 h-16" />
              <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#BF8351]">
                Approach
              </h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-4">
                  Design Strategy
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed mb-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image Placeholders */}
                  <div className="aspect-square bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <DesignIcon className="w-20 h-20 mx-auto mb-2" />
                      <p className="font-['Poppins:Regular',sans-serif] text-white text-sm">Wireframes</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <CodeIcon className="w-20 h-20 mx-auto mb-2" />
                      <p className="font-['Poppins:Regular',sans-serif] text-white text-sm">Prototypes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-2xl p-10">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-6">
                  My Role & Contribution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ABCEE2] rounded-full mt-2 flex-shrink-0" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Led the end-to-end design process from research to final implementation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#BF8351] rounded-full mt-2 flex-shrink-0" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Collaborated with product managers and developers to ensure feasibility
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ABCEE2] rounded-full mt-2 flex-shrink-0" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Created comprehensive design system and component library
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#BF8351] rounded-full mt-2 flex-shrink-0" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[#364153]">
                      Conducted usability testing and iterated based on user feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveTransition variant="blue" flip />

      {/* Creative Works Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2] mb-12 text-center">
              Creative Works
            </h2>

            <div className="space-y-8">
              {/* Full width image */}
              <div className="w-full aspect-video bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#7DB1D4] rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <DesignIcon className="w-32 h-32 mx-auto mb-4" />
                  <p className="font-['Poppins:Regular',sans-serif] text-white text-lg">Final Design Showcase</p>
                </div>
              </div>

              {/* Two column images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#BF8351] to-[#E6C4A8] rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <CodeIcon className="w-24 h-24 mx-auto mb-3" />
                    <p className="font-['Poppins:Regular',sans-serif] text-white">Detail View</p>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#7DB1D4] to-[#D5E7F2] rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <UserIcon className="w-24 h-24 mx-auto mb-3" />
                    <p className="font-['Poppins:Regular',sans-serif] text-white">User Flow</p>
                  </div>
                </div>
              </div>

              {/* Three column images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-square bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-2xl shadow-lg flex items-center justify-center">
                  <p className="font-['Poppins:Regular',sans-serif] text-white text-center px-4">Component 1</p>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-2xl shadow-lg flex items-center justify-center">
                  <p className="font-['Poppins:Regular',sans-serif] text-white text-center px-4">Component 2</p>
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#ABCEE2] to-[#BF8351] rounded-2xl shadow-lg flex items-center justify-center">
                  <p className="font-['Poppins:Regular',sans-serif] text-white text-center px-4">Component 3</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Results & Learnings */}
      <div className="bg-gradient-to-br from-[#ABCEE2] to-[#BF8351] py-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-white mb-8">
              Results & Learnings
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-white mb-3">Impact</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-white/90">
                  Measurable improvements in user satisfaction and business metrics
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-white mb-3">Learning</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-white/90">
                  Key insights gained about user behavior and design process
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-white mb-3">Next Steps</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-white/90">
                  Future iterations and improvements based on feedback
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939] mb-8">
              Interested in seeing more?
            </h3>
            <div className="flex gap-4 justify-center">
              <Link
                to="/#work"
                className="bg-[#ABCEE2] text-white font-['Poppins:SemiBold',sans-serif] px-8 py-4 rounded-full hover:bg-[#7DB1D4] transition-colors"
              >
                View All Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#ABCEE2] text-[#ABCEE2] font-['Poppins:SemiBold',sans-serif] px-8 py-4 rounded-full hover:bg-[#ABCEE2] hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
