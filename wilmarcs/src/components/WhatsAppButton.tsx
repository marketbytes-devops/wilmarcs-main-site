'use client';

import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919066249992';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <i className="bi bi-whatsapp text-3xl group-hover:animate-pulse"></i>
      
      {/* Tooltip/Label that appears on hover */}
      <span className="absolute left-16 bg-black/80 text-white text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
