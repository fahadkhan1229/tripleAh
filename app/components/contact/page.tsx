"use client";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0c0f1d] to-[#0a0f1d]">
      <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-tr from-blue-600/40 to-purple-600/30 skew-x-12 translate-x-20 rounded-xl hidden md:block" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 backdrop-blur-sm">
          {/* Contact Info */}
          <div className="p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">Get In Touch Today</h2>
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-white/90 font-medium text-sm sm:text-base">info@tripleahgroup.fi</span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-tr from-green-400 to-blue-500 p-3 sm:p-4 rounded-full shadow-lg">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-white/90 font-medium text-sm sm:text-base">+358 123 456 789</span>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg">
                  <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-white/90 font-medium text-sm sm:text-base">Helsinki, Finland (Serving Globally)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg">
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition"
              />
              <button className="w-full bg-gradient-to-tr from-blue-500 to-purple-500 font-bold py-4 rounded-xl text-white hover:scale-105 hover:shadow-xl transition-transform duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 text-center text-gray-400 text-xs sm:text-sm">
        © 2024 Triple A H Group Oy. All rights reserved. | Privacy Policy
      </footer>
    </section>
  );
};

export default ContactUs;
