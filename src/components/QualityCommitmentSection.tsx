"use client";

import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function QualityCommitmentSection() {
  return (
    <section id="quality" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Composite Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-right" delay={0.2}>
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fde047] shadow-2xl overflow-hidden group">
                <div className="relative rounded-[22px] overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end">
                  
                  {/* Generated Image Background */}
                  <Image
                    src="/images/quality_commitment_lab.png"
                    alt="Quality Commitment Medical Inspection Lab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-amber-400/30 text-white text-xs font-bold">
                      <Award className="w-4 h-4 text-amber-400" />
                      Quality Laboratory Sourcing
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-slate-950 text-[10px] font-extrabold uppercase border border-amber-300">
                      ISO Certified
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="p-6 relative z-10 space-y-1 text-white">
                    <p className="text-xs text-amber-300 font-extrabold uppercase tracking-wider">
                      Precision & Safety Assurance
                    </p>
                    <h4 className="text-lg font-bold text-amber-100">Uncompromising Standards</h4>
                    <p className="text-[11px] text-slate-300">
                      Accuracy, consistency, and service excellence for hospitals & surgeons
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Verbatim Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <ScrollReveal variant="fade-left" delay={0.3}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#d97706] text-xs font-extrabold uppercase tracking-wider border border-amber-200">
                  <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                  Uncompromising Standards
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Our Commitment to Quality
                </h2>

                <h3 className="text-xl sm:text-2xl font-bold text-[#b45309]">
                  Delivering Confidence Through Reliable Healthcare Solutions
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.45}>
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                <p className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100/80 shadow-sm">
                  At Vartitva Health, quality is the foundation of our approach. We are committed to providing reliable surgical implant solutions that support healthcare professionals in delivering effective patient care.
                </p>

                <p className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100/80 shadow-sm">
                  From product selection to distribution support, we maintain a focused approach towards accuracy, consistency, and service excellence. We work with trusted healthcare partners to ensure that hospitals and surgeons receive dependable solutions aligned with their clinical requirements.
                </p>

                <p className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100/80 shadow-sm">
                  Our commitment goes beyond product delivery—we believe in building lasting relationships through transparency, timely support, and continuous dedication towards improving healthcare outcomes.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}

