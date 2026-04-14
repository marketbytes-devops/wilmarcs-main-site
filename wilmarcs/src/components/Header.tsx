'use client';
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BASE_URL } from "@/lib/constants";

export default function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname() || '';
  useEffect(() => {
    const handleScroll = () => setShowServicesMenu(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {className: 'header--scrolled', targets: '.header'}
    });
  }, []);
  return (
    <header className={`header fixed top-0 bg-gradient-to-b from-black/80 to-transparent w-full left-0 z-10 ease duration-200 ${isOpen?'':'menuopen'}`}>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href={`${BASE_URL}`}><Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/logo.png`} alt="Wilmarcs" width={180} height={38} className="sm:w-[180px] w-[130px] object-contain" priority /></a>
            <div className="flex items-center gap-12">
              <ul className="flex items-center gap-12 mainmenu">
                <li className={`header-link ${pathname.startsWith('/about') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`}><a href={`${BASE_URL}about-our-team`}>About us</a></li>
                <li className={`header-link ${pathname.startsWith('/services') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`} onMouseEnter={() => setShowServicesMenu(true)} onMouseLeave={() => setShowServicesMenu(false)}>
                  <a href={`${BASE_URL}video-production-services`} className={`flex items-center gap-2 ${showServicesMenu ? 'hover:font-semibold' : ''} all-ease min-w-[90px]`}>
                    <span>Services</span> 
                    <svg className={`w-3 all-ease ${showServicesMenu ? 'rotate-180' : ''}`} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.3542 0.434654V4.26799L7.72917 12.3513L0.0625 4.26799V0.434654L7.72917 8.51799L15.3542 0.434654Z" fill="currentColor"/> </svg>
                  </a>
                  <div onMouseLeave={() => setShowServicesMenu(false)} className={`all-ease dropdown absolute ${showServicesMenu ? 'show' : ''} left-0 w-full py-16 bg-[#161617] mt-6 before:content-[''] before:-top-full before:left-0 before:bg-[#161617] before:w-full before:absolute before:h-full before:-z-1`}>
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-4 gap-6">
                        <div className={`transition-all ease-in-out duration-500 ${showServicesMenu ? 'top-0 opacity-100' : 'opacity-0 relative top-10'}`}>
                          <h5 className="text-xl grid gap-1 mb-9 text-white/75 font-light">
                            <span>Let’s</span>
                            <span>create</span>
                            <span>something</span>
                            <span>unforgettable together.</span>
                          </h5>
                          <a href={`${BASE_URL}video-production-services`} className="text-white/75 hover:text-white all-ease flex items-center gap-1 text-lg font-light">Overview <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></a>
                        </div>
                        <div className={`transition-all ease-in-out duration-500 ${showServicesMenu ? 'top-0 opacity-100' : 'opacity-0 relative top-16'}`}>
                          <h4 className="text-[#A6A6A7] text-xl mb-8 font-normal">Our Services</h4>
                          <ul className="grid gap-5 text-white font-medium text-2xl footul">
                            <li><a href={`${BASE_URL}services/live-action-production`}>Live‑Action Production</a></li>
                            <li><a href={`${BASE_URL}services/animation-motion`}>Animation & Motion</a></li>
                            <li><a href={`${BASE_URL}services/social-performance`}>Social & Performance</a></li>
                          </ul>
                        </div>
                        <div className={`transition-all ease-in-out duration-500 ${showServicesMenu ? 'top-0 opacity-100' : 'opacity-0 relative top-16'}`}>
                          <ul className="grid pt-14 gap-5 text-white font-medium text-2xl footul">
                            <li><a href={`${BASE_URL}services/innovation`}>Innovation</a></li>
                            <li><a href={`${BASE_URL}services/post-production-studio`}>Post‑Production Studio</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={`header-link ${pathname.startsWith('/portfolio') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`}><a href={`${BASE_URL}video-production-portfolio`}>Portfolio</a></li>
                <li className={`header-link ${pathname.startsWith('/industries') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`}><a href={`${BASE_URL}industries-we-serve`}>Industries</a></li>
                <li className={`header-link ${pathname.startsWith('/blog') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`}><a href={`${BASE_URL}blog`}>Blog</a></li>
                <li className={`header-link ${pathname.startsWith('/contact') ? 'font-bold' : ''} all-ease lg:py-6 py-2.5`}><a href={`${BASE_URL}book-a-call`}>Contact</a></li>
              </ul>
              <ul className="flex items-center md:gap-12 sm:gap-8 gap-6 relative z-[11]">
                <li className={`header-link all-ease !lg:py-6 !py-5`}><a href="tel:+917700017110"><svg className="sm:w-7 sm:h-7 w-6 h-6" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4_17996)"> <path d="M26.9693 14.1123C23.5103 14.0823 24.7464 10.4093 22.9624 7.7243C21.0234 4.8053 18.3304 3.8283 15.3974 2.5803C14.0824 2.0213 12.9284 3.1463 13.4074 0.550304C21.6024 0.268303 26.2923 6.4443 26.9693 14.1123Z" fill="#D9D9D9"/> <path d="M22.4498 14.113C19.6368 14.443 20.6868 11.14 18.8638 9.11104C16.7438 6.75104 13.2628 8.03404 13.4108 5.07504C18.5538 4.56804 22.9558 8.96804 22.4498 14.113Z" fill="#E3E3E3"/> <path d="M3.18457 3.40753C5.93119 2.57887 7.80325 3.81183 9.28613 6.03253C12.0091 10.1115 8.65074 10.6122 9.01074 12.6292C9.09245 13.0807 13.7968 17.9976 14.2969 18.2269C15.7879 18.9059 19.0586 13.941 22.8496 19.595C24.9343 22.7049 23.9362 25.7533 20.6104 27.2523C16.4964 29.1062 7.72592 23.7312 4.87988 20.3802C1.87688 16.8472 -3.41843 5.40153 3.18457 3.40753ZM3.9375 5.06769C1.19496 5.70998 2.36775 11.3752 3.01074 13.2073C5.09074 19.1353 17.1968 30.5082 22.4258 22.7112C18.4029 16.6695 17.7686 20.7318 14.9727 20.3509C14.0058 20.2189 9.62786 17.2653 8.87402 16.3939C5.51602 12.5079 8.4108 10.8854 7.8418 8.41144C7.62359 7.45933 5.01545 4.8157 3.9375 5.06769Z" fill="#F0F0F0"/> </g> <defs> <clipPath id="clip0_4_17996"> <rect width="27" height="28" fill="white"/> </clipPath> </defs> </svg> </a></li>
                <li className={`hidden header-link all-ease !py-6 gap-2`} onClick={toggleMenu}>
                  <span className={`sm:w-14 w-10 sm:h-[3px] h-0.5 bg-white block transition-all duration-300 ease-in-out ${isOpen?'rotate-45 translate-y-[6px]':''}`}></span>
                  <span className={`sm:w-14 w-10 sm:h-[3px] h-0.5 bg-white block transition-all duration-300 ease-in-out ${isOpen?'-rotate-45 -translate-y-[3px]':''}`}></span>
                </li>
              </ul>
            </div>
        </div>
    </header>
  );
}