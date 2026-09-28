import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { projects } from "@/data/projects";
import { ArrowUpRight, ArrowRight, Check, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of successful web development, software, and mobile app projects built for clients across India.",
  alternates: { canonical: "https://applumy.com/projects" },
};

const categories = ["All", "E-Commerce", "Web Application", "Corporate", "Mobile App", "SaaS", "UI/UX Design"];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "40%", label: "Avg Conversion Increase" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Post-Launch Support" },
];

export default function ProjectsPage() {
  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero — Split: Text Left + Image Right */}
      <section className="py-5 lg:py-7">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <Badge>Our Work</Badge>
                <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
                  Projects That{" "}
                  <span className="text-[#7C5CFC]">Drive Results</span>
                </h1>
                <p className="max-w-lg text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
                  Explore our portfolio and see how we help businesses achieve
                  their digital goals through strategic web development and design.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Button href="/contact" size="md">
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="#projects-grid" variant="secondary" size="md">
                    View Our Work
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} type="scale">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#3B82F6]/10 rounded-2xl blur-xl" />
                <Image
                  src="/images/services/services-hero.png"
                  alt="Applumy portfolio — web development, mobile apps, and software projects"
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

      {/* Stats */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="rounded-xl border border-white/[0.08] bg-[#11151D] p-4">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 text-center">
                    <span className="text-7xl font-bold text-[#7C5CFC]">{stat.value}</span>
                    <p className="text-[13px] text-[#6B7A8D]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-5">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-[14px] text-[#A7AFBF] cursor-pointer transition-all hover:border-[#7C5CFC]/20 hover:text-[#F5F7FA]"
              >
                {cat}
              </span>
            ))}
          </AnimatedSection>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 80} type="scale">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#11151D] transition-all duration-300 hover:border-[#7C5CFC]/20 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#7C5CFC]/[0.06] to-[#3B82F6]/[0.04]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.15em]">{project.category}</span>
                      <span className="text-[12px] text-[#6B7A8D]">{project.client}</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7A8D] leading-[1.7]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[12px] text-[#6B7A8D]">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[12px] text-[#6B7A8D]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Have a Project in Mind?</h2>
            <p className="max-w-lg text-[16px] text-[#A7AFBF]">
              Let&apos;s discuss how we can help bring your vision to life. We&apos;ll provide a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button href="/contact" size="md">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="md">
                View Services
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
