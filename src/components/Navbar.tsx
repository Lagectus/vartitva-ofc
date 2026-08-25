"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Menu, X, ArrowRight, Sparkles, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPastThreshold = window.scrollY > 20;
          setScrolled((prev) => (prev !== isPastThreshold ? isPastThreshold : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-amber-100 py-3 shadow-lg shadow-amber-950/5"
          : "bg-slate-950/70 backdrop-blur-md border-b border-amber-500/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Image - Larger & Highlighted */}
          <Link href="/" aria-label="Vartitva Health Homepage" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.avif"
              alt="Vartitva Health Logo"
              width={320}
              height={180}
              sizes="(max-width: 640px) 220px, 320px"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain rounded-2xl shadow-xl shadow-amber-500/30 group-hover:scale-105 transition-transform border-2 border-amber-400/70"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-6 xl:gap-7 text-xs sm:text-sm font-bold transition-colors duration-300 ${
            scrolled ? "text-slate-800" : "text-slate-100"
          }`}>
            <Link href="/" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/#why-choose-us" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              Why Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative py-1 group"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <Link
                href="/#specialities"
                className={`flex items-center gap-1 transition-colors ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 p-3 rounded-2xl bg-white/98 backdrop-blur-2xl border border-amber-200 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-800">
                  <Link
                    href="/categories/trauma-implants"
                    className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#d97706] transition-colors"
                  >
                    <span>Trauma Implants</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                  </Link>
                  <Link
                    href="/categories/joint-implants"
                    className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#d97706] transition-colors"
                  >
                    <span>Joint Replacement</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                  </Link>
                  <Link
                    href="/categories/spine-implants"
                    className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#d97706] transition-colors"
                  >
                    <span>Spine Implants</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                  </Link>
                  <Link
                    href="/categories/arthroscopy-implants"
                    className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-[#d97706] transition-colors"
                  >
                    <span>Arthroscopy Implants</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#vision-mission" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              Vision & Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/#quality" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              Quality
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/#process" className={`transition-colors relative py-1 group ${scrolled ? "hover:text-[#d97706]" : "hover:text-amber-300"}`}>
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Regional Pill & CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919958813695"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all border ${
                scrolled
                  ? "bg-amber-50 text-[#d97706] border-amber-300 hover:bg-amber-100"
                  : "bg-slate-900/80 text-amber-300 border-amber-400/40 hover:bg-slate-900"
              }`}
            >
              <Phone className="w-4 h-4 text-[#d97706]" />
              <span>+91 9958813695</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] hover:from-[#b45309] hover:to-[#f59e0b] text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 border border-amber-300/80"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden p-2.5 rounded-xl transition-colors border ${
              scrolled
                ? "bg-amber-50 text-slate-800 hover:text-[#d97706] border-amber-200"
                : "bg-slate-900/60 text-white hover:text-amber-300 border-white/20 backdrop-blur-md"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-amber-100 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Home <ArrowRight className="w-4 h-4 text-amber-500" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              About Vartitva Health <ArrowRight className="w-4 h-4 text-amber-500" />
            </Link>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Why Choose Us <ArrowRight className="w-4 h-4 text-amber-500" />
            </a>
            <a
              href="#specialities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Healthcare Solutions <ArrowRight className="w-4 h-4 text-amber-500" />
            </a>
            <a
              href="#vision-mission"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Our Vision & Mission <ArrowRight className="w-4 h-4 text-amber-500" />
            </a>
            <a
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Commitment to Quality <ArrowRight className="w-4 h-4 text-amber-500" />
            </a>

            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Our Process <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
              <MapPin className="w-4 h-4 text-[#d97706]" />
              <span>Delhi • Gurugram • Sonipat • Panipat • Faridabad</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-sm shadow-md text-center"
            >
              Partner With Vartitva Health
            </button>

            <a
              href="tel:+919958813695"
              className="w-full py-3 rounded-xl bg-amber-50 text-slate-900 font-bold text-sm text-center flex items-center justify-center gap-2 border border-amber-200"
            >
              <Phone className="w-4 h-4 text-[#d97706]" />
              Call +91 9958813695
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

