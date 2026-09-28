import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { resources } from "@/data/resources";
import { ArrowRight, Clock, BookOpen, FileText, GraduationCap, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Read our latest articles, guides, case studies, and tutorials on web development, mobile apps, UI/UX design, and digital strategy.",
};

const categories = ["All", "Blog", "Guide", "Case Study", "Tutorial"] as const;

const categoryIcons: Record<string, typeof BookOpen> = {
  Blog: FileText,
  Guide: BookOpen,
  "Case Study": Briefcase,
  Tutorial: GraduationCap,
};

const categoryColors: Record<string, string> = {
  Blog: "text-[#7C5CFC] bg-[#7C5CFC]/10",
  Guide: "text-[#3B82F6] bg-[#3B82F6]/10",
  "Case Study": "text-green-400 bg-green-500/10",
  Tutorial: "text-amber-400 bg-amber-500/10",
};

export default function ResourcesPage() {
  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="py-5 lg:py-7">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <Badge>Resources</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Insights & <span className="text-[#7C5CFC]">Knowledge</span>
            </h1>
            <p className="max-w-xl text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
              Explore our latest articles, guides, case studies, and tutorials
              on web development, mobile apps, and digital strategy.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Filters + Resources Grid */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-5">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-[14px] text-[#A7AFBF] cursor-pointer transition-all hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]"
              >
                {cat}
              </span>
            ))}
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, i) => {
              const CatIcon = categoryIcons[resource.category] || FileText;
              const colorClass = categoryColors[resource.category] || "text-[#7C5CFC] bg-[#7C5CFC]/10";
              return (
                <AnimatedSection key={resource.id} delay={i * 60} type="scale">
                  <Link href={`/resources/${resource.slug}`} className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full transition-all duration-300 hover:border-[#7C5CFC]/20 hover:bg-[#161B26]">
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${colorClass}`}>
                        <CatIcon className="h-3 w-3" />
                        {resource.category}
                      </div>
                      <span className="flex items-center gap-1 text-[12px] text-[#6B7A8D]">
                        <Clock className="h-3 w-3" />
                        {resource.readTime}
                      </span>
                    </div>

                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors leading-[1.5]">
                      {resource.title}
                    </h3>

                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {resource.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-[#7C5CFC]">
                      Read More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Stay Updated</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              Get the latest insights on web development, mobile apps, and digital strategy delivered to your inbox.
            </p>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[15px] text-[#F5F7FA] placeholder:text-[#6B7A8D] focus:border-[#7C5CFC]/30 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/20 transition-colors"
              />
              <Button size="md">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Need Help With Your Project?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              Our team is ready to help you build your next digital product.
            </p>
            <Button href="/contact" size="md">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
