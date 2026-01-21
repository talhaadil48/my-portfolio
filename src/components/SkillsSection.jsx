import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", level: 95, category: "programming" },
  { name: "JavaScript", level: 90, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "FastAPI", level: 90, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "databases" },
  { name: "NeonDB", level: 80, category: "databases" },
  { name: "Firebase", level: 80, category: "databases" },
  { name: "TensorFlow", level: 90, category: "ml" },
  { name: "Neural Networks", level: 85, category: "ml" },
  { name: "Object Detection", level: 90, category: "ml" },
  { name: "Computer Vision", level: 85, category: "ml" },
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Team Collaboration", level: 85, category: "soft" },
  { name: "Fast Learner", level: 95, category: "soft" },
  { name: "Clear Communication", level: 90, category: "soft" },
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
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
