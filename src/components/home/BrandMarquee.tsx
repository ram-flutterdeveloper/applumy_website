import { AnimatedSection } from "@/components/common/AnimatedSection";

const brands = [
  "React", "Next.js", "TypeScript", "Node.js", "Laravel",
  "Flutter", "Python", "PostgreSQL", "AWS", "Docker",
  "Vue.js", "React Native", "Swift", "Kotlin", "MongoDB",
];

export function BrandMarquee() {
  return (
    <section className="relative border-y border-white/[0.06] overflow-hidden bg-[#0D1017]/60">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F] via-transparent to-[#080A0F] z-10 pointer-events-none" />

      <AnimatedSection>
        <div className="py-5">
          <p className="mb-4 text-center text-[12px] font-semibold text-[#6B7A8D] uppercase tracking-[0.2em]">
            Technologies We Work With
          </p>
          <div className="relative">
            <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ width: "max-content" }}>
              {[...brands, ...brands].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-[15px] font-medium text-[#6B7A8D]/70 transition-all duration-300 hover:text-[#F5F7FA] hover:scale-105 cursor-default select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
