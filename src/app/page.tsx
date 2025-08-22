import HeroSlider from "@/components/hero-slider";

export default function Page() {
  return (
    <>
      <HeroSlider />
      
      {/* Content below hero */}
      <div className="w-full bg-white dark:bg-gray-900 py-16">
        <div className="fade-in-delay text-center">
          <p className="text-2xl font-light text-slate-600 dark:text-gray-400">
            <span className="text-gradient font-semibold">Ayubowan!</span> Welcome to my digital space
          </p>
        </div>
      </div>
    </>
  );
}
