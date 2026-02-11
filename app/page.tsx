"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/header/header";
import Home from "./components/home/page";
import AboutUs from "./components/about/page";
import Services from "./components/service/page";
import ContactUs from "./components/contact/page";
import WhyChooseUs from "./components/whychooseus/page";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-0 scroll-smooth">
      <Header />
      <Home /> 
      <AboutUs />
      <WhyChooseUs></WhyChooseUs>
      <Services />
      <ContactUs />
    </div>
  );
}
