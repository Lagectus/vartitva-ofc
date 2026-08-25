"use client";

import Image from "next/image";
import { MapPin, Navigation, Sparkles, Building2 } from "lucide-react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

export default function CoverageMapSection() {
  const regions = [
    {
      name: "Delhi",
      text: "Trauma, joint replacement, spine, and arthroscopy implant solutions.",
      badge: "Capital Territory",
    },
    {
      name: "Gurugram",
      text: "Reliable surgical implant distribution for healthcare institutions.",
      badge: "NCR Healthcare Hub",
    },
    {
      name: "Sonipat",
      text: "Efficient healthcare support for hospitals and medical professionals.",
      badge: "Regional Network",
    },
    {
      name: "Panipat",
      text: "Expanded surgical implant distribution and dedicated support.",
      badge: "Emerging Hub",
    },
    {
      name: "Faridabad",
      text: "Comprehensive orthopaedic and spine implant supply network.",
      badge: "Strategic Reach",
    },
  ];

  return (
    <section id="coverage" className="py-14 bg-slate-950 text-white relative overflow-hidden">
      {/* Background City Dusk Image Texture */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/areas_serve_bg.png"
          alt="Areas We Serve NCR City Skyline"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Soft Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d97706]/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-amber-400/30">
            <Navigation className="w-4 h-4 text-[#f59e0b]" />
            Regional Presence
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Areas We Serve
          </h2>

          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Growing Across Healthcare Networks
          </h3>
        </ScrollReveal>

        {/* 5 Regional Cards */}
        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {regions.map((region, idx) => (
            <ScrollRevealItem key={idx} variant="fade-up">
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/80 hover:bg-slate-900/95 border border-white/15 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-xl h-full">
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-extrabold text-white">
                        {region.name}
                      </h4>
                    </div>

                    <div className="inline-block">
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {region.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {region.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" /> Dependable Support
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>

        {/* Outro Paragraph Banner */}
        <ScrollReveal variant="zoom-in" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900/90 to-amber-950/60 border border-amber-500/30 backdrop-blur-md text-center max-w-3xl mx-auto space-y-2 shadow-2xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#f59e0b]" /> Pan-India Reach
            </div>
            <p className="text-xl sm:text-2xl font-black text-amber-200 tracking-wide">
              Expanding Across India
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}



