import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";

const videoEdits = [
  { id: 1, title: "111 – Viral Real Estate", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663022/1_ptdsqr.mp4" },
  { id: 5, title: "Suen – Trending YT VSL Video", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768662994/5_uzikcw.mp4" },
  { id: 6, title: "Hannah – Personal Brand Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663025/2_rjrnpi.mp4" },
];

const reels = [
  { id: 9, title: "Bypr – Instagram Viral Cinematic Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768662996/6_xijgbh.mp4" },
  { id: 7, title: "Hormozi – Informative VSL", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663007/3_rsruss.mp4" },
  { id: 8, title: "Kyle – Instagram Viral Real Estate", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663014/4_jqx4yq.mov" },
  { id: 1, title: "AI – Instagram Viral Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663475/1_mqogdv.mp4" },
  { id: 2, title: "Leo – Instagram Viral Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663458/2_tl9u7q.mov" },
  { id: 3, title: "Talking Head – Instagram Viral Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663428/3_eyxzi6.mp4" },
  { id: 4, title: "Fredrick Skov – Instagram Viral Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663475/4_xqjevv.mp4" },
  { id: 5, title: "Lifestyle – Instagram Viral Cinematic Reels", video: "https://res.cloudinary.com/dv7vuoauy/video/upload/v1768663473/5_ts4v3g.mp4" },
];

export const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight">
          My{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          A collection of cinematic video edits and high-energy vertical reels —
          crafted with obsession for motion, color, and vibe.
        </p>

        {/* Video Edits */}

        {/* Reels */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center md:text-left">
            Reels / Shorts
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="group relative bg-gradient-to-b from-card/80 to-card rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 aspect-[9/16] cursor-pointer"
                onClick={() => setActiveVideo(reel.video)}
              >
                <video
                  src={reel.video}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-base font-medium text-white drop-shadow-md line-clamp-2">
                    {reel.title}
                  </h4>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center shadow-xl shadow-primary/40 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play
                      size={24}
                      className="text-primary-foreground fill-current"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center md:text-left">
            Video Edits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoEdits.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-b from-card/80 to-card rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveVideo(project.video)}
              >
                <div className="relative aspect-[4/3]">
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-lg shadow-primary/40">
                      <Play
                        size={28}
                        className="text-primary-foreground fill-current"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-center md:text-left group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
