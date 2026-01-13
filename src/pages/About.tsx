import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Code, Palette, Rocket, Heart } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "REST APIs", "Firebase"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Redis"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma", "Vercel", "Postman"] },
];

const values = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable, and well-documented code." },
  { icon: Palette, title: "Beautiful Design", description: "Creating visually stunning interfaces that users love." },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and exceptional user experience." },
  { icon: Heart, title: "Passion", description: "Building products that make a real difference in people's lives." },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium mb-2">Get to Know Me</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            </div>

            {/* Bio Section */}
            <div className="bento-card mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Talagana Rajesh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Talagana Rajesh</h2>
                  <p className="text-primary font-medium mb-4">Full Stack Developer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Full Stack Developer based in India with a love for creating beautiful, 
                    functional web applications. I specialize in React, Next.js, and Node.js, and I'm always 
                    excited to learn new technologies and take on challenging projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    When I'm not coding, you can find me exploring new tech trends, contributing to open-source 
                    projects, or mentoring aspiring developers. I believe in writing clean code and creating 
                    user experiences that make a difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">What I Value</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div key={idx} className="bento-card">
                    <value.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="bento-card">
                    <h3 className="font-semibold mb-3 text-primary">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIdx) => (
                        <span 
                          key={itemIdx}
                          className="px-3 py-1 text-sm rounded-full bg-secondary/50 border border-border/30"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
