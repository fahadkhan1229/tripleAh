"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] pt-20 px-4 sm:px-6"
    >
      {/* Background Image with Masking */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/60 via-[#0a0f1d]/80 to-[#0a0f1d] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-transparent to-[#0a0f1d] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Financial Building"
          className="w-full h-full object-cover opacity-100"
        />
      </motion.div>

      {/* Animated Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted by 500+ Global Businesses
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Reliable Accounting & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 animate-gradient-x">
              Financial Solutions
            </span>
          </h1>

          {/* Hero Subtext */}
          <p className="text-gray-300/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Expertise in Bookkeeping, Taxation & Financial Services designed to scale your business with <span className="text-white font-medium">precision and clarity</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all w-full sm:w-auto"
            >
              Start Your Journey
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-md transition-all w-full sm:w-auto"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;