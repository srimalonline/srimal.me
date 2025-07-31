import Image from "next/image";
import { socialLinks } from "@/lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/srimal-fernando.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-100 transition-all duration-300"
          unoptimized
          width={260}
          height={260}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Ayubowan !</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am Srimal Fernando, a software engineer and researcher with a
          passion for building innovative solutions. I specialize in web
          development, machine learning, and data science.
        </p>
        <p>
          I have worked on various projects ranging from web applications to
          machine learning models. My goal is to create impactful solutions that
          make a difference.
        </p>
        <p>
          Feel free to explore my <a href="/blog">blog</a> or check out my{" "}
          <a href="/projects">projects</a>.
        </p>
      </div>
    </section>
  );
}
