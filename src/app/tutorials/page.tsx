"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { resources } from "@/data/resources";
import { ArrowRight, Clock, Search, ArrowLeft, GraduationCap } from "lucide-react";

const tutorials = resources.filter((r) => r.category === "Tutorial");

export default function TutorialsPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return tutorials.filter((t) => {
      return search === "" || t.title.toLowerCase().includes(search.toLowerCase()) || t.excerpt.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="py-5 lg:py-7">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <Link href="/resources" className="flex items-center gap-1.5 text-[14px] text-[#6B7A8D] hover:text-[#7C5CFC] transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Resources
            </Link>
            <Badge>Tutorials</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Step-by-Step <span className="text-[#7C5CFC]">Tutorials</span>
            </h1>
            <p className="max-w-xl text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
              Hands-on tutorials that walk you through real development tasks.
              Learn by doing with practical, project-based guides.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Search + Tutorials */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="relative max-w-md mb-5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7A8D]" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-9 pr-3 py-2.5 text-[15px] text-[#F5F7FA] placeholder:text-[#6B7A8D] focus:border-[#7C5CFC]/30 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/20 transition-colors"
              />
            </div>
          </AnimatedSection>

          {filtered.length === 0 ? (
            <AnimatedSection className="flex flex-col items-center text-center py-10 gap-3">
              <span className="text-[32px] font-bold text-white/10">0</span>
              <p className="text-[16px] text-[#6B7A8D]">No tutorials found.</p>
              <Button onClick={() => setSearch("")} variant="secondary" size="sm">
                Clear Search
              </Button>
            </AnimatedSection>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tutorial, i) => (
                <AnimatedSection key={tutorial.id} delay={i * 60} type="scale">
                  <Link href={`/resources/${tutorial.slug}`} className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full transition-all duration-300 hover:border-amber-500/20 hover:bg-[#161B26]">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full px-2.5 py-1 text-[12px] font-medium text-amber-400 bg-amber-500/10">
                        Tutorial
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[#6B7A8D]">
                        <Clock className="h-3 w-3" />
                        {tutorial.readTime}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-amber-400 transition-colors leading-[1.5]">
                      {tutorial.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {tutorial.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-amber-400">
                      Start Tutorial <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Want to Learn More?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              We are always creating new tutorials. If you want to learn about a specific topic,
              let us know and we will write about it.
            </p>
            <Button href="/contact" size="md">
              Suggest a Tutorial <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
