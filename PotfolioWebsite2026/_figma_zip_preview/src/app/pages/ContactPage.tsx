import { motion } from 'motion/react';
import { useEffect } from 'react';
import WaveTransition from '../components/WaveTransition';
import { WaveDecoration } from '../components/OceanWave';

export default function ContactPage() {
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

      <div className="max-w-6xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Ojuju:Bold',sans-serif] text-6xl md:text-7xl text-[#ABCEE2] mb-6">
            Let's Connect
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ABCEE2] to-[#BF8351] mx-auto rounded-full mb-8" />
          <p className="font-['Poppins:Regular',sans-serif] text-xl text-[#4A5565] max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
              {/* Wave decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <WaveDecoration variant="blue" />
              </div>

              <h2 className="font-['Ojuju:Bold',sans-serif] text-3xl text-[#1E2939] mb-8 relative z-10">
                Send a Message
              </h2>

              <form className="space-y-6 relative z-10">
                <div>
                  <label className="block font-['Poppins:SemiBold',sans-serif] text-[#364153] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-[#F9FAFB] border-2 border-[#D5E7F2] rounded-xl px-6 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] placeholder-[#7DB1D4] focus:outline-none focus:border-[#ABCEE2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-['Poppins:SemiBold',sans-serif] text-[#364153] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-[#F9FAFB] border-2 border-[#D5E7F2] rounded-xl px-6 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] placeholder-[#7DB1D4] focus:outline-none focus:border-[#ABCEE2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-['Poppins:SemiBold',sans-serif] text-[#364153] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-[#F9FAFB] border-2 border-[#D5E7F2] rounded-xl px-6 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] placeholder-[#7DB1D4] focus:outline-none focus:border-[#ABCEE2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-['Poppins:SemiBold',sans-serif] text-[#364153] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#F9FAFB] border-2 border-[#D5E7F2] rounded-xl px-6 py-4 font-['Poppins:Regular',sans-serif] text-[#364153] placeholder-[#7DB1D4] focus:outline-none focus:border-[#ABCEE2] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#ABCEE2] text-white font-['Ojuju:Bold',sans-serif] text-lg px-8 py-5 rounded-full hover:bg-[#7DB1D4] transition-colors shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                <WaveDecoration variant="blue" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-white mb-3">Email</h3>
                <a href="mailto:hello@designer.com" className="font-['Poppins:Regular',sans-serif] text-lg text-white/90 hover:text-white transition-colors">
                  hello@designer.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                <WaveDecoration variant="orange" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-white mb-3">Phone</h3>
                <a href="tel:+1234567890" className="font-['Poppins:Regular',sans-serif] text-lg text-white/90 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#D5E7F2] relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <WaveDecoration variant="blue" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#D5E7F2] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#ABCEE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-['Ojuju:Bold',sans-serif] text-2xl text-[#1E2939] mb-3">Location</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#4A5565]">
                  City, State<br />
                  Country
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <WaveTransition variant="gradient" />

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
              <WaveDecoration variant="blue" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="font-['Ojuju:Bold',sans-serif] text-4xl text-[#ABCEE2] mb-6">
                Connect With Me
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-lg text-[#4A5565] mb-10 max-w-2xl mx-auto">
                Follow my work and stay updated on new projects, design insights, and creative explorations.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {/* LinkedIn */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                {/* Dribbble */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.5 6.5c1.313 1.688 2.125 3.813 2.188 6.125-.313-.062-3.438-.688-6.625-.313-.125-.313-.25-.625-.438-.938-.188-.438-.375-.813-.562-1.188 3.438-1.438 5-3.625 5.438-4.688zM12 2.188c2.188 0 4.188.75 5.813 2 -.375.938-1.875 2.938-5.188 4.188-1.625-2.938-3.375-5.313-3.625-5.688.625-.313 1.313-.5 2-.5zm-4.625 1c.25.313 1.938 2.688 3.625 5.563-4.563 1.188-8.563 1.188-9 1.188C2.5 6.625 5.563 4 7.375 3.188zm-5.188 8.813v-.375c.438 0 5.25 0 10.125-1.375.188.375.375.75.563 1.125-5.125 1.438-7.875 5.438-8.375 6.125C2.875 15.813 2.188 13.938 2.188 12zm9.813 9.813c-1.938 0-3.75-.688-5.188-1.813.375-.625 2.5-4.063 8.125-5.813 1.375 3.625 1.938 6.625 2.063 7.5-1.5.75-3.188 1.126-5 1.126zm7-2.188c-.125-.688-.625-3.563-1.875-7.125 2.938-.438 5.563.313 5.875.375-.438 2.5-1.688 4.688-3.5 6.313z"/>
                  </svg>
                </motion.a>

                {/* Behance */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194.678-.297 1.417-.452 2.222-.452.86 0 1.612.166 2.265.5.653.334 1.204.78 1.655 1.36.445.586.78 1.27.994 2.058.22.795.293 1.626.293 2.498h-7.69c0 .94.444 1.685.882 2.114zM10.44 9.002c0-.462-.12-.874-.357-1.23-.24-.36-.57-.64-.988-.84-.42-.2-.92-.3-1.5-.3H3.24v4.77h4.32c.48 0 .9-.08 1.27-.24.37-.16.68-.38.94-.66.25-.28.45-.61.58-.98.13-.37.2-.78.2-1.23v-.01zm12.31 1.455c-.3-.56-.77-1.007-1.39-1.34-.617-.334-1.32-.5-2.104-.5-.78 0-1.44.16-1.983.48-.543.325-.96.73-1.25 1.216-.29.487-.49 1.02-.615 1.604-.127.583-.19 1.16-.19 1.73 0 .558.06 1.116.19 1.673.13.557.34 1.06.64 1.51.3.45.69.814 1.17 1.093.48.28 1.073.42 1.78.42.86 0 1.554-.22 2.083-.66.53-.44.86-.98.99-1.62h-2.29c-.09.29-.27.53-.54.72-.27.2-.61.3-1.02.3-.42 0-.78-.09-1.063-.27-.285-.18-.51-.42-.68-.71-.17-.29-.29-.62-.36-.99-.07-.37-.11-.75-.11-1.14h6.16c.05-.83-.05-1.65-.31-2.46zm-11.68-.36H3.24v4.68h4.27c.58 0 1.09-.08 1.53-.25.44-.17.81-.39 1.1-.66.29-.27.51-.58.66-.94.15-.36.23-.74.23-1.13 0-.97-.32-1.69-.96-2.16-.64-.47-1.51-.7-2.61-.7z"/>
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-gradient-to-br from-[#BF8351] to-[#D6A882] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>

                {/* Twitter/X */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-16 h-16 bg-gradient-to-br from-[#ABCEE2] to-[#7DB1D4] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#D5E7F2] rounded-full px-8 py-4">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#5B8FA3]">
              ⏱️ Typical response time: 24-48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
