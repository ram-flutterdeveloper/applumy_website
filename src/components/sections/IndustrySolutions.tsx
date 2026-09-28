"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, Shield, ShoppingCart, Truck, Cloud, Building } from "lucide-react";

const industries = [
  {
    icon: TrendingUp,
    title: "FinTech & Banking",
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    accent: "from-cyan-500/20 to-cyan-500/5",
    challenge: "Legacy systems, regulatory compliance, real-time transaction processing",
    solution: "Build secure, compliant financial platforms with real-time analytics, KYC automation, and modern API architectures.",
  },
  {
    icon: Shield,
    title: "Healthcare & MedTech",
    color: "emerald",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    accent: "from-emerald-500/20 to-emerald-500/5",
    challenge: "Patient data privacy, interoperability, clinical workflow efficiency",
    solution: "HIPAA-compliant platforms, EHR integrations, telemedicine apps, and AI-assisted diagnostics.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    color: "blue",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    accent: "from-blue-500/20 to-blue-500/5",
    challenge: "Scale during peak traffic, personalization, inventory management",
    solution: "Headless commerce, AI recommendation engines, real-time inventory, and microservices architecture.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    color: "amber",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    accent: "from-amber-500/20 to-amber-500/5",
    challenge: "Route optimization, fleet management, real-time tracking",
    solution: "IoT-powered tracking, ML route optimization, warehouse automation, and supply chain dashboards.",
  },
  {
    icon: Cloud,
    title: "SaaS & Tech Startups",
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    accent: "from-violet-500/20 to-violet-500/5",
    challenge: "Rapid MVP development, scaling infrastructure, reducing churn",
    solution: "Full-stack SaaS platforms, usage-based billing, analytics dashboards, and multi-tenant architecture.",
  },
  {
    icon: Building,
    title: "Real Estate & PropTech",
    color: "rose",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    accent: "from-rose-500/20 to-rose-500/5",
    challenge: "Property listing management, virtual tours, tenant portals",
    solution: "Property management platforms, virtual tour integration, CRM systems, and automated lease management.",
  },
];

export function IndustrySolutions() {
  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/[0.02] blur-[150px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-[0.12em]">Industry Expertise</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Solutions <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tailored to Your Industry</span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-[15px] text-slate-400 leading-[1.8]">
              Deep domain expertise across six key industries. We understand your challenges because we&apos;ve solved them before.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 60}>
              <div className="premium-card group p-5 h-full">
                {/* Top accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${ind.accent}`} />

                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${ind.bg} border ${ind.border} mb-4`}>
                  <ind.icon className={`h-5 w-5 text-${ind.color}-400`} />
                </div>

                <h3 className="text-[15px] font-bold text-white mb-2.5">{ind.title}</h3>

                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.12em] mb-0.5">Challenge</p>
                    <p className="text-[13px] text-slate-400 leading-[1.7]">{ind.challenge}</p>
                  </div>
                  <div className="border-t border-white/[0.04] pt-2">
                    <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.12em] mb-0.5">Our Solution</p>
                    <p className="text-[13px] text-slate-300 leading-[1.7]">{ind.solution}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center pt-5">
            <Button href="/contact" size="md" variant="secondary" className="btn-shine">
              Discuss Your Industry <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
