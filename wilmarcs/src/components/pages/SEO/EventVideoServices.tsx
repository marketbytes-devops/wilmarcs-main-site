'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/EnquiryModal";

export default function EventVideoServices() {
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
            src="/images/seo/event-video/hero.png" 
            alt="Event Video Production Services in Bengaluru" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-1 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="reveal 2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight tracking-tight text-white mb-6 uppercase">
              Event Video Production Services in <span className="text-red-600">Bengaluru</span> — Wilmarcs Motion Pictures
            </h1>
            <p className="reveal mt-6 lg:text-xl md:text-lg text-base text-neutral-300 leading-relaxed max-w-4xl mx-auto font-medium">
              Every corporate event, conference, and brand activation tells a story but only if the right team is there to capture it. Wilmarcs Motion Pictures delivers professional event video production services in Bengaluru that preserve the energy, the moments, and the message of your event in a format your audience will watch long after the day is done.
            </p>
            <p className="reveal mt-4 md:text-lg text-base text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              From intimate leadership summits to large-scale multi-stage conferences, we bring the crew, the equipment, and the storytelling expertise to capture what matters most and turn it into content that works across your marketing calendar for months ahead.
            </p>
            <p className="reveal mt-4 text-white font-bold text-lg italic">
                Got an event coming up in Bengaluru? Let&apos;s lock in your production crew before your date is taken.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full bg-white text-black font-bold px-10 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Check Availability for Your Event 
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
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">What Is Event Video Production — and Why Every Event Need It?</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Event video production is the professional filming, editing, and delivery of video content captured at a live event covering everything from keynote speeches and panel discussions to crowd moments, brand activations, and behind-the-scenes footage.
              </p>
              <div className="bg-neutral-900/50 border-l-4 border-red-600 p-6 mb-6">
                <p className="text-white font-medium italic">
                    Quick definition: Event video production transforms a live experience into a lasting video asset — giving your organization a highlight reel, aftermovie, keynote recording, or social content pack that extends the reach and life of your event far beyond the day itself.
                </p>
              </div>
              <p className="text-neutral-400 text-base leading-relaxed mb-6">
                Without professional video coverage, your event exists only in the memories of people who attended. With it, every keynote, announcement, and energy-filled moment becomes shareable content for internal comms, social media, press coverage, and next year&apos;s promotion.
              </p>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Why Bengaluru events need a dedicated video production partner</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Bengaluru hosts some of India&apos;s most significant corporate events, technology summits, startup conferences, investor forums, product launches, and CSR programs. The city&apos;s event calendar is dense and competitive, and brands investing in these moments need a production partner who can operate professionally at scale without disrupting the event experience.
                </p>
                <p className="text-neutral-400 leading-relaxed mt-4">
                  We have covered events for brands including Google, Accel, WeWork, and Comic Con India understanding that every event type demands a different shooting strategy, crew configuration, and post-production approach.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] reveal group overflow-hidden rounded-3xl h-full w-full">
              <Image 
                src="/images/seo/event-video/event-coverage.png" 
                alt="Event Video Coverage Bengaluru" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="chip font-bold bg-red-600 border-none text-white mb-3">LIVE MOMENTS</div>
                <div className="text-2xl font-bold text-white">Captured with Precision,<br/>Edited for Impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Event Video Production Services We Offer in Bengaluru</h2>
            <p className="text-neutral-400 text-lg">We cover the full spectrum of corporate and brand event formats. Here is what we produce for clients across Bengaluru.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Corporate conferences and summits", desc: "Multi-camera coverage of keynotes, panel discussions, fireside chats, and breakout sessions with clean audio capture and professional editing" },
              { title: "Product launch events", desc: "Cinematic coverage of your launch moment the reveal, the audience reaction, the speaker edited into a launch film that lives beyond the event" },
              { title: "Event aftermovies and highlight reels", desc: "High-energy, music-driven aftermovies that capture the feeling of your event designed for social sharing and next-year promotion" },
              { title: "Hybrid and live-stream events", desc: "Professional multi-camera production for events with both in-person and remote audiences clean switching, graphics, and real-time delivery" },
              { title: "CSR and social impact events", desc: "Documentary-style coverage of community programs, foundation events, and sustainability initiatives designed for annual reports and donor communications" },
              { title: "Brand activations and experiential events", desc: "Creative coverage of pop-ups, brand experiences, and consumer events capturing both the activation itself and genuine audience reactions" },
              { title: "Investor and stakeholder events", desc: "Polished, discreet coverage of AGMs, investor days, and board events with broadcast-quality output suitable for formal distribution" }
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
            <p className="text-neutral-300 mb-8 text-lg">Tell us about your event and we&apos;ll put together a coverage plan and quote within 48 hours.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Request an Event Quote
            </button>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">What You Get — Event Video Deliverables From Wilmarcs</h2>
            <p className="text-neutral-400">We do not just hand you raw footage. Every event production project ends with a structured set of deliverables edited, branded, and ready to publish across your channels.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Full-Length Event Film", d: "A complete, edited record of your event keynotes, panels, and key moments structured as a professional documentary-style film." },
              { t: "Highlight Aftermovie", d: "A 2 to 4 minute high-energy cut of your event's best moments set to music and optimized for social media sharing and email campaigns." },
              { t: "Speaker and Session Clips", d: "Individual edited clips of each keynote or panel ready for speakers to share on LinkedIn and for your team to use in follow-up communications." },
              { t: "Social Media Cutdowns", d: "15 to 60 second clips optimized for Instagram Reels, LinkedIn, and YouTube Shorts with captions, lower-thirds, and platform-correct aspect ratios." },
              { t: "Testimonial Clips", d: "On-the-spot attendee and speaker interviews captured at the event edited into short, authentic testimonial videos for your brand use." },
              { t: "Raw Footage Archive", d: "Organized, labeled raw footage delivered digitally so your team has a complete archive for future edits, press use, and internal reference." }
            ].map((item, i) => (
              <div key={i} className="reveal p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
                <h3 className="text-xl font-bold text-white mb-4">{item.t}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.d}</p>
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
                src="/images/seo/event-video/event-post.png" 
                alt="Event Video Post Production" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Event Video Production Process in Bengaluru</h2>
              <ul className="space-y-6">
                {[
                  "Event brief and coverage plan — We design a custom camera and crew plan around your agenda and VIP moments",
                  "Venue recce and technical prep — We assess lighting, acoustics, power, and camera positioning in advance",
                  "Event day production — Multi-camera crew and professional audio capture coordinated by a dedicated director",
                  "Same-day social content — Optional fast-track delivery of social clips within hours of the event ending",
                  "Post-production and delivery — Full edit, grade, and mix delivered in all agreed formats within 5 to 10 days"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-1 text-[10px] font-black">
                      {i + 1}
                    </div>
                    <span className="text-neutral-300 text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-neutral-400 font-medium italic">
                Our event productions are designed to be invisible on the day — professional, discreet, and never disruptive to your attendees or speakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-12 reveal text-center">Frequently Asked Questions — Event Video Production in Bengaluru</h2>
          <div className="mx-auto space-y-4 max-w-4xl">
            {[
              { q: "What is event video production?", a: "Event video production is the professional filming and editing of a live event — capturing keynotes, panels, brand moments, and audience energy — and turning them into polished video content." },
              { q: "How much does event video production cost in Bengaluru?", a: "Prices typically start from ₹50,000 for a basic shoot and range up to ₹5,00,000+ for large multi-camera conference productions. We provide custom quotes based on duration, crew, and deliverables." },
              { q: "How many cameras do you use for corporate event coverage?", a: "A standard corporate conference typically uses 3 to 5 cameras. Large multi-stage events may require 8 or more cameras with a live switching setup." },
              { q: "How quickly can you deliver edited event footage after the event?", a: "Social media clips can be delivered same-day. A highlight aftermovie is typically delivered within 3 to 5 business days, and full packages within 7 to 10 days." },
              { q: "Can Wilmarcs cover events outside Bengaluru?", a: "Yes. While based in Bengaluru, we regularly travel for event productions across India (Mumbai, Delhi, Hyderabad, etc.) and international locations." }
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

      {/* Conclusion */}
      <section className="py-24 bg-[#0A0A0A] border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal max-w-4xl mx-auto">
                <p className="text-neutral-300 text-xl leading-relaxed mb-10">
                    Your event represents a significant investment of time, budget, and effort. Make sure it lives beyond the day itself. Wilmarcs delivers event video production services in Bengaluru that transform live moments into lasting content — cinematic, shareable, and built to work across every channel your brand owns. Let&apos;s capture your next event the way it deserves to be remembered.
                </p>
                <button 
                  onClick={() => setIsEnquiryOpen(true)}
                  className="rounded-full bg-red-600 text-white font-bold px-12 py-5 hover:bg-red-700 transition-all uppercase tracking-tighter"
                >
                  Book Your Event Coverage
                </button>
            </div>
        </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
