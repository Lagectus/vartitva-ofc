"use client";

import { useEffect, useState, useRef } from "react";
import { Building, Users, MapPin, Award } from "lucide-react";

export default function NumbersSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 150,
      suffix: "+",
      label: "Hospitals Served",
      description: "Leading super-speciality hospitals across Delhi-NCR",
      icon: Building,
      color: "text-[#0f4c81]",
    },
    {
      target: 500,
      suffix: "+",
      label: "Healthcare Partners",
      description: "Orthopedic, Spine & Neuro surgeons trusting our solutions",
      icon: Users,
      color: "text-[#2563eb]",
    },
    {
      target: 3,
      suffix: " Hubs",
      label: "Primary NCR Coverage",
      description: "Dedicated supply channels in Delhi, Gurugram, Sonipat, Panipat & Faridabad",
      icon: MapPin,
      color: "text-[#e11d48]",
    },
    {
      target: 10,
      suffix: "+ Yrs",
      label: "Years of Excellence",
      description: "Decades of commitment to precision surgical distribution",
      icon: Award,
      color: "text-[#0f4c81]",
    },
  ];

  return (
    <section ref={sectionRef} className="py-14 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl text-center space-y-4 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 mx-auto flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    <Counter target={stat.target} inView={inView} />
                    <span className={stat.color}>{stat.suffix}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{stat.label}</h3>
                  <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}
