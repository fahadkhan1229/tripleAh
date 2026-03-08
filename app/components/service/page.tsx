"use client";
import { Variants, motion, easeOut } from "framer-motion";
import { BookOpen, Landmark, Briefcase, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    { title: "Accounting & Bookkeeping", icon: <BookOpen />, desc: "Real-time tracking of your business health." },
    { title: "Tax & VAT Services", icon: <Landmark />, desc: "Optimization strategies for global markets." },
    { title: "Payroll & Compliance", icon: <Briefcase />, desc: "Automated systems for team management." },
    { title: "Financial Advisory", icon: <TrendingUp />, desc: "Data-driven insights for long-term growth." },
  ];

  // Parent container variant for staggered animation
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Individual card variant
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section id="services" className="md:py-12 py-6 bg-[#0d1425] px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="text-gray-300 text-base sm:text-lg"
        >
          Tailored financial solutions for modern enterprises.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
            className="group md:p-8 p-4 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
          >
            {/* Animated Icon */}
            <motion.div
              className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300 text-4xl sm:text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
