"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Handshake,
  HeartHandshake,
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
      title: "Orthopaedic Implants",
      categoryUrl: "/categories/trauma-implants",
      image: "/images/orthopaedic_implants.png",
      description:
        "We offer dependable orthopaedic implant solutions designed for trauma care, fracture management, and reconstructive procedures. Our products support surgeons with reliable performance, durability, and accuracy during complex orthopaedic surgeries.",
    },
    {
      id: "spine",
      number: "02",
      icon: Layers,
      title: "Spine Implants",
      categoryUrl: "/categories/spine-implants",
      image: "/images/spine_implants.png",
      description:
        "Our spine implant solutions are developed to support spinal procedures requiring stability, precision, and long-term reliability. We work towards providing surgeons with effective solutions for advanced spine care.",
    },
    {
      id: "neurology",
      number: "03",
      icon: Sparkles,
      title: "Neurology Implants",
      categoryUrl: "/categories/neurology-implants",
      image: "/images/neurology_implants.png",
      description:
        "Vartitva Health provides specialized neurology implant solutions that support modern neurosurgical requirements. We focus on delivering reliable medical technologies that assist healthcare professionals in achieving better surgical efficiency.",
    },
    {
      id: "joint-replacement",
      number: "04",
      icon: Award,
      title: "Joint Replacement Implants",
      categoryUrl: "/categories/joint-implants",
      image: "/images/joint_replacement_implants.png",
      description:
        "Our joint replacement implant solutions are designed to support mobility restoration and improved patient care. We provide trusted solutions that help surgeons address various joint-related procedures with confidence.",
    },
  ];

  return (
    <section id="specialities" className="py-24 bg-white relative overflow-hidden text-slate-900">
      {/* Background Dots Grid & Soft Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      {/* Top Right Watermark Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/joint_replacement_implants.png"
          alt="Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Implant Speciality Portfolio</span>
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

          {/* Sub-headline & Description */}
          <h3 className="text-base sm:text-lg font-extrabold text-[#b45309] tracking-tight pt-1">
            Advanced Implant Solutions Designed for Better Surgical Outcomes
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            At Vartitva Health, we provide a comprehensive range of surgical implant solutions designed to support healthcare professionals across various medical specialties. Our focus is to deliver reliable products that help surgeons perform procedures with confidence and precision.
          </p>
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
                          className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#d97706] transition-colors leading-snug hover:underline"
                        >
                          {item.title}
                        </Link>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Footer Action Bar */}
                    <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                      <Link
                        href={item.categoryUrl}
                        className="text-xs font-bold text-slate-800 hover:text-[#d97706] flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                        <span>Explore Category Specs</span>
                      </Link>

                      <button
                        onClick={() => onOpenQuote(item.title)}
                        className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1 group/btn"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3 h-3 text-slate-950 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Angled Cutout Showcase Image Frame */}
                  <div className="relative sm:w-[42%] min-h-[220px] sm:min-h-full bg-slate-950 overflow-hidden sm:[clip-path:polygon(18%_0,_100%_0,_100%_100%,_0%_100%)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.95]"
                      priority
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

        {/* BOTTOM ROW: 5 Features Horizontal Bar */}
        <ScrollReveal variant="fade-up" delay={0.4} className="mt-14 relative z-10">
          <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-amber-200/90 shadow-xl shadow-amber-950/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-amber-200/70">
              
              {/* 1. Advanced Technology */}
              <div className="lg:px-4 space-y-2 text-center">
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706] mx-auto">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Advanced Technology
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Innovative solutions for modern surgical needs
                </p>
              </div>

              {/* 2. Trusted Quality */}
              <div className="lg:px-4 space-y-2 text-center">
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706] mx-auto">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Trusted Quality
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Stringent quality standards for maximum reliability
                </p>
              </div>

              {/* 3. Surgeon Focused */}
              <div className="lg:px-4 space-y-2 text-center">
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706] mx-auto">
                  <Users className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Surgeon Focused
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Designed to support better surgical outcomes
                </p>
              </div>

              {/* 4. Reliable Support */}
              <div className="lg:px-4 space-y-2 text-center">
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706] mx-auto">
                  <Handshake className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Reliable Support
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Committed assistance at every step
                </p>
              </div>

              {/* 5. Better Outcomes */}
              <div className="lg:px-4 space-y-2 text-center">
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706] mx-auto">
                  <HeartHandshake className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Better Outcomes
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Dedicated to improving patient quality of life
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
