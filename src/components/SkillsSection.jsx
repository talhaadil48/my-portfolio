import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "FastAPI", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "PostgreSQL", category: "databases" },
  { name: "NeonDB", category: "databases" },
  { name: "Firebase", category: "databases" },
  { name: "TensorFlow", category: "ml" },
  { name: "Neural Networks", category: "ml" },
  { name: "Object Detection", category: "ml" },
  { name: "Computer Vision", category: "ml" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Problem Solving", category: "soft" },
  { name: "Team Collaboration", category: "soft" },
  { name: "Fast Learner", category: "soft" },
  { name: "Clear Communication", category: "soft" },
];

const categories = ["programming", "frontend", "backend", "databases", "ml", "tools", "soft"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cn(
                "px-4 py-2 rounded-full border border-primary text-sm font-medium",
                activeCategory === cat
                  ? "bg-primary text-background"
                  : "bg-background text-primary hover:bg-primary/10"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full animate-[grow_1.5s_ease-out]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
