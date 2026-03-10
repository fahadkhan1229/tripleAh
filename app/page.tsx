"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Header from "./components/header/header";
import Home from "./components/home/page";
import AboutUs from "./components/about/page";
import Services from "./components/service/page";
import ContactUs from "./components/contact/page";
import WhyChooseUs from "./components/whychooseus/page";
import OurBusinesses from "./components/ourBusinesses/page";
import Footer from "./components/header/footer";
import Teams from "./components/teams/page";
import CaseStudy from "./components/caseStudy/page";

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-0 scroll-smooth pb-6">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[101]"
        style={{ scaleX }}
      />
      <Header />
      <Home />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <OurBusinesses /> {/* 👈 new section added */}
      <Teams />
      <CaseStudy />
      <ContactUs />
      <Footer />
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500  text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
