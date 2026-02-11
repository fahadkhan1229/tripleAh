"use client";
import { Variants, motion, easeOut } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

const AboutUs = () => {
  const features = [
    { icon: <ShieldCheck />, title: "Accurate & Compliant", desc: "Always up-to-date with latest tax laws." },
    { icon: <Target />, title: "Cost-Effective", desc: "Maximizing your ROI through smart filing." },
    { icon: <Users />, title: "Client Focused", desc: "Dedicated support for your specific niche." },
  ];

  // Parent container variant
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual feature card variant
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
              Who We Are
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Triple A H Group Oy isn't just an accounting firm. We are your strategic growth partners. Based in Finland and serving globally, we blend traditional precision with modern technology.
            </p>
            <button className="text-blue-400 font-semibold border-b border-blue-400 pb-1 hover:text-blue-300 transition-colors text-sm sm:text-base">
              Learn our history →
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg flex items-start gap-4 cursor-pointer transition-transform duration-300"
              >
                <motion.div
                  className="bg-gradient-to-tr from-blue-500 to-purple-500 p-4 rounded-xl flex items-center justify-center text-white shadow-lg text-3xl sm:text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {f.icon}
                </motion.div>
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{f.title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
