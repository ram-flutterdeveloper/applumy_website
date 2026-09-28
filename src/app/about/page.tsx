import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Eye, Heart, Users, Award, TrendingUp, Lightbulb, Handshake, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Applumy — a full-stack development agency specializing in websites, software, and mobile apps. Meet our team and discover our approach.",
};

const values = [
  { icon: Target, title: "Results Driven", description: "Every decision is measured against real business outcomes. We don't just build — we deliver measurable growth." },
  { icon: Eye, title: "Attention to Detail", description: "Pixel-perfect execution in every project. From code architecture to visual polish, excellence is non-negotiable." },
  { icon: Heart, title: "Client First", description: "Your success is our success. We invest in long-term partnerships, not one-time transactions." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of technology trends to keep your business competitive in a rapidly evolving digital landscape." },
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
];

const team = [
  { name: "Aditya Pandey", role: "Founder & CEO", description: "4+ years building digital products for startups and enterprises across India and globally.", initials: "AP" },
  { name: "Uttam", role: "Head of Design", description: "Creative designer focused on user-centered experiences and cohesive visual systems.", initials: "UT" },
  { name: "Ram Prakash", role: "Lead Developer", description: "Full-stack engineer specializing in React, Node.js and modern web ecosystems.", initials: "RP" },
  { name: "Aditya Pandey", role: "SEO Director", description: "Data-driven SEO strategist with proven ranking and organic growth results.", initials: "AP" },
];

const principles = [
  { icon: Users, title: "Client Partnership", desc: "We work as an extension of your team, not just a vendor. Your goals become our goals." },
  { icon: Award, title: "Quality First", desc: "Every line of code and design element meets our high standards before it reaches you." },
  { icon: TrendingUp, title: "Growth Focus", desc: "Our solutions are designed to scale with your business as it evolves and expands." },
  { icon: Handshake, title: "Transparency", desc: "Open communication, clear timelines, and honest reporting at every stage of the project." },
  { icon: Target, title: "Goal Oriented", desc: "We align our work with your specific business objectives and KPIs from day one." },
  { icon: Lightbulb, title: "Continuous Learning", desc: "We stay current with the latest technologies to give you a competitive edge." },
];

const testimonials = [
  { quote: "Applumy transformed our online presence. The team delivered a website that not only looks great but drives real business results.", author: "Rahul Sharma", company: "Founder, TechStart India" },
  { quote: "Professional, responsive, and truly invested in our success. They went above and beyond to deliver our mobile app on time.", author: "Priya Gupta", company: "CEO, ShopEasy" },
  { quote: "The best development partner we've worked with. Their attention to detail and commitment to quality is unmatched.", author: "Amit Verma", company: "CTO, DataFlow Systems" },
];

export default function AboutPage() {
  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero — Split: Text Left + Image Right */}
      <section className="py-5 lg:py-7">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <Badge>About Applumy</Badge>
                <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
                  We Build Digital{" "}
                  <span className="text-[#7C5CFC]">Products That Move</span>{" "}
                  Businesses Forward
                </h1>
                <p className="max-w-lg text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
                  A team of passionate developers, designers, and strategists
                  dedicated to creating websites and software that drive real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Button href="/contact" size="md">
                    Work With Us <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary" size="md">
                    Our Services
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} type="scale">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#3B82F6]/10 rounded-2xl blur-xl" />
                <Image
                  src="/images/aboutus/about-hero.png"
                  alt="Applumy team collaborating on digital projects"
                  width={800}
                  height={600}
                  priority
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="rounded-xl border border-white/[0.08] bg-[#11151D] p-4">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 text-center">
                    <span className="text-[22px] font-bold text-[#7C5CFC]">{stat.value}</span>
                    <p className="mt-1 text-[13px] text-[#6B7A8D]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Story — Split: Image Left + Text Right */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <AnimatedSection type="scale">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#3B82F6]/15 via-transparent to-[#7C5CFC]/10 rounded-2xl blur-xl" />
                <Image
                  src="/images/aboutus/company-story.png"
                  alt="Applumy workspace — developers building digital products"
                  width={700}
                  height={500}
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Our Story</p>
                <h2 className="text-[1.625rem] font-bold text-[#F5F7FA] lg:text-[2.125rem]">Crafting Digital Success Since 2016</h2>
                <p className="text-[16px] text-[#A7AFBF] leading-[1.8]">
                  Applumy was founded by Aditya Pandey with a simple mission: help businesses succeed
                  online through exceptional web development and strategic digital solutions.
                </p>
                <p className="text-[16px] text-[#A7AFBF] leading-[1.8]">
                  We&apos;re a small but capable team of developers, designers, and strategists who
                  believe in building products that matter. Over the years, we&apos;ve worked with
                  startups, SMEs, and enterprise clients across industries.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[15px] text-[#A7AFBF]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
                    Modern Tech Stack
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-[#A7AFBF]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
                    Performance First
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-[#A7AFBF]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
                    Client Focused
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <SectionHeading badge="Purpose" title="Our Mission &" highlight="Vision" />
          </AnimatedSection>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            <AnimatedSection delay={50}>
              <div className="rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C5CFC]/10 mb-3">
                  <Target className="h-4 w-4 text-[#7C5CFC]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#F5F7FA] mb-2">Our Mission</h3>
                <p className="text-[15px] text-[#A7AFBF] leading-[1.8]">
                  To empower businesses with digital solutions that deliver measurable growth.
                  We build technology that works — not just technology that looks good.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="rounded-xl border border-white/[0.06] bg-[#11151D] p-5 h-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10 mb-3">
                  <Eye className="h-4 w-4 text-[#3B82F6]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#F5F7FA] mb-2">Our Vision</h3>
                <p className="text-[15px] text-[#A7AFBF] leading-[1.8]">
                  Create technology experiences that help businesses grow and operate smarter.
                  We envision a future where every business has access to premium digital tools.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values — With Image */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Our Values</p>
                <h2 className="text-[1.625rem] font-bold text-[#F5F7FA] lg:text-[2.125rem]">What We Stand For</h2>
                <p className="text-[16px] text-[#A7AFBF] leading-[1.8]">
                  These principles guide every decision we make and every product we build.
                </p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <AnimatedSection key={v.title} delay={i * 50} type="scale">
                      <div className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-[#11151D] p-4 h-full transition-colors hover:bg-[#161B26]">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                          <Icon className="h-3.5 w-3.5 text-[#7C5CFC]" />
                        </div>
                        <h3 className="text-[14px] font-semibold text-[#F5F7FA]">{v.title}</h3>
                        <p className="text-[13px] text-[#6B7A8D] leading-[1.7]">{v.description}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} type="scale">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFC]/15 via-transparent to-[#3B82F6]/10 rounded-2xl blur-xl" />
                <Image
                  src="/images/aboutus/values.png"
                  alt="Applumy core values — innovation, quality, transparency, and growth"
                  width={600}
                  height={500}
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <SectionHeading
              badge="How We Work"
              title="Our Approach to"
              highlight="Every Project"
            />
          </AnimatedSection>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 50}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-4 transition-colors hover:bg-[#161B26]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7C5CFC]/10">
                      <Icon className="h-4 w-4 text-[#7C5CFC]" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-medium text-[#F5F7FA]">{item.title}</h3>
                      <p className="mt-1 text-[14px] text-[#6B7A8D] leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team — With Image */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <SectionHeading badge="Team" title="Meet the" highlight="People Behind the Code" />
          </AnimatedSection>

          <AnimatedSection delay={50} type="scale" className="mt-5">
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08]">
              <Image
                src="/images/aboutus/team-placeholder.png"
                alt="Applumy team — young developers and designers collaborating in a modern workspace"
                width={1200}
                height={500}
                className="w-full object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/80 via-[#080A0F]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[15px] text-[#A7AFBF] max-w-xl leading-[1.8]">
                  A small but passionate team of developers, designers, and strategists working together
                  to build products that make a difference.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimatedSection key={`${member.name}-${member.role}`} delay={i * 50} type="scale">
                <div className="flex flex-col items-center rounded-xl border border-white/[0.06] bg-[#11151D] p-5 text-center transition-colors hover:bg-[#161B26]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#7C5CFC]/10 text-[16px] font-semibold text-[#7C5CFC]">
                    {member.initials}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#F5F7FA]">{member.name}</h3>
                  <p className="mt-0.5 text-[13px] text-[#7C5CFC]">{member.role}</p>
                  <p className="mt-2 text-[13px] text-[#6B7A8D] leading-[1.7]">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <SectionHeading badge="Testimonials" title="What Our" highlight="Clients Say" />
          </AnimatedSection>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-5">
                  <Quote className="h-5 w-5 text-[#7C5CFC]/40" />
                  <p className="text-[15px] text-[#A7AFBF] leading-[1.8] italic">{t.quote}</p>
                  <div className="mt-auto pt-2 border-t border-white/[0.06]">
                    <p className="text-[14px] font-semibold text-[#F5F7FA]">{t.author}</p>
                    <p className="text-[13px] text-[#6B7A8D]">{t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <SectionHeading badge="FAQ" title="Frequently Asked" highlight="Questions" />
          </AnimatedSection>
          <div className="mx-auto mt-5 max-w-[820px] flex flex-col gap-1.5">
            {[
              { q: "What industries do you work with?", a: "We work with businesses across technology, e-commerce, healthcare, finance, education, and more. Our solutions are tailored to each industry's unique needs." },
              { q: "Do you work with international clients?", a: "Yes, we serve clients globally with remote collaboration and flexible time zone support. We've delivered projects for clients across India, USA, UK, and beyond." },
              { q: "What is your team size?", a: "Our core team covers development, design, SEO, and project management. We scale resources based on project requirements to ensure optimal delivery." },
              { q: "How do you ensure project quality?", a: "We follow agile development practices, conduct thorough code reviews, and perform comprehensive testing before every deployment." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="rounded-xl border border-white/[0.06] bg-[#11151D] p-4">
                  <h3 className="text-[15px] font-medium text-[#F5F7FA]">{item.q}</h3>
                  <p className="mt-2 text-[14px] text-[#6B7A8D] leading-[1.7]">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Ready to Start Your Project?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">Let&apos;s discuss how we can help your business grow online.</p>
            <Button href="/contact" size="md">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
