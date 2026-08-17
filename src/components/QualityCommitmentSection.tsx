"use client";

import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2, Truck, Users, RefreshCw, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function QualityCommitmentSection() {
  const qualityPoints = [
    {
      title: "Reliable product selection",
      icon: ShieldCheck,
    },
    {
      title: "Consistent service standards",
      icon: Award,
    },
    {
      title: "Timely distribution",
      icon: Truck,
    },
    {
      title: "Professional coordination",
      icon: Users,
    },
    {
      title: "Continuous improvement",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Visual Image Frame (Height matches right column) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fde047] shadow-xl overflow-hidden group">
                <div className="relative rounded-[22px] overflow-hidden h-[340px] sm:h-[380px] flex flex-col justify-end">
                  
                  {/* Generated Image Background */}
                  <Image
                    src="/images/quality_commitment_lab.png"
                    alt="Quality Commitment Medical Inspection Lab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-amber-400/30 text-white text-xs font-bold">
                      <Award className="w-4 h-4 text-amber-400" />
                      Quality Assurance
                    </div>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="p-5 relative z-10 space-y-1 text-white">
                    <p className="text-xs text-amber-300 font-extrabold uppercase tracking-wider">
                      Quality That Builds Confidence
                    </p>
                    <h4 className="text-base font-bold text-amber-100">Uncompromising Standards</h4>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Compact Bullet Points Container (Matches Left Image Height) */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center space-y-5 text-left">
            
            <ScrollReveal variant="fade-left" delay={0.3}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 text-[#d97706] text-xs font-extrabold uppercase tracking-wider border border-amber-200">
                  <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                  <span>Quality Commitment</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Our Commitment to Quality
                </h2>

                <h3 className="text-lg sm:text-xl font-bold text-[#b45309]">
                  Quality That Builds Confidence
                </h3>
              </div>
            </ScrollReveal>

            {/* Compact Bullet Points List */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <ul className="space-y-2.5 pt-1">
                {qualityPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 hover:border-amber-400 transition-all flex items-center gap-3 shadow-xs group"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-slate-950 transition-colors">
                      {point.title}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}


