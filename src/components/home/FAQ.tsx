"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C5CFC]/[0.02] blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            description="Find answers to common questions about our services, process, and pricing."
          />
        </AnimatedSection>
        <div className="mx-auto mt-8 max-w-[820px]">
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <AnimatedSection key={faq.id} delay={i * 40}>
                  <div
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#7C5CFC]/20 bg-[#11151D]/80 shadow-[0_0_30px_rgba(124,92,252,0.04)]"
                        : "border-white/[0.06] bg-[#11151D]/60 hover:bg-[#161B26]/60 hover:border-white/[0.08]"
                    }`}
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-[16px] font-medium transition-colors duration-200 ${isOpen ? "text-[#7C5CFC]" : "text-[#F5F7FA]"}`}>
                        {faq.question}
                      </span>
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isOpen ? "bg-[#7C5CFC]/15 border border-[#7C5CFC]/20" : "bg-white/[0.04] border border-white/[0.06]"
                      }`}>
                        {isOpen ? <Minus className="h-3.5 w-3.5 text-[#7C5CFC]" /> : <Plus className="h-3.5 w-3.5 text-[#6B7A8D]" />}
                      </div>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[15px] leading-[1.85] text-[#A7AFBF]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
