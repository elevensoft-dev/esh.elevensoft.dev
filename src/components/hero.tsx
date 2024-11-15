import { useState } from "react";
import { PlayCircle } from "lucide-react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    // Slight delay for smoother transition
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto text-center z-50">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Monitorar. Analisar.{" "}
          <span className="text-orange-600">Melhorar.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Visibilidade completa das atividades dos funcionários com reprodução
          segura de sessões e monitoramento em tempo real.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center"
            onClick={handlePlayVideo}
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Assistir Vídeo
          </button>
          <a href="#features" className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            Saber mais
          </a>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="w-full h-full">
                <Plyr
                  hidden = {!isPlaying}
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: "1029769804",
                        provider: "vimeo",
                      },
                    ],
                  }}
                  options={{
                    autoplay: true,
                    muted: true,
                  }}
                />
              </div>
              <div className="relative w-full h-full" hidden={isPlaying}>
                <img
                  src="/assets/esh_thumb.png"
                  alt="ESH Dashboard Preview"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <PlayCircle className="w-16 h-16 text-white hover:scale-110 transition-transform" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

