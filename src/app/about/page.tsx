"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import QualityCommitmentSection from "@/components/QualityCommitmentSection";
import CoverageMapSection from "@/components/CoverageMapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, ChevronRight, ShieldCheck } from "lucide-react";

const QuoteModal = dynamic(() => import("@/components/QuoteModal"));

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>("Orthopaedic Implants");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAutoOpened) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0 && scrollTop / scrollHeight >= 0.5) {
        const alreadyOpened = sessionStorage.getItem("vartitva_quote_auto_opened");
        if (!alreadyOpened) {
          setQuoteModalOpen(true);
          sessionStorage.setItem("vartitva_quote_auto_opened", "true");
        }
        setHasAutoOpened(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAutoOpened]);

  const handleOpenQuote = (specialityName?: string) => {
    if (specialityName) {
      setSelectedSpeciality(specialityName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#0236A0] selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* Page Hero Banner */}
        <section className="bg-slate-950 text-white pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <ScrollReveal variant="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Supporting Better Healthcare Through Surgical Solutions</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                About <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Vartitva Health</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                At Vartitva Health, we provide orthopaedic, spine, neurology, and joint replacement implant solutions for hospitals, surgeons, and healthcare institutions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 1: Detailed About Section */}
        <AboutSection />

        {/* Section 2: Vision & Mission */}
        <VisionMissionSection />

        {/* Section 4: Commitment to Quality */}
        <QualityCommitmentSection />

        {/* Section 5: Areas We Serve */}
        <CoverageMapSection />

        {/* Section 6: CTA Section */}
        <CTASection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      <FloatingContact onOpenQuote={() => handleOpenQuote()} />

      {/* Direct Quote Request Modal */}
      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultSpeciality={selectedSpeciality}
        />
      )}
    </div>
  );
}
