import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SUFIPULSE",
    subtitle: "Client-Based Full Stack Platform",
    link: "https://sufi-pulse.vercel.app",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Vercel"],
    description: (
      <>
        <p className="text-muted-foreground mb-3">
          A sacred, non-monetized platform for Sufi kalams and spiritual poetry — writers submit lyrics, vocalists share renditions, building a global ummah community.
        </p>
        <ul className="text-muted-foreground space-y-1.5 list-disc pl-5 marker:text-primary/60 text-sm">
          <li>Secure authentication with HTTP-only cookies</li>
          <li>REST APIs in FastAPI + Next.js frontend integration</li>
          <li>SEO/performance optimized (strong Lighthouse scores)</li>
          <li>Vercel deployment with CI/CD pipeline</li>
          <li>Features for kalam submissions & vocal collaborations</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Oraclia",
    subtitle: "Customizable AI Agent Platform",
    link: "https://oraclia.vercel.app/",
    tech: ["Next.js", "Python", "MySQL"],
    description: (
      <>
        <p className="text-muted-foreground mb-3">
          Platform for users to create and manage personalized AI chatbots with custom personalities, traits, and conversation styles.
        </p>
        <ul className="text-muted-foreground space-y-1.5 list-disc pl-5 marker:text-primary/60 text-sm">
          <li>Responsive Next.js interface for agent creation</li>
          <li>Python-based logic for dynamic, trait-driven responses</li>
          <li>MySQL for storing users, agents & chat history</li>
          <li>Real-time testing and customization of chatbot behavior</li>
          <li>Intuitive flow for building multiple personalized agents</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Real-Time Hand Sign Detection",
    subtitle: "Sign-to-Speech System",
    tech: ["TensorFlow", "MediaPipe", "Python"],
    description: (
      <>
        <p className="text-muted-foreground mb-3">
          Real-time computer vision system that recognizes hand signs via webcam and converts them to spoken language for accessibility.
        </p>
        <ul className="text-muted-foreground space-y-1.5 list-disc pl-5 marker:text-primary/60 text-sm">
          <li>Custom dataset collection and curation</li>
          <li>TensorFlow models for accurate gesture classification</li>
          <li>MediaPipe for fast hand landmark detection</li>
          <li>Low-latency pipeline with text-to-speech output</li>
          <li>Full ML workflow: training to live inference</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Sustainable Eco Park",
    subtitle: "Educational Website",
    link: "https://sus-forest.vercel.app/",
    tech: ["Next.js", "Vercel", "Tailwind CSS"],
    description: (
      <>
        <p className="text-muted-foreground mb-3">
          Guide to NED University's sustainable eco-park — showcases upcycled designs, native plants, green tech, and climate-aware education.
        </p>
        <ul className="text-muted-foreground space-y-1.5 list-disc pl-5 marker:text-primary/60 text-sm">
          <li>Virtual exploration of eco-park features & components</li>
          <li>Info on wetlands, solar bioreactors, upcycled furniture</li>
          <li>QR-coded links for hands-on digital learning</li>
          <li>Focus on biodiversity, water filtration & carbon capture</li>
          <li>Responsive build deployed on Vercel</li>
        </ul>
      </>
    ),
  },
  // Add your 5th project here in the same format when ready
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full-stack apps, AI tools, computer vision & educational platforms — built clean, fast, and with purpose.
        </p>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/60 border border-border/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Heading + Tags */}
                <div className="md:w-2/5 lg:w-1/3 p-6 md:p-8 bg-muted/30 md:border-r border-border/30 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Description + Bullets + Link */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <div className="flex-grow">
                    {project.description}
                  </div>

                  {project.link && (
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View Live Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};