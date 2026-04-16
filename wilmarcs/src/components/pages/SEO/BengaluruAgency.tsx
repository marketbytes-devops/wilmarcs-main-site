'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/EnquiryModal";

export default function BengaluruAgency() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="lg:mt-[76px] mt-[64px] relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/seo/hero.png" 
            alt="Corporate Video Production Agency in Bengaluru" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-1 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="reveal 2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight tracking-tight text-white mb-6">
              Corporate Video Production Agency in <span className="text-red-600">Bengaluru</span> — Wilmarcs Motion Pictures
            </h1>
            <p className="reveal mt-6 lg:text-xl md:text-lg text-base text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              If you&apos;re looking for a trusted corporate video production agency in Bengaluru, you&apos;ve found us. At Wilmarcs Motion Pictures, we craft cinematic stories for brands, enterprises, and NGOs that want their message to move people, not just inform them.
            </p>
            <p className="reveal mt-4 md:text-lg text-base text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Founded in 2016 and headquartered in Bengaluru, we&apos;ve spent nearly a decade building films for some of India&apos;s most recognized names including Google, Samsung, CRED, Himalaya Wellness, and the Akshaya Patra Foundation.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full bg-white text-black font-bold px-8 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Book a Free Call 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">Why Bengaluru Brands Choose Wilmarcs for Video Production</h2>
              <p className="text-neutral-300 md:text-lg text-base leading-relaxed mb-6">
                Bengaluru is home to some of India&apos;s fastest-growing startups, established enterprises, and global tech companies. Standing out in this market takes more than a camera; it takes a production partner who understands brand strategy, audience psychology, and visual storytelling at a cinematic level.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed mb-8">
                We exist to marry speed with craft. Our modular production process allows us to shoot, edit, and deliver polished films in days without compromising on color, sound, or story quality.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Director-led production", desc: "Every film is guided by a creative director, not just a crew" },
                  { title: "End-to-end service", desc: "Pre-production, live-action shoot, animation, post-production, and delivery under one roof" },
                  { title: "Fast turnaround", desc: "Our pipeline is built for brands that move quickly" },
                  { title: "Proven client roster", desc: "Over 50+ brands across tech, FMCG, real estate, healthcare, and social impact" },
                  { title: "Transparent communication", desc: "Clear timelines, clean handoffs, and zero guesswork" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                    </div>
                    <div>
                      <strong className="text-white block">{item.title}</strong>
                      <span className="text-neutral-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square reveal h-full w-full">
              <Image 
                src="/images/seo/interview.png" 
                alt="Professional Interview Setup" 
                fill 
                className="object-cover rounded-3xl h-full w-full"
              />
              <div className="absolute inset-0 rounded-3xl border border-white/10 ring-1 ring-white/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Corporate Video Production Services We Offer in Bengaluru</h2>
            <p className="text-neutral-400">We offer a comprehensive suite of video production services tailored to the specific goals of corporate and marketing teams in Bengaluru and across India.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Brand and corporate films", desc: "Whether you need a leadership narrative, a company culture film, or an emotion-led brand launch video, our team brings your story to life with cinematic precision." },
              { title: "Product and explainer videos", desc: "We produce live-action and hybrid explainer videos for SaaS products, tech platforms, and consumer goods. Our videos simplify complex ideas and drive action." },
              { title: "CSR and documentary films", desc: "Wilmarcs is ranked among India's top four video production companies for CSR filmmaking. We've produced impact films for organizations like the Akshaya Patra Foundation." },
              { title: "2D animation and motion graphics", desc: "Our animation team creates character-driven 2D explainers, motion graphics, and logo animations that communicate clearly and stay memorable." },
              { title: "Event and aftermovie production", desc: "From large-scale corporate summits to brand activations, we capture the energy of live events and transform them into compelling aftermovies." }
            ].map((service, i) => (
              <div key={i} className="reveal group p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center reveal">
            <p className="text-neutral-300 mb-6">Not sure which format fits your brief? Our team will help you choose the right approach.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-8 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Talk to a Video Expert
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 reveal">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Industries We Serve Across Bengaluru and India</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Our experience spans 11 industries, giving us the contextual knowledge to produce videos that resonate within your specific market.</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Tech and SaaS", "Real estate", "Healthcare", "FMCG", "NGO and CSR", "Education", "FinTech"
            ].map((industry, i) => (
              <div key={i} className="reveal p-4 rounded-xl bg-neutral-900/30 border border-neutral-800 text-white text-sm font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video reveal overflow-hidden rounded-3xl">
              <Image 
                src="/images/seo/animation.png" 
                alt="Animation Studio" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="reveal">
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">Serving clients across Bengaluru&apos;s key business districts</h2>
              <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                Our studio and production team are based in Mahadevapura, Bengaluru making us easily accessible to clients in Whitefield, Koramangala, MG Road, Electronic City, Sarjapur Road, and Hebbal. 
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                We shoot across the city and beyond, with the flexibility to travel for national and international projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Our Video Production Process — From Brief to Delivery</h2>
            <p className="text-neutral-400">A great video starts long before the camera rolls. Here is how we work with clients at every stage:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery call", desc: "We understand your brand, audience, goal, and budget" },
              { step: "02", title: "Creative strategy", desc: "We develop a concept, script, and visual direction" },
              { step: "03", title: "Pre-production", desc: "Storyboarding, casting, location scouting, shoot planning" },
              { step: "04", title: "Production", desc: "Director-led shoot with professional crew and equipment" },
              { step: "05", title: "Post-production", desc: "Editing, color grading (DaVinci Resolve), sound design, and VFX" },
              { step: "06", title: "Review and delivery", desc: "Structured feedback rounds and final delivery" }
            ].map((step, i) => (
              <div key={i} className="reveal flex gap-6">
                <span className="text-3xl font-black text-white/10">{step.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center reveal p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800">
            <p className="text-neutral-300 mb-6 text-lg">Have a brief ready? Send it over and we&apos;ll come back with a proposal within 5 business days.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-12 reveal text-center">Frequently Asked Questions</h2>
          <div className="mx-auto space-y-4">
            {[
              { q: "How much does corporate video production cost in Bengaluru?", a: "The cost ranges from ₹80,000 for basic shoots to ₹5,00,000+ for premium films. Our projects typically start at $1,000 USD equivalent." },
              { q: "How long does it take to produce a corporate video in Bengaluru?", a: "Typically 2 to 4 weeks. Essential packages can deliver in 7-10 days, while complex projects take 4-6 weeks." },
              { q: "What types of companies does Wilmarcs work with in Bengaluru?", a: "We work with startups, SaaS companies, large enterprises, and NGOs including Google, Samsung, and Akshaya Patra." },
              { q: "Does Wilmarcs handle animation as well as live-action video production?", a: "Yes, we are a single-vendor solution for live-action, 2D/3D animation, and hybrid formats." },
              { q: "Can Wilmarcs produce videos for social media and performance marketing?", a: "Absolutely. We produce optimized Reels, Shorts, and ad creatives for LinkedIn, Instagram, and YouTube." }
            ].map((faq, i) => (
              <div key={i} className="reveal border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/20">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                  <motion.span 
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    className="text-neutral-500 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-neutral-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
