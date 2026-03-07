"use client";
import { Variants, motion, easeOut } from "framer-motion";
import { Laptop, Smartphone, Code, Server, Globe, ShieldCheck, BarChart2, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Corporate Website Development",
      icon: <Laptop />,
      desc: "High-performance websites with modern design and responsive layouts for enterprises.",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone />,
      desc: "iOS & Android apps tailored for your business operations and customer engagement.",
    },
    {
      title: "E-commerce Platforms",
      icon: <Globe />,
      desc: "Custom online stores with secure payment integrations and scalable solutions.",
    },
    {
      title: "Web & API Development",
      icon: <Code />,
      desc: "Robust backend systems, APIs, and integrations for seamless business workflows.",
    },
    {
      title: "CRM & ERP Systems",
      icon: <Layers />,
      desc: "Enterprise-grade systems for customer relationship management and resource planning.",
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Server />,
      desc: "Cloud deployment, monitoring, scaling, and secure hosting for enterprise apps.",
    },
    {
      title: "Digital Marketing & Branding",
      icon: <BarChart2 />,
      desc: "SEO, social media campaigns, and branding strategies for corporate visibility.",
    },
    {
      title: "Cybersecurity & Compliance",
      icon: <ShieldCheck />,
      desc: "Enterprise-level security, data protection, and compliance solutions.",
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
    <section id="services" className="py-24 bg-[#0d1425] px-6">
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
          className="text-gray-400 text-sm sm:text-base"
        >
          Comprehensive corporate-level digital solutions for modern enterprises.
        </motion.p>
      </div>

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
            className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
          >
            <motion.div
              className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300 text-4xl sm:text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;