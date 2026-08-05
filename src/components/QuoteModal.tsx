"use client";

import { useState } from "react";
import { X, CheckCircle, PhoneCall, Send, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpeciality?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultSpeciality = "Orthopaedics" }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    speciality: defaultSpeciality,
    city: "Delhi",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0f4c81", "#2563eb", "#00b8a9"],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Gradient Line */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0f4c81] via-[#2563eb] to-[#00b8a9]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0f4c81] to-[#2563eb] flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              V
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Request Implant Quotation
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00b8a9]" />
                Direct Hospital & Surgeon Procurement Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#00b8a9]/10 text-[#00b8a9] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you for contacting <span className="font-semibold text-[#0f4c81]">Vartitva Health</span>. Our surgical implant specialist will review your request and get back to you within 30 minutes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4 text-left">
              <div>
                <p className="text-xs text-slate-500 font-medium">Need Immediate Surgical Supply?</p>
                <p className="text-sm font-bold text-slate-900">+91 9958813695</p>
              </div>
              <a
                href="tel:9958813695"
                className="px-4 py-2 bg-[#0f4c81] text-white rounded-xl text-xs font-semibold hover:bg-[#2563eb] transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Call Now
              </a>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name / Doctor Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Hospital / Clinic Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Max / Fortis / Medanta"
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="9958813695"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / Location *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all bg-white"
                >
                  <option value="Delhi">Delhi</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Sonipat">Sonipat</option>
                  <option value="Other NCR">Other NCR Location</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="doctor@hospital.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Implant Category *
                </label>
                <select
                  value={formData.speciality}
                  onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all bg-white font-medium text-[#0f4c81]"
                >
                  <option value="Orthopaedics">Orthopaedic Implants</option>
                  <option value="Neurology">Neurology Implants</option>
                  <option value="Spine">Spine Implants</option>
                  <option value="Joint Replacement">Joint Replacement Implants</option>
                  <option value="General Surgical">General Surgical Solutions</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Requirement / Procedure Details
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific implant specs, sizing, quantity, or urgency..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0f4c81] via-[#2563eb] to-[#00b8a9] text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Submit Direct Quotation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
