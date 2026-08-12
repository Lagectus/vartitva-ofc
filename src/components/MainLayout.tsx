"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMissionSection from "@/components/VisionMissionSection";
import QualityCommitmentSection from "@/components/QualityCommitmentSection";
import MedicalProcess from "@/components/MedicalProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const QuoteModal = dynamic(() => import("./QuoteModal"));

export default function MainLayout() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState<string>("Orthopaedic Implants");

  const handleOpenQuote = (specialityName?: string) => {
    if (specialityName) {
      setSelectedSpeciality(specialityName);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#d97706]/20 selection:text-[#b45309]">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections in Exact User Requested Order */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection onOpenQuote={() => handleOpenQuote()} />

        {/* Trust Bar */}
        <TrustBar />

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

        {/* Section 7: Our Process */}
        <MedicalProcess />

        {/* Section 9: Partner With Vartitva Health */}
        <CTASection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

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

