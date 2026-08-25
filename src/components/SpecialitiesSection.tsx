"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

interface SpecialitiesSectionProps {
  onOpenQuote: (specialityName?: string) => void;
}

export default function SpecialitiesSection({ onOpenQuote }: SpecialitiesSectionProps) {
  const solutions = [
    {
      id: "orthopaedic",
      number: "01",
      icon: Activity,
      title: "Trauma Implants",
      categoryUrl: "/categories/trauma-implants",
      image: "/images/orthopaedic_implants.png",
      description:
        "Dependable orthopaedic implant solutions for trauma care, fracture management, and reconstructive procedures.",
    },
    {
      id: "spine",
      number: "02",
      icon: Layers,
      title: "Spine Implants",
      categoryUrl: "/categories/spine-implants",
      image: "/images/spine_implants.png",
      description:
        "Spine implant solutions developed to support spinal stability, alignment, and reconstructive procedures.",
    },
    {
      id: "arthroscopy",
      number: "03",
      icon: Sparkles,
      title: "Arthroscopy Implants",
      categoryUrl: "/categories/arthroscopy-implants",
      image: "/images/arthroscopy_implants.png",
      description:
        "Advanced arthroscopy implant solutions for minimally invasive joint repair and reconstructive procedures.",
    },
    {
      id: "joint-replacement",
      number: "04",
      icon: Award,
      title: "Joint Replacement Implants",
      categoryUrl: "/categories/joint-implants",
      image: "/images/joint_replacement_implants.png",
      description:
        "Joint replacement implant solutions engineered for mobility restoration and long-term joint health.",
    },
  ];

  return (
    <section id="specialities" className="py-14 bg-white relative overflow-hidden text-slate-900">
      {/* Background Dots Grid & Soft Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Implant Portfolio</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Healthcare <span className="text-[#f59e0b]">Solutions</span>
          </h2>

          {/* 3 Amber Dots Divider */}
          <div className="flex items-center justify-center gap-1.5 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
          </div>

          {/* Sub-headline */}
          <h3 className="text-lg sm:text-2xl font-bold text-[#b45309] tracking-tight pt-1">
            Surgical Implant Solutions Across Key Specialties
          </h3>
        </ScrollReveal>

        {/* 4 Cards 2x2 Grid */}
        <ScrollRevealStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollRevealItem key={item.id} variant="fade-up" className="h-full">
                <div className="group rounded-[28px] bg-white border border-amber-200/90 hover:border-amber-400/90 shadow-xl shadow-amber-950/5 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row justify-between h-full relative">
                  
                  {/* Left Column: Text Content */}
                  <div className="sm:w-[58%] p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      {/* Header Row: Number + Icon + Title */}
                      <div className="flex items-center gap-3">
                        {/* Number Badge */}
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d97706] to-[#f59e0b] text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                          {item.number}
                        </div>

                        {/* Speciality Icon */}
                        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-[#d97706]" />
                        </div>

                        {/* Title */}
                        <Link
                          href={item.categoryUrl}
                          className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#d97706] transition-colors leading-snug hover:underline block pt-1"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Footer Action Bar */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <Link
                        href={item.categoryUrl}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 group/btn"
                      >
                        <span>Explore Our Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Angled Cutout Showcase Image Frame */}
                  <div className="relative sm:w-[42%] min-h-[220px] sm:min-h-full bg-slate-950 overflow-hidden sm:[clip-path:polygon(18%_0,_100%_0,_100%_100%,_0%_100%)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 42vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.95]"
                    />
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Orange Diagonal Edge Line Accent */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#f59e0b] to-[#d97706] hidden sm:block" />
                  </div>

                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealStagger>

      </div>
    </section>
  );
}

