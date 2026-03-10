"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Mail, ArrowRight } from "lucide-react";

// Replace these placeholder links with your actual hosted image URLs
const teamData = [
  {
    id: 1,
    name: "Dr Muhammad Waqas Arham",
    role: "Managing Partner",
    company: "Triple A H Group Oy",
    image: "/person1.jpeg",
    bio: "Focused on Accounting, Finance, and advancing financial growth initiatives.",
  },
  // {
  //   id: 2,
  //   name: "Osama Nahhat",
  //   role: "Managing Director",
  //   company: "CVC",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  //   bio: "Leading international debt advisory and structured finance operations.",
  // },
  // {
  //   id: 3,
  //   name: "Faris Cassim",
  //   role: "Senior Portfolio Manager",
  //   company: "ADIA",
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  //   bio: "Expert in global asset classes and investment strategy.",
  // },
  // {
  //   id: 4,
  //   name: "Stefan Janke",
  //   role: "Investment Manager",
  //   company: "ADIA",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  //   bio: "Focused on equity capital markets and IPO readiness.",
  // },
];

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<
    null | (typeof teamData)[0]
  >(null);

  return (
    <section
      id="teams"
      className="min-h-screen  scroll-mt-32 bg-[#0a0f1d] py-12 px-6 text-white font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-white/10 pb-6">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              layoutId={`card-${member.id}`}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Profile <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500 text-sm uppercase">
                {member.role}, {member.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Sidebar Overlay */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60  backdrop-blur-md z-50"
            />
            <motion.div
              layoutId={`card-${selectedMember.id}`}
              className="fixed inset-y-0 right-0 mt-18 w-full md:w-[500px] bg-[#0f0f0f] z-[60] p-10 border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={28} />
              </button>

              <img
                src={selectedMember.image}
                className="w-40 h-40 rounded-xl object-center mb-8 border border-white/10 shadow-lg"
                alt=""
              />
              <h2 className="text-3xl font-black mb-1">
                {selectedMember.name}
              </h2>
              <p className="text-blue-500 font-bold mb-8 uppercase text-xs tracking-widest">
                {selectedMember.role}
              </p>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed italic border-l-2 border-blue-500/50 pl-4">
                  "{selectedMember.bio}"
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/dr-muhammad-waqas-arham-acca-dba-pmp-rmp-mba-21050576"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-gray-500 hover:text-white cursor-pointer" />
                  </a>
                  <a href="mailto:example@email.com">
                    <Mail className="text-gray-500 hover:text-white cursor-pointer" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
