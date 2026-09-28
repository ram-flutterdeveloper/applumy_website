"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { faqs } from "@/data/faqs";
import { ArrowRight, ArrowLeft, ChevronDown, Search, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";

const faqCategories = [
  { id: "general", label: "General", keywords: ["website", "build", "time", "long", "technologies", "what"] },
  { id: "pricing", label: "Pricing & Payment", keywords: ["price", "cost", "payment", "budget", "charge"] },
  { id: "process", label: "Process & Timeline", keywords: ["process", "timeline", "deliver", "milestone", "feedback"] },
  { id: "support", label: "Support & Maintenance", keywords: ["support", "maintenance", "after", "launch", "update"] },
  { id: "technical", label: "Technical", keywords: ["seo", "performance", "wordpress", "security", "hosting"] },
];

function categorize(faq: typeof faqs[0]): string {
  const q = faq.question.toLowerCase() + " " + faq.answer.toLowerCase();
  for (const cat of faqCategories) {
    if (cat.keywords.some((k) => q.includes(k))) return cat.id;
  }
  return "general";
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchCat = activeCategory === "all" || categorize(faq) === activeCategory;
    const matchSearch = search === "" || faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

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
            <Badge>FAQ</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Frequently Asked <span className="text-[#7C5CFC]">Questions</span>
            </h1>
            <p className="max-w-xl text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
              Answers to the questions we hear most often from clients.
              Can&apos;t find what you&apos;re looking for? Reach out — we are always happy to help.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Search + Categories */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-3 mb-5">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7A8D]" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-9 pr-3 py-2.5 text-[15px] text-[#F5F7FA] placeholder:text-[#6B7A8D] focus:border-[#7C5CFC]/30 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]/20 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition-all ${
                    activeCategory === "all"
                      ? "border-[#7C5CFC]/40 bg-[#7C5CFC]/10 text-[#7C5CFC]"
                      : "border-white/[0.06] bg-white/[0.03] text-[#6B7A8D] hover:text-[#A7AFBF]"
                  }`}
                >
                  <HelpCircle className="inline h-3 w-3 mr-1" />
                  All
                </button>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition-all ${
                      activeCategory === cat.id
                        ? "border-[#7C5CFC]/40 bg-[#7C5CFC]/10 text-[#7C5CFC]"
                        : "border-white/[0.06] bg-white/[0.03] text-[#6B7A8D] hover:text-[#A7AFBF]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ List */}
          <div className="flex flex-col gap-2">
            {filtered.map((faq, i) => (
              <AnimatedSection key={faq.id} delay={i * 40}>
                <div className={`rounded-xl border transition-all ${
                  openId === faq.id ? "border-[#7C5CFC]/20 bg-[#11151D]" : "border-white/[0.06] bg-[#11151D] hover:bg-[#161B26]"
                }`}>
                  <button
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        openId === faq.id ? "bg-[#7C5CFC]/20" : "bg-white/[0.04]"
                      }`}>
                        <HelpCircle className={`h-3.5 w-3.5 ${openId === faq.id ? "text-[#7C5CFC]" : "text-[#6B7A8D]"}`} />
                      </div>
                      <span className={`text-[15px] font-semibold transition-colors ${
                        openId === faq.id ? "text-[#7C5CFC]" : "text-[#F5F7FA]"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#6B7A8D] transition-transform duration-200 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`} />
                  </button>
                  {openId === faq.id && (
                    <div className="px-4 pb-4 pl-[52px]">
                      <p className="text-[15px] text-[#A7AFBF] leading-[1.9]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <AnimatedSection className="flex flex-col items-center text-center py-10 gap-3">
              <span className="text-[32px] font-bold text-white/10">0</span>
              <p className="text-[16px] text-[#6B7A8D]">No questions found matching your search.</p>
              <Button onClick={() => { setSearch(""); setActiveCategory("all"); }} variant="secondary" size="sm">
                Clear Filters
              </Button>
            </AnimatedSection>
          )}
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Still Have Questions?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              We are real people who love talking about projects. Reach out anytime
              and we will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:aditya8858.5@gmail.com" className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#11151D] px-4 py-2.5 text-[15px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]">
                <Mail className="h-4 w-4 text-[#7C5CFC]" />
                Email Us
              </a>
              <a href="tel:+917678293527" className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#11151D] px-4 py-2.5 text-[15px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]">
                <Phone className="h-4 w-4 text-[#7C5CFC]" />
                Call Us
              </a>
              <a href="https://wa.me/919336910546" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#11151D] px-4 py-2.5 text-[15px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]">
                <MessageSquare className="h-4 w-4 text-[#7C5CFC]" />
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
