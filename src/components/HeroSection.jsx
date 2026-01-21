import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 md:py-0"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in inline-block">
              Hi, I'm{`\u00A0`}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block">
              Manahil
            </span>
            <span className="text-gradient ml-2 md:ml-3 opacity-0 animate-fade-in-delay-2 inline-block">
              Adeel
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed opacity-0 animate-fade-in-delay-3">
            A Full Stack Developer experienced in building scalable,
            production-ready web applications using Next.js, FastAPI, and
            PostgreSQL. I also work with Machine Learning, focusing on object
            detection and real-time computer vision systems using TensorFlow.
          </p>

          <div className="pt-4 md:pt-8 opacity-0 animate-fade-in-delay-4">
            <a
              href="#contact"
              className="cosmic-button inline-block text-base sm:text-lg px-8 py-4"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden shadow-2xl ring-2 ring-primary/20">
            <img
              src="/imggg.jfif"
              alt="Manahil Adeel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
      </div>
    </section>
  );
};
