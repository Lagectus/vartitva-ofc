"use client";

import { ArrowRight, Activity, Award, Sparkles, PhoneCall, ShieldCheck, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-slate-950 overflow-hidden text-white">
      {/* Background Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero_bg_medical.png"
          className="w-full h-full object-cover scale-100 filter brightness-[0.95] contrast-[1.02]"
        >
          <source src="/images/HERO-BG.mp4" type="video/mp4" />
        </video>

        {/* Minimal Light Overlay for Maximum Video Clarity */}
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-40" />
      </div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Ambient Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Hero Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center space-y-8 my-auto">

        {/* Main Headline */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <div className="space-y-5 max-w-4xl mx-auto">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent tracking-tight leading-tight" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              ॥ तत् परिवर्तन भव ॥
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] uppercase">
              Shaping the <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Future of Healthcare</span>
            </h1>

            <h2 className="text-base sm:text-xl font-semibold text-amber-300/90 tracking-wider uppercase max-w-3xl mx-auto">
              Trauma Implants <span className="text-amber-400">|</span> Joints Implants <span className="text-amber-400">|</span> Spine Implants <span className="text-amber-400">|</span> Arthroscopy Implants
            </h2>
          </div>
        </ScrollReveal>

        {/* Verbatim Paragraph */}
        <ScrollReveal variant="fade-up" delay={0.35}>
          <div className="max-w-3xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-slate-200 drop-shadow-sm">
              Reliable implant solutions backed by professional service and trusted healthcare partnerships.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="fade-up" delay={0.45}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-sm tracking-wide shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:scale-[1.05] active:scale-[0.98] transition-all flex items-center gap-3 group border-2 border-amber-300"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#specialities"
              className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-sm backdrop-blur-md hover:border-amber-400 hover:text-amber-300 hover:bg-slate-900 transition-all flex items-center gap-2.5 shadow-lg"
            >
              <span>Explore Our Solutions</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


