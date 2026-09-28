"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers, Zap, Shield, Globe } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: "llm",
    label: "LLM & AI",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    items: [
      { name: "OpenAI GPT-4", desc: "Language models & completions" },
      { name: "Claude (Anthropic)", desc: "Constitutional AI assistant" },
      { name: "Gemini (Google)", desc: "Multimodal AI platform" },
      { name: "Hugging Face", desc: "Open-source model hub" },
      { name: "LangChain", desc: "LLM application framework" },
      { name: "Vector DB (Pinecone)", desc: "Semantic search & RAG" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    items: [
      { name: "AWS", desc: "EC2, Lambda, S3, RDS" },
      { name: "Google Cloud", desc: "BigQuery, GKE, Cloud Run" },
      { name: "Docker", desc: "Containerization platform" },
      { name: "Kubernetes", desc: "Container orchestration" },
      { name: "Terraform", desc: "Infrastructure as Code" },
      { name: "GitHub Actions", desc: "CI/CD pipelines" },
    ],
  },
  {
    id: "frameworks",
    label: "Frontend & Backend",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    items: [
      { name: "React / Next.js", desc: "Full-stack React framework" },
      { name: "TypeScript", desc: "Type-safe JavaScript" },
      { name: "Node.js", desc: "Server-side JavaScript" },
      { name: "Python / Django", desc: "Rapid backend development" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
      { name: "PostgreSQL", desc: "Robust relational database" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    items: [
      { name: "Flutter", desc: "Cross-platform native apps" },
      { name: "React Native", desc: "Mobile with React" },
      { name: "Swift (iOS)", desc: "Native Apple development" },
      { name: "Kotlin (Android)", desc: "Native Android development" },
      { name: "Firebase", desc: "Backend-as-a-Service" },
      { name: "Supabase", desc: "Open-source Firebase alt" },
    ],
  },
];

const highlights = [
  { icon: Layers, label: "40+ Technologies", desc: "Across the full stack" },
  { icon: Zap, label: "Always Current", desc: "Latest stable releases" },
  { icon: Shield, label: "Battle-Tested", desc: "Production-proven tools" },
  { icon: Globe, label: "Cloud Native", desc: "AWS, GCP, Azure ready" },
];

export function TechEcosystem() {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[120px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-[0.12em]">Technology Stack</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Our <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Tech Ecosystem</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 2-Column: Orbit Left + Text Right */}
        <AnimatedSection delay={80}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center mb-6">
            {/* Left: Orbit Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-[280px] h-[280px] rounded-full bg-blue-500/[0.05] blur-[60px]" />
                <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-500/[0.04] blur-[40px]" />
              </div>
              <div className="relative group">
                <Image
                  src="/images/hero/new/tech_ecosystem_orbit_centerpiece.png"
                  alt="Tech Ecosystem Orbit"
                  width={400}
                  height={400}
                  className="relative z-10 w-full max-w-[340px] h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Right: Attractive Text */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[1.225rem] font-bold text-white leading-[1.3]">
                Powering Products with the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Right Technology Stack</span>
              </h3>
              <p className="text-[14px] text-slate-400 leading-[1.8]">
                We don&apos;t just write code — we architect solutions using battle-tested technologies 
                that scale. From AI models to cloud infrastructure, every tool is chosen for performance, 
                reliability, and long-term maintainability.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {highlights.map((h, i) => (
                  <div
                    key={h.label}
                    className="premium-card flex items-start gap-2.5 p-3"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 shrink-0">
                      <h.icon className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{h.label}</p>
                      <p className="text-[12px] text-slate-500">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat)}
                className={`premium-card px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                  activeCat.id === cat.id
                    ? `${cat.bg} ${cat.border} border text-white`
                    : "border border-white/[0.06] text-slate-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Grid */}
        <AnimatedSection delay={120}>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {activeCat.items.map((item, i) => (
              <div
                key={item.name}
                className={`premium-card group p-3.5 transition-all duration-300 cursor-default ${
                  hoveredItem === item.name ? "border-blue-500/30" : ""
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${activeCat.bg} shrink-0`}>
                    <span className="text-[11px] font-bold text-white">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white mb-0.5">{item.name}</p>
                    <p className="text-[12px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={140}>
          <div className="text-center pt-5">
            <Button href="/services" size="sm" variant="secondary" className="btn-shine">
              Explore All Technologies <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
