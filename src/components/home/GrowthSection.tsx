import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowRight, Globe, Smartphone, Code } from "lucide-react";

export function GrowthSection() {
  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/[0.03] blur-[120px] rounded-full" />

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <AnimatedSection type="left">
            <div className="flex flex-col gap-5">
              <span className="text-[13px] font-semibold text-[#7C5CFC] uppercase tracking-[0.18em]">
                What we do
              </span>
              <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.08]">
                Full-stack development
                <br />
                under one roof
              </h2>
              <p className="text-[17px] text-[#A7AFBF] leading-[1.8] max-w-lg">
                From frontend to backend, mobile to cloud — we handle every layer
                of your digital product with a team of experienced developers.
              </p>

              <div className="flex flex-col gap-3 mt-1">
                {[
                  { icon: Globe, title: "Web Development", desc: "Next.js, React, Laravel, Vue.js" },
                  { icon: Smartphone, title: "Mobile Apps", desc: "Flutter, React Native, Swift, Kotlin" },
                  { icon: Code, title: "Software & SaaS", desc: "Node.js, Python, Java, Django" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#11151D]/60 p-4 transition-all duration-300 hover:bg-[#161B26]/80 hover:border-white/[0.1]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFC]/10 to-transparent border border-[#7C5CFC]/10 transition-colors group-hover:bg-[#7C5CFC]/15">
                        <Icon className="h-4.5 w-4.5 text-[#7C5CFC]" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-semibold text-[#F5F7FA]">{item.title}</h3>
                        <p className="text-[14px] text-[#6B7A8D] mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button href="/contact" size="md" className="w-fit mt-2">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Right - Image */}
          <AnimatedSection delay={100} type="right">
            <div className="relative">
              <div className="absolute -inset-10 rounded-[2.5rem] bg-[#3B82F6]/[0.04] blur-[80px]" />
              <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#11151D]/80 to-[#0D1017]/60 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/hero/services-overview.png"
                  alt="Full-stack development services — web, mobile, and software solutions overview"
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
