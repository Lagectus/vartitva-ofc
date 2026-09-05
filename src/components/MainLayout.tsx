"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMissionSection from "@/components/VisionMissionSection";
import QualityCommitmentSection from "@/components/QualityCommitmentSection";
import CoverageMapSection from "@/components/CoverageMapSection";
import MedicalProcess from "@/components/MedicalProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const QuoteModal = dynamic(() => import("./QuoteModal"));

export default function MainLayout() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>("Orthopaedic Implants");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open Quote Form Modal at 50% Scroll Depth
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

      {/* Main Content Sections in Exact User Requested Order */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection onOpenQuote={() => handleOpenQuote()} />

        {/* Section 2: About Vartitva Health */}
        <AboutSection />

        {/* Section 3: Why Choose Vartitva Health? */}
        <WhyChooseUs />

        {/* Section 4: Our Healthcare Solutions */}
        <SpecialitiesSection onOpenQuote={(spec) => handleOpenQuote(spec)} />

        {/* Section 5: Our Vision & Our Mission */}
        <VisionMissionSection />

        {/* Section 6: Our Commitment to Quality */}
        <QualityCommitmentSection />

        {/* Section 7: Areas We Serve */}
        <CoverageMapSection />

        {/* Section 8: Our Process */}
        <MedicalProcess />

        {/* Section 9: Partner With Vartitva Health */}
        <CTASection onOpenQuote={() => handleOpenQuote()} />
      </main>


      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Right Side Floating Contact & Quote Actions */}
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

