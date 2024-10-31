import { PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-b from-gray-50 to-white relative">
      <video
        autoPlay
        loop
        className="absolute transform right-44 rotate-[25deg] top-36 w-60 opacity-30"
      >
        <source src="/assets/hero-am.webm" type="video/webm" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="myVideo.mp4" download="myVideo.mp4">
            link to the video
          </a>{" "}
          instead.
        </p>
      </video>
      <div className="max-w-7xl mx-auto text-center z-50">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Monitor. Analyze. <span className="text-indigo-600">Improve.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Complete visibility into employee activities with secure session
          replay and real-time monitoring.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo
          </button>
          <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
            Start Free Trial
          </button>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80"
              alt="ESH Dashboard Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
