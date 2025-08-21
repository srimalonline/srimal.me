import Image from "next/image";
import { socialLinks } from "@/lib/config";

export default function Page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      {/* Hero Section */}
      <div className="fade-in text-center mb-16">
        <div className="relative inline-block group">
          <a href={socialLinks.github} target="_blank" className="block">
            <Image
              src="/srimal-fernando.png"
              alt="Profile photo"
              className="rounded-full bg-gray-100 mx-auto glow hover-lift transition-all duration-300 border-4 border-blue-500/30 dark:border-purple-500/30"
              unoptimized
              width={200}
              height={200}
              priority
            />
          </a>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>
        
        <h1 className="mt-8 mb-4 text-6xl md:text-8xl font-black text-gradient leading-tight">
          Srimal Fernando
        </h1>
        
        <div className="typewriter text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mx-auto max-w-fit">
          Software Engineer & AI Researcher
        </div>
      </div>

      {/* Introduction */}
      <div className="fade-in-delay prose prose-lg prose-neutral dark:prose-invert mx-auto text-center max-w-4xl">
        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-slate-700 dark:text-gray-300">
          Building the future with <span className="text-gradient font-semibold">cutting-edge technology</span> and innovative solutions. 
          Specializing in web development, machine learning, and data science with a passion for creating impactful digital experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gradient mb-2">Innovation</h3>
            <p className="text-slate-600 dark:text-gray-400">Pushing boundaries with modern tech stack and creative solutions</p>
          </div>
          
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-gradient mb-2">AI Research</h3>
            <p className="text-slate-600 dark:text-gray-400">Exploring machine learning and data science frontiers</p>
          </div>
          
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gradient mb-2">Impact</h3>
            <p className="text-slate-600 dark:text-gray-400">Creating solutions that make a real difference in the world</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a 
            href="/projects" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow hover-lift inline-block"
          >
            View My Projects
          </a>
          <a 
            href="/blog" 
            className="px-8 py-4 glass font-semibold rounded-full hover-lift transition-all duration-300 inline-block"
          >
            Read My Blog
          </a>
        </div>
      </div>

      {/* Greeting */}
      <div className="fade-in-delay text-center mt-16">
        <p className="text-2xl font-light text-slate-600 dark:text-gray-400">
          <span className="text-gradient font-semibold">Ayubowan!</span> Welcome to my digital space
        </p>
      </div>
    </section>
  );
}
