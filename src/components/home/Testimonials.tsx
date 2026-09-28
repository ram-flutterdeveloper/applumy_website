"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C5CFC]/[0.03] blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Testimonials"
            title="What clients say"
            description="Don't take our word for it — hear from the businesses we've worked with."
          />
        </AnimatedSection>
        <div className="mt-10">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl">
              <div className="relative rounded-2xl border border-white/[0.06] bg-[#11151D]/80 backdrop-blur-sm p-7 sm:p-9 overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFC]/30 to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7C5CFC]/[0.04] blur-[60px] rounded-full" />

                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#7C5CFC]/10" />
                <div className="mb-5 flex gap-0.5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400/80 text-yellow-400/80" />
                  ))}
                </div>
                <blockquote className="mb-6 text-[17px] sm:text-[18px] leading-[1.85] text-[#A7AFBF]">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFC]/20 to-[#3B82F6]/10 border border-[#7C5CFC]/10 text-[14px] font-semibold text-[#7C5CFC]">
                    {testimonials[current].name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[#F5F7FA]">{testimonials[current].name}</p>
                    <p className="text-[14px] text-[#6B7A8D]">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[#6B7A8D] transition-all duration-200 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-[#7C5CFC]" : "w-1.5 bg-white/10 hover:bg-white/25"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[#6B7A8D] transition-all duration-200 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
