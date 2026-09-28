"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import {
  Code, Smartphone, Palette, FileText,
  Briefcase, GraduationCap, Clock, MapPin,
  Send, CheckCircle, ArrowRight, Users,
  TrendingUp, Heart, Loader2, Sparkles, X,
} from "lucide-react";

const openings = [
  {
    icon: Code,
    title: "Web Developer",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Jaunpur, UP (Hybrid)",
    description: "Build modern web applications using React, Next.js, Node.js, and related technologies. Work on client projects from concept to deployment.",
    skills: ["React / Next.js", "Node.js", "TypeScript", "REST APIs", "Git"],
  },
  {
    icon: Smartphone,
    title: "Android Developer",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Jaunpur, UP (Hybrid)",
    description: "Develop and maintain Android applications using Kotlin, Java, and Flutter. Collaborate with UI/UX designers for pixel-perfect implementations.",
    skills: ["Kotlin / Java", "Flutter", "Firebase", "REST APIs", "Play Store"],
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Jaunpur, UP (Hybrid)",
    description: "Design intuitive and visually compelling interfaces for web and mobile products. Create wireframes, prototypes, and design systems.",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: FileText,
    title: "CMS Project Developer",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Jaunpur, UP (Hybrid)",
    description: "Build and customize websites using WordPress, Shopify, and other CMS platforms. Handle theme development, plugin customization, and site management.",
    skills: ["WordPress", "Shopify", "PHP", "HTML/CSS", "SEO Basics"],
  },
];

const internships = [
  {
    icon: Code,
    title: "Web Development Intern",
    duration: "3-6 Months",
    location: "Jaunpur, UP (Remote OK)",
    description: "Learn and contribute to real-world web projects. Gain hands-on experience with React, Next.js, and modern development workflows.",
  },
  {
    icon: Smartphone,
    title: "Android Development Intern",
    duration: "3-6 Months",
    location: "Jaunpur, UP (Remote OK)",
    description: "Assist in building mobile applications. Learn Kotlin, Flutter, and Android SDK under senior developer mentorship.",
  },
  {
    icon: Palette,
    title: "UI/UX Design Intern",
    duration: "3-6 Months",
    location: "Jaunpur, UP (Remote OK)",
    description: "Support the design team in creating wireframes, mockups, and prototypes. Learn Figma and design thinking principles.",
  },
];

const perks = [
  { icon: TrendingUp, title: "Growth Path", desc: "Clear promotion tracks and skill-based raises" },
  { icon: Users, title: "Mentorship", desc: "Learn directly from senior engineers" },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible hours and no-crunch policy" },
  { icon: Sparkles, title: "Live Projects", desc: "Work on real client products, not tutorials" },
];

type Status = "idle" | "sending" | "success" | "error";

