"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowRight, Zap, CheckCircle, Shield, Brain } from "lucide-react";
import Image from "next/image";

const trustLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "AWS", "Flutter",
  "Python", "PostgreSQL", "Docker", "GraphQL", "Laravel", "Redis",
];

const floatingStats = [
  { label: "Projects Delivered", value: "100+", icon: CheckCircle, color: "text-cyan-400" },
  { label: "Countries Served", value: "5+", icon: Shield, color: "text-blue-400" },
  { label: "Team Experts", value: "15+", icon: Brain, color: "text-violet-400" },
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-14 lg:pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
          src="/images/hero/new/hero_ai_software_datacore_loop.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050814]/95 via-[#050814]/45 to-[#050814]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/40 via-transparent to-[#050814]/85" />
      </div>

      {/* Background glow layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-[15%] right-[10%] w-[700px] h-[700px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />
        <div className="absolute top-[45%] right-[25%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute top-[20%] left-[8%] w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/10 rotate-12 hero-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[35%] right-[12%] w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/5 border border-blue-500/10 -rotate-6 hero-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/8 to-blue-500/4 border border-cyan-500/8 hero-float" style={{ animationDelay: "2s" }} />
      </div>

      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-4">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-1.5 w-fit pulse-glow">
                <Zap className="h-3 w-3 text-cyan-400" />
                <span className="text-[12px] font-semibold text-cyan-300 uppercase tracking-[0.12em]">
                  Next-Gen AI & Enterprise Software
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <h1 className="text-[1.875rem] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.125rem] lg:text-[2.625rem]">
                Engineering Scalable{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent text-glow-cyan">
                  AI & Software
                </span>{" "}
                Solutions
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <p className="max-w-lg text-[15px] sm:text-[16px] leading-[1.8] text-slate-400">
                We build intelligent automation, data-driven platforms, and custom software
                that accelerates growth — from AI workflows to enterprise web & mobile apps.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={240}>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Button href="/contact" size="md" variant="glow" className="btn-shine">
                  Build Smarter with Us <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/services" size="md" variant="secondary" className="btn-shine">
                  Explore Services
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={320}>
              <div className="flex flex-wrap gap-3 pt-2">
                {floatingStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="premium-card flex items-center gap-2.5 px-3.5 py-2.5"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-white">{stat.value}</p>
                      <p className="text-[11px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: 3D Hero Graphic - Premium */}
          <AnimatedSection delay={200}>
            <div className="relative flex items-center justify-center">
              {/* Multiple glow layers for 3D depth */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-[90%] h-[90%] rounded-full bg-cyan-500/[0.06] blur-[80px]" />
                <div className="absolute w-[70%] h-[70%] rounded-full bg-blue-500/[0.05] blur-[60px]" />
                <div className="absolute w-[50%] h-[50%] rounded-full bg-violet-500/[0.04] blur-[40px]" />
              </div>

              {/* Main image with 3D frame */}
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 blur-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Image frame with gradient border */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#0B1120] to-[#050814] p-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero/new/hero_3d_ai_robotics_interaction.png"
                      alt="AI and robotics interaction visualization"
                      width={500}
                      height={500}
                      priority
                      className="w-full max-w-[400px] h-auto relative z-10 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Inner glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />

                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-cyan-400/40 hero-float" style={{ animationDelay: "0.5s" }} />
                <div className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-blue-400/40 hero-float" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-violet-400/30 hero-float" style={{ animationDelay: "2.5s" }} />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Trust Bar */}
        <AnimatedSection delay={400}>
          <div className="w-full pt-8 mt-4 border-t border-white/[0.06]">
            <p className="text-center text-[11px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-4">
              Technologies We Master
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050814] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050814] to-transparent z-10" />
              <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
                {[...trustLogos, ...trustLogos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="text-[14px] font-medium text-slate-600 transition-all duration-300 hover:text-cyan-400 hover:text-glow-cyan cursor-default select-none"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
