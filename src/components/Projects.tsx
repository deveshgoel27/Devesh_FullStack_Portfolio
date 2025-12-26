import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "GetMaterial",
    description: "A collaborative note-sharing platform built for students, by students.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Firebase", "Express.js"],
    link: "#",
  },
  {
    title: "HeyDrop",
    description: "Share Anything Instantly – Files, Images, and Text with No Login.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redis"],
    link: "#",
  },
  {
    title: "Lemon Studio",
    description: "Portfolio website for a photography studio with service showcase.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "DealsOfAgro",
    description: "E-commerce website for selling agricultural machinery online.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Firebase"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">Code Meets Creativity</p>
          <h2 className="text-3xl md:text-4xl font-bold">Crafted Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bento-card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-border/30">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* View Project Link */}
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

        {/* Explore More */}
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            Explore More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
