import Header from "./components/header/header";
import Home from "./components/home/page";
import AboutUs from "./components/about/page";  
import Services from "./components/service/page";
import ContactUs from "./components/contact/page";

export default function LandingPage() {
  return (
    <main className="relative selection:bg-blue-500/30">
      {/* Fixed Navigation */}
      <Header />

      {/* Content Sections */}
      <div className="flex flex-col">
        <Home />
        
        {/* Subtle transition divider */}
        <div className="h-24 bg-gradient-to-b from-[#0a0f1d] to-[#0d1425]" />
        
        <AboutUs />
        
        <Services />
        
        <ContactUs />
      </div>

      {/* Floating Decorative Elements (Global) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>
    </main>
  );
}