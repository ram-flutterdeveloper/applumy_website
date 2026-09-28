import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06]">
      <Container>
        <AnimatedSection>
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <Image
                src="/images/hero/cta-background.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[#080A0F]/85" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFC]/[0.06] via-transparent to-[#3B82F6]/[0.04]" />
            </div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFC]/40 to-transparent" />

            <div className="px-8 py-14 text-center sm:px-14 relative">
              <div className="flex flex-col items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/15">
                  <ArrowRight className="h-6 w-6 text-[#7C5CFC]" />
                </div>
                <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-[#F5F7FA] sm:text-[2.375rem] lg:text-[2.625rem]">
                  Let&apos;s build something
                </h2>
                <p className="max-w-md text-[17px] text-[#A7AFBF] leading-[1.8]">
                  Got a project in mind? We&apos;d love to hear about it.
                  Drop us a line and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="tel:+917678293527" variant="secondary" size="lg">
                    <Phone className="h-4 w-4" /> Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
