"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { resources } from "@/data/resources";
import { ArrowRight, Clock, Search, ArrowLeft, Tag } from "lucide-react";

const blogPosts = resources.filter((r) => r.category === "Blog" || r.category === "Guide");

const allTags = ["All", ...Array.from(new Set(blogPosts.map((r) => r.category)))];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchTag = activeTag === "All" || post.category === activeTag;
      const matchSearch = search === "" || post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
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
            <Badge>Blog</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Our <span className="text-[#7C5CFC]">Blog</span>
            </h1>
            <p className="max-w-xl text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
              Thoughts, insights, and practical advice on web development, mobile apps,
              and building digital products that actually work.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Search + Filters */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-3 mb-5">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7A8D]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-9 pr-3 py-2.5 text-[15px] text-[#F5F7FA] placeholder:text-[#6B7A8D] focus:border-[#7C5CFC]/30 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/20 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition-all ${
                      activeTag === tag
                        ? "border-[#7C5CFC]/40 bg-[#7C5CFC]/10 text-[#7C5CFC]"
                        : "border-white/[0.06] bg-white/[0.03] text-[#6B7A8D] hover:text-[#A7AFBF]"
                    }`}
                  >
                    <Tag className="inline h-3 w-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {filtered.length === 0 ? (
            <AnimatedSection className="flex flex-col items-center text-center py-10 gap-3">
              <span className="text-[32px] font-bold text-white/10">0</span>
              <p className="text-[16px] text-[#6B7A8D]">No articles found matching your search.</p>
              <Button onClick={() => { setSearch(""); setActiveTag("All"); }} variant="secondary" size="sm">
                Clear Filters
              </Button>
            </AnimatedSection>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 60} type="scale">
                  <Link href={`/resources/${post.slug}`} className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full transition-all duration-300 hover:border-[#7C5CFC]/20 hover:bg-[#161B26]">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-2.5 py-1 text-[12px] font-medium ${
                        post.category === "Blog" ? "text-[#7C5CFC] bg-[#7C5CFC]/10" : "text-[#3B82F6] bg-[#3B82F6]/10"
                      }`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[#6B7A8D]">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors leading-[1.5]">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-[#7C5CFC]">
                      Read Article <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Stay in the Loop</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              Get new articles delivered to your inbox. No spam, just useful insights on building better digital products.
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
    </main>
  );
}
