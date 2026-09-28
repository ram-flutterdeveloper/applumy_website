"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowRight, Phone, Sparkles, CheckCircle } from "lucide-react";

const highlights = [
  "Free project consultation",
  "Detailed technical proposal",
  "No-obligation estimate",
];

export function FinalCTA() {
  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          src="/images/hero/new/cta_consultation_energy_sphere.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/50 via-[#050814]/30 to-[#050814]/70" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-[#0B1120]/40 backdrop-blur-sm" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <div className="relative px-8 py-16 text-center sm:px-14">
              <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/15">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                </div>
                <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                  Ready to Build Something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Smarter?
                  </span>
                </h2>
                <p className="max-w-md text-[15px] text-slate-400 leading-[1.8]">
                  Let&apos;s discuss your project. From AI-powered platforms to enterprise web applications —
                  we&apos;re ready to bring your vision to life.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-4 pt-1">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-[14px] text-slate-400">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button href="/contact" size="lg" variant="glow">
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="tel:+917678293527" size="lg" variant="secondary">
                    <Phone className="h-4 w-4" /> Book a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
