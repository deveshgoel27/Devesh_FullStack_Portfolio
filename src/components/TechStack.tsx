const technologies = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Git", icon: "📚" },
  { name: "Figma", icon: "🎯" },
  { name: "Python", icon: "🐍" },
  { name: "REST API", icon: "🔗" },
  { name: "Vercel", icon: "🚀" },
];

const TechStack = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-muted-foreground text-sm text-center mb-2">Better than yesterday.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center">My Tech Stack</h2>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div 
              key={idx}
              className="tech-badge shrink-0"
            >
              <span className="text-lg">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="marquee-container mt-4" style={{ direction: 'rtl' }}>
        <div className="marquee-content" style={{ direction: 'ltr' }}>
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, idx) => (
            <div 
              key={idx}
              className="tech-badge shrink-0"
            >
              <span className="text-lg">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
