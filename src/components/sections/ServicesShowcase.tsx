"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  Brain, Globe, Cloud, TestTube, CheckCircle, ArrowRight,
  Zap, Shield, Clock, Target
} from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "ai",
    label: "Custom AI Development",
    icon: Brain,
    color: "cyan",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    image: "/images/hero/new/service_custom_ai_agents_automation.png",
    title: "Intelligent AI Solutions",
    description: "We build custom AI models, LLM integrations, and intelligent automation systems that transform how your business operates.",
    deliverables: [
      "Custom ML model development & training",
      "LLM integration (GPT, Claude, Gemini)",
      "Intelligent document processing",
      "Predictive analytics dashboards",
      "AI-powered recommendation engines",
      "Natural language processing systems",
    ],
  },
  {
    id: "cloud",
    label: "Cloud Engineering",
    icon: Cloud,
    color: "blue",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    image: "/images/hero/new/service_custom_software_web_app.png",
    title: "Scalable Cloud Architecture",
    description: "Design and deploy robust cloud infrastructure on AWS, GCP, or Azure with auto-scaling and CI/CD pipelines.",
    deliverables: [
      "Cloud migration strategy & execution",
      "Microservices architecture design",
      "CI/CD pipeline automation",
      "Infrastructure as Code (Terraform)",
      "Container orchestration (Docker, K8s)",
      "Monitoring & alerting setup",
    ],
  },
  {
    id: "web",
    label: "Enterprise Web Apps",
    icon: Globe,
    color: "violet",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    image: "/images/hero/new/service_custom_software_web_app.png",
    title: "Full-Stack Web Applications",
    description: "From SaaS platforms to enterprise dashboards, we build scalable web applications with modern frameworks.",
    deliverables: [
      "Custom SaaS platform development",
      "Real-time data dashboards",
      "E-commerce & marketplace solutions",
      "Progressive Web Apps (PWA)",
      "API design & microservices backend",
      "Third-party integrations",
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: TestTube,
    color: "emerald",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    image: "/images/hero/new/service_mobile_app_development.png",
    title: "Cross-Platform Mobile Apps",
    description: "Build native-quality mobile applications for iOS and Android using Flutter or React Native.",
    deliverables: [
      "Cross-platform app development",
      "Native iOS & Android apps",
      "Offline-first architecture",
      "Push notification systems",
      "App Store deployment",
      "Performance optimization",
    ],
  },
];

const metrics = [
  { icon: Zap, label: "Avg Delivery", value: "6-12 weeks" },
  { icon: Shield, label: "Uptime", value: "99.9%" },
  { icon: Clock, label: "Response", value: "< 4 hours" },
  { icon: Target, label: "Satisfaction", value: "98%" },
];

export function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/[0.03] blur-[120px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.12em]">Our Expertise</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Full-Stack Development{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Across Every Layer</span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-[15px] text-slate-400 leading-[1.8]">
              From AI models to cloud infrastructure to pixel-perfect frontends — we handle the entire stack.
            </p>
          </div>
        </AnimatedSection>

        {/* Metrics Bar */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {metrics.map((m) => (
              <div key={m.label} className="premium-card flex items-center gap-3 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/15">
                  <m.icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white">{m.value}</p>
                  <p className="text-[12px] text-slate-500">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Navigation */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
            {tabs.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`premium-card flex items-center gap-2.5 px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? `${tab.border} border`
                      : "border border-white/[0.04]"
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all ${isActive ? tab.bg : "bg-white/[0.04]"}`}>
                    <tab.icon className={`h-4 w-4 transition-colors ${isActive ? "text-white" : "text-slate-500"}`} />
                  </div>
                  <p className={`text-[13px] font-semibold transition-colors ${isActive ? "text-white" : "text-slate-400"}`}>{tab.label}</p>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Active Tab Content */}
        <AnimatedSection delay={140}>
          <div className="premium-card overflow-hidden">
            <div className="relative grid gap-0 lg:grid-cols-[1fr_1fr]">
              {/* Left: Info */}
              <div className="flex flex-col gap-4 p-6 lg:p-8">
                <div className={`inline-flex items-center gap-2 rounded-lg ${activeTab.bg} border ${activeTab.border} px-3 py-1.5 w-fit`}>
                  <activeTab.icon className="h-3.5 w-3.5 text-white" />
                  <span className="text-[12px] font-semibold text-white">{activeTab.label}</span>
                </div>
                <h3 className="text-[1.225rem] font-bold text-white">{activeTab.title}</h3>
                <p className="text-[14px] text-slate-400 leading-[1.85]">{activeTab.description}</p>

                <div className="flex flex-col gap-2">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em]">What You Get</p>
                  {activeTab.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/[0.02]">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-[13px] text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <Button href="/contact" size="sm" variant="glow" className="btn-shine">
                    Discuss Your Project <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              {/* Right: Tab Graphic Image */}
              <div className="relative flex items-center justify-center p-6 lg:p-0">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/[0.01] to-white/[0.02]" aria-hidden="true" />
                <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-blue-500/[0.04] blur-[40px]" />
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    width={500}
                    height={500}
                    className="relative z-10 w-full h-auto rounded-2xl object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
