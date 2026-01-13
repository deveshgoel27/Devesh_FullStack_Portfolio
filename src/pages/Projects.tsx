import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { ExternalLink, Plus } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    title: "GetMaterial",
    shortDesc: "A collaborative note-sharing platform built for students, by students.",
    description: "Developed a centralized hub where students can upload, discover, and access academic notes, fostering a peer-driven learning ecosystem.",
    features: [
      "Notes sharing and uploading system for students",
      "Used by 500+ users with 160+ notes within 2 weeks",
      "Categorized and searchable content by subject and semester",
      "User authentication and content moderation using Firebase",
      "Real-time data sync and analytics",
      "Responsive UI designed for student accessibility",
    ],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Firebase", "Express.js", "Cloudflare", "REST API", "Email.js", "Tailwind CSS"],
    link: "https://getmaterial.vercel.app/",
  },
  {
    title: "HeyDrop",
    shortDesc: "Share Anything Instantly – Files, Images, and Text with No Login.",
    description: "A fast and secure file sharing solution that allows users to share files, images, and text instantly without creating an account.",
    features: [
      "Instant file sharing without authentication",
      "Support for multiple file types and sizes",
      "Secure temporary storage with auto-expiry",
      "Clean and intuitive user interface",
      "Real-time upload progress tracking",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Upstash Redis", "Vercel", "REST API"],
    link: "https://heydrop.vercel.app/",
  },
  {
    title: "Lemon Studio",
    shortDesc: "Portfolio website for a photography studio with service showcase.",
    description: "A beautiful and animated portfolio website designed for a photography studio to showcase their work and services.",
    features: [
      "Stunning visual gallery with smooth animations",
      "Service showcase with detailed descriptions",
      "Contact form integration with EmailJS",
      "Fully responsive design",
    ],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    link: "https://lemonstudio.vercel.app/",
  },
  {
    title: "DealsOfAgro",
    shortDesc: "E-commerce website for selling agricultural machinery online.",
    description: "An e-commerce platform designed to help farmers and agricultural businesses buy and sell machinery online, serving 30+ districts across Odisha.",
    features: [
      "Product catalog with filtering and search",
      "User authentication and order management",
      "Admin dashboard for inventory management",
      "Responsive mobile-first design",
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://dealsofagro.vercel.app/",
  },
  {
    title: "OpenRoom",
    shortDesc: "Anonymous real-time chat with AI replies, threading, and safe moderation.",
    description: "A community engagement platform that enables anonymous real-time conversations with AI-powered moderation and smart replies.",
    features: [
      "Anonymous chat functionality",
      "AI-powered replies using Gemini API",
      "Real-time messaging with Socket.io",
      "Thread-based conversations",
      "Safe content moderation",
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop",
    tags: ["React", "Gemini API", "Node.js", "REST API", "Socket.io"],
    link: "#",
  },
  {
    title: "AgroVision",
    shortDesc: "AI-powered crop disease detection and farmer support platform.",
    description: "Helping farmers identify crop diseases quickly using machine learning and computer vision technology.",
    features: [
      "AI-powered disease detection",
      "Image upload and analysis",
      "Treatment recommendations",
      "Farmer support resources",
    ],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=450&fit=crop",
    tags: ["React", "Python", "Tailwind CSS", "Machine Learning", "REST API"],
    link: "#",
  },
];

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Code Meets Creativity</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Crafted <span className="text-gradient-italic font-serif italic">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I've built, from student platforms to enterprise solutions.
              </p>
            </div>

            {/* Projects List - Column Layout */}
            <div className="flex flex-col gap-12 mb-20">
              {allProjects.map((project, idx) => (
                <div 
                  key={idx}
                  className="project-card group"
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Project Image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating description on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-lg font-medium text-white">{project.shortDesc}</p>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col">
                      {/* Title with line */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-0.5 bg-primary rounded-full" />
                        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {project.features.slice(0, expandedProject === idx ? undefined : 4).map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3">
                            <Plus className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {project.features.length > 4 && expandedProject !== idx && (
                          <button className="text-sm text-primary hover:underline ml-7">
                            Show more
                          </button>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, expandedProject === idx ? undefined : 4).map((tag, tagIdx) => (
                          <span 
                            key={tagIdx}
                            className="px-3 py-1.5 text-xs rounded-full bg-card/80 border border-border/50 flex items-center gap-2"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && expandedProject !== idx && (
                          <span className="px-3 py-1.5 text-xs rounded-full bg-primary/20 border border-primary/30 text-primary">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View Project Link */}
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group/link"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
