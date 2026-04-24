'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/EnquiryModal";

export default function ProductLaunchVideo() {
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
            src="/images/seo/product-launch/hero.png" 
            alt="Product Demo & Launch Video Production in Bengaluru" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-1 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="reveal 2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight tracking-tight text-white mb-6 uppercase">
              Product Demo & Launch Video Production in <span className="text-red-600">Bengaluru</span> — Wilmarcs Motion Pictures
            </h1>
            <p className="reveal mt-6 lg:text-xl md:text-lg text-base text-neutral-300 leading-relaxed max-w-4xl mx-auto font-medium">
              Your product launch gets one chance to make a first impression. At Wilmarcs Motion Pictures, we specialize in product demo and launch video production in Bengaluru creating high-impact videos that introduce your product to the world with the clarity, energy, and visual quality it deserves.
            </p>
            <p className="reveal mt-4 md:text-lg text-base text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              From SaaS platforms going live to consumer hardware hitting the market, we have helped brands across Bengaluru and India turn their go-to-market moment into a story worth watching. Whether you need a 30-second teaser, a 90-second product demo, or a full launch film, we build it to perform.
            </p>
            <p className="reveal mt-4 text-white font-bold text-lg italic">
                Launching a product soon? Let&apos;s make sure your video is ready before your launch date.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full bg-white text-black font-bold px-10 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Book a Launch Consultation 
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
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">What Is a Product Demo and Launch Video and Why Does It Matter?</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                A product demo video shows how your product works, the features, the user experience, and the value it delivers. A product launch video introduces your product to the world building excitement, communicating the core promise, and driving your audience to take the next step.
              </p>
              <div className="bg-neutral-900/50 border-l-4 border-red-600 p-6 mb-6">
                <p className="text-white font-medium italic">
                    Quick definition: A product demo video is a focused walkthrough of your product&apos;s features and benefits. A product launch video is a cinematic introduction designed to generate excitement, awareness, and conversions at the moment of go-to-market.
                </p>
              </div>
              <p className="text-neutral-400 text-base leading-relaxed mb-6">
                Together, these two formats cover both ends of the buyer journey awareness and consideration. They are the most versatile video assets a product team can own, working equally well on landing pages, social media, sales decks, App Store listings, and paid advertising campaigns.
              </p>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">Why Bengaluru product teams prioritize launch videos</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Bengaluru is the launch capital of India&apos;s tech ecosystem. Every week, new apps, platforms, and physical products enter a crowded, competitive market. In this environment, a polished launch video is not optional; it is the difference between a launch that gets noticed and one that gets ignored.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-neutral-900/40 rounded-2xl border border-neutral-800">
                        <div className="text-3xl font-black text-white mb-1">80%</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 leading-tight">buyers influenced by video</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-900/40 rounded-2xl border border-neutral-800">
                        <div className="text-3xl font-black text-white mb-1">3x</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 leading-tight">higher engagement</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-900/40 rounded-2xl border border-neutral-800">
                        <div className="text-3xl font-black text-white mb-1">90s</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 leading-tight">ideal demo length</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] reveal group overflow-hidden rounded-3xl h-full w-full">
              <Image 
                src="/images/seo/product-launch/camera-setup.png" 
                alt="Product Video Production Studio" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="chip font-bold bg-red-600 border-none text-white mb-3">LAUNCH SPECIALISTS</div>
                <div className="text-2xl font-bold text-white">Built to Perform,<br/>Designed to Convert.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Product Demo & Launch Video Formats We Produce in Bengaluru</h2>
            <p className="text-neutral-400 text-lg">Every product is different. We offer a full range of video formats to match your product type, audience, and launch channel.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Product Launch Film", desc: "Cinematic reveal video for a major go-to-market moment. Designed for maximum impact on launch day — social, press, and homepage." },
              { title: "Software / App Demo Video", desc: "Clean screen-capture walkthrough with professional voiceover and motion graphics — showing exactly how your product works step by step." },
              { title: "Product Teaser / Hype Reel", desc: "A 15 to 30 second pre-launch teaser that builds anticipation before your product is available. Perfect for social media and email campaigns." },
              { title: "Feature Highlight Video", desc: "Focused videos that spotlight a single feature or update. Ideal for product newsletters, in-app notifications, and LinkedIn posts." },
              { title: "3D Product Animation", desc: "Photorealistic 3D renders for hardware, IoT devices, consumer electronics, and physical products that benefit from precise visual detail." },
              { title: "Live-Action Product Video", desc: "Real-world product demonstration in a lifestyle or professional setting. Best for consumer goods, FMCG, and D2C brands." }
            ].map((format, i) => (
              <div key={i} className="reveal group p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-red-600/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{format.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <p className="text-neutral-300 mb-8 text-lg">Not sure which format your launch needs? Tell us about your product and we&apos;ll recommend the right approach.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Get a Free Recommendation
            </button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Industries We Serve for Product Launch Video Production in Bengaluru</h2>
            <p className="text-neutral-400">Our product demo and launch video experience spans multiple industries giving us the contextual depth to produce videos that resonate with your specific market.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Tech and SaaS product launches", d: "We produce app demo videos, platform walkthroughs, and SaaS launch films for technology companies across Bengaluru. Our videos are built for the technical buyer — clear, credible, and free of marketing fluff." },
              { t: "Consumer electronics and hardware", d: "Physical products need to be seen in motion. We produce 3D product animations and live-action demo videos for hardware companies showing your product from every angle with cinematic precision." },
              { t: "E-commerce and D2C brands", d: "For e-commerce and direct-to-consumer brands, product videos directly impact conversion rates. We produce performance-ready product videos optimized for Amazon, Shopify, Meta ads, and YouTube." },
              { t: "FinTech and app launches", d: "Financial products require a balance of trust and clarity. Our FinTech demo videos explain complex products in simple, visual terms without compromising brand credibility." },
              { t: "MedTech and healthcare product videos", d: "Medical devices and healthcare platforms require precise, accurate demonstration. We produce MedTech product videos with the technical attention to detail that healthcare audiences expect." }
            ].map((industry, i) => (
              <div key={i} className="reveal p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
                <h3 className="text-xl font-bold text-white mb-4">{industry.t}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{industry.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Product Demo Video vs Product Launch Video What Is the Difference?</h2>
            <p className="text-neutral-400 text-lg">These two formats are often confused but they serve different purposes and different moments in the buyer journey. Here is a clear breakdown.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal p-10 rounded-3xl bg-neutral-900/20 border border-neutral-800">
                <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">Product Demo Video</h3>
                <ul className="space-y-4">
                    {[
                        "Shows how the product works",
                        "Focused on features and user experience",
                        "Used in mid-funnel — consideration stage",
                        "Lives on product pages, sales decks, help centres",
                        "Typically 90 seconds to 3 minutes",
                        "Tone: informative, clear, step-by-step"
                    ].map((item, k) => (
                        <li key={k} className="flex gap-3 text-neutral-300 items-start">
                            <svg className="w-5 h-5 text-red-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="reveal p-10 rounded-3xl bg-neutral-900/20 border border-neutral-800">
                <h3 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-6">Product Launch Video</h3>
                <ul className="space-y-4">
                    {[
                        "Introduces the product to the world",
                        "Focused on the problem, vision, and promise",
                        "Used at top of funnel — awareness stage",
                        "Lives on homepage, social media, press kits",
                        "Typically 30 to 90 seconds",
                        "Tone: cinematic, exciting, emotional"
                    ].map((item, k) => (
                        <li key={k} className="flex gap-3 text-neutral-300 items-start">
                            <svg className="w-5 h-5 text-red-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="mt-16 text-center reveal">
            <p className="text-neutral-400 italic">Most successful product launches use both a launch film to create awareness and a demo video to convert that awareness into action.</p>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video reveal overflow-hidden rounded-3xl">
              <Image 
                src="/images/seo/product-launch/editing-suite.png" 
                alt="Product Video Post Production" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Product Video Production Process in Bengaluru</h2>
              <ul className="space-y-6">
                {[
                  "Launch strategy session — We align on your launch date, distribution channels, and audience",
                  "Script and creative direction — Narrative development and visual tone established",
                  "Storyboard and pre-production — Detailed planning including shot lists and 3D asset prep",
                  "Production — Director-led shoot or high-end screen recording/3D animation",
                  "Post-production — Editing, color grading, motion graphics, and professional sound mix",
                  "Delivery and platform versioning — Master file plus optimized versions for all social channels"
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
                Standard delivery: 3 to 4 weeks. Fast-track delivery: 10 to 14 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-12 reveal text-center">Frequently Asked Questions — Product Demo & Launch Video Production in Bengaluru</h2>
          <div className="mx-auto space-y-4 max-w-4xl">
            {[
              { q: "What is a product launch video?", a: "A product launch video is a short, cinematic video that introduces your product to the market — communicating the problem it solves, what makes it different, and why people should care. It is typically 30 to 90 seconds and designed for maximum impact on launch day." },
              { q: "How much does a product demo video cost in Bengaluru?", a: "A basic product demo video starts from ₹80,000 for a screen-capture walkthrough. A premium live-action or 3D animated product launch video can range from ₹2,00,000 to ₹8,00,000 depending on complexity." },
              { q: "How long should a product demo video be?", a: "60 to 90 seconds is the ideal length for a product demo video on a landing page. For detailed software walkthroughs, 2 to 3 minutes is acceptable." },
              { q: "Can Wilmarcs deliver a product video in time for our launch date?", a: "Yes. We offer fast-track production that delivers in 10 to 14 business days, and we have delivered launch-ready videos in as little as 7 days for teams with hard deadlines." },
              { q: "Do you create cutdown versions for different social media platforms?", a: "Yes — always. Every project includes platform-specific versions: 16:9 for YouTube, 9:16 for Instagram Reels/TikTok, and 1:1 for LinkedIn feeds." }
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
      <section className="py-24 bg-black border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal max-w-4xl mx-auto">
                <p className="text-neutral-300 text-xl leading-relaxed mb-10">
                    Your product has earned its launch moment. Make it count with a video that captures its value, communicates its promise, and moves your audience to act. Wilmarcs is your partner for product demo and launch video production in Bengaluru — bringing cinematic quality, strategic thinking, and launch-ready speed to every project. Let&apos;s build your launch film together.
                </p>
                <button 
                  onClick={() => setIsEnquiryOpen(true)}
                  className="rounded-full bg-red-600 text-white font-bold px-12 py-5 hover:bg-red-700 transition-all uppercase tracking-tighter"
                >
                  Plan Your Launch Video
                </button>
            </div>
        </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
