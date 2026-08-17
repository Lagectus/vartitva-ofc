"use client";

import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Activity,
  Users,
  HeartHandshake,
  Award,
  Truck,
  Handshake,
  BriefcaseMedical,
  Headphones,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#d97706] text-xs font-extrabold uppercase tracking-wider border border-amber-200/80 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Healthcare Distribution Partner</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-[#f59e0b]">Vartitva Health</span>
          </h2>

          {/* Subtitle Heartbeat Line Divider */}
          <div className="flex items-center justify-center gap-3 pt-1 opacity-75">
            <div className="h-[1.5px] w-20 bg-gradient-to-r from-transparent to-amber-400" />
            <Activity className="w-4 h-4 text-[#d97706]" />
            <div className="h-[1.5px] w-20 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Curved Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Organic Amber Blob Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fbbf24] rounded-[60px_15px_60px_15px] transform -rotate-2 scale-[1.03] shadow-lg" />

                {/* Surgeon Image Container */}
                <div className="relative rounded-[50px_12px_50px_12px] overflow-hidden border-4 border-white shadow-2xl h-[360px] sm:h-[400px] w-full bg-slate-900 group">
                  <Image
                    src="/images/about_surgical_team.png"
                    alt="Vartitva Health Surgical Support Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Verbatim Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal variant="fade-left" delay={0.3}>
              <div className="space-y-6">
                
                {/* Main Subtitle */}
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                  Supporting Better Healthcare <br />
                  <span className="text-[#f59e0b]">
                    Through Surgical Solutions
                  </span>
                </h3>

                {/* Paragraph 1 */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                  At Vartitva Health, we provide orthopaedic, spine, neurology, and joint replacement implant solutions for hospitals, surgeons, and healthcare institutions. We focus on dependable distribution, responsive service, and long-term professional partnerships.
                </p>

                {/* Paragraph 2 */}
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-bold border-l-4 border-l-[#f59e0b] pl-4">
                  Serving Delhi, Gurugram, and Sonipat, we are committed to expanding our healthcare network across India.
                </p>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

