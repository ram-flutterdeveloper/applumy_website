"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import {
  Mail, Phone, MapPin, Send, Clock, MessageSquare,
  CheckCircle, Shield, Sparkles, ArrowRight, Loader2,
} from "lucide-react";

const contactMethods = [
  { icon: Mail, title: "Email Us", value: "aditya8858.5@gmail.com", href: "mailto:aditya8858.5@gmail.com", desc: "For project inquiries and quotes" },
  { icon: Phone, title: "Call Us", value: "+91 7678293527", href: "tel:+917678293527", desc: "Mon - Sat, 10:00 AM - 7:00 PM IST" },
  { icon: MessageSquare, title: "WhatsApp", value: "+91 7678293527", href: "https://wa.me/917678293527", desc: "Quick responses for urgent queries" },
  { icon: MapPin, title: "Visit Us", value: "Jaunpur, Uttar Pradesh, India", href: "https://maps.google.com/?q=Jaunpur+UP", desc: "Office visits by appointment only" },
  { icon: Clock, title: "Working Hours", value: "Mon - Sat, 10:00 AM - 7:00 PM", href: "#", desc: "Closed on Sundays and national holidays" },
];

const trustPoints = [
  "Free consultation for every project",
  "Response within 24 hours",
  "No hidden fees — transparent pricing",
  "Flexible payment terms available",
];

const whyUs = [
  "Transparent pricing — no hidden costs",
  "Agile development with regular updates",
  "3-6 months post-launch support included",
  "Dedicated project manager for every project",
  "100% code ownership transferred to you",
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We understand your goals and requirements" },
  { step: "02", title: "Proposal", desc: "We send a detailed quote and timeline" },
  { step: "03", title: "Develop", desc: "We build with regular progress updates" },
  { step: "04", title: "Launch", desc: "We deploy and provide ongoing support" },
];

const faqs = [
  { q: "How much does a website cost?", a: "Starting from ₹25,000 depending on complexity." },
  { q: "How long does a project take?", a: "Typically 2-8 weeks based on scope." },
  { q: "Do you provide support?", a: "Yes, 3-6 months post-launch support included." },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { type: "contact" };
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

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-[15px] text-white placeholder:text-slate-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 transition-all duration-300 hover:border-white/[0.14]";
  const labelClass = "text-[13px] font-semibold text-slate-300 uppercase tracking-wider";

  return (
    <main className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden py-[15px] lg:py-[25px]">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <Badge>Get in Touch</Badge>
                <h1 className="text-[1.875rem] font-bold tracking-tight text-white sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.1]">
                  Let&apos;s Build{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Something Great
                  </span>{" "}
                  Together
                </h1>
                <p className="max-w-lg text-[16px] text-slate-400 leading-[1.8]">
                  Have a project in mind? Tell us about your goals and we&apos;ll get back to
                  you within 24 hours with a free consultation.
                </p>

                <div className="flex flex-col gap-2.5 pt-2">
                  {trustPoints.map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-[15px] text-slate-300">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2">
                    <Shield className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="text-[13px] text-slate-300">NDA Signed Projects</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2">
                    <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                    <span className="text-[13px] text-slate-300">100% Code Ownership</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="flex flex-col gap-2">
                {contactMethods.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="premium-card group flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-[#0B1020] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20 group-hover:from-cyan-500/25 group-hover:to-blue-500/25 transition-all duration-300">
                        <Icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-slate-500 uppercase tracking-[0.15em] font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 truncate text-[15px] font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-[13px] text-slate-500">{item.desc}</p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1" />
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="relative overflow-hidden py-[15px] lg:py-[25px] border-t border-white/[0.06]">
        <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
        <Container>
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="flex flex-col gap-2 mb-5">
                <p className="text-[12px] font-semibold text-cyan-400 uppercase tracking-[0.2em]">
                  Send a Message
                </p>
                <h2 className="text-[1.375rem] font-bold text-white sm:text-[1.625rem] lg:text-[1.875rem]">
                  Tell Us About Your Project
                </h2>
                <p className="text-[15px] text-slate-500">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="premium-card rounded-2xl border border-white/[0.08] bg-[#0B1020] p-5 sm:p-6">
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center gap-4 py-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 pulse-glow">
                      <CheckCircle className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-[20px] font-semibold text-white">Message Sent Successfully!</h3>
                    <p className="text-[15px] text-slate-400 max-w-sm">
                      Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="secondary" size="sm">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className={labelClass}>Full Name *</label>
                        <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className={labelClass}>Email Address *</label>
                        <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                        <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="budget" className={labelClass}>Budget Range</label>
                        <select id="budget" name="budget" className={inputClass}>
                          <option value="">Select budget range</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                          <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                          <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                          <option value="₹5,00,000+">₹5,00,000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className={labelClass}>Service Required *</label>
                      <select id="service" name="service" required className={inputClass}>
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className={labelClass}>Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project — what you want to build, your goals, timeline, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-3.5 py-2.5 text-[14px] text-red-400">
                        {errorMsg}
                      </div>
                    )}

                    <Button type="submit" size="md" variant="glow" disabled={status === "sending"} className="w-full sm:w-fit btn-shine">
                      {status === "sending" ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="h-4 w-4" /> Send Message</>
                      )}
                    </Button>
                    <p className="text-[13px] text-slate-600 text-center sm:text-left">
                      Your details are saved securely to our sheet. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={150} className="lg:col-span-2">
              <div className="flex flex-col gap-3">
                <div className="premium-card rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <h3 className="text-[16px] font-semibold text-white">Why Work With Us?</h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {whyUs.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-[14px] text-slate-400 leading-[1.6]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="premium-card rounded-2xl border border-white/[0.06] bg-[#0B1020] p-5">
                  <h3 className="text-[16px] font-semibold text-white mb-3">Our Process</h3>
                  <div className="flex flex-col gap-3">
                    {processSteps.map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <span className="text-[20px] font-bold text-cyan-500/25">{item.step}</span>
                        <div>
                          <p className="text-[14px] font-medium text-white">{item.title}</p>
                          <p className="text-[13px] text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="premium-card rounded-2xl border border-white/[0.06] bg-[#0B1020] p-5">
                  <h3 className="text-[16px] font-semibold text-white mb-3">Frequently Asked</h3>
                  <div className="flex flex-col gap-3">
                    {faqs.map((item) => (
                      <div key={item.q}>
                        <p className="text-[14px] font-medium text-white">{item.q}</p>
                        <p className="text-[13px] text-slate-500 mt-0.5">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </main>
  );
}
