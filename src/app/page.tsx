import HeroSlider from "@/components/hero-slider";

export default function Page() {
  return (
    <>
      <HeroSlider />
      
      {/* Welcome Section */}
      <div className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 text-center hover-lift fade-in">
            <div className="mb-6">
              <span className="text-4xl md:text-5xl font-bold text-black block mb-4">
                Srimal Fernando
              </span>
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                <span className="font-semibold">AI Researcher & Software Engineer</span>
                <br className="hidden md:block" />
                Advancing intelligent systems through research, development, and innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-2xl p-6 hover-lift fade-in-stagger-1">
                <h3 className="text-lg font-semibold text-black mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600">Conducting research and developing intelligent systems with focus on practical applications and theoretical advancement</p>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift fade-in-stagger-2">
                <h3 className="text-lg font-semibold text-black mb-2">Full-Stack Development</h3>
                <p className="text-sm text-gray-600">Building scalable, production-grade applications using modern architectures and technologies</p>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift fade-in-stagger-3">
                <h3 className="text-lg font-semibold text-black mb-2">Technical Leadership</h3>
                <p className="text-sm text-gray-600">Mentoring engineers, leading research initiatives, and fostering innovation through collaborative projects</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-6">
                Explore my research, publications, and projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="px-6 py-3 bg-black font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 hover-lift"
                  style={{ color: 'white' }}
                >
                  Learn About Me
                </a>
                <a
                  href="/projects"
                  className="px-6 py-3 bg-white border-2 border-black font-semibold rounded-full hover:bg-gray-100 hover-lift transition-all duration-300"
                  style={{ color: 'black' }}
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
