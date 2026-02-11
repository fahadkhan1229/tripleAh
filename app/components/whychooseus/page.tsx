"use client";
import { motion } from "framer-motion";
import { Headset, Users2, Rocket, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Headset className="w-8 h-8" />,
    title: "Competent customer service",
    desc: "We are available to help you 24/7, every day of the year. You also have access to a comprehensive range of support guides.",
    link: "range of support guides",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "A reliable partner",
    desc: "We take good care of our customers. We also have an extensive partner network, where you can find experts for every situation.",
    link: "partner network",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Fast servers",
    desc: "Our servers are proven to be fast. Choose fast sites and happy customers to keep your business moving at light speed.",
    link: null,
  },
];

// Container variants for staggered children
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Card animation (TypeScript-safe)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // TS-safe
  },
};

// Icon hover animation
const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.6, ease: "easeInOut" }, // TS-safe
  },
};

const WhyChooseZoner = () => {
  return (
    <section className="relative py-24 bg-[#0a0f1d] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
        >
          Why choose <span className="text-blue-400">Zoner?</span>
        </motion.h2>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              className="relative group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 shadow-md shadow-blue-500/20"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>

              {/* Description with highlighted link */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.desc.split(item.link || "").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {item.link && i < arr.length - 1 && (
                      <span className="text-orange-400 cursor-pointer hover:text-orange-300 underline underline-offset-4 decoration-orange-400/30">
                        {item.link}
                      </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Learn More */}
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseZoner;
