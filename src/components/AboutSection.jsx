import { Briefcase, User, Code, GraduationCap, Calendar } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & ML Practitioner
            </h3>

            <p className="text-muted-foreground">
              I’m Manahil Adeel, a Full Stack Developer experienced in building
              scalable, production-ready web applications using Next.js,
              FastAPI, and PostgreSQL.
            </p>

            <p className="text-muted-foreground">
              Alongside full stack development, I work with Machine Learning,
              focusing on object detection and real-time computer vision systems
              using TensorFlow, with hands-on experience across the complete
              development lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, SEO-friendly applications with
                    Next.js, FastAPI, and PostgreSQL from API design to
                    deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Freelance & Client-Based Work
                  </h4>
                  <p className="text-muted-foreground">
                    Collaborating directly with clients to deliver
                    performance-optimized dashboards and web platforms while
                    managing timelines and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Research & ML Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Experience in object detection and real-time computer
                    vision systems using TensorFlow, gained through academic
                    and research-oriented environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────
            NEW: Professional Experience subsection
        ──────────────────────────────────────────────── */}
        <div className="mt-20 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Professional <span className="text-primary">Experience</span>
          </h3>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Freelance Full Stack Developer */}
            <div className="gradient-border p-6 md:p-8 card-hover bg-card/50">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10 shrink-0 mx-auto sm:mx-0">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div>
                    <h4 className="font-semibold text-xl">
                      Freelance Full Stack Developer
                    </h4>
                    <p className="text-primary font-medium">
                      August 2025 – Present
                    </p>
                  </div>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside sm:list-outside sm:pl-5 marker:text-primary/70">
                    <li>
                      Working with clients to design and develop full stack web applications
                    </li>
                    <li>
                      Delivering SEO-friendly, performance-optimized websites and dashboards
                    </li>
                    <li>
                      Managing everything from backend APIs to frontend UI and deployment
                    </li>
                    <li>
                      Managing client communication, timelines, and feature requirements independently
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frontend Developer Intern */}
            <div className="gradient-border p-6 md:p-8 card-hover bg-card/50">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10 shrink-0 mx-auto sm:mx-0">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div>
                    <h4 className="font-semibold text-xl">
                      Frontend Developer Intern
                    </h4>
                    <p className="text-primary font-medium">
                      June 18 – August 18, 2025
                    </p>
                    <p className="text-muted-foreground italic">
                      National Center of Artificial Intelligence (NCAI)
                    </p>
                  </div>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside sm:list-outside sm:pl-5 marker:text-primary/70">
                    <li>
                      Built and deployed web applications for NCAI initiatives
                    </li>
                    <li>
                      Collaborated with team members to convert ideas into functional user interfaces
                    </li>
                    <li>
                      Focused on clean layouts, responsiveness, and performance
                    </li>
                    <li>
                      Gained experience working in a research-oriented development environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Education
          </h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Matriculation */}
            <div className="gradient-border p-6 md:p-8 card-hover bg-card/50">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2 text-left">
                  <h4 className="font-semibold text-xl">
                    Matriculation Certificate
                  </h4>
                  <p className="text-muted-foreground">
                    H.B. Malik Public School, Karachi
                  </p>
                  <p className="font-medium text-primary">
                    Graduated with A+ | 98%
                  </p>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="gradient-border p-6 md:p-8 card-hover bg-card/50">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2 text-left">
                  <h4 className="font-semibold text-xl">
                    Intermediate Certification
                  </h4>
                  <p className="text-muted-foreground">
                    BAMM PECHS Government College for Women, Karachi
                  </p>
                  <p className="font-medium text-primary">
                    First Year: 86% • Second Year: 90%
                  </p>
                </div>
              </div>
            </div>

            {/* University */}
            <div className="gradient-border p-6 md:p-8 card-hover bg-card/50">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2 text-left">
                  <h4 className="font-semibold text-xl">
                    Computer Information and System Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    NED University of Engineering and Technology, Karachi
                  </p>
                  <p className="font-medium">
                    Third Year Undergraduate
                  </p>
                  <p className="font-medium text-primary">
                    Current CGPA: 3.916
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};