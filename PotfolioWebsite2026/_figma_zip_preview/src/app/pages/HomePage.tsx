import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { useRef, useEffect } from 'react';
import WaveTransition from '../components/WaveTransition';
import { DesignIcon, BrandingIcon, CodeIcon, PrototypeIcon, UserIcon } from '../components/Icons';
import { FlowingWater, WaveDecoration, JapaneseWave, OceanBubbles } from '../components/OceanWave';

const projects = [
  { id: 1, title: 'Brand Identity Redesign', category: 'Branding', x: '15%', y: '20%' },
  { id: 2, title: 'Mobile App UX', category: 'UI/UX Design', x: '65%', y: '15%' },
  { id: 3, title: 'Dashboard Analytics', category: 'Web Design', x: '45%', y: '45%' },
  { id: 4, title: 'Design System', category: 'Product Design', x: '25%', y: '65%' },
  { id: 5, title: 'E-commerce Platform', category: 'UI/UX Design', x: '75%', y: '60%' },
  { id: 6, title: 'Marketing Website', category: 'Web Design', x: '50%', y: '80%' },
];

const quotes = [
  { text: 'Design is like the ocean—layers of depth, constant movement, and the ability to make grown adults seasick if done incorrectly.', author: 'Wise Designer' },
  { text: 'Just as waves shape the shore over time, good design is an iterative process. Except designers are more impatient than erosion.', author: 'Patient Designer' },
  { text: 'They say to go with the flow, but in design, sometimes you need to be the wave that disrupts everything. Respectfully, of course.', author: 'Disruptive Designer' },
];

