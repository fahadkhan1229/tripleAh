"use client";
import { motion } from 'framer-motion';
import { BookOpen, Landmark, Briefcase, TrendingUp } from 'lucide-react';
import React from 'react';
const Services = () => {
  const services = [
    { title: "Accounting & Bookkeeping", icon: <BookOpen />, desc: "Real-time tracking of your business health." },
    { title: "Tax & VAT Services", icon: <Landmark />, desc: "Optimization strategies for global markets." },
    { title: "Payroll & Compliance", icon: <Briefcase />, desc: "Automated systems for team management." },
    { title: "Financial Advisory", icon: <TrendingUp />, desc: "Data-driven insights for long-term growth." },
  ];

  return (
    <section id="services" className="py-24 bg-[#0d1425] px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-400">Tailored financial solutions for modern enterprises.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
          >
            <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
  {service.icon} {/* Size already set in service object */}
</div>

            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;