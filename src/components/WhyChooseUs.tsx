"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Handshake,
  PlusCircle,
  Headphones,
  HeartHandshake,
  Sparkles,
  ChevronDown,
  Award,
} from "lucide-react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality-Focused",
      description: "Carefully selected implant solutions for modern surgical requirements.",
      icon: ShieldCheck,
    },
    {
      title: "Reliable Availability",
      description: "Efficient distribution for timely product access.",
      icon: Truck,
    },
    {
      title: "Professional Support",
      description: "Responsive coordination for hospitals and surgeons.",
      icon: Headphones,
    },
    {
      title: "Healthcare Expertise",
      description: "Focused solutions across key surgical specialities.",
      icon: Award,
    },
    {
      title: "Long-Term Partnership",
      description: "Building relationships through trust and transparency.",
      icon: Handshake,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background Dots Grid & Soft Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Right Circular Image Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 relative">
          
          {/* LEFT: Text Header Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-3 relative z-10">
            <ScrollReveal variant="fade-up">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Why Choose Vartitva Health?</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3">
                Why Choose <span className="text-[#f59e0b]">Vartitva Health?</span>
              </h2>

              {/* 3 Amber Dots Divider */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              </div>

              {/* Sub-headline */}
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight pt-2">
                A Trusted Partner in Surgical Healthcare
              </h3>
            </ScrollReveal>
          </div>

          {/* RIGHT: Circular Knee Joint Implant Showcase Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
            <ScrollReveal variant="zoom-in" delay={0.2}>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88">
                {/* Background Orange Shape Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d97706] to-[#f59e0b] rounded-full transform translate-x-6 -translate-y-3 opacity-85 blur-xs" />
                
                {/* Outer Dashed Concentric Arc Lines */}
                <div className="absolute -inset-4 rounded-full border-2 border-amber-400/40 border-dashed" />
                
                {/* Inner Circle Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                  <Image
                    src="/images/joint_replacement_implants.png"
                    alt="Knee & Joint Replacement Implant"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 5 Hexagonal Badge Cards Row */}
        <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10 pt-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollRevealItem
                key={idx}
                variant="fade-up"
                className="h-full flex flex-col justify-between"
              >
                {/* Main Hexagonal / Rounded Card */}
                <div className="group relative p-5 pt-8 rounded-[24px] bg-gradient-to-b from-amber-50/90 via-white to-amber-50/30 border border-amber-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 text-center flex flex-col justify-between h-full">
                  
                  {/* Top Floating Circular Icon */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-amber-300 shadow-md flex items-center justify-center text-[#d97706] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#d97706]" />
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2 mt-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#d97706] transition-colors leading-snug">
                      {feature.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Orange Circle Arrow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shadow-xs">
                    <ChevronDown className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Sub Card Label */}
                <div className="text-center pt-5">
                  <span className="text-[10px] font-extrabold text-[#d97706] tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    Vartitva Health
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  </span>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealStagger>

      </div>
    </section>
  );
}

