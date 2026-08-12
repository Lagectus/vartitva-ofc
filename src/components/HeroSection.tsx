"use client";

import { ArrowRight, Activity, Award, Sparkles, PhoneCall, ShieldCheck, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { LotusIcon } from "./LotusIcon";

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
          poster="/images/hero_bg_medical.png"
          className="w-full h-full object-cover scale-100 filter brightness-[0.95] contrast-[1.02]"
        >
          <source src="/images/HERO-BG.mp4" type="video/mp4" />
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-research-laboratory-41551-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-a-doctor-looking-at-a-medical-screen-4618/1080p.mp4" type="video/mp4" />
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

        {/* Top Sub-header Status Pill */}
        <ScrollReveal variant="fade-down" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/15 border border-amber-400/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-amber-200 tracking-wide">
              Built on Trust. Designed for Care. Advanced Implant Solutions for Every Surgical Need
            </span>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal variant="fade-up" delay={0.25}>
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
              Shaping the <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Future of Healthcare</span>, One Surgical Solution at a Time
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold text-amber-300/90 tracking-tight max-w-3xl mx-auto">
              Trusted Distribution of Orthopaedic, Spine, Neurology & Joint Replacement Implants
            </h2>
          </div>
        </ScrollReveal>

        {/* Verbatim Paragraphs */}
        <ScrollReveal variant="fade-up" delay={0.35}>
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            <p>
              At Vartitva Health, we go beyond supplying surgical implants—we build trusted partnerships that support better healthcare. By connecting hospitals and surgeons with advanced medical technologies, we help ensure every procedure is backed by precision, reliability, and confidence.
            </p>

            <p className="text-slate-400 text-sm sm:text-base">
              With a strong commitment to quality, timely service, and professional excellence, we proudly serve healthcare institutions across Delhi, Gurugram, and Sonipat, while expanding our reach to support medical professionals throughout India.
            </p>
          </div>
        </ScrollReveal>

        {/* Motto Banner */}
        <ScrollReveal variant="zoom-in" delay={0.45}>
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 backdrop-blur-md flex items-center justify-center gap-3.5 shadow-xl shadow-amber-950/40">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-md">
              <LotusIcon className="w-5 h-5 text-slate-950" />
            </div>
            <div className="text-left sm:text-center">
              <p className="text-sm sm:text-base font-bold text-amber-100 tracking-wide">
                Driven by Trust. Guided by Care. Committed to Better Outcomes.
              </p>
              <p className="text-xs font-serif italic text-amber-300/80 mt-0.5">
                ॥ तत्परिवर्तनं भव ॥
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="fade-up" delay={0.55}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:9958813695"
              className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-sm backdrop-blur-md hover:border-amber-400 hover:text-amber-300 hover:bg-slate-900 transition-all flex items-center gap-2.5 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Contact Vartitva Health</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Bottom Feature Badges Bar */}
        <ScrollReveal variant="fade-up" delay={0.65}>
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 text-left hover:border-amber-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Orthopaedic & Spine</p>
                <p className="text-xs font-semibold text-slate-200">Advanced Implants</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 text-left hover:border-amber-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Quality & Precision</p>
                <p className="text-xs font-semibold text-slate-200">Certified Standards</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 text-left hover:border-amber-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Core Network</p>
                <p className="text-xs font-semibold text-slate-200">Delhi • Gurugram • Sonipat</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 text-left hover:border-amber-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Reliable Partner</p>
                <p className="text-xs font-semibold text-slate-200">Pan-India Support</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
