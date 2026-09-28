import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "AI Development", href: "/services" },
  { label: "Web Applications", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "Cloud & DevOps", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "QA & Testing", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const regions = [
  { label: "USA", href: "/contact" },
  { label: "India", href: "/contact" },
  { label: "UAE", href: "/contact" },
  { label: "UK", href: "/contact" },
];

const techLinks = [
  { label: "React / Next.js", href: "/services" },
  { label: "Flutter", href: "/services" },
  { label: "Node.js", href: "/services" },
  { label: "Python / Django", href: "/services" },
  { label: "AWS / GCP", href: "/services" },
  { label: "Docker / K8s", href: "/services" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050814]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_2fr] lg:gap-14">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-[15px] leading-[1.85] text-slate-400">
              Full-stack development agency specializing in AI, web, mobile, and cloud solutions.
              We build intelligent software for startups and enterprises across the globe.
            </p>
            <div className="flex flex-col gap-2.5 text-[15px] text-slate-400">
              <a href="mailto:aditya8858.5@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white w-fit">
                <Mail className="h-3.5 w-3.5 text-cyan-500/60" /> aditya8858.5@gmail.com
              </a>
              <a href="tel:+917678293527" className="flex items-center gap-2 transition-colors hover:text-white w-fit">
                <Phone className="h-3.5 w-3.5 text-cyan-500/60" /> +91 7678293527
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-500/60" /> Jaunpur, UP, India
              </span>
            </div>
            {/* ISO badge placeholder */}
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 w-fit">
              <div className="h-6 w-6 rounded bg-cyan-500/10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-cyan-400">ISO</span>
              </div>
              <span className="text-[13px] text-slate-500">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col gap-2.5">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-1">Services</p>
              {services.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] text-slate-400 transition-colors hover:text-white">{l.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-1">Company</p>
              {company.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] text-slate-400 transition-colors hover:text-white">{l.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-1">Regions</p>
              {regions.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] text-slate-400 transition-colors hover:text-white">{l.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-[0.15em] mb-1">Tech Stack</p>
              {techLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] text-slate-400 transition-colors hover:text-white">{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="text-[14px] text-slate-500">&copy; {new Date().getFullYear()} Applumy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[14px] text-slate-500">
              <a href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="/terms" className="transition-colors hover:text-white">Terms of Service</a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-[14px] text-slate-600 transition-colors hover:text-cyan-400">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
