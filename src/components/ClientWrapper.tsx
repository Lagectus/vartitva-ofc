"use client";

import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("./MainLayout"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0f4c81] via-[#e11d48] to-[#f43f5e] flex items-center justify-center text-white font-extrabold text-2xl shadow-xl animate-pulse">
          V
        </div>
        <p className="text-xs uppercase font-bold tracking-widest text-[#0f4c81]">
          Loading Vartitva Health...
        </p>
      </div>
    </div>
  ),
});

export default function ClientWrapper() {
  return <MainLayout />;
}
