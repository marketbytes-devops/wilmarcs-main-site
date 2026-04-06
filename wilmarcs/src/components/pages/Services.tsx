'use client';
import { useState, useEffect } from 'react';
import { BASE_URL } from "@/lib/constants";
type Service = {
  cname: string;
  cdesc: string;
  cslug: string;
  services: [{
    stitle: string;
    sdesc: string;
    moreinfo: string;
    deliverables: string;
    addons: string;
  }]
};
export default function Services({ data }: { data: Service[] }) {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll fix for Next.js hydration
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <section className="lg:mt-[76px] mt-[64px] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-950"></div>
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,.08),_transparent_60%)]"></div>
        </div>
        <div className="mx-auto container lg:px-8 sm:px-6 px-4 xl:py-24 lg:py-20 pt-12 pb-8">
          <div className="max-w-3xl">
            <h1 className="2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-extrabold leading-tight tracking-tight">Where Craft Meets Clarity.</h1>
            <p className="mt-5 lg:text-lg md:text-base text-sm text-neutral-300">What we offer isn’t a service — it’s a system of storytelling built to perform and endure.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">Corporate Films</span>
              <span className="chip">Brand Films</span>
              <span className="chip">Product Video</span>
              <span className="chip">Explainer</span>
              <span className="chip">2D / 3D</span>
              <span className="chip">Reels / Sizzles</span>
              <span className="chip">UGC Ads</span>
              <span className="chip">Editing & Color (separate)</span>
            </div>
          </div>
        </div>
      </section>
      {Array.isArray(data) && data.map((item, i) => {
        const isTargeted = activeHash === '#' + item.cslug || 
                    ((item.cslug.toLowerCase().includes('animation') || item.cname.toLowerCase().includes('animation')) && activeHash === '#animation') ||
                    ((item.cslug.toLowerCase().includes('live') || item.cname.toLowerCase().includes('live')) && activeHash === '#live') ||
                    ((item.cslug.toLowerCase().includes('social') || item.cname.toLowerCase().includes('social')) && activeHash === '#social') ||
                    ((item.cslug.toLowerCase().includes('innovation') || item.cname.toLowerCase().includes('innovation')) && activeHash === '#innovation') ||
                    ((item.cslug.toLowerCase().includes('post') || item.cname.toLowerCase().includes('post')) && activeHash === '#post');
        return (
      <section id={item.cslug} className={`md:py-16 py-10 transition-colors duration-500 relative ${isTargeted ? 'bg-[#E50914]/10 border-y border-[#E50914]/30' : ((i > 0 && i % 2 != 0) ? 'bg-neutral-900/40 border-y border-neutral-800' : 'border-y border-transparent')}`} key={i}>
        {/* Invisible anchor for header links if slug differs */}
        {(item.cslug.toLowerCase().includes('animation') || item.cname.toLowerCase().includes('animation')) && <div id="animation" className="absolute -top-24"></div>}
        {(item.cslug.toLowerCase().includes('live') || item.cname.toLowerCase().includes('live')) && <div id="live" className="absolute -top-24"></div>}
        {(item.cslug.toLowerCase().includes('social') || item.cname.toLowerCase().includes('social')) && <div id="social" className="absolute -top-24"></div>}
        {(item.cslug.toLowerCase().includes('innovation') || item.cname.toLowerCase().includes('innovation')) && <div id="innovation" className="absolute -top-24"></div>}
        {(item.cslug.toLowerCase().includes('post') || item.cname.toLowerCase().includes('post')) && <div id="post" className="absolute -top-24"></div>}
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-4 mb-6 md:mb-8">
            <header>
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight">{item.cname}</h2>
              <p className="mt-3 text-neutral-400 max-w-2xl">{item.cdesc}</p>
            </header>
            <div className="flex items-center justify-start sm:w-auto w-full gap-3 lg:mt-8 whitespace-nowrap">
              <a className="bg-white text-black px-5 py-2 rounded-lg w-full text-center hover:opacity-90" href={`${BASE_URL}book-a-call`}>Get A Quote</a>
              <a className="border border-gray-700 px-5 py-2 rounded-lg w-full text-center" href={`${BASE_URL}video-production-portfolio`}>View Our Works</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.isArray(item.services) && item.services.map((item1, k) => (<details className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 sm:p-6 p-4" key={k}>
              <summary className="flex items-start justify-between cursor-pointer">
                <div>
                  <h3 className="md:text-xl text-lg font-semibold">{item1.stitle}</h3>
                  <p className="mt-1 text-neutral-400">{item1.sdesc}</p>
                </div>
                {(item1.moreinfo || item1.deliverables || item1.addons)?<svg className="caret mt-1 h-5 w-5 text-neutral-400 group-open:rotate-180" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5 5 8.5h14z"/></svg>:''}
              </summary>
              {(item1.moreinfo || item1.deliverables || item1.addons)?<div className={"mt-4 grid grid-cols-1 "+((item1.deliverables && item1.addons)?"md:grid-cols-2":"")+" gap-6 text-sm text-neutral-300"}>
                {item1.moreinfo?<div className="slist" dangerouslySetInnerHTML={{ __html: item1.moreinfo }}></div>:''}
                {item1.deliverables?<div>
                  <h4 className="font-semibold text-neutral-200">Deliverables</h4>
                  <div className="slist" dangerouslySetInnerHTML={{ __html: item1.deliverables }}></div>
                </div>:''}
                {item1.addons?<div>
                  <h4 className="font-semibold text-neutral-200">Add‑ons</h4>
                  <div className="slist" dangerouslySetInnerHTML={{ __html: item1.addons }}></div>
                </div>:''}
              </div>:''}
            </details>))}
          </div>
        </div>
      </section>
      );
    })}
    </>
  );
}
