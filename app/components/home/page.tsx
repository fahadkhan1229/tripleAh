"use client";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] pt-20 px-4 sm:px-6">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-[100px] mix-blend-lighten"
        animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 inline-block">
            Trusted by 500+ Global Businesses
          </span>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Reliable Accounting & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Financial Solutions
            </span>
          </h1>

          {/* Hero Subtext */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Expertise in Bookkeeping, Taxation & Financial Services designed to scale your business with precision and clarity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all shadow-blue-500/30">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
