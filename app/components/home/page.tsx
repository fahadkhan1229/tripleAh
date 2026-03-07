"use client";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeOut,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax
  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "10%" : "20%"],
  );
  const yBlobs = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "20%" : "40%"],
  );

  // TypeScript-safe fadeInUp variant
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-[#0a0f1d] pt-20 px-4 sm:px-6"
    >
      {/* Background Layers */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yBg }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/bg.avif"
          alt="Modern Financial Building"
          className="w-full h-full object-cover scale-110 sm:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/60 via-[#0a0f1d]/40 to-[#0a0f1d] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.1),transparent_70%)] z-10" />
      </motion.div>

      {/* Glowing Blobs + Particles */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yBlobs }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          className="absolute top-1/4 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-blue-600/20 rounded-full blur-[100px] sm:blur-[140px]"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particles */}
        {!shouldReduceMotion &&
          Array.from({ length: isMobile ? 6 : 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{ y: ["0%", "100%"], opacity: [0.1, 0.4, 0.1] }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i,
              }}
            />
          ))}
      </motion.div>

      {/* Premium Gradient Lines */}
      {!isMobile && !shouldReduceMotion && (
        <>
          <motion.div className="absolute top-1/3 left-0 w-[2px] h-60 bg-gradient-to-b from-blue-400/20 to-transparent opacity-60 animate-pulse-slow" />
          <motion.div className="absolute bottom-1/4 right-0 w-[2px] h-80 bg-gradient-to-b from-indigo-400/20 to-transparent opacity-60 animate-pulse-slow" />
        </>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMobile ? 0.1 : 0.2 } },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md white text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted by 500+ Global Businesses
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.2] sm:leading-[1.1]"
          >
            Reliable Accounting & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-[length:200%_200%] animate-gradient">
              Financial Solutions
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-50 text-lg sm:text-xl max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4 sm:px-0"
          >
            Expertise in Bookkeeping, Taxation & Financial Services designed to
            scale your business with{" "}
            <span className="text-white font-medium">
              precision and clarity
            </span>
            .
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6 sm:px-0"
          >
            <motion.button
              whileHover={
                !isMobile ? { scale: 1.06, rotate: [0, 1, -1, 0] } : {}
              }
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              Start Your Journey
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-base sm:text-lg backdrop-blur-md w-full sm:w-auto"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
