"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/common/Logo";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/data/navigation";
import Image from "next/image";
import {
  Menu, X, Globe, Smartphone, Cloud, Shield, Code, Database,
  Server, Palette, ArrowRight, ChevronDown, Cpu, TestTube, Sparkles, Layout
} from "lucide-react";

const serviceCategories = [
  { icon: Code, label: "AI & Software", desc: "Custom AI, ML & enterprise", color: "text-cyan-400", bg: "bg-cyan-500/10", href: "/services/software-development" },
  { icon: Globe, label: "Web Development", desc: "Next.js, React, Laravel", color: "text-blue-400", bg: "bg-blue-500/10", href: "/services/web-development" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, GCP, CI/CD", color: "text-violet-400", bg: "bg-violet-500/10", href: "/services/backend-development" },
  { icon: Shield, label: "Security", desc: "Secure coding & audits", color: "text-emerald-400", bg: "bg-emerald-500/10", href: "/services/application-security" },
];

const detailedServices = [
  { icon: Globe, label: "Website Development", desc: "Next.js, React", href: "/services/web-development" },
  { icon: Code, label: "Software Development", desc: "Enterprise & SaaS", href: "/services/software-development" },
  { icon: Smartphone, label: "Mobile Apps", desc: "Flutter, React Native", href: "/services/mobile-app-development" },
  { icon: Palette, label: "UI/UX Design", desc: "User interfaces", href: "/services/ui-ux-design" },
  { icon: Server, label: "Backend & APIs", desc: "Node.js, Python", href: "/services/backend-development" },
  { icon: Database, label: "Database Solutions", desc: "SQL & NoSQL", href: "/services/database-solutions" },
  { icon: Layout, label: "Frontend Dev", desc: "React, Vue.js", href: "/services/frontend-development" },
  { icon: Shield, label: "App Security", desc: "OWASP, encryption", href: "/services/application-security" },
];

const techCategories = [
  { icon: Cpu, label: "LLM & AI", items: ["GPT", "Claude", "Gemini", "Llama"] },
  { icon: Cloud, label: "Cloud", items: ["AWS", "GCP", "Docker", "K8s"] },
  { icon: Code, label: "Frameworks", items: ["Next.js", "React", "Django"] },
  { icon: Smartphone, label: "Mobile", items: ["Flutter", "React Native", "Swift"] },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMegaEnter = (mega: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMega(mega);
  };

  const handleMegaLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMega(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#050814]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between lg:h-16">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {/* Services mega */}
            <div className="mega-trigger relative" onMouseEnter={() => handleMegaEnter("services")} onMouseLeave={handleMegaLeave}>
              <button className="flex items-center gap-1 px-3 py-1.5 text-[15px] font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]">
                Services
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMega === "services" ? "rotate-180" : ""}`} />
              </button>

              {activeMega === "services" && (
                <div className="absolute top-full right-0 pt-2" style={{ left: "50%", transform: "translateX(-30%)" }} onMouseEnter={() => handleMegaEnter("services")} onMouseLeave={handleMegaLeave}>
                  <div className="w-[720px] max-h-[350px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0B1120]/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
                    <div className="grid grid-cols-[1fr_1.2fr] gap-0">
                      {/* Left: Categories */}
                      <div className="p-5 border-r border-white/[0.04]">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-2.5">Categories</p>
                        <div className="flex flex-col gap-0.5">
                          {serviceCategories.map((cat) => (
                            <a key={cat.label} href={cat.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-all hover:bg-white/[0.04] group">
                              <div className={`flex h-7 w-7 items-center justify-center rounded-md ${cat.bg}`}>
                                <cat.icon className={`h-3.5 w-3.5 ${cat.color}`} />
                              </div>
                              <div>
                                <p className="text-[14px] font-medium text-white group-hover:text-cyan-400 transition-colors">{cat.label}</p>
                                <p className="text-[12px] text-slate-500">{cat.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Right: Services grid */}
                      <div className="p-5">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-2.5">All Services</p>
                        <div className="grid grid-cols-2 gap-0.5">
                          {detailedServices.map((svc) => (
                            <a key={svc.label} href={svc.href} className="flex items-center gap-2 rounded-lg p-2 transition-all hover:bg-white/[0.04] group">
                              <svc.icon className="h-3 w-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                              <div>
                                <p className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors">{svc.label}</p>
                                <p className="text-[11px] text-slate-600">{svc.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Promo Banner */}
                    <div className="relative h-[90px] overflow-hidden border-t border-white/[0.04]">
                      <Image
                        src="/images/hero/new/megamenu_product_builder_banner.png"
                        alt="Product Builder"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/90 via-[#0B1120]/60 to-transparent" />
                      <div className="absolute inset-0 flex items-center px-5">
                        <div>
                          <p className="text-[15px] font-bold text-white mb-0.5">Got a Product Idea?</p>
                          <p className="text-[13px] text-slate-300 mb-2">Start building with our expert team.</p>
                          <a href="/contact" className="inline-flex items-center gap-1 rounded-md bg-cyan-600 px-3 py-1.5 text-[13px] font-medium text-white hover:bg-cyan-500 transition-colors">
                            Start <ArrowRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies mega */}
            <div className="mega-trigger relative" onMouseEnter={() => handleMegaEnter("tech")} onMouseLeave={handleMegaLeave}>
              <button className="flex items-center gap-1 px-3 py-1.5 text-[15px] font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]">
                Technologies
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMega === "tech" ? "rotate-180" : ""}`} />
              </button>

              {activeMega === "tech" && (
                <div className="absolute top-full right-0 pt-2" style={{ left: "50%", transform: "translateX(-40%)" }} onMouseEnter={() => handleMegaEnter("tech")} onMouseLeave={handleMegaLeave}>
                  <div className="w-[550px] max-h-[350px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0B1120]/98 backdrop-blur-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05]">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-3">Tech Stack</p>
                    <div className="grid grid-cols-2 gap-3">
                      {techCategories.map((cat) => (
                        <div key={cat.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 hover:border-white/[0.12] transition-all">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-cyan-500/10">
                              <cat.icon className="h-3 w-3 text-cyan-400" />
                            </div>
                            <p className="text-[13px] font-semibold text-white">{cat.label}</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {cat.items.map((item) => (
                              <span key={item} className="rounded bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[12px] text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-default">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular links */}
            {navLinks.filter(l => !["Home", "Services"].includes(l.label)).map((link) => {
              const active = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[15px] font-medium transition-colors duration-200 rounded-lg ${
                    active ? "text-white" : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-cyan-500 to-blue-500" />}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm" variant="glow">Contact Us</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white hover:bg-white/[0.05] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <MobileMenu key={pathname} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}
