"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0d1425] text-gray-300 py-14 sm:py-16 md:py-20 px-2 sm:px-6 font-sans selection:bg-blue-500/30">

      {/* Glass Container */}
      <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-[#0d1425] border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6  md:p-12 shadow-2xl relative overflow-hidden">

             {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-400 mb-10 md:mb-14 group"
        >
          <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition" />
          Back to Home
        </Link>

        {/* Background Glows */}
        {/* <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-56 sm:w-64 h-56 sm:h-64 bg-indigo-500/10 blur-[100px] rounded-full" /> */}

        {/* Title */}
        <h1 className="text-3xl  md:text-5xl  font-black mb-8 md:mb-10 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent tracking-tight">
          Privacy Policy
        </h1>

        <div className="space-y-10 md:space-y-12 text-gray-400 leading-relaxed text-base sm:text-lg">

          {/* Intro */}
          <section>
            <p className="border-l-2 border-blue-500/50 pl-5 sm:pl-6 py-2">
              This Privacy Policy explains how{" "}
              <span className="text-white font-semibold">
                Triple A H Group Oy
              </span>{" "}
              collects, uses, and protects your information when you use our website and services.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400 text-sm">
                01
              </span>
              Information We Collect
            </h2>
            <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/5 hover:bg-white/[0.07] transition">
              <p>
                We may collect personal information such as your name, email, phone number, and usage data to provide better services and improve your experience on our platform.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 text-sm">
                02
              </span>
              How We Use Information
            </h2>
            <p className="px-1 sm:px-2">
              Information is used to enhance website functionality, send updates, provide customer support, and comply with legal requirements. We never sell your personal information to third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <span className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 text-sm">
                03
              </span>
              Data Security
            </h2>
            <p className="px-1 sm:px-2">
              We implement industry-standard security measures to protect your information. However, no online platform is completely secure, and we cannot guarantee absolute protection.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm uppercase tracking-widest text-gray-500">
          <p>© 2026 Triple A H Group Oy</p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white cursor-pointer transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white cursor-pointer transition">
              Cookies
            </Link>
            <span className="text-cyan-400">Updated March 2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}