"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090d16] text-white pt-20 pb-12 relative overflow-hidden border-t border-amber-900/30">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <ScrollReveal variant="fade-up" duration={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Brand Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Logo Image - Uncropped */}
              <Link href="/" className="inline-block group">
                <Image
                  src="/images/logo.avif"
                  alt="Vartitva Health Logo"
                  width={280}
                  height={155}
                  sizes="(max-width: 640px) 200px, 280px"
                  loading="lazy"
                  className="h-16 sm:h-20 w-auto object-contain rounded-2xl shadow-xl border border-amber-400/50 group-hover:scale-105 transition-transform"
                />
              </Link>

              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Dedicated to strengthening healthcare by delivering advanced trauma, joint replacement, spine, and arthroscopy implant solutions across Delhi, Gurugram, Sonipat, Panipat, Faridabad, and India.
              </p>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/20 space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-amber-100">
                  <Phone className="w-4 h-4 text-[#d97706]" />
                  <a href="tel:9958813695" className="hover:text-amber-300 font-bold transition-colors">
                    +91 9958813695
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-amber-100">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <a href="mailto:Vartitvahealth@gmail.com" className="hover:text-amber-300 font-semibold transition-colors">
                    Vartitvahealth@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#f59e0b]" />
                  <span>Delhi • Gurugram • Sonipat • Panipat • Faridabad</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-200">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li>
                  <Link href="/about" className="hover:text-amber-300 transition-colors">About Vartitva</Link>
                </li>
                <li>
                  <Link href="/#why-choose-us" className="hover:text-amber-300 transition-colors">Why Choose Us</Link>
                </li>
                <li>
                  <Link href="/#specialities" className="hover:text-amber-300 transition-colors">Healthcare Solutions</Link>
                </li>
                <li>
                  <Link href="/#vision-mission" className="hover:text-amber-300 transition-colors">Vision & Mission</Link>
                </li>
                <li>
                  <Link href="/#quality" className="hover:text-amber-300 transition-colors">Commitment to Quality</Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-amber-300 transition-colors">Our Process</Link>
                </li>
              </ul>
            </div>

            {/* Healthcare Solutions */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-200">
                Categories
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li>
                  <Link href="/categories/trauma-implants" className="hover:text-amber-300 transition-colors">
                    Trauma Implants
                  </Link>
                </li>
                <li>
                  <Link href="/categories/joint-implants" className="hover:text-amber-300 transition-colors">
                    Joints Implants
                  </Link>
                </li>
                <li>
                  <Link href="/categories/spine-implants" className="hover:text-amber-300 transition-colors">
                    Spine Implants
                  </Link>
                </li>
                <li>
                  <Link href="/categories/arthroscopy-implants" className="hover:text-amber-300 transition-colors">
                    Arthroscopy Implants
                  </Link>
                </li>
                <li className="pt-1">
                  <Link href="/categories" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                    → All Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter / CTA */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-200">
                Partner With Us
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with Vartitva Health Private Limited for reliable surgical implant distribution.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#d97706] text-slate-950 hover:bg-[#f59e0b] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-slate-950 text-xs font-black shadow-md hover:opacity-95 transition-opacity"
              >
                Contact Vartitva Health
              </button>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Vartitva Health Private Limited. All rights reserved.</p>
            <p className="text-[11px] text-amber-300/80 font-medium">
              Designed & Managed by Promopact Marketing India Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-amber-300 transition-colors cursor-pointer">Driven by Trust</span>
            <span className="hover:text-amber-300 transition-colors cursor-pointer">Guided by Care</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

