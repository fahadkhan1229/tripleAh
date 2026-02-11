"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 px-6 sm:px-8 py-3 flex justify-between items-center shadow-xl">
      {/* Elevated Logo Design */}
<div className="flex items-center gap-3 group cursor-pointer">
  <div className="relative flex items-center justify-center">
    {/* Animated Background Glow */}
    <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
    
    {/* Geometric 'A' Mark */}
    <div className="relative bg-gradient-to-br from-blue-500 to-indigo-700 p-2 rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
      <div className="flex items-center gap-3 group cursor-pointer">
  <div className="relative">
    {/* Outer Glow for Pop */}
    <div className="absolute inset-0 bg-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
   <svg 
  width="48" 
  height="48" 
  viewBox="0 0 24 24" 
  fill="none"
  stroke="white" 
  strokeWidth="1.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
  className="relative drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
>
  <defs>
    {/* Glossy Sheen Overlay */}
    <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="white" stopOpacity="0"/>
      <stop offset="50%" stopColor="white" stopOpacity="0.4"/>
      <stop offset="100%" stopColor="white" stopOpacity="0"/>
    </linearGradient>
  </defs>

  {/* Icon Structure */}
  <g className="filter drop-shadow-lg">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </g>
  
  {/* Optional glossy overlay */}
  <path 
    d="M4 8 Q 12 4 20 8" 
    stroke="url(#sheen)" 
    strokeWidth="0.5" 
    fill="none" 
    className="opacity-50"
  />
</svg>

  </div>


</div>
    </div>
  </div>

  <div className="flex flex-col leading-none">
    <span className="text-2xl font-black tracking-tighter text-white">
      AAH<span className="text-blue-500">.</span>
    </span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80">
      Triple A H Group
    </span>
  </div>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-200 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white font-semibold px-6 py-3 rounded-full
            shadow-lg shadow-purple-500/30
            transition-all duration-300
            transform hover:scale-105 active:scale-95
            hover:shadow-xl hover:shadow-purple-500/50
            focus:outline-none focus:ring-2 focus:ring-blue-400/50
          ">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/5 backdrop-blur-lg border-t border-white/20"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-medium text-lg hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-semibold px-6 py-3 rounded-full
                shadow-lg shadow-purple-500/30
                transition-all duration-300
                transform hover:scale-105 active:scale-95
                hover:shadow-xl hover:shadow-purple-500/50
                focus:outline-none focus:ring-2 focus:ring-blue-400/50
              ">
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
