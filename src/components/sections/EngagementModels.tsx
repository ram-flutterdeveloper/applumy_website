"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Target, Zap, CheckCircle } from "lucide-react";

const models = [
  {
    icon: Users,
    title: "Dedicated Team",
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    description: "A full-time team integrated with yours — developers, designers, QA, and a project manager.",
    best: "Long-term products, ongoing development, scaling engineering capacity",
    features: [
      "Full-time dedicated engineers",
      "Direct communication with team",
      "Flexible sprint planning",
      "Weekly progress reports",
      "Seamless team integration",
    ],
    timeline: "Ongoing",
    budget: "Monthly retainer",
  },
  {
    icon: Target,
    title: "Fixed-Scope MVP",
    color: "blue",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    description: "We build your MVP or feature set for a fixed price and timeline. Clear scope, no surprises.",
    best: "Startups, new product launches, proof of concepts",
    features: [
      "Fixed price & timeline",
      "Detailed scope document",
      "Milestone-based delivery",
      "Full ownership transfer",
      "Post-launch support included",
    ],
    timeline: "6-12 weeks",
    budget: "Fixed project fee",
  },
  {
    icon: Zap,
    title: "Staff Augmentation",
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    description: "Plug senior engineers into your existing team. Scale up or down as needed.",
    best: "Teams needing specialized skills, short-term sprints, scaling capacity",
    features: [
      "Senior-level engineers only",
      "Start within 48 hours",
      "Scale team up/down anytime",
      "Your management, our talent",
      "No hiring overhead",
    ],
    timeline: "Flexible",
    budget: "Hourly / Weekly",
  },
];

export function EngagementModels() {
  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.02] blur-[140px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-[0.12em]">Engagement Models</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Flexible Ways to <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Work Together</span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-[15px] text-slate-400 leading-[1.8]">
              Choose the model that fits your project. We adapt to your workflow — not the other way around.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-3 lg:grid-cols-3">
          {models.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 80}>
              <div className="premium-card p-5 h-full flex flex-col">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${m.bg} border ${m.border} mb-4`}>
                  <m.icon className={`h-5 w-5 text-${m.color}-400`} />
                </div>

                <h3 className="text-[15px] font-bold text-white mb-1.5">{m.title}</h3>
                <p className="text-[13px] text-slate-400 leading-[1.8] mb-3">{m.description}</p>

                <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 mb-3">
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.12em] mb-0.5">Best For</p>
                  <p className="text-[12px] text-slate-300">{m.best}</p>
                </div>

                <div className="flex flex-col gap-1.5 mb-3 flex-1">
                  {m.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle className={`h-3 w-3 text-${m.color}-400 mt-0.5 shrink-0`} />
                      <span className="text-[12px] text-slate-400">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">Timeline</p>
                    <p className="text-[12px] font-semibold text-white">{m.timeline}</p>
                  </div>
                  <div className="w-px h-5 bg-white/[0.06]" />
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">Budget</p>
                    <p className="text-[12px] font-semibold text-white">{m.budget}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="text-center pt-5">
            <Button href="/contact" size="md" variant="glow" className="btn-shine">
              Choose Your Model <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
