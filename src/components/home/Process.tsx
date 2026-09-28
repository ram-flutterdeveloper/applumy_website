import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3B82F6]/[0.03] blur-[120px] rounded-full" />

      <Container>
        <AnimatedSection>
          <SectionHeading
            badge="Process"
            title="How we work"
            description="A straightforward process that keeps things clear from day one."
          />
        </AnimatedSection>

        <div className="relative mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left - Steps */}
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 40}>
                <div className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D]/60 p-5 h-full transition-all duration-300 hover:bg-[#161B26]/80 hover:border-white/[0.1]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C5CFC]/10 border border-[#7C5CFC]/10 transition-colors group-hover:bg-[#7C5CFC]/15">
                    <span className="text-[13px] font-bold text-[#7C5CFC] font-mono">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-[16px] font-semibold text-[#F5F7FA]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right - Visual */}
          <AnimatedSection delay={100} type="right">
            <div className="relative">
              <div className="absolute -inset-10 rounded-[2.5rem] bg-[#3B82F6]/[0.04] blur-[80px]" />
              <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#11151D]/80 to-[#0D1017]/60 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/hero/process-visual.png"
                  alt="Applumy development process — discovery, design, development, testing, and launch workflow"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
