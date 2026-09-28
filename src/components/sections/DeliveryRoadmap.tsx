"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Search, Layers, Code, Rocket, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    icon: Search,
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/10",
    title: "Discovery & Strategy",
    summary: "Understanding your business goals, users, and technical landscape",
    detail: "We map out your requirements, user personas, tech constraints, and market positioning. Every project starts with clear objectives and measurable success criteria.",
    tags: ["Stakeholder Interviews", "Market Research", "Technical Audit", "Roadmap Planning"],
  },
  {
    num: "02",
    icon: Layers,
    color: "blue",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
    title: "Architecture & Design",
    summary: "System design, UI/UX, and technical architecture planning",
    detail: "We design the system architecture, database schema, API contracts, and user interfaces. This includes wireframes, prototypes, and technical documentation.",
    tags: ["System Architecture", "UI/UX Design", "API Design", "Database Schema"],
  },
  {
    num: "03",
    icon: Code,
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    title: "Engineering & Development",
    summary: "Agile development with continuous integration and testing",
    detail: "Iterative development in 2-week sprints with daily standups, code reviews, and automated testing. You get working software every sprint.",
    tags: ["Sprint Development", "Code Reviews", "Unit Testing", "Integration Testing"],
  },
  {
    num: "04",
    icon: CheckCircle,
    color: "emerald",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
    title: "QA & Performance",
    summary: "Comprehensive testing, security audits, and optimization",
    detail: "Manual and automated testing across devices and browsers. Security audits, load testing, and performance optimization before launch.",
    tags: ["Manual QA", "Automated Tests", "Security Audit", "Performance Tuning"],
  },
  {
    num: "05",
    icon: Rocket,
    color: "amber",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    glow: "shadow-amber-500/10",
    title: "Launch & Support",
    summary: "Production deployment, monitoring, and ongoing maintenance",
    detail: "Smooth production deployment with zero-downtime strategies. We provide ongoing monitoring, bug fixes, and feature iterations post-launch.",
    tags: ["Production Deploy", "Monitoring", "Bug Fixes", "Feature Iterations"],
  },
];

export function DeliveryRoadmap() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/[0.02] blur-[120px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-violet-300 uppercase tracking-[0.12em]">How We Work</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Our <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Delivery Roadmap</span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-[15px] text-slate-400 leading-[1.8]">
              A battle-tested process refined over 100+ projects — from first call to production launch.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
          {/* Left: Timeline */}
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-emerald-500/20" />

            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const isExpanded = expandedIdx === i;
                return (
                  <AnimatedSection key={step.num} delay={i * 80}>
                    <div
                      className={`premium-card cursor-pointer ${isExpanded ? `${step.border} border` : "border border-white/[0.04]"}`}
                      onClick={() => setExpandedIdx(isExpanded ? null : i)}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-[15px] top-5 h-[18px] w-[18px] rounded-full border-2 transition-all ${
                        isExpanded ? `${step.border} ${step.bg}` : "border-white/20 bg-white/5"
                      }`}>
                        <div className={`absolute inset-[3px] rounded-full ${isExpanded ? "bg-white" : "bg-white/20"}`} />
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-3 pl-12 pr-5 py-4">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${step.bg} shrink-0`}>
                          <step.icon className={`h-4 w-4 text-${step.color}-400`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-bold text-${step.color}-400 uppercase tracking-wider`}>{step.num}</span>
                            <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                          </div>
                          <p className="text-[13px] text-slate-500 mt-0.5">{step.summary}</p>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-300 shrink-0 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>

                      {/* Expanded Detail */}
                      {isExpanded && (
                        <div className="px-12 pb-5 border-t border-white/[0.04]">
                          <p className="text-[13px] text-slate-400 leading-[1.85] mt-3 mb-3">{step.detail}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tags.map((tag) => (
                              <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-slate-400">{tag}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Right: Process Graphic */}
          <AnimatedSection delay={200}>
            <div className="relative flex items-center justify-center lg:sticky lg:top-32">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-[80%] h-[80%] rounded-full bg-violet-500/[0.05] blur-[60px]" />
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/5 blur-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <Image
                  src="/images/hero/new/process_agile_development_flow.png"
                  alt="Agile Development Process Flow"
                  width={600}
                  height={600}
                  className="relative z-10 w-full max-w-[450px] h-auto rounded-2xl border border-white/[0.08] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center pt-5">
            <Button href="/contact" size="md" variant="glow" className="btn-shine">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
