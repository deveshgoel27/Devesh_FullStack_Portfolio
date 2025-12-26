import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "DealsOfAgro",
    role: "Full-Stack Developer",
    period: "April 2025 - Present",
    location: "Odisha, India",
    description: "Pioneering the development of a comprehensive e-commerce platform that's transforming how farmers across Odisha access and purchase agricultural machinery.",
    highlights: ["Serving 30+ Districts", "500+ Machinery Listed", "100+ Active Dealers"],
  },
  {
    company: "WebCros",
    role: "Frontend Developer",
    period: "Jan 2024 - March 2025",
    location: "Remote",
    description: "Built professional web development services and delivered high-quality client projects with modern technologies.",
    highlights: ["10+ Client Projects", "React & Next.js", "UI/UX Design"],
  },
];

const Experience = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">Professional Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">Building impactful solutions that transform industries</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bento-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
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
    </section>
  );
};

export default Experience;
