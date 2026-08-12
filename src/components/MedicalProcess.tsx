"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, PackageCheck, Truck, Headphones, Handshake, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function MedicalProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const maxScroll = Math.max(0, trackWidth - windowWidth);
        setScrollRange(maxScroll);
      }
    };

    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll into horizontal translation, stopping card 05 right at the edge of the viewport
  const x = useTransform(scrollYProgress, [0.05, 0.92], [0, -scrollRange]);

  const steps = [
    {
      number: "01",
      title: "Understanding Requirements",
      icon: MessageSquare,
      description:
        "We begin by understanding the specific needs of hospitals and surgeons to provide suitable implant solutions aligned with clinical requirements.",
      tag: "Clinical Consultation",
    },
    {
      number: "02",
      title: "Product Selection & Coordination",
      icon: PackageCheck,
      description:
        "Our team focuses on delivering appropriate healthcare solutions through careful product selection and seamless coordination with trusted partners.",
      tag: "Precision Matching",
    },
    {
      number: "03",
      title: "Timely Distribution Support",
      icon: Truck,
      description:
        "We ensure efficient handling and timely delivery to help healthcare professionals manage surgical requirements effectively.",
      tag: "Express Logistics",
    },
    {
      number: "04",
      title: "Continuous Assistance",
      icon: Headphones,
      description:
        "Our support extends beyond product delivery through professional coordination, responsive communication, and long-term partnership building.",
      tag: "24/7 Surgical Support",
    },
    {
      number: "05",
      title: "Building Long-Term Relationships",
      icon: Handshake,
      description:
        "We believe in creating lasting relationships with hospitals and surgeons through trust, transparency, and consistent service.",
      tag: "Institutional Trust",
    },
  ];

  return (
    <section ref={targetRef} id="process" className="relative h-[250vh] sm:h-[290vh] bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-10 sm:py-14 overflow-hidden">
        
        {/* Ambient Decorative Accents */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center space-y-3">
          <ScrollReveal variant="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-[#d97706] text-xs font-extrabold uppercase tracking-wider border border-amber-300/80 shadow-sm">
              <Truck className="w-4 h-4 text-[#d97706]" />
              Interactive Process Flow
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Process
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-base sm:text-xl font-bold text-[#b45309] max-w-2xl mx-auto">
              A Reliable Approach Towards Better Healthcare Support
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative w-full z-10 my-auto py-4">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 px-6 sm:px-16 w-max cursor-grab active:cursor-grabbing"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="w-[310px] sm:w-[410px] shrink-0 flex-shrink-0 p-8 rounded-3xl bg-white border-2 border-amber-200/80 hover:border-[#d97706] shadow-xl shadow-amber-950/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Top Card Glow Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-6">
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/90 shadow-sm flex items-center justify-center text-[#d97706] group-hover:scale-110 group-hover:bg-[#d97706] group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-amber-300/90 group-hover:text-[#d97706] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#d97706] transition-colors leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-[#b45309]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                      <span>{step.tag}</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-600/90 group-hover:translate-x-1 transition-transform">
                      Step {step.number} of 05 →
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
