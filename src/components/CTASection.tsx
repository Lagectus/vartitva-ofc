"use client";

import Image from "next/image";
import { PhoneCall, Sparkles, ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  onOpenQuote: () => void;
}

export default function CTASection({ onOpenQuote }: CTASectionProps) {
  return (
    <section id="partner" className="py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Image & CTA Card Container */}
        <ScrollReveal variant="zoom-in" duration={0.7}>
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-[#78350f] to-slate-950 text-white shadow-2xl overflow-hidden group border border-amber-500/30">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* LEFT: Partnership Image Frame */}
              <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                <Image
                  src="/images/partner_indian_v2.jpg"
                  alt="Partner With Vartitva Health"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                  className="object-cover object-[40%_top] transition-transform duration-700 opacity-100"
                />
                
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

                <h3 className="text-lg sm:text-2xl font-bold text-amber-200">
                  Let's Build Better Healthcare Together
                </h3>

                <div className="space-y-3 text-base sm:text-lg text-amber-50/90 font-normal leading-relaxed">
                  <p className="text-[#fde047] font-extrabold text-base sm:text-lg">
                    Looking for a reliable partner for surgical implant solutions?
                  </p>
                  <p className="text-slate-200 text-sm sm:text-base font-medium">
                    Connect with Vartitva Health Private Limited for product enquiries and professional support.
                  </p>
                </div>

                {/* Tagline Banner */}
                <div className="p-3.5 rounded-xl bg-amber-500/20 backdrop-blur-md border border-amber-400/40 font-extrabold text-xs sm:text-sm tracking-wide text-amber-200 flex items-center justify-between">
                  <span>Trusted Support. Better Connections. Stronger Healthcare.</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-xs sm:text-sm hover:shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>

                  <a
                    href="tel:9958813695"
                    className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Contact Us</span>
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



