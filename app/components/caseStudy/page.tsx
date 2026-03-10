"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

const caseStudies = [
  // ... (Your content remains exactly the same)
  {
    id: 1,
    title: "Streamlining Accounting & Compliance for a UAE Retail Group",
    client: "Retail group in Dubai with 12 outlets",
    challenges: ["Fragmented bookkeeping across branches", "Delayed VAT filings", "No consolidated financial reporting"],
    solution: ["Centralized IFRS bookkeeping", "Automated VAT filing", "Unified payroll system"],
    results: ["100% VAT compliance", "Closing reduced from 18 days to 5 days", "Payroll accuracy improved by 98%"]
  },
  {
    id: 2,
    title: "Financial Restructuring for a UAE Tech Startup",
    client: "SaaS startup in Abu Dhabi",
    challenges: ["No financial forecasting", "High operational costs", "Investor documentation missing"],
    solution: ["3-year financial model", "Cost optimization strategy", "Investor ready reports"],
    results: ["Costs reduced by 22%", "AED 3.5M funding secured", "14-month runway extension"]
  },
  {
    id: 3,
    title: "Corporate Compliance & HR Transformation",
    client: "Dubai IT company with 85 employees",
    challenges: ["HR documents scattered", "Contracts not compliant", "Visa delays"],
    solution: ["Standard HR policies", "Digital HR system", "Compliance calendar"],
    results: ["100% compliance", "Onboarding reduced to 2 days", "HR workload reduced by 35%"]
  },
  {
    id: 4,
    title: "Microsoft Dynamics 365 Integration",
    client: "Dubai-based IT firm",
    challenges: ["Fragmented systems", "Manual invoicing", "No CRM integration"],
    solution: ["Dynamics 365 implementation", "System integration", "Automated workflows"],
    results: ["100% integration", "Invoicing reduced to 3 days", "45% better project tracking"]
  },
  {
    id: 5,
    title: "Zero WHT Penalty for Qatar Client",
    client: "Engineering services firm",
    challenges: ["Risk of withholding tax penalties", "Unclear contract wording"],
    solution: ["Contract review", "WHT classification", "Compliance checklist"],
    results: ["Zero penalties", "100% tax compliance"]
  },
  {
    id: 6,
    title: "Cost Optimization for Finland Restaurant Chain",
    client: "Restaurant group in Helsinki",
    challenges: ["High food costs", "Labor scheduling issues"],
    solution: ["Supplier negotiation", "Labor optimization tools", "Budgeting system"],
    results: ["Costs reduced by 18%", "Labor efficiency improved by 22%"]
  },
  {
    id: 7,
    title: "Business Establishment in Finland",
    client: "Consulting firm in Espoo",
    challenges: ["No Finnish regulatory experience", "Need payroll & accounting setup"],
    solution: ["Company registration", "VAT & payroll setup", "Monthly reporting"],
    results: ["Operational within 2 weeks", "100% regulatory compliance"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function CaseStudies() {
  return (
    <section id="caseStudy" className="bg-[#030712] text-gray-300 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
           Case Studies
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="bg-[#111827] rounded-2xl border border-white/5 p-4 md:p-8 flex flex-col transition-all duration-300 shadow-2xl"
            >
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold bg-blue-400/10 px-3 py-1 rounded-full mb-4 inline-block">
                  {caseItem.client}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight min-h-[3.5rem]">
                  {caseItem.title}
                </h3>
              </div>

              <div className="space-y-6 flex-grow">
                {/* Challenges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Challenges</span>
                  </div>
                  <ul className="space-y-2">
                    {caseItem.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-gray-400 leading-relaxed pl-2 border-l border-red-400/30">{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Lightbulb size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Solution</span>
                  </div>
                  <ul className="space-y-2">
                    {caseItem.solution.map((s, i) => (
                      <li key={i} className="text-sm text-gray-400 leading-relaxed pl-2 border-l border-blue-400/30">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results Footer */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <TrendingUp size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Key Results</span>
                </div>
                <div className="grid gap-2">
                  {caseItem.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-emerald-100/80 italic">
                      <CheckCircle2 size={14} className="mt-1 flex-shrink-0 text-emerald-500" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}