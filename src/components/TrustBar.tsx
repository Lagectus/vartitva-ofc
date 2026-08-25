"use client";

import { MapPin, ShieldCheck, Truck, Stethoscope } from "lucide-react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

export default function TrustBar() {
  const trustItems = [
    {
      icon: MapPin,
      title: "Serving Key Hubs",
      subtitle: "Delhi • Gurugram • Sonipat • Panipat • Faridabad",
      color: "text-[#d97706]",
      bgColor: "bg-amber-50/90",
      borderColor: "border-amber-200/80",
    },
    {
      icon: ShieldCheck,
      title: "Premium Surgical Solutions",
      subtitle: "Orthopaedic, Spine & Neuro Implants",
      color: "text-[#b45309]",
      bgColor: "bg-amber-50/90",
      borderColor: "border-amber-200/80",
    },
    {
      icon: Stethoscope,
      title: "Trusted by Surgeons",
      subtitle: "Preferred Partner for Leading Hospitals",
      color: "text-[#d97706]",
      bgColor: "bg-amber-50/90",
      borderColor: "border-amber-200/80",
    },
    {
      icon: Truck,
      title: "Fast Distribution Network",
      subtitle: "Rapid Delivery & Cold-Chain Safety",
      color: "text-[#b45309]",
      bgColor: "bg-amber-50/90",
      borderColor: "border-amber-200/80",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal variant="zoom-in" duration={0.65}>
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-xl shadow-amber-950/5">
          <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollRevealItem key={index} variant="fade-up" className="h-full">
                  <div className="group p-5 rounded-2xl bg-amber-50/40 hover:bg-white border border-amber-100/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 h-full">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </ScrollRevealStagger>
        </div>
      </ScrollReveal>
    </section>
  );
}
