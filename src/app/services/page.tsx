import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { services } from "@/data/services";
import { technologies } from "@/data/technologies";
import {
  ArrowRight, Check, Shield, Headphones, Zap, Clock, Code, Globe,
  Smartphone, Palette, Server, Database, Layout, Lock, Sparkles,
  TrendingUp, Users, Target, Rocket
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end digital solutions — AI development, web applications, mobile apps, cloud engineering, UI/UX design, and enterprise software built with modern technologies.",
  alternates: { canonical: "https://applumy.com/services" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Code, Smartphone, Palette, Server, Database, Layout, Shield: Lock,
};

const stats = [
  { value: "100+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Target },
  { value: "15+", label: "Team Experts", icon: Users },
  { value: "5+", label: "Countries Served", icon: TrendingUp },
];

const capabilities = [
  { title: "Custom Development", desc: "Tailored solutions built from scratch for your specific business needs.", icon: Code },
  { title: "UI/UX Design", desc: "User-centered interfaces that convert visitors into customers.", icon: Palette },
  { title: "Performance", desc: "Optimized for speed, SEO, and Core Web Vitals scoring.", icon: Zap },
  { title: "Scalability", desc: "Architecture that grows with your business demands.", icon: TrendingUp },
  { title: "Security", desc: "Industry-standard security practices to protect your data.", icon: Shield },
  { title: "Cloud Native", desc: "Deployed on AWS, GCP, or Azure with auto-scaling.", icon: Globe },
];

const whyChooseUs = [
  { icon: Shield, title: "Quality Assurance", desc: "Every project undergoes rigorous testing and code review before deployment." },
  { icon: Headphones, title: "Ongoing Support", desc: "We don't disappear after launch. Support and maintenance always available." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology ensures timely delivery without compromising quality." },
  { icon: Clock, title: "24hr Response", desc: "We respond to all inquiries within 24 hours during business days." },
];

const techCategories = ["Frontend", "Backend", "Mobile", "Database", "Cloud", "CMS"];

export default function ServicesPage() {
  return (
    <main className="pt-14 lg:pt-16">
      {/* Hero */}
      <section className="py-[15px] lg:py-[25px]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1 w-fit">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.12em]">Our Services</span>
                </div>
                <h1 className="text-[1.875rem] font-bold tracking-[-0.03em] text-white sm:text-[2.125rem] lg:text-[2.625rem] leading-[1.12]">
                  Digital Solutions{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Built Around</span>{" "}
                  Your Business
                </h1>
                <p className="max-w-lg text-[15px] sm:text-[16px] text-slate-400 leading-[1.8]">
                  From AI-powered platforms to enterprise web applications — we design and develop
                  modern digital solutions that drive real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Button href="/contact" size="md" variant="glow">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="#services-grid" variant="secondary" size="md">
                    View Services
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 rounded-2xl blur-xl" />
                <Image
                  src="/images/hero/new/service_custom_software_web_app.png"
                  alt="Applumy digital services — web development, mobile apps, and software solutions"
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

      {/* Stats Bar */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/15">
                  <s.icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[16px] font-bold text-white">{s.value}</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1 mb-3">
                <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.12em]">What We Do</span>
              </div>
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="mt-2 max-w-lg mx-auto text-[15px] text-slate-400">
                From concept to launch, we deliver end-to-end digital solutions that drive growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.id === "security" ? "Shield" : service.id === "ui-ux" ? "Palette" : service.id === "frontend-development" ? "Layout" : service.id === "backend-development" ? "Server" : service.id === "database-solutions" ? "Database" : service.id === "mobile-app-development" ? "Smartphone" : service.id === "software-development" ? "Code" : "Globe"];
              return (
                <AnimatedSection key={service.id} delay={i * 50}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-cyan-500/20 hover:-translate-y-0.5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/15">
                      <Icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <h3 className="mb-1.5 text-[15px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-[13px] text-slate-500 leading-[1.7]">
                      {service.shortDescription}
                    </p>
                    <ul className="mb-3 flex flex-col gap-1 mt-auto">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12px] text-slate-500">
                          <Check className="h-3 w-3 text-cyan-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-cyan-400">
                      Learn More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1 mb-3">
                <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-[0.12em]">Capabilities</span>
              </div>
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                What We <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Deliver</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 50}>
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-blue-500/20 hover:bg-white/[0.04]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 shrink-0">
                    <item.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1 mb-3">
                <span className="text-[11px] font-semibold text-violet-300 uppercase tracking-[0.12em]">Tech Stack</span>
              </div>
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                Technologies <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">We Use</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat, ci) => (
              <AnimatedSection key={cat} delay={ci * 50}>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <h3 className="text-[12px] font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">{cat}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.filter((t) => t.category === cat).map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-[12px] text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-default"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 w-fit">
                  <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-[0.12em]">Our Process</span>
                </div>
                <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                  How We <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
                </h2>
                <p className="text-[15px] text-slate-400 leading-[1.8]">
                  A proven 5-step process that ensures every project is delivered on time, within budget, and to the highest quality standards.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {[
                  { step: "01", title: "Discovery", desc: "Analyze your business goals and requirements" },
                  { step: "02", title: "Architecture", desc: "Plan system design and technology stack" },
                  { step: "03", title: "Development", desc: "Build with modern frameworks and clean code" },
                  { step: "04", title: "Testing", desc: "Quality assurance and performance tuning" },
                  { step: "05", title: "Launch", desc: "Deploy and provide ongoing support" },
                ].map((s, i) => (
                  <AnimatedSection key={s.step} delay={i * 50}>
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 hover:border-emerald-500/20 transition-all">
                      <span className="text-[16px] font-bold text-emerald-500/30">{s.step}</span>
                      <h3 className="mt-0.5 text-[13px] font-semibold text-white">{s.title}</h3>
                      <p className="mt-0.5 text-[12px] text-slate-500">{s.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/5 rounded-2xl blur-xl" />
                <Image
                  src="/images/hero/new/process_agile_development_flow.png"
                  alt="Applumy development process"
                  width={700}
                  height={500}
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1 mb-3">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-[0.12em]">Why Choose Us</span>
              </div>
              <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                What Makes Us <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Different</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 50}>
                <div className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center transition-all hover:border-amber-500/20 hover:bg-white/[0.04]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/15">
                    <item.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-white">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0a1128] to-[#050814]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/[0.05] blur-[100px] rounded-full" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="relative px-8 py-12 text-center">
                <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem] mb-3">
                  Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Project?</span>
                </h2>
                <p className="max-w-lg mx-auto text-[15px] text-slate-400 mb-5">
                  Let&apos;s discuss your requirements and find the perfect solution for your business.
                </p>
                <Button href="/contact" size="md" variant="glow">
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
