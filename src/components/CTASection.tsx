"use client";

import Image from "next/image";
import { PhoneCall, Sparkles, ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  onOpenQuote: () => void;
}

export default function CTASection({ onOpenQuote }: CTASectionProps) {
  return (
    <section id="partner" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Image & CTA Card Container */}
        <ScrollReveal variant="zoom-in" duration={0.7}>
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-[#78350f] to-slate-950 text-white shadow-2xl overflow-hidden group border border-amber-500/30">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* LEFT: Partnership Image Frame */}
              <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                <Image
                  src="/images/partner_healthcare_handshake.png"
                  alt="Partner With Vartitva Health"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/30 flex items-center gap-1.5">
                    <Handshake className="w-4 h-4 text-amber-400" />
                    Stronger Partnerships
                  </span>
                </div>
              </div>

              {/* RIGHT: Verbatim Text & Action Buttons */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 text-left relative z-10">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Collaborate With Us
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Partner With Vartitva Health
                </h2>

                <h3 className="text-lg sm:text-xl font-bold text-amber-200">
                  Reliable Surgical Solutions for Healthcare Professionals
                </h3>

                <div className="space-y-3 text-sm sm:text-base text-amber-50/90 font-normal leading-relaxed">
                  <p>
                    Searching for a trusted partner for orthopaedic, spine, neurology, and joint replacement implant solutions? Vartitva Health Private Limited is here to support hospitals, surgeons, and healthcare institutions with reliable products and professional assistance.
                  </p>

                  <p>
                    Connect with us to discuss your requirements and explore healthcare solutions designed to support better surgical outcomes.
                  </p>
                </div>

                {/* Tagline Banner */}
                <div className="p-3.5 rounded-2xl bg-amber-500/20 backdrop-blur-md border border-amber-400/30 font-extrabold text-xs sm:text-sm tracking-wide text-amber-100 flex items-center justify-between">
                  <span>Trusted Support. Reliable Solutions. Stronger Healthcare Partnerships.</span>
                  <span className="font-serif italic text-amber-300 hidden sm:inline">॥ तत्परिवर्तनं भव ॥</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-xs sm:text-sm hover:shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
                  >
                    <span>Contact Vartitva Health Private Limited</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <a
                    href="tel:9958813695"
                    className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Call +91 9958813695</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


