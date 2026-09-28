import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/data/technologies";

export function Technologies() {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F] via-[#0A0D14] to-[#080A0F]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3B82F6]/[0.03] blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Tech stack"
            title="Tools we use"
            description="A curated set of technologies we trust to build reliable, scalable products."
          />
        </AnimatedSection>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <AnimatedSection key={category} delay={i * 40}>
              <div className="rounded-xl border border-white/[0.06] bg-[#11151D]/60 p-5 transition-all duration-300 hover:bg-[#161B26]/60 hover:border-white/[0.08]">
                <p className="mb-3 text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.15em]">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies
                    .filter((t) => t.category === category)
                    .map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.04] px-3 py-1.5 text-[14px] font-medium text-[#A7AFBF] transition-all duration-200 hover:bg-[#7C5CFC]/10 hover:text-[#F5F7FA] hover:border-[#7C5CFC]/15 cursor-default"
                      >
                        {tech.name}
                      </span>
                    ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
