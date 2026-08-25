import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vartitvahealth.com"),
  title: "Vartitva Health Pvt. Ltd. | Precision Surgical Implant Solutions",
  description:
    "India's premier distributor of world-class Trauma Implants, Joint Replacement, Spine Implants, and Arthroscopy Implant Solutions serving Delhi, Gurugram, Sonipat, Panipat, and Faridabad.",
  keywords: [
    "Vartitva Health",
    "Trauma Implants Delhi",
    "Joint Replacement Gurugram",
    "Spine Implants Sonipat",
    "Arthroscopy Implants NCR",
    "Surgical Implants Distributor",
    "Healthcare Distribution India",
  ],
  authors: [{ name: "Vartitva Health Private Limited" }],
  alternates: {
    canonical: "https://vartitvahealth.com",
  },
  openGraph: {
    title: "Vartitva Health Pvt. Ltd. | Surgical Implant Distribution",
    description:
      "Advancing Healthcare with Precision & Innovation. Trusted distributor of Trauma, Joint Replacement, Spine & Arthroscopy Implants.",
    url: "https://vartitvahealth.com",
    siteName: "Vartitva Health",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.avif",
        width: 1200,
        height: 630,
        alt: "Vartitva Health Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vartitva Health Pvt. Ltd. | Precision Surgical Implants",
    description:
      "Trusted distributor of Trauma, Joint Replacement, Spine & Arthroscopy Implants serving North India.",
  },
  icons: {
    icon: [
      { url: "/images/logo.avif", type: "image/avif" },
    ],
    shortcut: "/images/logo.avif",
    apple: "/images/logo.avif",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Vartitva Health Private Limited",
  url: "https://vartitvahealth.com",
  logo: "https://vartitvahealth.com/images/logo.avif",
  description:
    "India's premier distributor of world-class Trauma Implants, Joint Replacement, Spine Implants, and Arthroscopy Implant Solutions.",
  telephone: "+91-9958813695",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
  areaServed: ["Delhi", "Gurugram", "Sonipat", "Panipat", "Faridabad", "North India"],
  medicalSpecialty: [
    "Trauma Surgery",
    "Joint Replacement",
    "Spine Surgery",
    "Arthroscopy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/logo.avif" type="image/avif" />
        <link rel="apple-touch-icon" href="/images/logo.avif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@700;800;900&display=swap" rel="stylesheet" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className="bg-white text-slate-900 selection:bg-[#0236A0] selection:text-white antialiased min-h-screen flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
