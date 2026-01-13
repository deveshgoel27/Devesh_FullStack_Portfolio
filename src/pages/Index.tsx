import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated Starfield Background */}
      <StarField />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <BentoGrid />
          <Projects />
          <TechStack />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
