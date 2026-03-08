"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#0d1425] text-gray-300 py-14 sm:py-16 md:py-20 px-4 sm:px-6 font-sans selection:bg-cyan-500/30">

      {/* Glass Container */}
      <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-[#0d1425] border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">

        {/* Back to Home */}
     <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-400 mb-10 md:mb-14 group"
            >
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition" />
              Back to Home
            </Link>
        {/* Background Glows */}
        <div className="absolute -top-24 -right-24 w-56 sm:w-64 h-56 sm:h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-56 sm:w-64 h-56 sm:h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        {/* Title */}
        <h1 className="text-3xl  md:text-5xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Cookie Policy
        </h1>

        <div className="space-y-8 text-gray-400 leading-relaxed text-base sm:text-lg">

          {/* Intro */}
          <section>
            <p>
              This Cookie Policy explains how{" "}
              <span className="text-white font-medium">
                Triple A H Group Oy
              </span>{" "}
              uses cookies and similar technologies to recognize you when you
              visit our website.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
              What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device that help
              websites function properly and provide a seamless,
              high-performance user experience.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]" />
              How We Use Cookies
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Core Website Functionality",
                "Analytics & Performance Tracking",
                "Security & Authentication",
                "UX Optimization"
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition"
                >
                  <span className="text-cyan-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_#c084fc]" />
              Managing Cookies
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can control or delete them through your browser settings.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-14 md:mt-16 pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm text-gray-500">
          <p>© 2026 Triple A H Group Oy</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white cursor-pointer transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white cursor-pointer transition">
              Privacy
            </Link>
            <span className="text-cyan-400">Updated March 2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}