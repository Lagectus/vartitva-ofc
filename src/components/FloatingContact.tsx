"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp, FileText, MessageSquare } from "lucide-react";

interface FloatingContactProps {
  onOpenQuote: () => void;
}

export default function FloatingContact({ onOpenQuote }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none">
      
      {/* Scroll To Top Button (Appears on scroll) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/30 shadow-xl backdrop-blur-md hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          
          {/* Tooltip */}
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-slate-100 text-xs font-semibold shadow-xl border border-slate-700/60 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Back to Top
          </span>
        </button>
      )}

      {/* Instant Quote / Partner With Us Floating Button */}
      <button
        onClick={onOpenQuote}
        aria-label="Request Quote"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-2xl shadow-amber-500/40 border border-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse hover:animate-none"
      >
        <FileText className="w-4 h-4 text-slate-950" />
        <span className="hidden sm:inline">Partner With Us</span>
        <span className="sm:hidden">Quote</span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-semibold shadow-xl border border-amber-500/20 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          Request Direct Quote
        </span>
      </button>

      {/* Phone Call Floating Icon */}
      <a
        href="tel:+919958813695"
        aria-label="Call Vartitva Health"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-slate-900 text-amber-400 border border-amber-400/40 shadow-2xl shadow-amber-950/40 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-300 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />

        {/* Tooltip */}
        <span className="absolute right-15 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-slate-100 text-xs font-bold shadow-xl border border-slate-700/60 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          Call: +91 9958813695
        </span>
      </a>

      {/* WhatsApp Chat Floating Icon */}
      <a
        href="https://wa.me/919958813695?text=Hello%20Vartitva%20Health,%20I%20would%20like%20to%20inquire%20about%20orthopaedic%20implants."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/40 hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.187 4.269-1.12z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-emerald-400 text-xs font-bold shadow-xl border border-emerald-500/30 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
