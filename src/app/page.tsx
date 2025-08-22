import HeroSlider from "@/components/hero-slider";

export default function Page() {
  return (
    <>
      <HeroSlider />
      
      {/* Welcome Section */}
      <div className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 text-center hover-lift">
            <div className="mb-6">
              <span className="text-4xl md:text-5xl font-black text-gradient block mb-4">
                Ayubowan! 🙏
              </span>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Welcome to my digital space where <span className="text-blue-400 font-semibold">innovation meets impact</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Research</h3>
                <p className="text-sm text-gray-400">Pushing boundaries in machine learning and intelligent systems</p>
              </div>
              
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-sm text-gray-400">Building scalable applications with modern technologies</p>
              </div>
              
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-lg font-semibold text-white mb-2">Mentorship</h3>
                <p className="text-sm text-gray-400">Empowering the next generation of engineers and innovators</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-400 mb-6">
                Explore my journey through research, projects, and community impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/about" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow hover-lift"
                >
                  Learn About Me
                </a>
                <a 
                  href="/projects" 
                  className="px-6 py-3 glass font-semibold rounded-full hover-lift transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
