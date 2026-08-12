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
          
          {/* LEFT: Curved Visual Image Frame with Bottom Floating Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Organic Amber Blob Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fbbf24] rounded-[80px_20px_80px_20px] transform -rotate-2 scale-[1.03] shadow-lg" />

                {/* Surgeon Image Container */}
                <div className="relative rounded-[70px_15px_70px_15px] overflow-hidden border-4 border-white shadow-2xl h-[380px] sm:h-[430px] w-full bg-slate-900 group">
                  <Image
                    src="/images/about_surgical_team.png"
                    alt="Vartitva Health Surgical Support Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />

                  {/* Top Right OR Badge */}
                  <div className="absolute top-4 right-5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold border border-amber-400/30 shadow-md">
                      OR 4
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Card Overlapping Image */}
                <div className="relative -mt-14 sm:-mt-16 z-20 max-w-md mx-auto p-5 rounded-2xl bg-white/98 backdrop-blur-xl border border-amber-200/90 shadow-2xl flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <ShieldCheck className="w-6 h-6 text-[#d97706]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">
                      Empowering Surgeons & Hospitals
                    </p>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                      Integrity <span className="text-[#d97706]">•</span> Quality <span className="text-[#d97706]">•</span> Professionalism
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Orthopaedic, Spine, Neurology & Joint Replacement Implants
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Verbatim Text & Callout Boxes */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal variant="fade-left" delay={0.3}>
              <div className="space-y-6">
                
                {/* Main Right Headline */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                  Strengthening Healthcare.<br />
                  <span className="text-[#f59e0b]">
                    Building Trusted Partnerships.
                  </span>
                </h3>

                {/* Lead Paragraph */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  At Vartitva Health, we are dedicated to strengthening healthcare by delivering advanced orthopaedic, spine, neurology, and joint replacement implant solutions. Our commitment is to support hospitals, healthcare institutions, and surgeons with reliable products and responsive service that contribute to better clinical outcomes.
                </p>

                {/* Middle Callout Box with Users Icon */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex items-start gap-4 shadow-xs">
                  <div className="w-11 h-11 rounded-full bg-amber-100/90 border border-amber-200 text-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                    <Users className="w-5 h-5 text-[#d97706]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Built on the values of integrity, quality, and professionalism, we focus on creating lasting partnerships through dependable distribution, timely support, and a customer-first approach. As we continue to grow, our mission remains clear—to empower healthcare professionals with innovative surgical solutions while contributing to a healthier future for communities across India.
                  </p>
                </div>

                {/* Bottom Motto Pill */}
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-50/90 border border-amber-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
                  <HeartHandshake className="w-4.5 h-4.5 text-[#d97706]" />
                  <span>
                    Driven by <strong className="text-[#d97706]">Trust.</strong> Guided by <strong className="text-[#d97706]">Care.</strong> Committed to <strong className="text-[#d97706]">Better Outcomes.</strong>
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* BOTTOM ROW: 5 Features Horizontal Bar */}
        <ScrollReveal variant="fade-up" delay={0.4} className="mt-16">
          <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-amber-200/80 shadow-xl shadow-amber-950/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-amber-200/60">
              
              {/* 1. Quality-Focused Approach */}
              <div className="lg:px-5 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706]">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Quality-Focused Approach
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Carefully selected implant solutions that meet the evolving needs of modern healthcare.
                </p>
              </div>

              {/* 2. Reliable Distribution Support */}
              <div className="lg:px-5 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706]">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Reliable Distribution Support
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  An efficient supply network ensuring timely availability of products whenever needed.
                </p>
              </div>

              {/* 3. Professional Partnership */}
              <div className="lg:px-5 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706]">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Professional Partnership
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Building long-term relationships through transparency, commitment and dedicated support.
                </p>
              </div>

              {/* 4. Advanced Healthcare Solutions */}
              <div className="lg:px-5 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706]">
                  <BriefcaseMedical className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Advanced Healthcare Solutions
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Bringing innovative medical technologies that support better surgical outcomes and patient care.
                </p>
              </div>

              {/* 5. Customer-Centric Service */}
              <div className="lg:px-5 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#d97706]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Customer-Centric Service
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  From product selection to post-delivery assistance, we ensure a smooth and reliable experience.
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
