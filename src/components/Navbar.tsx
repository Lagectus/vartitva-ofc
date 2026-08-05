"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-100 py-3 shadow-lg shadow-slate-900/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#0f4c81] via-[#2563eb] to-[#00b8a9] flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">V</span>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#00b8a9] border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                VARTITVA <span className="text-[#0f4c81] font-light">HEALTH</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#00b8a9] mt-0.5">
                Pvt. Ltd. • Surgical Implants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-[#0f4c81] transition-colors relative py-1 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#specialities" className="hover:text-[#0f4c81] transition-colors relative py-1 group">
              Specialities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#why-choose-us" className="hover:text-[#0f4c81] transition-colors relative py-1 group">
              Why Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#process" className="hover:text-[#0f4c81] transition-colors relative py-1 group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#coverage" className="hover:text-[#0f4c81] transition-colors relative py-1 group">
              Coverage
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Regional Pill & CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-xs font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#00b8a9] animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-[#0f4c81]" />
              <span>Delhi • Gurugram • Sonipat</span>
            </div>

            <a
              href="tel:9958813695"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 hover:text-[#0f4c81] font-semibold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2563eb]" />
              <span>+91 9958813695</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0f4c81] to-[#2563eb] hover:from-[#2563eb] hover:to-[#00b8a9] text-white font-bold text-xs tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Quotation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              About Vartitva <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#specialities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Surgical Specialities <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Why Choose Us <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Medical Distribution Process <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              NCR Coverage Map <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 p-3 rounded-xl">
              <MapPin className="w-4 h-4 text-[#0f4c81]" />
              <span>Serving Delhi, Gurugram & Sonipat</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0f4c81] via-[#2563eb] to-[#00b8a9] text-white font-bold text-sm shadow-md text-center"
            >
              Request Implant Quotation
            </button>

            <a
              href="tel:9958813695"
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#2563eb]" /> Call +91 9958813695
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
