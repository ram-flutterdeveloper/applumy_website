"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, Shield, CheckCircle, Send } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "ISO 9001 Certified" },
  { icon: CheckCircle, label: "100+ Projects Delivered" },
  { icon: Clock, label: "99.9% Uptime Guarantee" },
];

const contactMethods = [
  { icon: Mail, label: "Email Us", value: "aditya8858.5@gmail.com", href: "mailto:aditya8858.5@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+91 7678293527", href: "tel:+917678293527" },
  { icon: MapPin, label: "Visit Us", value: "Jaunpur, UP, India", href: "#" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const submitted = status === "success";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  };

  return (
    <section className="relative py-[15px] lg:py-[25px] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[120px] rounded-full" />
      </div>

      <Container>
        <AnimatedSection>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1 mb-3">
              <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.12em]">Get In Touch</span>
            </div>
            <h2 className="text-[1.375rem] font-bold tracking-[-0.02em] text-white sm:text-[1.625rem] lg:text-[1.875rem]">
              Let&apos;s Build <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Something Great</span> Together
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-[15px] text-slate-400 leading-[1.8]">
              Tell us about your project. We&apos;ll get back within 24 hours with a detailed proposal.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <AnimatedSection delay={80}>
              <div className="flex flex-col gap-2">
                {trustBadges.map((b) => (
                  <div key={b.label} className="premium-card flex items-center gap-3 px-4 py-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/15">
                      <b.icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <span className="text-[13px] text-slate-300">{b.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="flex flex-col gap-2">
                {contactMethods.map((c) => (
                  <a key={c.label} href={c.href} className="premium-card flex items-center gap-3 px-4 py-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                      <c.icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase tracking-wider">{c.label}</p>
                      <p className="text-[13px] font-medium text-white">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <div className="premium-card px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  <p className="text-[12px] font-semibold text-white">Working Hours</p>
                </div>
                <p className="text-[12px] text-slate-400">Mon - Sat: 10:00 AM - 7:00 PM IST</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Form */}
          <AnimatedSection delay={100}>
            <div className="premium-card p-6 overflow-hidden">
              <h3 className="text-[16px] font-bold text-white mb-4">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                  </div>
                  <p className="text-[15px] font-semibold text-white">Message Sent Successfully!</p>
                  <p className="text-[13px] text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-500 mb-1">Service Needed *</label>
                      <select
                        name="service"
                        required
                        className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="" className="bg-[#0B1120]">Select a service</option>
                        <option value="Web Development" className="bg-[#0B1120]">Web Development</option>
                        <option value="Software Development" className="bg-[#0B1120]">Software Development</option>
                        <option value="Mobile App Development" className="bg-[#0B1120]">Mobile App Development</option>
                        <option value="UI/UX Design" className="bg-[#0B1120]">UI/UX Design</option>
                        <option value="SEO & Digital Marketing" className="bg-[#0B1120]">SEO & Digital Marketing</option>
                        <option value="Other" className="bg-[#0B1120]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 mb-1">Estimated Budget</label>
                    <select
                      name="budget"
                      className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all appearance-none"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="" className="bg-[#0B1120]">Select budget range</option>
                      <option value="₹25,000 - ₹50,000" className="bg-[#0B1120]">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000" className="bg-[#0B1120]">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹2,50,000" className="bg-[#0B1120]">₹1,00,000 - ₹2,50,000</option>
                      <option value="₹2,50,000 - ₹5,00,000" className="bg-[#0B1120]">₹2,50,000 - ₹5,00,000</option>
                      <option value="₹5,00,000+" className="bg-[#0B1120]">₹5,00,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 mb-1">Project Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      className="w-full rounded-lg border border-white/[0.08] bg-[#050814] px-3 py-2 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3 py-2 text-[13px] text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <Button type="submit" size="md" variant="glow" disabled={status === "sending"} className="w-full btn-shine">
                    {status === "sending" ? "Sending..." : <>Send Message <Send className="h-3.5 w-3.5" /></>}
                  </Button>

                  <p className="text-center text-[11px] text-slate-600">
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
