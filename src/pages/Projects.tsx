import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const allProjects = [
  {
    title: "GetMaterial",
    description: "A collaborative note-sharing platform built for students, by students. Used by 500+ users with 160+ notes within 2 weeks.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Firebase", "Express.js", "Cloudflare", "REST API", "Email.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "HeyDrop",
    description: "Share Anything Instantly – Files, Images, and Text with No Login. Fast and secure file sharing solution.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Upstash Redis", "Vercel"],
    link: "#",
  },
  {
    title: "Lemon Studio",
    description: "Portfolio website for a photography studio with service showcase and beautiful animations.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    link: "#",
  },
  {
    title: "DealsOfAgro",
    description: "E-commerce website for selling agricultural machinery online. Serving 30+ districts across Odisha.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "OpenRoom",
    description: "Anonymous real-time chat with AI replies, threading, and safe moderation. Built for community engagement.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop",
    tags: ["React", "Gemini API", "Node.js", "REST API", "Socket.io"],
    link: "#",
  },
  {
    title: "AgroVision",
    description: "AI-powered crop disease detection and farmer support platform. Helping farmers identify issues quickly.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=450&fit=crop",
    tags: ["React", "Python", "Tailwind CSS", "Machine Learning", "REST API"],
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="starfield" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium mb-2">My Work</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I've built, from student platforms to enterprise solutions.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {allProjects.map((project, idx) => (
                <div 
                  key={idx}
                  className="bento-card group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-2 py-1 text-xs rounded-full bg-secondary/50 border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary/50 border border-border/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
