import Image from "next/image";
import { socialLinks } from "@/lib/config";

export default function Page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      {/* Hero Section */}
      <div className="fade-in text-center mb-16">
        <div className="relative inline-block group mb-8">
          <a href={socialLinks.github} target="_blank" className="block neon-circle">
            <Image
              src="/srimal-fernando.png"
              alt="Profile photo"
              className="rounded-full bg-gray-100 mx-auto hover-lift transition-all duration-300 relative z-10"
              unoptimized
              width={200}
              height={200}
              priority
            />
          </a>
        </div>
        
        <h1 className="mt-8 mb-4 text-6xl md:text-8xl font-black text-gradient leading-tight">
          Srimal Fernando
        </h1>
        
        <div className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mx-auto max-w-fit mb-8">
          Software Engineer & AI Researcher
        </div>

        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-slate-700 dark:text-gray-300 max-w-4xl mx-auto">
          Building the future with <span className="text-gradient font-semibold">cutting-edge technology</span> and innovative solutions. 
          Specializing in web development, machine learning, and data science.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

      {/* Welcome Message */}
      <div className="fade-in-delay text-center">
        <p className="text-2xl font-light text-slate-600 dark:text-gray-400">
          <span className="text-gradient font-semibold">Ayubowan!</span> Welcome to my digital space
        </p>
      </div>
    </section>
  );
}
