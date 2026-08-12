"use client";

import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("./MainLayout"), {
  ssr: false,
});

export default function ClientWrapper() {
  return <MainLayout />;
}
