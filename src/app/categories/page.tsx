"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Activity,
  Layers,
  Sparkles,
  PhoneCall,
  Award,
  Building2,
  FileText,
  Truck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingContact from "@/components/FloatingContact";
import { CATEGORIES_DATA } from "@/data/categories";

export default function CategoriesIndexPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
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

  const handleOpenQuote = (categoryTitle?: string) => {
    setSelectedCategory(categoryTitle || "Category Solutions");
    setQuoteModalOpen(true);
  };

  const categoriesList = Object.values(CATEGORIES_DATA);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#0236A0] selection:text-white">
      {/* Sticky Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* Categories Hero Header */}
        <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-slate-950 text-white overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-amber-300/80 mb-6">
              <Link href="/" className="hover:text-amber-200 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/60" />
              <span className="text-amber-200 font-bold">Categories</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Healthcare Specialities & Portfolios</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-4 leading-tight">
                Implant <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Categories</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mt-3">
                Explore our dedicated category pages for trauma, joint restoration, and spine solutions. Developed to support healthcare professionals manage procedures with dependable, high-quality products.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleOpenQuote()}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center gap-2.5"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>Inquire All Categories</span>
                </button>

                <a
                  href="tel:+919958813695"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-bold text-sm backdrop-blur-md hover:border-amber-400 hover:text-amber-300 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>+91 9958813695</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories List Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-[#b45309] text-xs font-extrabold uppercase tracking-wider border border-amber-300">
                <Building2 className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Specialized Medical Portfolios</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Category Solutions
              </h2>
              <p className="text-sm text-slate-600">
                Select a category below to view detailed procedural options, indications, specifications, and clinical applications.
              </p>
            </div>

            <div className="space-y-12">
              {categoriesList.map((cat, idx) => (
                <div
                  key={cat.slug}
                  className="group rounded-3xl bg-white border border-amber-200/90 hover:border-amber-400 shadow-xl shadow-amber-950/5 hover:shadow-2xl transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[360px] bg-slate-950 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-extrabold backdrop-blur-md">
                        {cat.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white to-amber-50/20">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d97706] to-[#f59e0b] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                          0{idx + 1}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#d97706] transition-colors">
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-sm font-semibold text-[#b45309]">
                        {cat.subtitle}
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                        {cat.description}
                      </p>

                      {/* Systems Pills */}
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                          Included Systems & Procedural Options:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.implantSystems.map((sys, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 rounded-lg bg-white border border-amber-200 text-xs font-bold text-slate-800 shadow-xs"
                            >
                              {sys.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-6 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 group/btn"
                      >
                        <span>View {cat.title} Page</span>
                        <ArrowRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={() => handleOpenQuote(cat.title)}
                        className="px-5 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#b45309] font-extrabold text-xs border border-amber-200 transition-colors"
                      >
                        Request Category Catalogue
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Hospital Partnership Banner */}
        <section className="py-14 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Direct B2B Distribution for Hospitals & Healthcare Institutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Delivering certified surgical systems with complete batch traceability and dedicated emergency supply across North India and Pan-India.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenQuote()}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 font-black text-sm shadow-xl hover:scale-105 transition-transform"
              >
                Partner With Vartitva Health
              </button>
              <a
                href="tel:+919958813695"
                className="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:border-amber-400 hover:text-amber-300 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call +91 9958813695</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      <FloatingContact onOpenQuote={() => handleOpenQuote()} />

      {/* Quote Modal */}
      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultSpeciality={selectedCategory}
        />
      )}
    </div>
  );
}
