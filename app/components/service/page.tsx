"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

 const services = [
  {
    title: "Accounting & Tax",
    description:
      "We provide end-to-end accounting and tax solutions to ensure compliance, accuracy, and financial clarity across your operations.",
    items: [
      "Full-cycle bookkeeping",
      "IFRS & local GAAP compliance",
      "VAT & tax filings",
      "Financial statements preparation",
      "Audit coordination & support",
    ],
  },
  {
    title: "Financial Management",
    description:
      "Strategic financial oversight to strengthen decision-making, optimize performance, and support sustainable growth.",
    items: [
      "Budgeting & forecasting",
      "Cash-flow planning",
      "Cost optimization strategies",
      "Financial analysis & reporting",
    ],
  },
  {
    title: "Business Consultancy",
    description:
      "Advisory services designed to enhance operational efficiency, support transformation, and drive long-term value.",
    items: [
      "Business restructuring",
      "Operational efficiency improvement",
      "Digital transformation planning",
      "Process automation & workflow redesign",
      "Risk assessment & internal controls",
    ],
  },
  {
    title: "Corporate Services",
    description:
      "Comprehensive corporate support to ensure smooth governance, compliance, and administrative operations.",
    items: [
      "Corporate tax planning",
      "Company formation & registration",
      "Contract drafting & review",
      "Compliance management",
    ],
  },
  {
    title: "Payroll & HR Solutions",
    description:
      "Reliable payroll and HR support to ensure accuracy, compliance, and employee satisfaction.",
    items: [
      "Monthly payroll processing",
      "Employee onboarding & offboarding",
      "Employment contract preparation",
      "Benefits administration",
      "HR policy development",
      "Time-tracking & attendance management",
      "Statutory reporting & compliance",
    ],
  },
  {
    title: "Strategic Growth & Advisory",
    description:
      "Supporting your business in scaling, optimizing, and achieving sustainable growth.",
    items: [
      "Business growth strategy",
      "Market research & competitive analysis",
      "Performance improvement programs",
      "Expansion strategy & feasibility studies",
    ],
  },
];

  return (
    <section
      id="services"
      className="min-h-screen bg-[#0d1425] text-white py-20 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl bg-white/[0.02] shadow-2xl flex flex-col md:flex-row">
        {/* Left Sidebar: Navigation List */}
        <div className="w-full md:w-1/3 border-r border-white/10 bg-[#0d1425]">
          <div className="p-8 border-b border-white/10">
            <h2 className="text-xl font-bold tracking-tight text-blue-400">
              Our Services
            </h2>
          </div>
          <nav className="flex flex-col">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between p-2 md:p-4 transition-all duration-300 border-b border-white/5 group ${
                  activeTab === index
                    ? "bg-white/5 text-white"
                    : "text-gray-300 hover:text-gray-300"
                }`}
              >
                <span
                  className={`text-lg font-medium tracking-wide ${activeTab === index ? "underline underline-offset-8 decoration-blue-500" : ""}`}
                >
                  {service.title}
                </span>
                {activeTab === index ? (
                  <Minus size={20} className="text-blue-500" />
                ) : (
                  <Plus
                    size={20}
                    className="opacity-40 group-hover:opacity-100"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Detail Panel: Information Display */}
        <div className="w-full md:w-2/3 p-8 md:p-16 relative overflow-hidden">
          {/* Subtle Glass Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl">
                {services[activeTab].description}
              </p>

              <h3 className="text-2xl font-bold mb-8 text-white underline underline-offset-[12px] decoration-white/20">
                {services[activeTab].title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {services[activeTab].items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 hover:border-blue-500/50 transition-colors"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-red-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
