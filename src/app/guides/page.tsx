"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { resources } from "@/data/resources";
import { ArrowRight, Clock, Search, ArrowLeft, BookOpen, Tag } from "lucide-react";

const guides = resources.filter((r) => r.category === "Guide");

const allTags = ["All", ...Array.from(new Set(guides.map((r) => r.title.split(":")[0])))];

export default function GuidesPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      const matchTag = activeTag === "All" || g.title.startsWith(activeTag);
      const matchSearch = search === "" || g.title.toLowerCase().includes(search.toLowerCase()) || g.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchTag && matchSearch;
    });
  }, [activeTag, search]);

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
            <Badge>Guides</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              In-Depth <span className="text-[#7C5CFC]">Guides</span>
            </h1>
            <p className="max-w-xl text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
              Comprehensive guides to help you make informed decisions about technology,
              design, and digital strategy. Written from real experience, not theory.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Guide */}
      {guides.length > 0 && (
        <section className="py-5 lg:py-7 border-t border-white/[0.06]">
          <Container>
            <AnimatedSection>
              <Link href={`/resources/${guides[0].slug}`} className="group block rounded-xl border border-[#7C5CFC]/20 bg-gradient-to-br from-[#7C5CFC]/[0.06] to-[#3B82F6]/[0.04] p-6 transition-all hover:border-[#7C5CFC]/30">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full px-2.5 py-1 text-[12px] font-medium text-[#3B82F6] bg-[#3B82F6]/10">
                        Featured Guide
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[#6B7A8D]">
                        <Clock className="h-3 w-3" />
                        {guides[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-[1.375rem] font-bold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors lg:text-[1.625rem]">
                      {guides[0].title}
                    </h2>
                    <p className="max-w-xl text-[15px] text-[#A7AFBF] leading-[1.8]">
                      {guides[0].excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#7C5CFC] shrink-0">
                    Read Guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Search + Filters */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-3 mb-5">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7A8D]" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-9 pr-3 py-2.5 text-[15px] text-[#F5F7FA] placeholder:text-[#6B7A8D] focus:border-[#7C5CFC]/30 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/20 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 6).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition-all ${
                      activeTag === tag
                        ? "border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6]"
                        : "border-white/[0.06] bg-white/[0.03] text-[#6B7A8D] hover:text-[#A7AFBF]"
                    }`}
                  >
                    <BookOpen className="inline h-3 w-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {filtered.length === 0 ? (
            <AnimatedSection className="flex flex-col items-center text-center py-10 gap-3">
              <span className="text-7xl font-bold text-white/10">0</span>
              <p className="text-[16px] text-[#6B7A8D]">No guides found.</p>
              <Button onClick={() => { setSearch(""); setActiveTag("All"); }} variant="secondary" size="sm">
                Clear Filters
              </Button>
            </AnimatedSection>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((guide, i) => (
                <AnimatedSection key={guide.id} delay={i * 60} type="scale">
                  <Link href={`/resources/${guide.slug}`} className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full transition-all duration-300 hover:border-[#3B82F6]/20 hover:bg-[#161B26]">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full px-2.5 py-1 text-[12px] font-medium text-[#3B82F6] bg-[#3B82F6]/10">
                        Guide
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[#6B7A8D]">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-[#3B82F6] transition-colors leading-[1.5]">
                      {guide.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {guide.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-[#3B82F6]">
                      Read Guide <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
