import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Applumy | AI & Enterprise Software Development",
    template: "%s | Applumy",
  },
  description:
    "Applumy is a full-stack development agency specializing in AI solutions, enterprise software, web applications, and mobile app development. We build intelligent automation, SaaS platforms, and cloud-native systems using React, Next.js, Python, and modern technologies.",
  keywords: [
    "AI development",
    "enterprise software",
    "web development",
    "mobile app development",
    "machine learning",
    "cloud engineering",
    "SaaS development",
    "custom software",
    "React development",
    "Next.js development",
    "Python AI",
    "LLM integration",
    "DevOps",
    "digital agency",
    "Applumy",
  ],
  authors: [{ name: "Applumy" }],
  creator: "Applumy",
  publisher: "Applumy",
  metadataBase: new URL("https://applumy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://applumy.com",
    siteName: "Applumy",
    title: "Applumy | AI & Enterprise Software Development",
    description:
      "Full-stack development agency specializing in AI, enterprise software, and cloud solutions. We build intelligent platforms using React, Next.js, Python, and modern technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Applumy - AI & Enterprise Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applumy | AI & Enterprise Software Development",
    description:
      "Full-stack development agency specializing in AI, enterprise software, and cloud solutions.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://applumy.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#050814] text-[#F0F4F8]">
        {/* Background Orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="orb orb-1" style={{ top: "5%", left: "10%" }} />
          <div className="orb orb-2" style={{ top: "40%", right: "5%" }} />
          <div className="orb orb-3" style={{ bottom: "10%", left: "30%" }} />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
