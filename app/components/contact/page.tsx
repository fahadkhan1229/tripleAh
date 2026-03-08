"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0c0f1d] to-[#0a0f1d] relative overflow-hidden"
    >
      {/* Floating Glow Background */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]"
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl"
      >
        {/* Abstract Background Shape */}
        <motion.div
          variants={fadeUp}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-tr from-blue-600/40 to-purple-600/30 skew-x-12 translate-x-20 rounded-xl hidden md:block"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 backdrop-blur-sm">
          {/* Contact Info */}
          <motion.div variants={fadeUp} className="p-4 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">
              Get In Touch Today
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 group transition-transform duration-300"
              >
                <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg group-hover:shadow-blue-500/40 transition">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-gray-200 font-medium text-base group-hover:text-white transition">
                  info@atriomgroupoy.com
                </span>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 group transition-transform duration-300"
              >
                <div className="bg-gradient-to-tr from-green-400 to-blue-500 p-3 sm:p-4 rounded-full shadow-lg group-hover:shadow-green-400/40 transition">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-gray-200 font-medium text-base group-hover:text-white transition">
                  00358504486707
                </span>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 group transition-transform duration-300"
              >
                <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg group-hover:shadow-pink-500/40 transition">
                  <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-gray-200 font-medium text-base group-hover:text-white transition">
                  Helsinki, Finland (Serving Globally)
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            className="p-4 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg"
          >
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition ${errors.name ? "border-red-500" : "border-white/20"}`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition ${errors.email ? "border-red-500" : "border-white/20"}`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={4}
                  className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-blue-400/50 transition ${errors.message ? "border-red-500" : "border-white/20"}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-tr from-blue-500 to-purple-500 font-bold py-4 rounded-xl text-white shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Sending..."
                  : submitStatus === "success"
                    ? "Message Sent!"
                    : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      {/* <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 sm:mt-20 text-center text-gray-400 text-sm"
      >
        © 2024 AAA Triple A H Group Oy. All rights reserved. | Privacy Policy
      </motion.footer> */}
    </section>
  );
};

export default ContactUs;