export function CareerClient() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleApply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { type: "career", position: selectedJob ?? "" };
    data.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
    setStatus("idle");
    setErrorMsg("");
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-[15px] text-white placeholder:text-slate-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 transition-all duration-300 hover:border-white/[0.14]";
  const labelClass = "text-[13px] font-semibold text-slate-300 uppercase tracking-wider";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-[15px] lg:py-[25px]">
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <Badge>Career</Badge>
            <h1 className="text-[1.875rem] font-bold tracking-tight text-white sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
              Join Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="max-w-xl text-[16px] text-slate-400 leading-[1.8]">
              We&apos;re looking for talented developers and designers to join our growing team.
              Build real products, learn from experienced mentors, and grow your career.
            </p>

            <div className="grid w-full max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4 pt-2">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div key={perk.title} className="premium-card flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.06] bg-[#0B1020] px-3 py-3.5 text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20">
                      <Icon className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <p className="text-[13px] font-semibold text-white">{perk.title}</p>
                    <p className="text-[11px] text-slate-500 leading-[1.4]">{perk.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Full-Time Openings */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col items-center text-center gap-2.5 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20">
                <Briefcase className="h-4 w-4 text-cyan-400" />
              </div>
              <h2 className="text-[1.375rem] font-bold text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                Full-Time Openings
              </h2>
              <p className="max-w-lg text-[15px] text-slate-500 leading-[1.7]">
                1+ year experience required. Work on exciting client projects with a collaborative team.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-3 md:grid-cols-2">
            {openings.map((job, i) => {
              const Icon = job.icon;
              return (
                <AnimatedSection key={job.title} delay={i * 60}>
                  <div className="premium-card flex h-full flex-col gap-3 rounded-2xl border border-white/[0.06] bg-[#0B1020] p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20">
                        <Icon className="h-4.5 w-4.5 text-cyan-400" />
                      </div>
                      <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[12px] font-medium text-green-400">
                        {job.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold text-white">{job.title}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[13px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-[14px] text-slate-500 leading-[1.7]">{job.description}</p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {job.skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[12px] text-slate-400">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Button
                      onClick={() => { setSelectedJob(job.title); setStatus("idle"); }}
                      size="sm"
                      variant="glow"
                      className="w-full mt-1 btn-shine"
                    >
                      Apply Now <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Internships */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col items-center text-center gap-2.5 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
              </div>
              <h2 className="text-[1.375rem] font-bold text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                Internship Openings
              </h2>
              <p className="max-w-lg text-[15px] text-slate-500 leading-[1.7]">
                Perfect for freshers and students. Learn from industry experts and work on live projects.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-3 md:grid-cols-3">
            {internships.map((intern, i) => {
              const Icon = intern.icon;
              return (
                <AnimatedSection key={intern.title} delay={i * 60}>
                  <div className="premium-card flex h-full flex-col gap-3 rounded-2xl border border-white/[0.06] bg-[#0B1020] p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20">
                        <Icon className="h-4.5 w-4.5 text-cyan-400" />
                      </div>
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[12px] font-medium text-cyan-400">
                        Internship
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[16px] font-semibold text-white">{intern.title}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[13px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {intern.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {intern.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-[14px] text-slate-500 leading-[1.7]">{intern.description}</p>

                    <Button
                      onClick={() => { setSelectedJob(intern.title); setStatus("idle"); }}
                      size="sm"
                      variant="secondary"
                      className="w-full mt-auto"
                    >
                      Apply Now <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8">
          <AnimatedSection type="scale" className="w-full max-w-lg">
            <div className="premium-card rounded-2xl border border-white/[0.08] bg-[#0B1020] p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-[18px] font-semibold text-white">Apply for {selectedJob}</h3>
                  <p className="text-[14px] text-slate-500 mt-1">Fill out the form below</p>
                </div>
                <button
                  onClick={closeModal}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center text-center gap-4 py-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 pulse-glow">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">Application Submitted!</h3>
                  <p className="text-[15px] text-slate-400">We&apos;ll review your application and get back to you soon.</p>
                  <Button onClick={closeModal} variant="secondary" size="sm">Close</Button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex flex-col gap-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="career-name" className={labelClass}>Full Name *</label>
                      <input id="career-name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="career-email" className={labelClass}>Email *</label>
                      <input id="career-email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="career-phone" className={labelClass}>Phone *</label>
                      <input id="career-phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="career-experience" className={labelClass}>Experience</label>
                      <select id="career-experience" name="experience" className={inputClass}>
                        <option value="Fresher">Fresher</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="2-5 years">2-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="career-portfolio" className={labelClass}>Portfolio / GitHub / LinkedIn</label>
                    <input id="career-portfolio" name="portfolio" type="url" placeholder="https://your-portfolio.com" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="career-resume" className={labelClass}>Resume (PDF link) *</label>
                    <input id="career-resume" name="resume" type="url" required placeholder="https://drive.google.com/your-resume" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="career-message" className={labelClass}>Why should we hire you?</label>
                    <textarea
                      id="career-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about yourself and why you're a great fit..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-3.5 py-2.5 text-[14px] text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex gap-2.5 pt-1">
                    <Button type="submit" size="md" variant="glow" disabled={status === "sending"} className="flex-1 btn-shine">
                      {status === "sending" ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
                      ) : (
                        <><Send className="h-4 w-4" /> Submit Application</>
                      )}
                    </Button>
                    <Button type="button" variant="secondary" size="md" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* CTA */}
      <section className="py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[1.375rem] font-bold text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Don&apos;t See Your Role?
            </h2>
            <p className="max-w-lg text-[16px] text-slate-400">
              We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep
              you in mind for future opportunities.
            </p>
            <Button href="/contact" size="md" variant="glow" className="btn-shine">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
