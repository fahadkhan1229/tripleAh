"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] "
    >
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10  px-3 py-3 flex justify-between items-center shadow-2xl">
        
        {/* Fixed Bold Blue Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <Image
  src="/zoner_logo.svg"
  alt="AAH Logo"
  width={100}
  height={100}
  className="relative z-10 bg-white/70 rounded-3xl pt-3 py-2 p-4"
/>
          </div>

          {/* <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white">
              AAH<span className="text-blue-500">.</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-400">
              Triple A H Group
            </span>
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-200 font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Fixed Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden  overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1d]/90 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-white font-semibold text-lg py-3 border-b border-white/5 hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-xl">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;