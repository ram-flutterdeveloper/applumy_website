import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { ArrowRight, ArrowLeft, Check, Zap, Shield, Headphones, Clock } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://applumy.com/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="pt-16 lg:pt-[72px]">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <span className="text-[50px] font-bold text-white/10">404</span>
            <h1 className="text-[1.625rem] font-bold text-[#F5F7FA]">Service Not Found</h1>
            <p className="text-[16px] text-[#6B7A8D]">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/services">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const relatedServices = getRelatedServices(slug, 3);
  const Icon = service.icon;

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero — Split Layout */}
      <section className="py-5 lg:py-7">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <Link href="/services" className="flex items-center gap-1.5 text-[14px] text-[#6B7A8D] hover:text-[#7C5CFC] transition-colors w-fit">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  All Services
                </Link>
                <Badge>{service.category}</Badge>
                <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
                  {service.title}
                </h1>
                <p className="max-w-lg text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Button href="/contact" size="md">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary" size="md">
                    View All Services
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} type="scale">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#3B82F6]/10 rounded-2xl blur-xl" />
                <Image
                  src={service.heroImage}
                  alt={`${service.title} — Applumy ${service.category.toLowerCase()} services`}
                  width={800}
                  height={500}
                  priority
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { icon: Zap, label: "Fast Delivery", value: "2-8 Weeks" },
                { icon: Shield, label: "Quality Assured", value: "100% Tested" },
                { icon: Headphones, label: "Support", value: "3-6 Months" },
                { icon: Clock, label: "Response Time", value: "24 Hours" },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-[#11151D] p-4 text-center">
                    <StatIcon className="h-4 w-4 text-[#7C5CFC]" />
                    <span className="text-[16px] font-bold text-[#F5F7FA]">{stat.value}</span>
                    <span className="text-[13px] text-[#6B7A8D]">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Why Choose Us</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Key Benefits</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 50}>
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-4 transition-colors hover:bg-[#161B26]">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                    <Check className="h-3.5 w-3.5 text-[#7C5CFC]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#F5F7FA]">{benefit.title}</h3>
                    <p className="mt-1 text-[14px] text-[#6B7A8D] leading-[1.7]">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Deliver */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Deliverables</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">What You Get</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-green-500/10">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-[15px] text-[#A7AFBF]">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Tech Stack</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Technologies We Use</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-[14px] text-[#A7AFBF] transition-colors hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Process */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Our Process</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">How We Work</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 50} type="scale">
                <div className="rounded-xl border border-white/[0.06] bg-[#11151D] p-4 transition-colors hover:bg-[#161B26]">
                  <span className="block text-[22px] font-bold text-[#7C5CFC]/20">{step.step}</span>
                  <h3 className="mt-1 text-[15px] font-semibold text-[#F5F7FA]">{step.title}</h3>
                  <p className="mt-1 text-[14px] text-[#6B7A8D] leading-[1.7]">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Explore More</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Related Services</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related, i) => {
              const RelIcon = related.icon;
              return (
                <AnimatedSection key={related.id} delay={i * 60} type="scale">
                  <Link
                    href={`/services/${related.slug}`}
                    className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5 transition-all duration-300 hover:border-[#7C5CFC]/20 hover:bg-[#161B26]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                      <RelIcon className="h-4 w-4 text-[#7C5CFC]" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {related.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-[#7C5CFC]">
                      Learn More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Ready to Build Something Better?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              Let&apos;s turn your idea into a reliable digital product. Get a free consultation and project estimate.
            </p>
            <Button href="/contact" size="md">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
