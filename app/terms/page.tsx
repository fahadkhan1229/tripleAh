"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Scale,
  ShieldCheck,
  Globe,
  Lock,
  FileText,
  ArrowRight,
} from "lucide-react";

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
};

const LegalLayout = ({
  title,
  subtitle,
  children,
  lastUpdated,
}: LegalLayoutProps) => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "usage", label: "Usage Policy" },
    { id: "property", label: "Intellectual Property" },
    { id: "liability", label: "Liability" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1425] text-gray-300 relative overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-400 mb-10 md:mb-14 group"
        >
          <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="border-b border-white/10 pb-8 md:pb-12">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Legal Center
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            {title}
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          <div className="flex items-center text-sm text-gray-500 mt-5">
            <FileText className="h-4 w-4 mr-2 text-blue-500" />
            Last updated: {lastUpdated}
          </div>
        </header>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 md:mt-16">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
                On this page
              </h4>

              <nav className="space-y-3 border-l border-white/10">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block pl-4 text-sm text-gray-500 hover:text-blue-400 border-l border-transparent hover:border-blue-400 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9 space-y-14 md:space-y-16">
            {children}
          </main>
        </div>

        {/* Contact Section */}
        <div className="mt-16 md:mt-24 text-center p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Questions about our policies?
          </h3>

          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Our legal team is available to help clarify our policies and ensure
            transparency.
          </p>

          <Link
            href="/#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:bg-blue-500 transition"
          >
            Contact Team
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These terms govern the relationship between Triple A H Group Oy and users accessing our digital services."
      lastUpdated="March 2026"
    >
      {/* Section 1 */}
      <section id="overview">
        <div className="flex items-center mb-4">
          <Globe className="h-6 w-6 text-indigo-400 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            1. Global Use Agreement
          </h2>
        </div>

        <p className="text-gray-400 text-md leading-relaxed">
          By accessing our website, you agree to comply with these Terms of
          Service. These terms form a legally binding agreement between you and
          Triple A H Group Oy.
        </p>
      </section>

      {/* Section 2 */}
      <section id="usage">
        <div className="flex items-center mb-4">
          <Scale className="h-6 w-6 text-blue-400 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            2. Acceptable Use Policy
          </h2>
        </div>

        <p className="text-gray-400 mb-4">
          Users must maintain professional conduct while using our services.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-500">
          <li>Unauthorized data collection</li>
          <li>System interference</li>
          <li>Intellectual property theft</li>
          <li>Fraudulent representation</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="property">
        <div className="flex items-center mb-4">
          <ShieldCheck className="h-6 w-6 text-purple-400 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            3. Intellectual Property
          </h2>
        </div>

        <p className="text-gray-400">
          All content, trademarks, branding, and proprietary technology belong
          exclusively to Triple A H Group Oy.
        </p>
      </section>

      {/* Section 4 */}
      <section id="liability">
        <div className="flex items-center mb-4">
          <Lock className="h-6 w-6 text-red-400 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold text-white">
            4. Limitation of Liability
          </h2>
        </div>

        <p className="text-gray-400">
          Triple A H Group Oy shall not be liable for indirect, incidental, or
          consequential damages.
        </p>
      </section>
    </LegalLayout>
  );
}
