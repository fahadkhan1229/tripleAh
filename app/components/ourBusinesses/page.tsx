"use client";
import { Variants, motion, easeOut } from "framer-motion";
import { Award } from "lucide-react";

const OtherBusinesses = () => {
  const businesses = [
    {
      title: "AAA",
      subtitle: "TRIPLE AH GROUP ΟΥ",
      icon: <Award />,
      desc: "Excellence in Every Equation — representing all our corporate ventures and franchised businesses under one umbrella.",
    },
    {
      title: "Fafa’s Iso Omena",
      subtitle: "Franchise / ISO Omena",
      icon: <Award />,
      desc: "Authentic Middle Eastern street food restaurant offering falafel, pitas & salads in Iso Omena, Espoo, Finland. Takeout & delivery available via Foodora/Wolt.",
    },
  ];

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section id="businesses" className="py-24 bg-[#0d1425] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Our Other Businesses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="text-gray-400 text-sm sm:text-base"
        >
          Key ventures and franchises under the AAA TRIPLE AH GROUP ΟΥ umbrella.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {businesses.map((biz, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.06 }}
            className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
          >
            <motion.div className="mb-4 text-blue-500 text-5xl">{biz.icon}</motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{biz.title}</h3>
            <h4 className="text-blue-400 text-sm sm:text-base font-medium mb-3">{biz.subtitle}</h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{biz.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OtherBusinesses;