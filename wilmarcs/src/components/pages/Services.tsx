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
            <div className="flex items-center justify-start sm:w-auto w-full gap-3 lg:mt-8 whitespace-nowrap overflow-x-auto pb-4">
              <a className="bg-white text-black px-5 py-2 rounded-lg w-full text-center hover:opacity-90" href={`${BASE_URL}book-a-call`}>Get A Quote</a>
              <a className="border border-neutral-700 text-white px-5 py-2 rounded-lg w-full text-center hover:bg-neutral-800 transition-colors" href={`${BASE_URL}services/${item.cslug}`}>View Details</a>
              <a className="border border-neutral-700 text-neutral-400 px-5 py-2 rounded-lg w-full text-center hover:text-white transition-colors" href={`${BASE_URL}video-production-portfolio`}>Portfolio</a>
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
    <div className="absolute -z-[9999] opacity-0 pointer-events-none select-none overflow-hidden h-0" aria-hidden="true">
      <h1>Video Production Services in Bangalore, India</h1>
      <p>As a specialist provider of video production services in Bangalore, India, we help brands turn strategy into cinematic content that performs across corporate, CSR, product, and social channels.</p>
      <p>From live-action shoots to animation, performance creatives, and post-production, we operate as one integrated partner from brief to final delivery for teams across India and beyond.</p>

      <h2>End-to-End Video Production Services in Bangalore, India</h2>
      <h3>A Complete System, Not Just a Single Service</h3>
      <p>When you search for video production services in Bangalore, India, you are usually looking for more than a one-off film.</p>
      <p>You need a repeatable system that can support launches, campaigns, stakeholder communication, and always-on content.</p>
      <p>We design video ecosystems — corporate films, brand films, product videos, explainers, reels, and post-production — that work together across your website, social media, events, and internal channels.</p>
      <p>This means every project builds on the last, so your brand voice and visual identity stay consistent even as your requirements evolve.</p>

      <h3>Built for Corporate, CSR, Tech, and Media Teams</h3>
      <p>Our video production services are designed around the realities of corporate and marketing leadership, CSR and sustainability professionals, growth-stage tech and SaaS founders, and media and broadcast agencies.</p>
      <p>We understand the timelines, approval layers, and stakeholder expectations that come with each of these roles.</p>
      <p>Instead of just focusing on aesthetics, we connect each deliverable to a clear job: investor confidence, stakeholder trust, employee alignment, product adoption, or campaign performance.</p>
      <p>This practical approach helps your internal champions justify investment in video as a strategic asset, not a one-time expense.</p>

      <h2>Live-Action Production: Corporate, CSR, and Brand-Led Stories</h2>
      <h3>Corporate Films, Brand Films, and Leadership Narratives</h3>
      <p>Our live-action production services cover corporate narratives, brand films, documentaries, testimonials, event stories, and cause-driven cinema crafted for real impact.</p>
      <p>We work closely with leadership and marketing teams to shape boardroom-ready stories, launch films, culture pieces, and investor-focused communication.</p>
      <p>Whether you need a flagship corporate film, an employer branding video, or a high-stakes leadership interview, we manage scripting, direction, cinematography, and on-ground logistics.</p>
      <p>We plan around leadership schedules, sensitive locations, and security protocols so your team can stay focused while we manage the creative process.</p>

      <h3>CSR, Documentary Shorts, and Impact Storytelling</h3>
      <p>For CSR and sustainability professionals, we specialise in CSR and documentary shorts that translate on-ground impact into human-centred storytelling.</p>
      <p>We capture communities, partners, field teams, and beneficiaries with sensitivity, ensuring your films support both reporting and relationship-building.</p>
      <p>These impact films often serve multiple functions: they are used in ESG reports, donor presentations, global conferences, social media, and internal town halls.</p>
      <p>By structuring narratives around outcomes, lived experiences, and measurable change, we help you move beyond generic CSR content.</p>

      <h2>Animation & Motion: Explainers, Product Visualisation, and Technical Stories</h2>
      <h3>2D and 3D Explainer Videos for Tech and SaaS</h3>
      <p>Our animation and motion team creates 2D and 3D explainers, product visualisations, motion titles, and tech/medical animations with precision and clarity.</p>
      <p>This is especially powerful for growth-stage tech and SaaS companies that need to simplify complex workflows, APIs, and platforms for decision-makers and end users.</p>
      <p>We convert feature lists, architecture diagrams, and product decks into intuitive visual journeys that can live on your website, demo calls, onboarding flows, and investor decks.</p>
      <p>Because everything is built to your brand system, you can keep adding modules and episodes as your product evolves.</p>

      <h3>Motion Graphics, Titles, and Brand-Led Details</h3>
      <p>Video production services in Bangalore, India often stop at the main edit, but long-term performance depends on details like motion graphics, title design, and visual language.</p>
      <p>We design lower-thirds, HUDs, infographics, and logo stings that make your content instantly recognisable in feeds and presentations.</p>
      <p>For industries like healthcare, manufacturing, and fintech, we also create accurate technical visualisations that align with regulatory requirements and expert review.</p>
      <p>This ensures your films feel visually compelling while still being correct, compliant, and trusted by specialists.</p>

      <h2>Social & Performance Video for Always-On Campaigns</h2>
      <h3>Reels, Shorts, UGC Ads, and Sizzle Edits</h3>
      <p>Modern corporate communication demands social-first content.</p>
      <p>We produce reels, shorts, TikToks, creator-led ads, teasers, and sizzle films built to stop thumbs and start conversations.</p>
      <p>Our approach focuses on vertical-first, hook-led micro-stories designed for LinkedIn, Instagram, YouTube Shorts, and emerging platforms.</p>
      <p>We build systematic ad iteration packs and repurposing bundles so one shoot can generate a library of performance creatives for ongoing campaigns.</p>

      <h3>Partnering with Media and Broadcast Agencies</h3>
      <p>Media and broadcast agencies often need a trusted production partner who can move fast without compromising craft.</p>
      <p>We collaborate seamlessly with agency strategists, creatives, and media planners to deliver on-brand assets ready for broadcast, OTT, and digital placements.</p>
      <p>From short-form promos and bumpers to long-form editorial segments, we handle production and post while respecting your timelines, spec sheets, and brand guidelines.</p>
      <p>This makes it easier for agencies to scale content offerings without expanding internal production overhead.</p>

      <h2>Innovation and Post-Production: Future-Ready Video Infrastructure</h2>
      <h3>Virtual Production, AI-Driven Workflows, and Interactive Video</h3>
      <p>Our innovation-driven services include AI storyboards, virtual production previz, LiDAR scanning, real-time multicam, and shoppable or interactive video experiences.</p>
      <p>These capabilities allow you to test looks, validate tone, and plan complex shoots before cameras roll, reducing risk and increasing creative confidence.</p>
      <p>For brands exploring AR, interactive video, or immersive product experiences, we create AR-ready assets and clickable video journeys that support modern e-commerce and experiential marketing.</p>
      <p>This is particularly valuable for e-commerce, real estate, manufacturing, and high-involvement products where visual exploration drives conversion.</p>

      <h3>Dedicated Post-Production Studio and Versioning</h3>
      <p>Our post-production studio handles editorial, color grading, sound design, finishing, VFX, localization, accessibility, and AI-assisted post.</p>
      <p>We use calibrated workflows, DaVinci-based grading, and detailed QC to ensure your footage transforms into consistent, elevated cinema.</p>
      <p>Because we plan for versioning and platform packaging from the start, we deliver content in all required ratios, codecs, and spec sheets for web, broadcast, OTT, and social.</p>
      <p>We also manage data, backups, and archival so you can return to past projects and extend their life as your strategy evolves.</p>

      <h2>Why Choose Our Video Production Services in Bangalore, India</h2>
      <h3>Experience, Craft, and Clarity for Stakeholders</h3>
      <p>With years of experience serving corporate brands, CSR teams, tech/SaaS innovators, and media partners, we understand both the creative and operational sides of production.</p>
      <p>Our philosophy is simple: craft meets clarity — every frame is beautiful, and every decision is purposeful.</p>
      <p>We bring together directors, producers, cinematographers, editors, colorists, animators, and sound designers under one roof.</p>
      <p>This integrated model gives your stakeholders a single, accountable team instead of managing multiple fragmented vendors.</p>

      <h3>Locations, Markets, and Global Collaboration</h3>
      <p>While we are based in Bangalore, we operate across India and collaborate with teams in Australia and other global markets.</p>
      <p>This gives us the flexibility to manage multi-location shoots, distributed teams, and cross-border communication efficiently.</p>
      <p>Whether you are a corporate headquartered in Bangalore, a SaaS company serving global customers, or a media agency managing diverse accounts, we adapt our workflows to your context.</p>
      <p>Our goal is to feel like an extension of your internal team, not just an external supplier.</p>

      <h2>FAQ – Video Production Services in Bangalore, India</h2>
      <h3>1. What types of video production services do you offer?</h3>
      <p>We offer live-action production, animation and motion, social and performance content, innovation workflows, and a full post-production studio under one roof.</p>
      <p>This includes corporate films, brand films, product videos, explainers, reels, UGC ads, virtual production, and editing/color/sound.</p>

      <h3>2. How do you work with corporate and CSR teams?</h3>
      <p>We start with a discovery session to understand your brand, impact priorities, and stakeholder expectations.</p>
      <p>Then we design narratives and formats that support leadership communication, CSR reporting, employee engagement, and external campaigns.</p>

      <h3>3. Can you handle high-growth tech and SaaS video needs?</h3>
      <p>Yes, we regularly work with tech and SaaS companies that need explainers, product walkthroughs, customer stories, and performance creatives.</p>
      <p>Our process is built to keep pace with agile product releases and global go-to-market plans.</p>

      <h3>4. Do you collaborate with media and broadcast agencies?</h3>
      <p>We partner with media and broadcast agencies as a production and post-production backbone.</p>
      <p>Agencies retain strategic control while we handle shoots, edits, packaging, and versioning for different channels and specs.</p>

      <h3>5. How soon should we involve you in a project?</h3>
      <p>Ideally, you involve us as early as the planning or campaign strategy stage.</p>
      <p>This allows us to align creative concepts, production logistics, and deliverables with your media plan, deadlines, and budget from the start.</p>

      <h2>Ready to Plan Your Next Video Project?</h2>
      <h3>Speak with Our Video Production Specialists</h3>
      <p>If you are exploring video production services in Bangalore, India for an upcoming campaign, launch, or CSR initiative, our team can help you frame the right brief.</p>
      <p>We can review your current assets, map content gaps, and suggest formats that align with your goals and channels.</p>
      <p>You can book a call or contact us to discuss timelines, budgets, and potential locations in Bangalore or other cities.</p>
      <p>Together, we will structure a clear production roadmap that works for your stakeholders and internal approvals.</p>

      <h3>Request a Custom Quote and Service Plan</h3>
      <p>Every brand and project is different, so we build tailored proposals rather than generic packages.</p>
      <p>Share your goals — brand awareness, investor communication, recruitment, product onboarding, or CSR reporting — and we will suggest the right mix of live-action, animation, and social content.</p>
      <p>To get started, request a quote and we will outline scope, deliverables, and recommended phases so you can make informed decisions.</p>
      <p>Our team stays available throughout to answer questions and adjust the plan as your needs evolve.</p>
    </div>
    </>
  );
}
