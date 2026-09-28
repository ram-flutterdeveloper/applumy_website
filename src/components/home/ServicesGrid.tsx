import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F] via-[#0A0D14] to-[#080A0F]" />
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C5CFC]/[0.03] blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Services"
            title="What we do"
            description="We build digital products — from websites and mobile apps to enterprise software and SaaS platforms."
          />
        </AnimatedSection>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={i * 50}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-glow flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#11151D]/80 p-6 transition-all duration-400 hover:border-[#7C5CFC]/20 hover:bg-[#161B26]/80 hover:shadow-[0_8px_40px_rgba(124,92,252,0.06)] hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFC]/10 to-[#3B82F6]/5 border border-[#7C5CFC]/10 transition-all duration-400 group-hover:bg-[#7C5CFC]/15 group-hover:border-[#7C5CFC]/20 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-[#7C5CFC]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1.5 text-[17px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[15px] leading-[1.75] text-[#6B7A8D]">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#6B7A8D] transition-colors group-hover:text-[#7C5CFC]">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
