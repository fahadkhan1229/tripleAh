"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    { icon: <ShieldCheck />, title: "Accurate & Compliant", desc: "Always up-to-date with latest tax laws." },
    { icon: <Target />, title: "Cost-Effective", desc: "Maximizing your ROI through smart filing." },
    { icon: <Users />, title: "Client Focused", desc: "Dedicated support for your specific niche." },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">Who We Are</h2>
            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Triple A H Group Oy isn't just an accounting firm. We are your strategic growth partners. Based in Finland and serving globally, we blend traditional precision with modern technology.
            </p>
            <button className="text-blue-400 font-semibold border-b border-blue-400 pb-1 hover:text-blue-300 transition-colors text-sm sm:text-base">
              Learn our history →
            </button>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4 cursor-pointer"
              >
                <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-3 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{f.title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
