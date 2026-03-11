import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const sections = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Our Businesses", href: "#businesses" },
      { name: "Meet our team", href: "#teams" },
      { name: "Case Studies", href: "#caseStudy" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Linkedin", href: "#", icon: Linkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1d] border-t border-white/5 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="#home"
              className="transition-opacity hover:opacity-80 inline-block"
            >
              <Image
                src="/logo2.png"
                alt="Triple A H Group Oy Logo"
                width={140}
                height={50}
                className="brightness-110"
              />
            </Link>
            <p className="text-sm md:text-md leading-5 text-gray-300">
              Redefining excellence through innovation and strategic growth.
            </p>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm md:text-md font-bold text-white uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-md hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-2 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-sm md:text-md font-bold text-white uppercase tracking-widest">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm md:text-md text-gray-400">
              Subscribe to our newsletter for latest updates.
            </p>
            <form className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm md:text-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-2 text-sm md:text-md font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-lg text-gray-400 text-center md:text-left order-2 md:order-1">
            &copy; {currentYear} Triple A H Group Oy. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
