"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  FileText,
  Truck,
  PhoneCall,
  Sparkles,
  Award,
  ArrowRight,
  Activity,
  Layers,
  Building2,
  Stethoscope,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingContact from "@/components/FloatingContact";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";
import { CATEGORIES_DATA, getCategoryBySlug } from "@/data/categories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedInquirySubject, setSelectedInquirySubject] = useState(category.title);
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

  const handleOpenInquiry = (subjectName?: string) => {
    if (subjectName) {
      setSelectedInquirySubject(`${category.title} - ${subjectName}`);
    } else {
      setSelectedInquirySubject(category.title);
    }
    setQuoteModalOpen(true);
  };

  // Other categories for easy navigation
  const otherCategories = Object.values(CATEGORIES_DATA).filter(
    (c) => c.slug !== category.slug
  );

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#0236A0] selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={() => handleOpenInquiry()} />

      <main>
        {/* Category Hero Header */}
        <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-slate-950 text-white overflow-hidden">
          {/* Background Image Vignette */}
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="100vw"
              className="object-cover filter brightness-[0.8]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
          </div>

          {/* Soft Glow Accents */}
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-amber-300/80 mb-6">
              <Link href="/" className="hover:text-amber-200 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
              <Link href="/categories" className="hover:text-amber-200 transition-colors">
                Categories
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
              <span className="text-amber-200 font-bold">{category.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal variant="fade-up">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>{category.badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4 leading-tight">
                    {category.title}
                  </h1>

                  <p className="text-lg sm:text-xl font-semibold text-amber-300/90 mt-2">
                    {category.subtitle}
                  </p>

                  <div className="mt-4 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
                    <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                      {category.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => handleOpenInquiry()}
                      className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2.5"
                    >
                      <FileText className="w-4 h-4 text-slate-950" />
                      <span>Request Category Catalogue</span>
                    </button>

                    <a
                      href="tel:+919958813695"
                      className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-sm backdrop-blur-md hover:border-amber-400 hover:text-amber-300 transition-all flex items-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-amber-400" />
                      <span>Emergency Supply: +91 9958813695</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Hero Specs Card */}
              <div className="lg:col-span-5">
                <ScrollReveal variant="zoom-in" delay={0.2}>
                  <div className="p-6 rounded-3xl bg-slate-900/85 border border-amber-500/30 backdrop-blur-xl shadow-2xl space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-white">Technical & Compliance Specs</h2>
                        <p className="text-[11px] text-amber-300/80">Vartitva Quality Assurance</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.keySpecs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs"
                        >
                          <span className="text-slate-400 font-medium">{spec.label}:</span>
                          <span className="text-amber-200 font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-center">
                      <p className="text-[11px] text-slate-400 font-medium">
                        Direct B2B hospital distribution with full batch certification.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300">
                <Building2 className="w-3.5 h-3.5 text-[#d97706]" />
                <span>B2B Healthcare Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                About Our <span className="text-[#f59e0b]">{category.title}</span>
              </h2>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                {category.overviewParagraphs.map((para, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border ${
                      idx === 0
                        ? "bg-gradient-to-r from-amber-50 to-orange-50/40 border-amber-300/80 shadow-sm text-slate-900 font-medium"
                        : "bg-amber-50/30 border-amber-100/80 shadow-xs text-slate-700"
                    }`}
                  >
                    <p>{para}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Procedural Solutions & Systems Grid */}
        <section className="py-16 bg-amber-50/30 border-t border-b border-amber-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-[#b45309] text-xs font-bold uppercase tracking-wider border border-amber-300">
                <Layers className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Category Portfolio & Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {category.title} Options
              </h2>

              <p className="text-sm text-slate-600">
                Comprehensive range of dependable solutions developed for practical procedural use and consistent clinical performance.
              </p>
            </ScrollReveal>

            <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.implantSystems.map((system, idx) => (
                <ScrollRevealItem key={idx} variant="fade-up" className="h-full">
                  <div className="group p-8 rounded-3xl bg-white border border-amber-200/90 hover:border-amber-400 shadow-xl shadow-amber-950/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-[#d97706] text-xs font-extrabold border border-amber-200">
                          {system.specs}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {system.material}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#d97706] transition-colors">
                        {system.name}
                      </h3>

                      <p className="text-xs font-bold text-[#b45309] bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
                        Clinical Application: {system.indication}
                      </p>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                          Key Features & Practical Options:
                        </h4>
                        <ul className="space-y-2">
                          {system.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <Activity className="w-4 h-4 text-[#d97706]" />
                        <span>Surgical Technique Support</span>
                      </div>

                      <button
                        onClick={() => handleOpenInquiry(system.name)}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-xs hover:shadow-lg transition-all flex items-center gap-2 group/btn"
                      >
                        <span>Inquire Category Options</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </ScrollRevealStagger>
          </div>
        </section>

        {/* Quality Highlights Section */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-bold uppercase tracking-wider border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Quality & Dependable Clinical Use</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why Healthcare Professionals Trust Our {category.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.qualityHighlights.map((q, idx) => (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                  <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-3 text-left hover:border-amber-400 transition-colors h-full flex flex-col justify-start">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-[#d97706] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{q.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{q.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Category Pages */}
        {otherCategories.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#b45309] text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Other Speciality Portfolios</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Explore Other Categories
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherCategories.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/categories/${other.slug}`}
                    className="p-6 rounded-2xl bg-white border border-amber-200/80 hover:border-amber-400 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-[#b45309] border border-amber-200">
                          {other.badge}
                        </span>
                        <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#d97706] transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {other.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-[#d97706] flex items-center gap-1">
                      <span>View Category Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Emergency Supply & OR Support Banner */}
        <section className="py-12 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                Need Hospital Supply or Catalogue for {category.title}?
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-900/80">
                Fast B2B healthcare distribution across Delhi, Gurugram, Sonipat, Panipat, Faridabad, and Pan-India.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => handleOpenInquiry()}
                className="px-6 py-3 rounded-xl bg-slate-950 text-white font-extrabold text-xs hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Contact Hospital Sales</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenInquiry()} />

      <FloatingContact onOpenQuote={() => handleOpenInquiry()} />

      {/* Quote / Spec Sheet Modal */}
      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultSpeciality={selectedInquirySubject}
        />
      )}
    </div>
  );
}
