import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#5b58a6] text-white pt-20 pb-8 mt-20">
      
      {/* 1. TOP CURVED WAVE SHAPE OVERLAY (Matches image_24dbde.png style) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 -mt-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px] md:h-[65px] fill-[#fdfbf7]"
        >
          <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-8">
          
          {/* 2. FLOATING WHATSAPP CHAT ACTION COMPONENT */}
          <div className="flex items-center gap-4 group">
            <a 
              href="https://wa.me/252610000000" // Halkaan geli lambarkaaga saxda ah
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <span className="text-2xl">💬</span>
            </a>
            <div className="hidden sm:block">
              <p className="text-[10px] text-neutral-200/70 uppercase tracking-widest font-medium">Quick Support</p>
              <p className="text-xs font-bold text-white group-hover:underline cursor-pointer">Chat With Us on WhatsApp</p>
            </div>
          </div>

          {/* 3. CORE STRUCTION NAVIGATION LINK PATHS */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm font-semibold tracking-wider uppercase">
            <Link to="/" className="hover:text-neutral-200 transition-colors">Home</Link>
            <Link to="/our-team" className="hover:text-neutral-200 transition-colors">Our Team</Link>
            <Link to="/services" className="hover:text-neutral-200 transition-colors">Services</Link>
            <Link to="/privacy-policy" className="hover:text-neutral-200 transition-colors">Privacy Policy</Link>
          </nav>

        </div>

        {/* 4. PERSISTENT SYSTEM INTELLECTUAL PROPERTY NOTICE */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-center md:text-left text-[11px] md:text-xs text-neutral-200/80 font-light tracking-wide">
          <p>
            &copy; {currentYear} <span className="font-serif font-bold text-white tracking-wide">ALUER AESTHETIC & DENTAL CLINIC</span>. All Rights Reserved.
          </p>
          <p className="font-medium text-white/90">
            Powered by <span className="hover:underline cursor-pointer">Farhia Adam</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;