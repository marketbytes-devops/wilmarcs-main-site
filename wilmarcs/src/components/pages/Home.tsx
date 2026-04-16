'use client';
import Image from "next/image";
import { useState, useRef } from "react";
import EnquiryModal from "@/components/EnquiryModal";

import { Pagination, Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BASE_URL } from "@/lib/constants";
type ServiceCategory = {
  cname: string;
  cdesc: string;
  cslug: string;
  cimg: string;
};
type Portfolio = {
  plink: string;
  pimg: string;
  ptitle: string;
  phtitle: string;
  phsubtitle: string;
};
export default function Home({ service_category, portfolio }: { service_category: ServiceCategory[], portfolio: Portfolio[] }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const bannerRef = useRef<HTMLVideoElement>(null);
  const bannerMobRef = useRef<HTMLVideoElement>(null);
  const serviceRef = useRef<HTMLVideoElement>(null);
  const globalRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      let split: SplitText, tl: gsap.core.Timeline;
      const createSplit = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        split && split.revert();
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        tl && tl.revert();
        split = new SplitText(".about-wrapper p", { type: "words, chars", wordsClass: "word", charsClass: "char" });
        gsap.set(".word", { display: "inline-block", whiteSpace: "nowrap" });
        tl = gsap.timeline({
              scrollTrigger: {
                trigger: "#about-us",
                start: "top top",
                end: "+=180%",
                pin: true,
                scrub: 0.75
              } 
            }).set(
              split.chars,
              {
                color: "#ffffff",
                stagger: 0.1 
              },
            0.1);
      };
      createSplit();
      const debouncer = gsap.delayedCall(0.2, createSplit).pause();
      window.addEventListener("resize", () => debouncer.restart(true));

      let splitService: SplitText, tls: gsap.core.Timeline;
      const createSplitService = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        splitService && splitService.revert();
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        tls && tls.revert();
        splitService = new SplitText(".service-wrapper p", { type: "words, chars", wordsClass: "word1", charsClass: "char1" });
        gsap.set(".word1", { display: "inline-block", whiteSpace: "nowrap" });
        tls = gsap.timeline({
              scrollTrigger: {
                trigger: "#services",
                start: "top+=10% top",
                end: "+=150%",
                pin: true,
                scrub: 0.75
              } 
            }).set(
              splitService.chars,
              {
                color: "#ffffff",
                stagger: 0.1 
              },
            0.1);
      };
      createSplitService();
      const debouncerService = gsap.delayedCall(0.2, createSplit).pause();
      window.addEventListener("resize", () => debouncerService.restart(true));
    });
    mm.add("(max-width: 1024px)", () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    });
     return () => mm.revert();
   }, []);
  return (
    <>
      <section className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1/3 before:bg-gradient-to-t before:from-black before:to-transparent before:z-1 group">
        <video ref={bannerRef} poster={`${process.env.NEXT_PUBLIC_API_URL}assets/web/banner.jpg`} autoPlay muted loop playsInline className="sm:block hidden w-full object-cover">
          <source src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/banner.mp4`} type="video/mp4" />
        </video>
        <video ref={bannerMobRef} poster={`${process.env.NEXT_PUBLIC_API_URL}assets/web/banner-mob.jpg`} autoPlay muted loop playsInline className="sm:hidden block w-full object-cover">
          <source src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/banner-mob.mp4`} type="video/mp4" />
        </video>

        <div className="absolute left-1/2 lg:bottom-20 sm:bottom-10 bottom-0 -translate-x-1/2 z-2 text-center grid items-center justify-center">
          <button onClick={() => setIsEnquiryOpen(true)} className="cursor-pointer md:px-8 px-6 py-2 lg:text-xl md:text-lg text-base lg:mb-9 sm:mb-6 mb-4 ease-linear duration-200 hover:bg-white hover:text-black inline-flex items-center gap-2 sm:border-2 border border-white md:rounded-2xl rounded-xl">Enquiry</button>
          <a href="#about-us" className="grid -space-y-4 text-white text-center justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 opacity-50" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 opacity-75" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
          </a>
        </div>
      </section>
      <section className="lg:py-32 md:py-24 sm:py-20 py-16 bg-black" id="about-us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 about-wrapper lg:pb-20 md:pb-16 pb-0">
          <p className="lg:text-[#BDBDBD] text-white xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[18px] leading-relaxed">
            Wilmarcs crafts cinematic work built for influence. Ranked among India’s Top 4 in CSR filmmaking and rising as one of the country’s fastest-growing production houses, we deliver visuals that shape perception and elevate brands.
          </p>
        </div>
        <div className="lg:pt-24 md:pt-20 pt-16 lg:pb-24 md:pb-20 sm:pb-16 pb-0 relative bg-black z-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:via-transparent before:to-black before:z-1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold text-white">Latest films.</h2>
              <a href={`${BASE_URL}video-production-portfolio`} className="text-white flex items-center gap-1 md:text-lg sm:text-base text-sm">View all <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></a>
            </div>
          </div>
          {Array.isArray(portfolio)?<Swiper className="filmslider" 
            modules={[Pagination, Autoplay]} 
            pagination={{ clickable: true }} 
            spaceBetween={0} 
            breakpoints={{
              320: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.7 },
            }}
            centeredSlides={true} 
            loop={true} 
            initialSlide={2} 
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: false, }}>
            {portfolio.map((item, i) => (<SwiperSlide className="max-w-6xl" key={i}>
              <LightGallery plugins={[lgVideo]} download={false} youTubePlayerParams={{ modestbranding: 1, showinfo: 0, rel: 0, mute: 0, autoplay: 1 }}>
                <a href={item.plink} className="relative rounded-2xl overflow-hidden block">
                  <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.pimg} alt={item.ptitle} className="block w-full" width={1152} height={760} priority />
                  <h3 className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl sm::text-2xl text-xl absolute left-0 w-full top-1/2 -translate-y-1/2 text-center uppercase grid items-center justify-center font-trakya leading-snug">
                    <small className="2xl:text-5xl xl:text-3xl md:text-2xl sm:text-xl text-lg">{item.phtitle}</small>
                    {item.phsubtitle}
                  </h3>
                </a>
              </LightGallery>
            </SwiperSlide>))}
          </Swiper>:''}
        </div>
      </section>
      <section className="lg:pb-24 md:pb-20 pb-16 bg-black" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center">Services</h2>
          <div className="relative group">
            <video ref={serviceRef} poster={`${process.env.NEXT_PUBLIC_API_URL}assets/web/services.jpg`} autoPlay muted loop playsInline className="block w-full object-cover">
              <source src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/services-banner.mp4`} type="video/mp4" />
            </video>
          </div>

          <div className="lg:pb-24 md:pb-20 sm:pb-16 pb-12 max-w-3xl mx-auto text-center service-wrapper">
            <p className="lg:text-[#b5b5b5] text-white md:text-xl sm:text-lg text-base leading-relaxed">
              From timeless stories to modern brand narratives, Wilmarcs transforms ideas into cinematic experiences built to connect and endure. As one of India’s most trusted production companies, we deliver corporate films, commercials, and brand stories that blend strategy with storytelling to elevate brands and shape culture.
            </p>
          </div>
        </div>
        {Array.isArray(service_category)?<Swiper className="serviceslider"
          modules={[Navigation]}
          spaceBetween={0} 
          navigation={{ nextEl: '.service-next-custom', prevEl: '.service-prev-custom' }}
          loop={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false, }}>
          {service_category.map((item, i) => (<SwiperSlide key={i} className="p-5" id={item.cslug}>
            <a href={`${BASE_URL}video-production-services#${item.cslug}`} className="bg-[#111113] border border-gray-800 hover:border-gray-500 rounded-xl p-5 block hover:scale-105 transition-all duration-300 ease-in-out text-left">
              <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.cimg} alt={item.cslug} className="block w-full rounded-xl overflow-hidden object-cover h-[350px]" width={380} height={450} priority />
              <h3 className="md:text-lg text-base font-semibold mt-5 mb-2">{item.cname}</h3>
              <p className="text-gray-400 text-sm min-h-16">{item.cdesc}</p>
            </a>
          </SwiperSlide>))}
        </Swiper>:''}
        <div className="container md:mt-12 sm:mt-6 pb-2 mt-0 flex items-center justify-end sm:gap-4 gap-2 mx-auto px-4 sm:px-6 lg:px-8">
          <button className="service-prev-custom cursor-pointer md:w-12 md:h-12 md:min-w-12 w-8 h-8 min-w-8 ease-in-out duration-300 transition-all bg-[#343436] text-white opacity-60 hover:opacity-100 rounded-full inline-flex items-center justify-center">
            <svg className="md:w-4 md:h-4 w-3 h-3" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1523 0.845215H15.9857L0.88151 15.1369L15.9857 29.491H23.1523L8.06901 15.1369L23.1523 0.845215Z" fill="currentColor"/></svg>
          </button>
          <button className="service-next-custom cursor-pointer md:w-12 md:h-12 md:min-w-12 w-8 h-8 min-w-8 ease-in-out duration-300 transition-all bg-[#343436] text-white opacity-60 hover:opacity-100 rounded-full inline-flex items-center justify-center">
            <svg className="md:w-4 md:h-4 w-3 h-3" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.882812 0.845215H8.04948L23.1536 15.1369L8.04948 29.491H0.882812L15.9661 15.1369L0.882812 0.845215Z" fill="currentColor"/></svg>
          </button>
        </div>
      </section>
      <section className="lg:pt-24 md:pt-20 sm:pt-16 pt-0 md:pb-20 sm:pb-16 pb-10 bg-[#1D1D1F] relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1/2 before:bg-gradient-to-b before:from-black before:to-transparent before:z-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white md:mb-12 sm:mb-10 mb-8">Clients</h2>
          <Swiper className="clientslider text-center" modules={[Scrollbar]} scrollbar={{ draggable: true }} spaceBetween={20} slidesPerView={1}>
            <SwiperSlide>
              <div className="bg-black lg:p-14 md:p-8 sm:p-6 p-4 md:rounded-4xl sm:rounded-2xl rounded-xl grid lg:grid-cols-4 grid-cols-3">
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/accel.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/accel.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/akshaya-patra.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/akshaya-patra.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/audi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/audi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/brigade.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/brigade.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/cafe-coffee-day.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/cafe-coffee-day.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/comic-con.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/comic-con.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/cred.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/cred.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/echoes-of-earth.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/echoes-of-earth.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/embassy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/embassy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/google.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/google.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/hilton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/hilton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/himalaya.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/himalaya.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black lg:p-14 md:p-8 sm:p-6 p-4 md:rounded-4xl sm:rounded-2xl rounded-xl grid lg:grid-cols-4 grid-cols-3">
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/malabar.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/malabar.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/parc.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/parc.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/paytm.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/paytm.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/xiaomi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/xiaomi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/samsung.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/samsung.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/selco.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/selco.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/sheraton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/sheraton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/sleepy-head.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/sleepy-head.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/tata.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/tata.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/swiggy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/swiggy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/triumph.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/triumph.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
                <div className="md:py-8 sm:py-6 py-4 md:px-12 sm:px-10 px-8 text-center group relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/vanhuessan.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/vanhuessan.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="md:py-20 sm:py-16 py-10 bg-[#1D1D1F] relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1/2 before:bg-gradient-to-t before:from-black before:to-transparent before:z-1">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white md:mb-12 sm:mb-8 mb-4 text-center">What Our<span className="block">Clients Say</span></h2>
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto">
          <Swiper className="testimonialslider w-full"
            modules={[Navigation, Autoplay]}
            spaceBetween={50} 
            slidesPerView={1} 
            navigation={{ nextEl: '.testimonial-next-custom', prevEl: '.testimonial-prev-custom' }} 
            loop={true} 
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false, }}>
            <SwiperSlide className="text-center text-white">
              <ul className="flex items-center justify-center">
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
              </ul>
              <p className="sm:py-7 py-5 lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed">“Despite heavy rains during our Mangrove project, the Wilmarcs crew stayed calm and prepared. Permissions, safety and backups were all in place. The final film looked beautiful and landed on schedule. True professionalism.”</p>
              <h6 className="font-medium text-sm"><span className="text-[#b5b5b5] font-normal">Jacob,</span> Himalaya Wellness Company</h6>
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/himalaya.png`} alt="himalaya" className="block md:h-[60px] h-[40px] object-contain mt-4 mx-auto" width={120} height={60} priority />
            </SwiperSlide>
            <SwiperSlide className="text-center text-white">
              <ul className="flex items-center justify-center">
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
              </ul>
              <p className="sm:py-7 py-5 lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed">“We've worked with many vendors; Wilmarcs stands apart. The attention to detail and speed of delivery were exceptional. The CSR films we received had cinematic quality with corporate precision—some of the best we've produced.”</p>
              <h6 className="font-medium text-sm"><span className="text-[#b5b5b5] font-normal">Ranjith,</span> Tesco</h6>
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/tesco.png`} alt="tesco" className="block md:h-[60px] h-[40px] object-contain mt-4 mx-auto" width={120} height={60} priority />
            </SwiperSlide>
            <SwiperSlide className="text-center text-white">
              <ul className="flex items-center justify-center">
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
                <li><svg className="sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 260 245"><path d="m56,237 74-228 74,228L10,96h240"/></svg></li>
              </ul>
              <p className="sm:py-7 py-5 lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed">“Our nationwide documentary with Wilmarcs spanned deserts, rivers and mountains. Every location was meticulously planned, every story captured with care. The final film was broadcast widely, presented at global forums, and produced for the UN's 4 Billion Meals milestone. An extraordinary experience.”</p>
              <h6 className="font-medium text-sm"><span className="text-[#b5b5b5] font-normal">Abhijth,</span> Akshaya Patra Foundation</h6>
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/akshaya-patra.png`} alt="akshaya-patra" className="block md:h-[60px] h-[40px] object-contain mt-4 mx-auto" width={120} height={60} priority />
            </SwiperSlide>
          </Swiper>
          <div className="container lg:mt-16 md:mt-12 sm:mt-8 mt-6 flex items-center justify-center sm:gap-4 gap-2 mx-auto relative z-1">
            <button className="testimonial-prev-custom cursor-pointer md:w-12 md:h-12 md:min-w-12 w-8 h-8 min-w-8 ease-in-out duration-300 transition-all bg-[#343436] text-white opacity-60 hover:opacity-100 rounded-full inline-flex items-center justify-center">
              <svg className="md:w-4 md:h-4 w-3 h-3" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1523 0.845215H15.9857L0.88151 15.1369L15.9857 29.491H23.1523L8.06901 15.1369L23.1523 0.845215Z" fill="currentColor"/></svg>
            </button>
            <button className="testimonial-next-custom cursor-pointer md:w-12 md:h-12 md:min-w-12 w-8 h-8 min-w-8 ease-in-out duration-300 transition-all bg-[#343436] text-white opacity-60 hover:opacity-100 rounded-full inline-flex items-center justify-center">
              <svg className="md:w-4 md:h-4 w-3 h-3" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.882812 0.845215H8.04948L23.1536 15.1369L8.04948 29.491H0.882812L15.9661 15.1369L0.882812 0.845215Z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>
      </section>
      <section className="md:pt-20 sm:pt-16 pt-10 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20">
            <div className="lg:pb-12">
              <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-white md:mb-10 sm:mb-6 mb-4">Our Global Presence</h2>
              <p className="text-[#b5b5b5] lg:text-xl md:text-lg sm:text-base text-sm leading-relaxed md:mb-16 sm:mb-12 mb-8">Wilmarcs Motion Pictures operates across <strong className="text-white">India, Australia, and Dubai</strong>, bringing world-class video production and storytelling to brands worldwide. With a strong foothold in these key regions, we collaborate with businesses across diverse industries, delivering high-quality content that resonates with global audiences.</p>
              <button onClick={() => setIsEnquiryOpen(true)} className="cursor-pointer sm:px-4 px-3 py-2 lg:text-xl md:text-lg text-base ease-linear duration-200 hover:bg-white hover:text-black inline-flex items-center sm:gap-4 gap-2 sm:border-2 border border-white md:rounded-2xl rounded-xl">Request a quote <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></button>
            </div>
            <div className="pb-12 relative group">
              <video ref={globalRef} poster={`${process.env.NEXT_PUBLIC_API_URL}assets/web/globe.jpg`} autoPlay muted loop playsInline className="block lg:w-3/4 w-full object-cover mx-auto">
                <source src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/earth.mp4`} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      </section>
      <div className="absolute -z-[9999] opacity-0 pointer-events-none select-none overflow-hidden h-0" aria-hidden="true">
        <h1>Corporate Video Production Company in Bangalore, India</h1>
        <p>As a leading corporate video production company in Bangalore, India, we help brands turn complex ideas into clear, cinematic stories that win trust, inspire action, and drive measurable business outcomes.</p>
        <p>With teams across India, Australia, and Dubai, we partner with corporate and marketing leaders, CSR heads, and growth-stage tech companies to produce films that are built for both boardrooms and digital platforms.</p>

        <h2>Why Brands Choose Our Corporate Video Production in Bangalore</h2>
        <h3>Strategic Storytelling for Corporate and CSR Communication</h3>
        <p>We understand that every corporate film must do more than look good on screen—it must support a clear business or impact objective.</p>
        <p>That is why we start every project by aligning your brand story, communication goals, and audience insights before a single frame is shot.</p>
        <p>We work closely with corporate and marketing leadership to shape narratives for brand films, company overviews, product launches, investor presentations, and internal communications.</p>
        <p>For CSR and sustainability teams, we translate impact reports, ESG outcomes, and on-ground initiatives into powerful visual stories that resonate with donors, communities, and global stakeholders.</p>

        <h3>Built for Growth-Stage Tech, SaaS, and Innovation-Driven Brands</h3>
        <p>Growth-stage tech and SaaS companies often need video content that can explain complex products in seconds while still feeling premium and human.</p>
        <p>Our team specializes in combining product demos, platform walkthroughs, customer success stories, and founder narratives into cohesive content libraries that support sales, marketing, and fundraising.</p>
        <p>Whether you are launching a new feature, entering a new market, or preparing for a funding round, we craft videos that speak the language of both decision-makers and end users.</p>
        <p>From explainer videos and onboarding content to testimonial films and performance creatives, we structure video ecosystems that scale with your marketing funnel.</p>

        <h2>Corporate Video Production Services We Offer</h2>
        <h3>End-to-End Live-Action Corporate Films</h3>
        <p>As a full-service corporate video production company in Bangalore, India, we handle the complete lifecycle of your film—from idea to final delivery.</p>
        <p>Our live-action production services cover brand films, corporate profiles, factory and facility walkthroughs, leadership interviews, event coverage, testimonials, documentaries, and CSR storytelling.</p>
        <p>We manage scripting, storyboarding, casting, location scouting, production design, direction, cinematography, and on-ground crew coordination.</p>
        <p>On set, we focus on efficiency and professionalism so your leadership and teams can stay focused on their work while we take care of the creative details.</p>

        <h3>Animation, Motion Graphics, and Product Explainer videos</h3>
        <p>For technology, SaaS, healthcare, fintech, and manufacturing brands, animation and motion design are often the most effective way to simplify complex systems.</p>
        <p>We create 2D and 3D explainer videos, UI/UX walkthroughs, motion titles, infographics, and product visualizations tailored to your brand language and industry.</p>
        <p>Our animation team collaborates with your product and marketing stakeholders to convert feature lists and technical specs into intuitive visual journeys.</p>
        <p>This ensures your audience understands not just what your product does, but why it matters in their daily workflows and strategic decisions.</p>

        <h3>Social-First and Performance-Driven Video Content</h3>
        <p>Modern corporate and CSR communication does not end with a single master film.</p>
        <p>We repurpose and adapt your content into social-first formats—reels, shorts, teasers, and performance creatives designed for platforms like LinkedIn, Instagram, YouTube, and programmatic campaigns.</p>
        <p>By planning for multi-channel usage from day one, we help you maximize every shoot day and asset.</p>
        <p>You receive a mix of hero films, cutdowns, vertical edits, and silent-friendly versions optimized for both organic reach and paid performance.</p>

        <h2>Our Process: From Brief to Broadcast</h2>
        <h3>Discovery, Strategy, and Concept Development</h3>
        <p>Every successful corporate film starts with clarity.</p>
        <p>In our discovery phase, we align with your leadership, marketing, CSR, or product teams to define objectives, audience personas, key messages, and distribution channels.</p>
        <p>We then develop creative concepts, narratives, and visual treatments that match your brand voice and industry context.</p>
        <p>For CSR projects, we also work with your on-ground partners and NGOs to ensure the storytelling respects communities, accurately represents impact, and stays aligned with your reporting frameworks.</p>

        <h3>Production Excellence and On-Ground Precision</h3>
        <p>Once the concept is approved, our production team plans every detail—schedules, permissions, safety, crew, equipment, and logistics across locations.</p>
        <p>From corporate offices and manufacturing plants to remote project sites, we are used to working in challenging environments while maintaining quality and timelines.</p>
        <p>We use modern camera systems, lighting, and sound to ensure every interview and visual feels cinematic yet authentic.</p>
        <p>Throughout the shoot, we collaborate with your internal team, keeping stakeholders informed while protecting your brand’s reputation on and off camera.</p>

        <h3>Post-Production, Delivery, and Versioning</h3>
        <p>After production, our post-production studio manages editing, color grading, sound design, animation, and finishing to create a cohesive final film.</p>
        <p>We pay close attention to pacing, brand guidelines, on-screen text, and accessibility considerations such as subtitles and localization.</p>
        <p>Multiple versions are created for different platforms—website, internal meetings, events, social media, and broadcast.</p>
        <p>We also provide secure review links and feedback loops so your team can refine messaging without slowing down timelines.</p>

        <h2>Industries We Serve Across Bangalore and India</h2>
        <h3>Corporate, CSR, and Impact-Driven Organizations</h3>
        <p>We are widely recognized for our CSR and NGO video production expertise, working with foundations, non-profits, and corporate CSR teams across India.</p>
        <p>Our films have captured stories across diverse terrains and communities, showcasing real impact in a way that resonates with both local and global audiences.</p>
        <p>For corporate brands, we produce films that support reputation-building, employer branding, sustainability communication, and stakeholder engagement.</p>
        <p>Your brand narrative is always anchored in authenticity, measurable outcomes, and long-term trust.</p>

        <h3>Tech, SaaS, Manufacturing, Healthcare, and More</h3>
        <p>Our portfolio spans tech and SaaS, manufacturing, healthcare, fintech, education, travel, hospitality, real estate, media and entertainment, and e-commerce.</p>
        <p>This cross-industry experience helps us quickly understand your product, industry language, and regulatory or compliance constraints.</p>
        <p>Because we operate from Bangalore with a global mindset, we are comfortable working with distributed teams, product leaders, and marketing agencies around the world.</p>
        <p>Whether you are a fast-scaling startup or an established enterprise, we adapt our process to your internal workflows and approval structures.</p>

        <h2>Why Our Bangalore-Based Team Is a Strong Fit</h2>
        <h3>Experience, Craft, and Measurable Outcomes</h3>
        <p>With years of experience as a corporate video production company in Bangalore, India, we combine creative storytelling with strategic thinking for every project.</p>
        <p>Our goal is not just to deliver a beautiful film, but to help you see tangible value—improved perception, stronger engagement, better conversion, and deeper stakeholder connection.</p>
        <p>We bring together directors, cinematographers, producers, writers, editors, colorists, animators, and sound designers under one roof.</p>
        <p>This integrated model gives you consistency, accountability, and a single team that understands your brand from briefing to final delivery.</p>

        <h3>Trusted by Leading Brands and Global Teams</h3>
        <p>We work with brands and organizations that expect high standards from their partners.</p>
        <p>From large enterprises to high-growth innovators, our clients trust us to handle sensitive stories, leadership time, and complex on-ground operations.</p>
        <p>Our films have been used in board meetings, investor pitches, global conferences, impact reports, internal town halls, and large-scale digital campaigns.</p>
        <p>This trust is built on a simple promise: we respect your story, your stakeholders, and your deadlines.</p>

        <h2>FAQ – Corporate Video Production in Bangalore, India</h2>
        <h3>1. How much does a corporate video cost in Bangalore?</h3>
        <p>The cost of a corporate video in Bangalore depends on factors like concept complexity, number of shoot days, locations, crew size, equipment, and post-production requirements.</p>
        <p>After understanding your brief and deliverables, we provide a transparent estimate that aligns with your objectives and budget.</p>

        <h3>2. How long does it take to produce a corporate film?</h3>
        <p>Most corporate films take between three to six weeks from briefing to final delivery, depending on approvals and scheduling.</p>
        <p>Larger CSR documentaries or multi-location shoots may require more time for planning, travel, and coordination.</p>

        <h3>3. Can you handle shoots outside Bangalore or across India?</h3>
        <p>Yes, our team regularly manages projects across India and internationally, coordinating logistics, permissions, and local crews when needed.</p>
        <p>We are equipped to handle diverse terrains, industries, and stakeholder groups while maintaining quality and consistency.</p>

        <h3>4. Do you help with scripting and messaging?</h3>
        <p>We handle scripting, storyboarding, and messaging as part of our process so that your film feels clear, structured, and on-brand.</p>
        <p>Our writers collaborate with your leadership, marketing, CSR, or product teams to ensure accuracy and alignment with your communication strategy.</p>

        <h3>5. Can you create multiple edits for different platforms?</h3>
        <p>Yes, we plan for multiple versions from the start, so you can use the same footage for your website, events, internal meetings, and social media.</p>
        <p>We deliver cutdowns, vertical formats, and silent-friendly edits optimized for various platforms and performance objectives.</p>

        <h2>Ready to Plan Your Next Corporate Film?</h2>
        <h3>Talk to Our Corporate Video Experts</h3>
        <p>If you are exploring a new corporate film, CSR documentary, or product video, our team can help you shape the right approach from day one.</p>
        <p>We are happy to review your brief, suggest structures, and recommend formats aligned with your objectives and budget.</p>
        <p>You can book a call with us to discuss your requirements, timelines, and locations across Bangalore or other regions in India.</p>
        <p>Together, we will map a clear production roadmap that works for your stakeholders and communication strategy.</p>

        <h3>Request a Tailored Quote for Your Project</h3>
        <p>Every organization, initiative, and product is unique, so we provide customized proposals rather than one-size-fits-all packages.</p>
        <p>Share your goals—brand awareness, fundraising, recruitment, sales enablement, or CSR reporting—and we will suggest the right mix of films and deliverables.</p>
        <p>To get started, you can request a quote and receive a structured plan that covers concept, production, and post-production in one place.</p>
        <p>Our team will guide you through options so you can make confident decisions at each step.</p>
      </div>
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
