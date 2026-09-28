import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { TrendingUp, Users, Clock, Headphones } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "150+", label: "Projects delivered" },
  { icon: Users, value: "50+", label: "Happy clients" },
  { icon: Clock, value: "8+", label: "Years experience" },
  { icon: Headphones, value: "24/7", label: "Support available" },
];

export function Stats() {
  return (
    <section className="relative py-8 lg:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F] via-[#0D1017] to-[#080A0F]" />
      <Container>
        <AnimatedSection>
          <div className="relative rounded-2xl border border-white/[0.06] bg-[#11151D]/50 backdrop-blur-sm overflow-hidden">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFC]/30 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center gap-2 py-7 text-center transition-colors hover:bg-white/[0.02] ${
                      i < stats.length - 1 ? "lg:border-r lg:border-white/[0.06]" : ""
                    } ${i === 0 ? "" : "border-t lg:border-t-0 border-white/[0.06] lg:border-l"}`}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                      <Icon className="h-4 w-4 text-[#7C5CFC]" />
                    </div>
                    <span className="text-[20px] font-bold text-[#F5F7FA] tracking-tight">{stat.value}</span>
                    <span className="text-[14px] text-[#6B7A8D]">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Subtle bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFC]/20 to-transparent" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
