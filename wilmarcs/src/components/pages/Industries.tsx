'use client';
import { BASE_URL } from "@/lib/constants";
import industries from "@/data/industries.json";

export default function Industries() {
  const industriesObj = Object.keys(industries) as (keyof typeof industries)[];
  return (
    <>
      <section className="mt-[76px] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-950"></div>
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,.08),_transparent_60%)]"></div>
        </div>
        <div className="container mx-auto lg:px-8 sm:px-6 px-4 xl:py-24 lg:py-20 pt-12 pb-8">
          <div className="max-w-3xl">
            <h1 className="2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-extrabold leading-tight tracking-tight">Where Every Industry Finds Its Frame.</h1>
          </div>
          <div className="max-w-4xl">
            <p className="mt-5 lg:text-lg md:text-base text-sm text-neutral-300">From innovation to impact, our storytelling spans industries including corporate, manufacturing, hospitality, fintech, technology, healthcare, and education, finding purpose and emotion in every frame.</p>
            <p className="mt-5 lg:text-lg md:text-base text-sm text-neutral-300">Wilmarcs Motion Pictures crafts cinematic stories that connect creativity with strategy, bringing brands to life through powerful visuals that inspire and engage audiences across India and beyond.</p>
          </div>
        </div>
      </section>
      <section className="md:pb-20 pb-16 pt-16 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {industriesObj.map((item, i) => (
              <a href={`${BASE_URL}industries/${item}`} key={i} className="bg-[#111113] border border-gray-800 hover:border-gray-500 rounded-xl p-5 block hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="font-semibold mb-2">{industries[item].hero.tag}</h3>
                <p className="text-gray-400 text-sm">{industries[item].hero.subhead}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
