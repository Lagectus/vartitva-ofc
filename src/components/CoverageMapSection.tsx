"use client";

import Image from "next/image";
import { MapPin, Navigation, Sparkles, Building2 } from "lucide-react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

export default function CoverageMapSection() {
  const regions = [
    {
      name: "Delhi",
      text: "Serving hospitals and healthcare professionals in Delhi with dependable orthopaedic, spine, neurology, and joint replacement implant solutions supported by responsive service.",
      color: "text-[#0f4c81]",
      badge: "Capital Zone",
    },
    {
      name: "Gurugram",
      text: "Supporting healthcare institutions in Gurugram with reliable implant distribution solutions designed to meet the requirements of modern surgical practices.",
      color: "text-[#e11d48]",
      badge: "NCR Medical Hub",
    },
    {
      name: "Sonipat",
      text: "Providing trusted healthcare support in Sonipat through efficient distribution services and quality-focused surgical implant solutions.",
      color: "text-[#0f4c81]",
      badge: "Express Distribution",
    },
  ];

  return (
    <section id="coverage" className="py-24 bg-slate-950 text-white relative overflow-hidden">
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
            Expanding Healthcare Support Across Regions
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Vartitva Health Private Limited is committed to providing reliable surgical implant distribution services to hospitals, healthcare institutions, and medical professionals across key locations. With a strong focus on timely support and efficient service, we continue to strengthen our presence in the healthcare sector.
          </p>
        </ScrollReveal>

        {/* 3 Regional Cards */}
        <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <ScrollRevealItem key={idx} variant="fade-up">
              <div className="p-8 rounded-3xl bg-slate-900/80 hover:bg-slate-900/95 border border-white/15 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-2xl h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-extrabold text-white">
                        {region.name}
                      </h4>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {region.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {region.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-semibold text-amber-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" /> Dependable Healthcare Support
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>

        {/* Outro Paragraph Banner */}
        <ScrollReveal variant="zoom-in" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900/90 to-amber-950/60 border border-amber-500/30 backdrop-blur-md text-center max-w-4xl mx-auto space-y-2 shadow-2xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#f59e0b]" /> Pan-India Healthcare Reach
            </div>
            <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
              With a vision to expand our network across India, Vartitva Health continues to build strong partnerships and deliver dependable healthcare solutions wherever they are needed.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


