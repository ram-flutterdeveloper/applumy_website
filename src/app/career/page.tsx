import type { Metadata } from "next";
import { CareerClient } from "@/components/career/CareerClient";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join Applumy — we're hiring Web Developers, Android Developers, UI/UX Designers, and CMS Developers. Internship opportunities also available in Jaunpur, UP.",
  alternates: {
    canonical: "https://applumy.com/career",
  },
};

export default function CareerPage() {
  return (
    <main className="pt-16 lg:pt-[72px]">
      <CareerClient />
    </main>
  );
}
