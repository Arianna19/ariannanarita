import { motion } from 'motion/react';
import { useEffect } from 'react';
import WaveTransition from '../components/WaveTransition';
import { WaveDecoration } from '../components/OceanWave';
import { Globe, Mail, MapPin, MessageCircleMore } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen pb-20 pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 font-['Poppins:SemiBold',sans-serif] uppercase tracking-[0.18em] text-[#BF8351]">
            <MessageCircleMore className="h-4 w-4" />
            Contact
          </p>
          <h1 className="mt-3 font-['Ojuju:Bold',sans-serif] text-5xl text-[#ABCEE2] md:text-7xl">
            Easy to reach, easy to brief
          </h1>
          <p className="mt-6 font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            This page is basically the no-nonsense way to reach me. If you have a project, a freelance opportunity, a
            collaboration idea, or just a very convincing reason I should look at something cool, start here. I reply like a
            normal person, just with extra coffee and slightly unnecessary levels of overthinking.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-white/95 p-8 shadow-xl md:p-10"
          >
            <div className="absolute right-0 top-0 h-36 w-36 opacity-10">
              <WaveDecoration variant="blue" />
            </div>

            <h2 className="relative font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939]">Send a message</h2>
            <p className="relative mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#4A5565]">
              Tell me what you need, what the timeline looks like, and whether this is a calm organized project or a mildly
              dramatic "we need this soon" situation.
            </p>
            <form className="relative mt-8 space-y-6">
              {[
                { label: 'Name', placeholder: 'Jane Doe', type: 'text' },
                { label: 'Email', placeholder: 'ariannanarita@gmail.com', type: 'email' },
                { label: 'Subject', placeholder: 'Let us make something good', type: 'text' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="mb-2 block font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.08em] text-[#4A5565]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-[1.25rem] border-2 border-[#D5E7F2] bg-[#F9FAFB] px-5 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] outline-none transition-colors placeholder:text-[#7DB1D4] focus:border-[#ABCEE2]"
                  />
                </div>
              ))}

              <div>
                <label className="mb-2 block font-['Poppins:SemiBold',sans-serif] text-sm uppercase tracking-[0.08em] text-[#4A5565]">
                  Message
                </label>
                <textarea
                  rows={7}
                  placeholder="Tell me what you are working on, what you need help with, any timelines, and how dramatic the deadline situation is."
                  className="w-full resize-none rounded-[1.25rem] border-2 border-[#D5E7F2] bg-[#F9FAFB] px-5 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] outline-none transition-colors placeholder:text-[#7DB1D4] focus:border-[#ABCEE2]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#BF8351] px-8 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <section className="overflow-hidden rounded-[2rem] border border-[#D5E7F2] bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] p-8 text-white shadow-xl">
              <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl">Direct contact</h2>
              <div className="mt-6 space-y-5 font-['Poppins:Regular',sans-serif] text-lg">
                <a href="mailto:ariannanarita@gmail.com" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                  <Mail className="h-5 w-5" />
                  ariannanarita@gmail.com
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  Montreal, Quebec
                </p>
                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  Glad to work remotely with good people anywhere around the globe.
                </p>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-[#E6C4A8] bg-white/95 p-8 shadow-xl">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#BF8351]">What to include</h3>
              <ul className="mt-5 space-y-3 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">
                <li>Project type and goals</li>
                <li>Timeline or deadline</li>
                <li>Whether it is solo or collaborative work</li>
                <li>Any links, reference material, or font choices you would like me to silently judge</li>
              </ul>
            </section>

            <section className="rounded-[1.75rem] border border-[#D5E7F2] bg-white/95 p-8 shadow-xl">
              <h3 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#ABCEE2]">Response time</h3>
              <p className="mt-4 font-['Poppins:Regular',sans-serif] text-base leading-7 text-[#364153]">
                Usually 24 to 48 hours, depending on inbox volume, caffeine levels, and whether I am rewriting the same
                sentence five times for no reason.
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <WaveTransition variant="gradient" />
      </div>
    </motion.div>
  );
}
