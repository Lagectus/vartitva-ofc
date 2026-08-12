"use client";

import { Star, Quote, Building2, Stethoscope, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Vartitva Health has redefined emergency surgical implant distribution for our hospital. Their response time during complex orthopaedic trauma procedures in Gurugram is unmatched.",
      author: "Dr. Vikramaditya Singh",
      role: "Senior Orthopaedic Trauma Surgeon",
      hospital: "Max Healthcare, Gurugram",
      rating: 5,
      avatarBg: "bg-[#0f4c81]",
    },
    {
      quote:
        "The precision of their spine cages and polyaxial pedicle screws is outstanding. Having their technical team available to consult on sizing tray sets makes surgeries far smoother.",
      author: "Dr. Ananya Roy",
      role: "Director of Neurosurgery & Spine",
      hospital: "Fortis Escorts, Delhi",
      rating: 5,
      avatarBg: "bg-[#2563eb]",
    },
    {
      quote:
        "From procurement compliance to transparent billing and CDSCO batch tracking, Vartitva Health is our most reliable distribution partner across Sonipat & Delhi.",
      author: "Rajesh Malhotra",
      role: "Head of Hospital Procurement",
      hospital: "Medanta Medicity Network",
      rating: 5,
      avatarBg: "bg-[#e11d48]",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4c81]/5 text-[#0f4c81] text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-[#2563eb]" />
            Clinical Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted By Leading <br />
            <span className="text-gradient-medical">Surgeons & Healthcare Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Hear what top medical professionals say about our surgical supply speed and implant quality.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:border-[#2563eb]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-2xl ${item.avatarBg} text-white font-bold text-base flex items-center justify-center shadow-md`}
                >
                  {item.author.charAt(4)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.author}</h3>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                  <p className="text-[11px] font-bold text-[#0f4c81] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-[#e11d48]" /> {item.hospital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
