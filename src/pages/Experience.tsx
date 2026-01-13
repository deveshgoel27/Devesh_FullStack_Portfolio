import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Building2, Calendar, MapPin, GraduationCap } from "lucide-react";

const workExperience = [
  {
    company: "DealsOfAgro",
    role: "Full-Stack Developer",
    period: "April 2025 - Present",
    location: "Odisha, India",
    description: "Pioneering the development of a comprehensive e-commerce platform that's transforming how farmers across Odisha access and purchase agricultural machinery — creating a digital bridge between technology and traditional farming.",
    highlights: ["Serving 30+ Districts", "500+ Machinery Listed", "100+ Active Dealers", "E-commerce Platform"],
    type: "work",
  },
  {
    company: "WebCros",
    role: "Frontend Developer",
    period: "Jan 2024 - March 2025",
    location: "Remote",
    description: "Built professional web development services and delivered high-quality client projects with modern technologies. Focused on creating beautiful, responsive, and performant web applications.",
    highlights: ["10+ Client Projects", "React & Next.js", "UI/UX Design", "Client Communication"],
    type: "work",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2023 - 2024",
    location: "Remote",
    description: "Started my journey as a freelance web developer, building websites and applications for small businesses and individuals. Learned the fundamentals of client management and project delivery.",
    highlights: ["Portfolio Websites", "Small Business Sites", "Landing Pages"],
    type: "work",
  },
];

const education = [
  {
    institution: "University",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    period: "2021 - 2025",
    location: "India",
  },
];

const ExperiencePage = () => {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium mb-2">My Journey</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
              <p className="text-muted-foreground">Building impactful solutions that transform industries</p>
            </div>

            {/* Work Experience */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {workExperience.map((exp, idx) => (
                  <div key={idx} className="bento-card relative">
                    {/* Timeline connector */}
                    {idx !== workExperience.length - 1 && (
                      <div className="absolute left-6 top-20 w-0.5 h-full bg-border/50 hidden md:block" />
                    )}
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 relative z-10">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground md:text-right">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 md:ml-16">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 md:ml-16">
                      {exp.highlights.map((highlight, hIdx) => (
                        <span 
                          key={hIdx}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h2>
              {education.map((edu, idx) => (
                <div key={idx} className="bento-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        <p className="text-primary font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground text-sm">{edu.field}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
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

export default ExperiencePage;
