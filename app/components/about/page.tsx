"use client";
import { motion, Variants, easeOut } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  BookOpen,
  TrendingUp,
  Briefcase,
  Scale,
} from "lucide-react";

const AboutUs = () => {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="about"
      className="py-12 bg-[#0a0f1d] px-6 md:px-6 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 px-4 sm:px-0">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Excellence in Every Equation
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Triple A H
            </span>{" "}
            Group Oy
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            A Finland-based powerhouse delivering{" "}
            <span className="text-white font-semibold">
              precision-driven accounting
            </span>
            , financial management, and strategic consultancy across Europe, the
            Middle East, and Asia. We empower businesses to operate with
            clarity, efficiency, and confidence.
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20"
        >
          {/* Company Overview Card */}
          <motion.div
            variants={item}
            className="grid lg:grid-cols-2 gap-12 items-center md:px-4"
          >
            <div className="space-y-6 px-4  text-gray-200 text-base ">
              <p className="border-l-4 border-blue-600 pl-6 italic text-white font-medium">
                "We operate with the highest international standards of
                accuracy, compliance, and strategic relevance."
              </p>
              <p>
                Built on a foundation of integrity and analytical excellence,
                Triple A H Group Oy guides clients through complex financial
                environments with clarity. We partner with startups and
                established enterprises to optimize financial health and
                statutory compliance.
              </p>
            </div>

            {/* CEO Message Box */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#11182f] p-4 md:p-10 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">
                  CEO Message – M.W.A
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                  "As Founder and CEO, it is my privilege to lead an
                  organization built on precision and a deep commitment to
                  empowering businesses in an increasingly complex global
                  environment..."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-blue-500"></div>
                  <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission/Vision/Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mission",
                icon: <Target className="w-8 h-8 text-blue-400" />,
                desc: "To deliver technology-driven financial solutions that empower organizations with clarity and strategic foresight.",
              },
              {
                title: "Vision",
                icon: <Eye className="w-8 h-8 text-cyan-400" />,
                desc: "To be a globally recognized advisory firm known for transformative stewardship and sustainable growth.",
              },
              {
                title: "Core Values",
                icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
                desc: "Integrity, Precision, Strategic Excellence, and Client-Centric Innovation.",
              },
            ].map((box, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-[#11182f]/50 md:p-8 p-4 rounded-2xl border border-white/5 backdrop-blur-sm"
              >
                <div className="mb-4">{box.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {box.title}
                </h4>
                <p className="text-gray-300 text-base leading-relaxed">
                  {box.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core Expertise Section */}
          <motion.div variants={item} className="space-y-10">
            <h3 className="text-2xl font-bold text-white text-center">
              Core Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ExpertiseCard
                icon={<BookOpen />}
                title="Accounting"
                list={[
                  "Full-cycle Bookkeeping",
                  "IFRS & Finnish GAAP",
                  "VAT & Tax Filings",
                  "Payroll Management",
                ]}
              />
              <ExpertiseCard
                icon={<TrendingUp />}
                title="Financial Mgmt"
                list={[
                  "Budgeting & Forecasting",
                  "Investment Analysis",
                  "Cost Optimization",
                  "Capital Structuring",
                ]}
              />
              <ExpertiseCard
                icon={<Briefcase />}
                title="Consultancy"
                list={[
                  "Business Restructuring",
                  "Operational Efficiency",
                  "Market Entry",
                  "Digital Transformation",
                ]}
              />
              <ExpertiseCard
                icon={<Scale />}
                title="Corporate"
                list={[
                  "Tax Planning",
                  "EU Registration",
                  "Contract Review",
                  "HR Support",
                ]}
              />
            </div>
          </motion.div>

          {/* Why Choose Us - Minimal Banner */}
          <motion.div
            variants={item}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl p-6 md:p-12 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Partner With Us?
            </h3>
            <div className="flex flex-wrap md:justify-center gap-6 md:gap-12">
              {[
                "Global Expertise",
                "Precision Driven",
                "Tailored Solutions",
                "Tech-Integrated",
              ].map((trait, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-200 font-medium"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* Helper Component for Expertise Cards */
const ExpertiseCard = ({
  icon,
  title,
  list,
}: {
  icon: React.ReactNode;
  title: string;
  list: string[];
}) => (
  <div className="bg-[#11182f] p-4 md:p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
    <ul className="space-y-2">
      {list.map((item, idx) => (
        <li key={idx} className="text-gray-300 text-base flex items-center gap-2">
          <span className="w-1 h-1 bg-gray-600 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default AboutUs;
