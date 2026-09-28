import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowRight, Code2, Smartphone, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 lg:pt-[72px]">
      {/* Background glow layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-[20%] right-0 w-[700px] h-[700px] rounded-full bg-[#7C5CFC]/[0.06] blur-[160px]" />
        <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#3B82F6]/[0.05] blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#7C5CFC]/[0.03] blur-[100px]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          {/* Left - Content */}
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/[0.06] px-4 py-2 w-fit">
                <div className="relative flex h-2 w-2">
                  <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C5CFC] opacity-75" />
                  <div className="relative inline-flex h-2 w-2 rounded-full bg-[#7C5CFC]" />
                </div>
                <span className="text-[13px] font-semibold text-[#A7AFBF] uppercase tracking-[0.15em]">Digital Solutions Agency</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <h1 className="text-[2.375rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#F5F7FA] sm:text-[2.875rem] lg:text-[3.375rem] xl:text-[3.625rem]">
                We Build Digital
                <br />
                Products That
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#7C5CFC] via-[#9B7DFC] to-[#A78BFA] bg-clip-text text-transparent">
                    Drive Growth
                  </span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <p className="max-w-[480px] text-[17px] sm:text-[18px] leading-[1.8] text-[#A7AFBF]">
                Full-stack development agency building custom websites, mobile apps,
                and software solutions for startups and businesses across India.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={240}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/projects" variant="secondary" size="lg">
                  View Our Work
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={320}>
              <div className="flex items-center gap-8 pt-3">
                {[
                  { icon: Globe, val: "150+", label: "Projects Delivered" },
                  { icon: Code2, val: "50+", label: "Happy Clients" },
                  { icon: Smartphone, val: "8+", label: "Years Experience" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <s.icon className="h-3.5 w-3.5 text-[#7C5CFC]" />
                        <span className="text-[22px] font-bold text-[#F5F7FA] tracking-tight">{s.val}</span>
                      </div>
                      <span className="text-[13px] text-[#6B7A8D]">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Hero Image */}
          <AnimatedSection delay={200} type="right" className="hidden lg:block">
            <div className="relative">
              {/* Layered ambient glow */}
              <div className="absolute -inset-14 rounded-[2.5rem] bg-[#7C5CFC]/[0.06] blur-[100px]" />
              <div className="absolute -inset-8 rounded-[2rem] bg-[#3B82F6]/[0.03] blur-[70px]" />

              {/* Main image container */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#11151D]/80 to-[#0D1017]/60 backdrop-blur-sm overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/hero/hero_main.png"
                  alt="Modern web development workspace — responsive websites, dashboards, and mobile applications"
                  width={1400}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 0px, 55vw"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#11151D]/40 to-transparent" />
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-5 -left-5 lg:-bottom-7 lg:-left-7">
                <div className="hero-float rounded-xl border border-white/[0.1] bg-[#11151D]/95 backdrop-blur-md p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/images/hero/hero-floating-ui.png"
                    alt="Mobile application interface preview"
                    width={360}
                    height={220}
                    sizes="180px"
                    className="w-[170px] h-auto rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Top-right accent dot */}
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-[#7C5CFC]/20 blur-sm" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
