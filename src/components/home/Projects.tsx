import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const projectImages: Record<string, string> = {
  "ecommerce-platform": "/images/hero/project-ecommerce-platform.png",
  "saas-dashboard": "/images/hero/project-admin-dashboard.png",
  "corporate-website": "/images/hero/project-web-platform.png",
  "mobile-app": "/images/hero/project-mobile-app.png",
  "inventory-system": "/images/hero/project-api-cloud-platform.png",
  "analytics-dashboard": "/images/hero/project-performance-optimization.png",
};

export function Projects() {
  return (
    <section className="relative py-10 lg:py-14 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F] via-[#0A0D14] to-[#080A0F]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C5CFC]/[0.03] blur-[120px] rounded-full" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Our Work"
            title="Featured"
            highlight="Projects"
            description="Explore our latest work and see how we help businesses achieve their digital goals."
          />
        </AnimatedSection>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((project, i) => {
            const imgSrc = projectImages[project.id] || project.image;
            return (
              <AnimatedSection key={project.id} delay={i * 80} type="scale">
                <Link
                  href="/projects"
                  className="group card-glow block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#11151D]/80 transition-all duration-400 hover:border-[#7C5CFC]/20 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(124,92,252,0.06)]"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0D1017]">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} — ${project.category} project by Applumy`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11151D]/80 via-[#11151D]/20 to-transparent" />
                    <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/10">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    {/* Category badge on image */}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#11151D]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[12px] font-semibold text-[#A7AFBF] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col gap-2.5 p-5">
                    <h3 className="text-[17px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7A8D] leading-[1.7] line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-md bg-white/[0.04] border border-white/[0.04] px-2.5 py-1 text-[13px] text-[#6B7A8D]">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-md bg-white/[0.04] border border-white/[0.04] px-2.5 py-1 text-[13px] text-[#6B7A8D]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection delay={240}>
          <div className="mt-8 text-center">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[16px] font-medium text-[#7C5CFC] transition-colors hover:text-[#A78BFA]">
              View All Projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
