'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/EnquiryModal";

export default function CorporateFilmCompany() {
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
      <section className="lg:mt-[76px] mt-[64px] relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/seo/corporate-film/hero.png" 
            alt="Corporate Film Production Company in Bengaluru" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-1 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="reveal 2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight tracking-tight text-white mb-6 uppercase">
              Corporate Film Production Company in <span className="text-red-600">Bengaluru</span> — Wilmarcs Motion Pictures
            </h1>
            <p className="reveal mt-6 lg:text-xl md:text-lg text-base text-neutral-300 leading-relaxed max-w-4xl mx-auto font-medium">
              When your brand needs to communicate with clarity and conviction, a well-crafted corporate film makes all the difference. As a leading corporate film production company in Bengaluru, Wilmarcs Motion Pictures brings together cinematic storytelling, strategic thinking, and fast delivery — so your message lands exactly the way you intend.
            </p>
            <p className="reveal mt-4 md:text-lg text-base text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              Since 2016, we have partnered with enterprises, growth-stage startups, NGOs, and global brands from our base in Bengaluru. From boardroom-ready leadership films to large-scale documentary productions, we handle every frame with discipline, creativity, and purpose.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full bg-white text-black font-bold px-10 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Book a Discovery Call 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">What Is a Corporate Film — and Why Does It Matter?</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                A corporate film is a professionally produced video that represents your organization — its values, culture, leadership, milestones, or products — to a specific audience. Unlike traditional advertising, corporate films are built for depth, not just reach.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed mb-6">
                Corporate films are used for investor relations, leadership communications, internal alignment, recruitment, CSR reporting, client acquisition, and brand-building — each requiring a different creative approach and tone.
              </p>
              <p className="text-neutral-300 font-medium">
                Done well, a corporate film builds trust in minutes. It gives audiences a reason to believe in your organization beyond what any brochure or pitch deck can achieve.
              </p>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Why Bengaluru companies are investing in corporate film production</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Bengaluru&apos;s business landscape is evolving rapidly. With a dense concentration of tech companies, unicorn startups, and MNC campuses, corporate films give Bengaluru brands a powerful edge — communicating sophistication, credibility, and human connection simultaneously.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] reveal group overflow-hidden rounded-3xl h-full w-full">
              <Image 
                src="/images/seo/corporate-film/interview.png" 
                alt="Corporate Filming Setup" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="chip font-bold bg-red-600 border-none text-white mb-3">CINEMATIC CRAFT</div>
                <div className="text-2xl font-bold text-white">Built for Depth,<br/>Not Just Reach.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Corporate Film Production Services We Offer in Bengaluru</h2>
            <p className="text-neutral-400 text-lg">As a full-service corporate film production company, we cover every format that modern businesses need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Leadership and executive films", desc: "Thoughtful, visually polished films that capture your leadership's voice — for annual reports, town halls, investor communications, and external brand positioning." },
              { title: "Company culture and employer brand films", desc: "Employer brand films show prospective employees what it genuinely feels like to work at your company — reducing hiring friction and attracting the right talent." },
              { title: "Internal communication and training videos", desc: "Clear, well-paced onboarding films and internal briefing content that your teams will actually watch and engage with." },
              { title: "Investor and board presentation films", desc: "Translate data, growth narratives, and company vision into compelling video presentations for board meetings and fundraising rounds." },
              { title: "CSR and impact films", desc: "Our CSR work spans community programs and sustainability initiatives. Proud to be ranked among India's top four in CSR filmmaking." }
            ].map((service, i) => (
              <div key={i} className="reveal group p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-red-600/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Speak with Our Creative Team
            </button>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Who We Work With — Target Audiences We Serve</h2>
            <p className="text-neutral-400">Our corporate film clients in Bengaluru fall into four broad categories, each with distinct needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Leadership", d: "CMOs, VPs of Marketing, and Brand Heads needing high-quality corporate representation." },
              { t: "CSR & Sustainability", d: "Managers documenting community impact and sustainability initiatives for stakeholders." },
              { t: "Tech & SaaS", d: "Growth-stage tech companies needing fast-paced production to match their scaling speed." },
              { t: "Media Agencies", d: "Partnering as a trusted production vendor for specialist requirements and overflow." }
            ].map((target, i) => (
              <div key={i} className="reveal p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center">
                <h3 className="text-lg font-bold text-white mb-3">{target.t}</h3>
                <p className="text-neutral-400 text-sm">{target.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video reveal overflow-hidden rounded-3xl">
              <Image 
                src="/images/seo/corporate-film/color.png" 
                alt="Post Production Suite" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Corporate Film Production Process</h2>
              <ul className="space-y-6">
                {[
                  "Brief and discovery — Detailed conversation about goals & distribution plan",
                  "Concept and scripting — Creative treatment, script, and visual direction",
                  "Pre-production planning — Storyboards, shot lists, casting, and logistics",
                  "Production — Director-led shoot with professional crew and high-end equipment",
                  "Post-production — Editing, color grading (DaVinci Resolve), and sound design",
                  "Review and delivery — Structured feedback and final delivery in broadcast-ready formats"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-1 text-[10px] font-black">
                      {i + 1}
                    </div>
                    <span className="text-neutral-300 text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Corridors */}
      <section className="py-20 bg-black border-y border-neutral-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-neutral-500">Business Corridors We Serve</h3>
            <p className="text-neutral-300 text-lg mb-10 leading-relaxed">
              Based in Mahadevapura, we work across Bengaluru — from Whitefield and Electronic City to Koramangala, Indiranagar, MG Road, Hebbal, and the Outer Ring Road tech corridor.
            </p>
             <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-12 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto uppercase tracking-tighter"
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-12 reveal text-center">Frequently Asked Questions</h2>
          <div className="mx-auto space-y-4">
            {[
              { q: "What is the difference between a corporate film and a corporate video?", a: "A 'corporate film' typically implies a higher production value — cinematic framing, professional sound design, color grading, and a narrative structure. At Wilmarcs, we approach every project with a film-first mindset." },
              { q: "How much does a corporate film cost in Bengaluru?", a: "Typical prices range from ₹1,00,000 for a single-day basic shoot to ₹10,00,000+ for premium productions. Our projects start from $1,000 USD equivalent." },
              { q: "How long does it take to produce a corporate film in Bengaluru?", a: "Standard films take 3 to 5 weeks. Short turnaround projects like aftermovies can be delivered in 7 to 10 business days." },
              { q: "Can Wilmarcs produce corporate films outside Bengaluru?", a: "Yes. While based in Bengaluru, we travel across India (Mumbai, Delhi, etc.) and internationally with offices in Dubai and Sydney." },
              { q: "Do you provide scriptwriting and creative development?", a: "Absolutely. We handle everything from concept ideation and scripting to visual direction. You don't need a finished script to start." }
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
