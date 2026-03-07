"use client";
import { Variants, motion, easeOut } from "framer-motion";
import { Award } from "lucide-react";

const OtherBusinesses = () => {
  const businesses = [
    {
      title: "M Arham Ravintola Oy",
      subtitle: "Franchise Partner",
      icon: <Award />,
      desc: "Operating hospitality franchise partnerships in Finland in full compliance with Finnish regulations.",
    },
    {
      title: "AAA Triple A H Group Oy",
      subtitle: "Corporate Advisory & Business Group",
      icon: <Award />,
      desc: "A Finland-based corporate group delivering accounting, financial management, and strategic consultancy services internationally.",
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
    <section id="businesses" className="md:py-12 py-6 bg-[#0d1425] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Our Other Businesses
        </motion.h2>

        <p className="text-gray-300 text-base sm:text-lg">
          Key ventures and business entities operating in Finland.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {businesses.map((biz, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="mb-4 text-blue-500 text-5xl">{biz.icon}</div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {biz.title}
            </h3>

            <h4 className="text-blue-400 text-sm sm:text-base font-medium mb-3">
              {biz.subtitle}
            </h4>

            <p className="text-gray-300 text-base leading-relaxed">
              {biz.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OtherBusinesses;
