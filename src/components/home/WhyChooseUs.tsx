import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code, Target, Zap, Shield, Users, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Code, title: "Full-Stack Expertise", description: "From frontend to backend, mobile to cloud — we handle every layer." },
  { icon: Target, title: "Result-Driven", description: "Every decision guided by data and focused on business outcomes." },
  { icon: Zap, title: "Fast Delivery", description: "Agile process ensures rapid prototyping and on-time delivery." },
  { icon: Shield, title: "Secure by Default", description: "Industry-standard security practices in every line of code." },
  { icon: Users, title: "Dedicated Team", description: "Committed developers, designers, and project managers." },
  { icon: HeadphonesIcon, title: "Ongoing Support", description: "Technical support and maintenance post-launch." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C5CFC]/[0.03] blur-[120px] rounded-full" />

      <Container>
        <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left - Image */}
          <AnimatedSection type="left">
            <div className="relative">
              <div className="absolute -inset-10 rounded-[2.5rem] bg-[#7C5CFC]/[0.04] blur-[80px]" />
              <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#11151D]/80 to-[#0D1017]/60 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]">
                <Image
                  src="/images/hero/why-us.png"
                  alt="Why choose Applumy — modern software engineering, security, and scalable architecture"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Features */}
          <div>
            <AnimatedSection>
              <SectionHeading
                badge="Why us"
                title="Built different"
                description="We don't just write code — we build products that solve real problems."
                align="left"
              />
            </AnimatedSection>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AnimatedSection key={f.title} delay={i * 40}>
                    <div className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D]/60 p-4 h-full transition-all duration-300 hover:bg-[#161B26]/80 hover:border-white/[0.1]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C5CFC]/10 border border-[#7C5CFC]/10 transition-colors group-hover:bg-[#7C5CFC]/15">
                        <Icon className="h-4 w-4 text-[#7C5CFC]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-[16px] font-semibold text-[#F5F7FA]">{f.title}</h3>
                        <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">{f.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
