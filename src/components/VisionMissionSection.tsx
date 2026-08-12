"use client";

import Image from "next/image";
import {
  Target,
  Eye,
  Activity,
  CheckCircle2,
  Users,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function VisionMissionSection() {
  const missionBullets = [
    "Consistent quality and reliable product support",
    "Timely and efficient healthcare distribution",
    "Professional assistance throughout the surgical journey",
    "Long-term relationships built on trust and transparency",
    "Continuous improvement through innovation and excellence",
  ];

  return (
    <section id="vision-mission" className="py-24 bg-white relative overflow-hidden text-slate-900">
      {/* Background Dots Grid & Soft Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      {/* Watermark Accents */}
      <div className="absolute top-1/3 left-4 w-72 h-72 opacity-10 pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/why_choose_bg.png"
          alt="Globe Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/joint_replacement_implants.png"
          alt="Implant Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300 shadow-xs">
            <Target className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Strategic Purpose</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-[#f59e0b]">Vision & Mission</span>
          </h2>

          {/* Subtitle Heartbeat Line Divider */}
          <div className="flex items-center justify-center gap-3 pt-1 opacity-75">
            <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <Activity className="w-4 h-4 text-[#d97706]" />
            <div className="h-[1.5px] w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </ScrollReveal>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* OUR VISION CARD */}
          <ScrollReveal variant="fade-right" delay={0.2} className="h-full">
            <div className="group relative h-full">
              {/* Outer Glowing Border Aura on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs pointer-events-none" />

              <div className="p-8 sm:p-10 rounded-[32px] bg-white/95 backdrop-blur-xl border border-amber-200/90 group-hover:border-amber-400/80 shadow-xl shadow-amber-950/5 group-hover:shadow-[0_20px_50px_rgba(217,119,6,0.18)] group-hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between space-y-6 h-full border-l-4 border-l-[#f59e0b] transition-all duration-500 z-10">
                
                {/* Background Ambient Glow on Hover */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Header Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#d97706] to-[#f59e0b] text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight group-hover:text-[#d97706] transition-colors duration-300">
                        Our Vision
                      </h3>
                      <div className="h-0.5 w-10 group-hover:w-24 bg-[#f59e0b] mt-1 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    <p>
                      To become a trusted healthcare distribution partner across India by delivering advanced surgical implant solutions, embracing innovation, and building meaningful partnerships with healthcare professionals.
                    </p>
                    <p>
                      We aim to contribute towards improved patient care by supporting medical excellence through reliable healthcare solutions.
                    </p>
                  </div>
                </div>

                {/* Bottom Badge Pill */}
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 group-hover:border-amber-400/80 group-hover:bg-amber-100/50 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-all duration-300 relative z-10">
                  <div className="w-8 h-8 rounded-xl bg-amber-100/90 text-[#d97706] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-4.5 h-4.5 text-[#d97706]" />
                  </div>
                  <span>
                    <strong className="text-[#d97706]">Empowering</strong> Indian Healthcare Distribution
                  </span>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* OUR MISSION CARD */}
          <ScrollReveal variant="fade-left" delay={0.3} className="h-full">
            <div className="group relative h-full">
              {/* Outer Glowing Border Aura on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] rounded-[34px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs pointer-events-none" />

              <div className="p-8 sm:p-10 rounded-[32px] bg-white/95 backdrop-blur-xl border border-amber-200/90 group-hover:border-amber-400/80 shadow-xl shadow-amber-950/5 group-hover:shadow-[0_20px_50px_rgba(217,119,6,0.18)] group-hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between space-y-6 h-full border-r-4 border-t-4 border-r-[#f59e0b] border-t-[#f59e0b] transition-all duration-500 z-10">
                
                {/* Background Ambient Glow on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Header Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#d97706] to-[#f59e0b] text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight group-hover:text-[#d97706] transition-colors duration-300">
                        Our Mission
                      </h3>
                      <div className="h-0.5 w-10 group-hover:w-24 bg-[#f59e0b] mt-1 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Lead Text */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    At Vartitva Health, our mission is to provide hospitals and surgeons with dependable orthopaedic, spine, neurology, and joint replacement implant solutions while ensuring:
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-3 pt-1">
                    {missionBullets.map((bullet, idx) => (
                      <li key={idx} className="group/item flex items-center gap-3 text-slate-700 text-xs sm:text-sm font-medium pb-2 border-b border-amber-100/70 last:border-0 last:pb-0 hover:text-slate-900 transition-colors">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#d97706] flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="group-hover/item:translate-x-1 transition-transform duration-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* BOTTOM ROW: 5 Features Horizontal Bar */}
        <ScrollReveal variant="fade-up" delay={0.4} className="mt-14 relative z-10">
          <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-amber-200/90 hover:border-amber-400/80 shadow-xl shadow-amber-950/5 hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x divide-amber-200/70">
              
              {/* 1. Trusted Partnerships */}
              <div className="group/feat lg:px-4 p-2 rounded-2xl hover:bg-amber-50/60 transition-colors duration-300 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 group-hover/feat:border-amber-400 group-hover/feat:bg-[#d97706] group-hover/feat:text-white flex items-center justify-center text-[#d97706] flex-shrink-0 transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/feat:text-[#d97706] transition-colors duration-300 leading-tight">
                    Trusted Partnerships
                  </h4>
                </div>
              </div>

              {/* 2. Reliable Solutions */}
              <div className="group/feat lg:px-4 p-2 rounded-2xl hover:bg-amber-50/60 transition-colors duration-300 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 group-hover/feat:border-amber-400 group-hover/feat:bg-[#d97706] group-hover/feat:text-white flex items-center justify-center text-[#d97706] flex-shrink-0 transition-all duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/feat:text-[#d97706] transition-colors duration-300 leading-tight">
                    Reliable Solutions
                  </h4>
                </div>
              </div>

              {/* 3. Dedicated Support */}
              <div className="group/feat lg:px-4 p-2 rounded-2xl hover:bg-amber-50/60 transition-colors duration-300 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 group-hover/feat:border-amber-400 group-hover/feat:bg-[#d97706] group-hover/feat:text-white flex items-center justify-center text-[#d97706] flex-shrink-0 transition-all duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/feat:text-[#d97706] transition-colors duration-300 leading-tight">
                    Dedicated Support
                  </h4>
                </div>
              </div>

              {/* 4. Driven by Innovation */}
              <div className="group/feat lg:px-4 p-2 rounded-2xl hover:bg-amber-50/60 transition-colors duration-300 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 group-hover/feat:border-amber-400 group-hover/feat:bg-[#d97706] group-hover/feat:text-white flex items-center justify-center text-[#d97706] flex-shrink-0 transition-all duration-300">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/feat:text-[#d97706] transition-colors duration-300 leading-tight">
                    Driven by Innovation
                  </h4>
                </div>
              </div>

              {/* 5. Committed to Better Outcomes */}
              <div className="group/feat lg:px-4 p-2 rounded-2xl hover:bg-amber-50/60 transition-colors duration-300 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 group-hover/feat:border-amber-400 group-hover/feat:bg-[#d97706] group-hover/feat:text-white flex items-center justify-center text-[#d97706] flex-shrink-0 transition-all duration-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover/feat:text-[#d97706] transition-colors duration-300 leading-tight">
                    Committed to Better Outcomes
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
