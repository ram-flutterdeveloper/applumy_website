import { Hero } from "@/components/sections/Hero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { DeliveryRoadmap } from "@/components/sections/DeliveryRoadmap";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesShowcase />
      <TechEcosystem />
      <DeliveryRoadmap />
      <IndustrySolutions />
      <EngagementModels />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
