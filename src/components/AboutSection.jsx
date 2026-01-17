import { Briefcase, User, Video } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Video Editor & Visual Storyteller
            </h3>

            <p className="text-muted-foreground">
              I’m Izhan Akhter, a professional video editor specializing in
              short-form viral content, high-converting reels, and cinematic
              storytelling for brands and creators.
            </p>

            <p className="text-muted-foreground">
              I approach every project with logic, creativity, and precision.
              My edits are designed to stop the scroll, retain attention, and
              convert viewers into clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

             
            </div>
          </div>

          {/* Highlights cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Short-Form & Viral Reels
                  </h4>
                  <p className="text-muted-foreground">
                    Instagram trends, Meta ads, personal branding, and cash-cow
                    content optimized for reach and retention.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    High-Converting Video Edits
                  </h4>
                  <p className="text-muted-foreground">
                    VSLs, real-estate videos, and long-form content built to sell
                    and scale brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Creative & Strategic Mindset
                  </h4>
                  <p className="text-muted-foreground">
                    9 out of 10 clients booked in 2025 through engaging,
                    story-driven visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience – left-aligned, consistent card lengths */}
        

      </div>
    </section>
  );
};