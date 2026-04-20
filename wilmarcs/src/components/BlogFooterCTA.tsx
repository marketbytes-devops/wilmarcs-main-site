'use client';

import { useState } from 'react';
import EnquiryModal from './EnquiryModal';

export default function BlogFooterCTA() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">Ready to tell your story?</h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          From the streets of Bangalore to global boardrooms, we help brands create films that resonate and deliver results.
        </p>
        <button
          onClick={() => setIsEnquiryOpen(true)}
          className="group inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
        >
          Start Your Project
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="group-hover:translate-x-1 transition-transform">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </button>
      </div>
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
