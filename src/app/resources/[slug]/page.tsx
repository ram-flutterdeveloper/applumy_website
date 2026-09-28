import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { resources } from "@/data/resources";
import { ArrowLeft, Clock, Calendar, BookOpen, FileText, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Blog: "text-[#7C5CFC] bg-[#7C5CFC]/10",
  Guide: "text-[#3B82F6] bg-[#3B82F6]/10",
  "Case Study": "text-green-400 bg-green-500/10",
  Tutorial: "text-amber-400 bg-amber-500/10",
};

const categoryIcons: Record<string, typeof BookOpen> = {
  Blog: FileText,
  Guide: BookOpen,
  "Case Study": Briefcase,
  Tutorial: GraduationCap,
};

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) return { title: "Resource Not Found" };
  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return (
      <main className="pt-16 lg:pt-[72px]">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <span className="text-[50px] font-bold text-white/10">404</span>
            <h1 className="text-[1.625rem] font-bold text-[#F5F7FA]">Resource Not Found</h1>
            <p className="text-[16px] text-[#6B7A8D]">The resource you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/resources">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="h-4 w-4" /> Back to Resources
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const CatIcon = categoryIcons[resource.category] || FileText;
  const colorClass = categoryColors[resource.category] || "text-[#7C5CFC] bg-[#7C5CFC]/10";

  const relatedResources = resources
    .filter((r) => r.id !== resource.id)
    .slice(0, 3);

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Header */}
      <section className="py-5 lg:py-7">
        <Container>
          <AnimatedSection className="flex flex-col gap-4 max-w-3xl mx-auto">
            <Link href="/resources" className="flex items-center gap-1.5 text-[14px] text-[#6B7A8D] hover:text-[#7C5CFC] transition-colors w-fit">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ${colorClass}`}>
                <CatIcon className="h-3 w-3" />
                {resource.category}
              </div>
              <span className="flex items-center gap-1 text-[13px] text-[#6B7A8D]">
                <Clock className="h-3 w-3" />
                {resource.readTime}
              </span>
              <span className="flex items-center gap-1 text-[13px] text-[#6B7A8D]">
                <Calendar className="h-3 w-3" />
                {new Date(resource.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              {resource.title}
            </h1>

            <p className="text-[17px] text-[#A7AFBF] leading-[1.8]">
              {resource.excerpt}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content Placeholder */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl border border-white/[0.06] bg-[#11151D] p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="h-4 w-3/4 rounded bg-white/[0.06]" />
                  <div className="h-4 w-full rounded bg-white/[0.04]" />
                  <div className="h-4 w-5/6 rounded bg-white/[0.04]" />
                  <div className="h-4 w-full rounded bg-white/[0.04]" />
                  <div className="h-4 w-2/3 rounded bg-white/[0.04]" />
                  <div className="h-32 w-full rounded-lg bg-white/[0.03] mt-4" />
                  <div className="h-4 w-full rounded bg-white/[0.04]" />
                  <div className="h-4 w-4/5 rounded bg-white/[0.04]" />
                  <div className="h-4 w-full rounded bg-white/[0.04]" />
                  <div className="h-4 w-3/4 rounded bg-white/[0.04]" />
                </div>
                <p className="mt-6 text-[15px] text-[#6B7A8D] italic">
                  Full article content coming soon. This is a placeholder for the actual article body.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <h2 className="text-[1.375rem] font-bold text-[#F5F7FA] mb-5">Related Resources</h2>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((r, i) => {
              const RIcon = categoryIcons[r.category] || FileText;
              const rColor = categoryColors[r.category] || "text-[#7C5CFC] bg-[#7C5CFC]/10";
              return (
                <AnimatedSection key={r.id} delay={i * 60} type="scale">
                  <Link href={`/resources/${r.slug}`} className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full transition-all duration-300 hover:border-[#7C5CFC]/20 hover:bg-[#161B26]">
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${rColor}`}>
                        <RIcon className="h-2.5 w-2.5" />
                        {r.category}
                      </div>
                      <span className="text-[12px] text-[#6B7A8D]">{r.readTime}</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors leading-[1.5]">
                      {r.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-[#7C5CFC]">
                      Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
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
