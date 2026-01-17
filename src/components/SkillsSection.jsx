import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Adobe After Effects", level: 95, category: "editing" },
  { name: "DaVinci Resolve", level: 90, category: "editing" },
  { name: "CapCut", level: 90, category: "editing" },
  { name: "Adobe Photoshop", level: 85, category: "editing" },
  { name: "Adobe Illustrator", level: 80, category: "editing" },
  { name: "VSL Editing", level: 90, category: "editing" },
  { name: "Short-Form Reels", level: 95, category: "editing" },
  { name: "Instagram Viral Content", level: 95, category: "editing" },
  { name: "Real Estate Videos", level: 85, category: "editing" },
  { name: "Meta Ads Reels", level: 90, category: "editing" },
];

const categories = ["all", "editing"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        

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
