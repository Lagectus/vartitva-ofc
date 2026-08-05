import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vartitva Health Pvt. Ltd. | Precision Surgical Implant Solutions",
  description:
    "India's premier distributor of world-class Orthopaedic Implants, Neurology Implants, Spine Implants, and Joint Replacement Solutions serving Delhi, Gurugram, and Sonipat.",
  keywords: [
    "Vartitva Health",
    "Orthopaedic Implants Delhi",
    "Neurology Implants Gurugram",
    "Spine Implants Sonipat",
    "Joint Replacement Implants NCR",
    "Surgical Implants Distributor",
    "Healthcare Distribution India",
  ],
  authors: [{ name: "Vartitva Health Private Limited" }],
  openGraph: {
    title: "Vartitva Health Pvt. Ltd. | Surgical Implant Distribution",
    description:
      "Advancing Healthcare with Precision & Innovation. Trusted distributor of Orthopaedic, Spine, Neurology & Joint Implants.",
    url: "https://vartitvahealth.com",
    siteName: "Vartitva Health",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 selection:bg-[#00b8a9]/20 selection:text-[#0f4c81] antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
