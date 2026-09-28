import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { projects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { ArrowRight, ArrowLeft, Check, TrendingUp } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `https://applumy.com/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="pt-16 lg:pt-[72px]">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <span className="text-7xl font-bold text-white/10">404</span>
            <h1 className="text-[1.625rem] font-bold text-[#F5F7FA]">Project Not Found</h1>
            <p className="text-[16px] text-[#6B7A8D]">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/projects">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero — Full Width Image + Overlay */}
      <section className="py-5 lg:py-7">
        <Container>
          <AnimatedSection className="flex flex-col gap-4">
            <Link href="/projects" className="flex items-center gap-1.5 text-[14px] text-[#6B7A8D] hover:text-[#7C5CFC] transition-colors w-fit">
              <ArrowLeft className="h-3.5 w-3.5" />
              All Projects
            </Link>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Badge>{project.category}</Badge>
                <h1 className="text-[1.875rem] font-bold tracking-tight text-[#F5F7FA] sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
                  {project.title}
                </h1>
                <p className="text-[14px] text-[#6B7A8D]">
                  Client: <span className="text-[#A7AFBF]">{project.client}</span>
                </p>
                <p className="max-w-lg text-[16px] sm:text-[17px] text-[#A7AFBF] leading-[1.8]">
                  {project.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Button href="/contact" size="md">
                    Start a Similar Project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/projects" variant="secondary" size="md">
                    View All Projects
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#7C5CFC]/20 via-transparent to-[#3B82F6]/10 rounded-2xl blur-xl" />
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} project by Applumy`}
                  width={800}
                  height={500}
                  priority
                  className="relative rounded-xl border border-white/[0.08] object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Results */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">Results</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Project Impact</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {project.results.map((result, i) => (
              <AnimatedSection key={result.label} delay={i * 50}>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-[#11151D] p-4 text-center">
                  <TrendingUp className="h-4 w-4 text-[#7C5CFC]" />
                  <span className="text-[18px] font-bold text-[#F5F7FA]">{result.value}</span>
                  <span className="text-[13px] text-[#6B7A8D]">{result.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">What We Built</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Key Features</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] p-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-green-500/10">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-[15px] text-[#A7AFBF]">{feature}</span>
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
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Technologies Used</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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

      {/* Related Projects */}
      <section className="py-5 lg:py-7 border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.2em]">More Work</p>
              <h2 className="text-[1.625rem] font-bold text-[#F5F7FA]">Related Projects</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related, i) => (
              <AnimatedSection key={related.id} delay={i * 60} type="scale">
                <Link
                  href={`/projects/${related.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#11151D] overflow-hidden transition-all duration-300 hover:border-[#7C5CFC]/20 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#7C5CFC]/[0.06] to-[#3B82F6]/[0.04]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4 pt-0">
                    <span className="text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-[0.15em]">{related.category}</span>
                    <h3 className="text-[15px] font-semibold text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                      {related.title}
                    </h3>
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
            <Button href="/contact" size="md">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
