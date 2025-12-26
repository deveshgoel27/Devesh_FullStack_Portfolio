import { Sparkles, Rocket, Globe, MapPin } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tech Enthusiast Card */}
        <div className="bento-card col-span-1">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Tech Enthusiast</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Always excited to build cool stuff with the latest tech.
          </h3>
        </div>

        {/* Let's Work Together Card */}
        <div className="bento-card col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1">Let's work together</h3>
            <p className="text-muted-foreground">on your next project</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center border border-border font-bold text-lg">
              TR
            </div>
            <div>
              <p className="text-sm text-muted-foreground">talaganarajesh@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bento-card col-span-1 relative overflow-hidden">
          <div className="flex items-center gap-2 text-green-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">Remote</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            India
          </h3>
          <p className="text-sm text-muted-foreground">
            I'm very flexible with time zone communications
          </p>
          {/* Globe Background */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 opacity-10">
            <Globe className="w-full h-full" />
          </div>
        </div>

        {/* Behind the Scenes Card - Full Width */}
        <div className="bento-card col-span-1 md:col-span-3">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium">Behind the Scenes</span>
          </div>
          <h3 className="text-xl font-semibold mb-6">
            Currently crafting a Business Portfolio for Client.
          </h3>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Project Planning & Strategy", desc: "I work closely with clients to define clear goals and develop a strategic roadmap for each project." },
              { title: "Design & User Experience", desc: "I create intuitive and aesthetically pleasing designs that focus on user-centered experiences." },
              { title: "Custom Development", desc: "I write clean, efficient code to build custom solutions tailored to the specific needs of the project." },
              { title: "API Integration", desc: "I integrate third-party services and APIs to enhance functionality and improve user experience." },
              { title: "Testing & Optimization", desc: "I conduct rigorous testing to ensure functionality, performance, and security across all platforms." },
              { title: "Continuous Support", desc: "I provide ongoing support and updates to ensure the project remains relevant and fully functional over time." },
            ].map((service, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                <h4 className="font-semibold text-sm mb-2">{service.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