function OceanProjects() {
  return (
    <div className="relative w-full min-h-[900px]">
      {/* Ocean wave layers in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <FlowingWater className="absolute top-0 left-0 w-full h-40" />
        <FlowingWater className="absolute top-40 left-0 w-full h-40 opacity-70" />
        <FlowingWater className="absolute top-80 left-0 w-full h-40 opacity-50" />
      </div>

      {/* Floating bubbles decoration */}
      <OceanBubbles className="absolute top-10 right-10 w-24 h-24 opacity-60" />
      <OceanBubbles className="absolute bottom-20 left-20 w-32 h-32 opacity-40" />
      <OceanBubbles className="absolute top-1/2 left-1/4 w-20 h-20 opacity-50" />

      {/* Projects floating like items in water */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              transform: `translateY(${index % 2 === 0 ? '20px' : '-20px'})`,
            }}
          >
            <Link to={`/project/${project.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Wave decoration on card */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <WaveDecoration variant="blue" />
                </div>

                {/* Project image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#7DB1D4] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DesignIcon className="w-24 h-24 opacity-60" />
                  </div>
                  {/* Wave overlay on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-full"
                    initial={{ y: '100%' }}
                    whileHover={{ y: '0%' }}
                    transition={{ duration: 0.4 }}
                  >
                    <JapaneseWave className="w-full h-full" />
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="p-8 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#ABCEE2]" />
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[#BF8351] text-sm">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-3 group-hover:text-[#ABCEE2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#4A5565] leading-relaxed mb-4">
                    A project description that flows naturally like water, carrying the essence of the work forward.
                  </p>
                  <div className="flex items-center gap-2 text-[#ABCEE2] font-['Poppins:SemiBold',sans-serif] text-sm group-hover:gap-4 transition-all">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
                  <WaveDecoration variant="orange" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function OceanQuotes() {
  return (
    <div className="relative w-full">
      {/* Ocean waves background */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <FlowingWater className="absolute top-0 left-0 w-full h-32" />
        <FlowingWater className="absolute top-24 left-0 w-full h-32 opacity-70" />
      </div>

      {/* Wave decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <JapaneseWave />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
        <JapaneseWave />
      </div>

      {/* Bubbles */}
      <OceanBubbles className="absolute top-10 right-1/4 w-20 h-20 opacity-40" />
      <OceanBubbles className="absolute bottom-10 left-1/4 w-24 h-24 opacity-30" />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="relative bg-gradient-to-br from-[#ABCEE2] via-[#7DB1D4] to-[#5B8FA3] rounded-3xl p-10 shadow-xl h-full"
            >
              {/* Wave decoration on quote card */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <WaveDecoration variant="blue" />
              </div>

              <div className="relative z-10">
                {/* Quote mark */}
                <div className="text-7xl font-serif text-white/30 leading-none mb-4">"</div>

                {/* Quote text */}
                <p className="font-['Poppins:Regular',sans-serif] text-xl text-white leading-relaxed mb-6 italic">
                  {quote.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-16 bg-white/40" />
                  <p className="font-['Ojuju:Bold',sans-serif] text-white/90 text-base whitespace-nowrap">
                    {quote.author}
                  </p>
                </div>
              </div>

              {/* Bottom wave */}
              <div className="absolute bottom-0 left-0 w-full h-20 opacity-20">
                <WaveDecoration variant="blue" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Handle hash navigation (scroll to section)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      {/* Hero / About Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-8 pt-24" style={{ position: 'relative' }}>
        <motion.div style={{ y: heroY }} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[#BF8351] text-lg mb-2">UI/UX Designer & Creative</p>
                <h1 className="font-['Ojuju:Bold',sans-serif] text-6xl md:text-7xl text-[#ABCEE2] mb-4 leading-tight">
                  Hello, I'm<br/>Your Designer
                </h1>
              </div>

              <p className="font-['Poppins:Regular',sans-serif] text-xl text-[#364153] leading-relaxed mb-6">
                I craft thoughtful digital experiences that balance aesthetics with functionality. Specializing in user-centered design, I transform complex problems into elegant solutions.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#D5E7F2] text-[#5B8FA3] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">UI/UX Design</span>
                <span className="bg-[#E6C4A8] text-[#A66D42] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">Branding</span>
                <span className="bg-[#D5E7F2] text-[#5B8FA3] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">Prototyping</span>
                <span className="bg-[#E6C4A8] text-[#A66D42] font-['Poppins:Medium',sans-serif] px-4 py-2 rounded-full text-sm">Design Systems</span>
              </div>

              <div className="flex gap-4">
                <a href="#work" className="bg-[#ABCEE2] text-white font-['Poppins:SemiBold',sans-serif] px-8 py-4 rounded-full hover:bg-[#7DB1D4] transition-colors">
                  View Work
                </a>
                <Link to="/contact" className="border-2 border-[#ABCEE2] text-[#ABCEE2] font-['Poppins:SemiBold',sans-serif] px-8 py-4 rounded-full hover:bg-[#ABCEE2] hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-[#D5E7F2] via-[#ABCEE2] to-[#BF8351] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <UserIcon className="w-64 h-64 relative z-10" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#BF8351]/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ABCEE2]/30 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <WaveTransition variant="blue" />

      {/* Services Section */}
      <section className="relative py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl md:text-6xl text-[#ABCEE2] mb-6">
              What I Do
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-xl text-[#4A5565] max-w-3xl mx-auto">
              Comprehensive design services tailored to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: DesignIcon, title: 'UI/UX Design', desc: 'Creating intuitive interfaces that users love' },
              { icon: BrandingIcon, title: 'Branding & Identity', desc: 'Building memorable brands that stand out' },
              { icon: PrototypeIcon, title: 'Prototyping', desc: 'Interactive prototypes that bring ideas to life' },
              { icon: CodeIcon, title: 'Design Systems', desc: 'Scalable systems for consistent experiences' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-[#F9FAFB] rounded-2xl p-10 border-l-4 border-[#ABCEE2] hover:border-[#BF8351] transition-all shadow-lg hover:shadow-xl"
              >
                <service.icon className="w-16 h-16 mb-6" />
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-4">{service.title}</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#364153] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveTransition variant="orange" flip />

      {/* Selected Work Constellation */}
      <section id="work" className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl md:text-6xl text-[#BF8351] mb-6">
              Selected Work
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-xl text-[#4A5565] max-w-3xl mx-auto">
              Explore projects where design meets purpose. Click any project to see the full story.
            </p>
          </motion.div>

          <OceanProjects />
        </div>
      </section>

      <WaveTransition variant="gradient" />

      {/* Quotes Constellation */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl md:text-6xl text-[#ABCEE2] mb-6">
              Words of Wisdom
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-xl text-[#4A5565] max-w-3xl mx-auto">
              Thoughts on design, creativity, and the occasional existential crisis
            </p>
          </motion.div>

          <OceanQuotes />
        </div>
      </section>

      <WaveTransition variant="blue" flip />

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#ABCEE2] to-[#BF8351] rounded-3xl p-16 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Wave decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
              <WaveDecoration variant="blue" />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
              <WaveDecoration variant="orange" />
            </div>

            <div className="relative z-10">
              <h2 className="font-['Ojuju:Bold',sans-serif] text-5xl text-white mb-6">
                Let's Work Together
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
              </p>

              <Link
                to="/contact"
                className="inline-block bg-white text-[#ABCEE2] font-['Ojuju:Bold',sans-serif] text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get in Touch
              </Link>

              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="font-['Poppins:Regular',sans-serif] text-white/80 mb-4">Or reach me directly:</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <a href="mailto:hello@designer.com" className="font-['Poppins:SemiBold',sans-serif] text-white hover:text-white/80 transition-colors">
                    hello@designer.com
                  </a>
                  <span className="hidden md:inline text-white/40">|</span>
                  <a href="tel:+1234567890" className="font-['Poppins:SemiBold',sans-serif] text-white hover:text-white/80 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 bg-[#1E2939] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-['Poppins:Regular',sans-serif] mb-2">
            © 2026 Designer Portfolio. All rights reserved.
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-white/60 text-sm">
            Designed with intention, built with care
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
