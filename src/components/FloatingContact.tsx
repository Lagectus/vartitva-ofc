"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp, FileText } from "lucide-react";

interface FloatingContactProps {
  onOpenQuote: () => void;
}

export default function FloatingContact({ onOpenQuote }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 pointer-events-auto select-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/30 shadow-lg backdrop-blur-md hover:bg-amber-400 hover:text-slate-950 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-slate-100 text-xs font-semibold shadow-xl border border-slate-700/60 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Back to Top
          </span>
        </button>
      )}

      {/* Main Glassmorphic Dock Bar */}
      <div className="flex flex-col items-center gap-3 p-2 rounded-full bg-slate-950/85 backdrop-blur-xl border border-amber-400/25 shadow-2xl shadow-slate-950/90">
        
        {/* Instant Quote / Partner With Us Button */}
        <button
          onClick={onOpenQuote}
          aria-label="Partner With Us"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 font-black shadow-md shadow-amber-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FileText className="w-5 h-5 text-slate-950" />
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-amber-300 text-xs font-bold shadow-xl border border-amber-500/30 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Partner With Us / Request Quote
          </span>
        </button>

        {/* Direct Phone Call Button */}
        <a
          href="tel:+919958813695"
          aria-label="Call Vartitva Health"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-amber-400 border border-amber-400/30 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-slate-100 text-xs font-bold shadow-xl border border-slate-700/60 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Call: +91 9958813695
          </span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919958813695?text=Hello%20Vartitva%20Health,%20I%20would%20like%20to%20inquire%20about%20orthopaedic%20implants."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Green Online Indicator Pulse */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-slate-950 animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />

          <svg
            className="w-6 h-6 fill-current relative z-10"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.187 4.269-1.12z" />
          </svg>
          <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900/95 text-emerald-400 text-xs font-bold shadow-xl border border-emerald-500/30 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            Chat on WhatsApp
          </span>
        </a>

      </div>
    </div>
  );
}
