import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* Hero Glow */}
      <div className="hero-glow" />
      
      {/* Announcement Badge */}
      <Link 
        to="/projects" 
        className="flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-in-up hover:scale-105 transition-transform"
      >
        <span className="badge-new">New</span>
        <span className="text-sm text-muted-foreground">Project Launched</span>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </Link>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight opacity-0 animate-fade-in-up animation-delay-100">
        Turning thoughts into{" "}
        <br className="hidden sm:block" />
        beautiful{" "}
        <span className="font-serif italic text-gradient-italic">web stories</span>
      </h1>

      {/* Introduction */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-10 opacity-0 animate-fade-in-up animation-delay-200">
        <span className="text-lg text-muted-foreground">Hello, I'm</span>
        <span className="glass-card px-4 py-2 rounded-full text-foreground font-medium">
          Talagana Rajesh
        </span>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 overflow-hidden border-2 border-border">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-lg text-foreground font-medium">A Full Stack Developer</span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12 opacity-0 animate-fade-in-up animation-delay-300">
        <Link to="/contact" className="btn-primary flex items-center gap-2 group">
          Let's Connect
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a 
          href="mailto:talaganarajesh@gmail.com" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          talaganarajesh@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Hero;
