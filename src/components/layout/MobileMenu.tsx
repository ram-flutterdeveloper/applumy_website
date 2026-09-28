"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Globe, Code, Smartphone, Palette, Server, Database, Layout, Shield } from "lucide-react";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

const mobileServices = [
  { icon: Globe, label: "Website Development", href: "/services/web-development" },
  { icon: Code, label: "Software Development", href: "/services/software-development" },
  { icon: Smartphone, label: "Mobile Apps", href: "/services/mobile-app-development" },
  { icon: Palette, label: "UI/UX Design", href: "/services/ui-ux-design" },
  { icon: Server, label: "Backend & APIs", href: "/services/backend-development" },
  { icon: Database, label: "Database Solutions", href: "/services/database-solutions" },
  { icon: Layout, label: "Frontend Dev", href: "/services/frontend-development" },
  { icon: Shield, label: "App Security", href: "/services/application-security" },
];

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 top-14 z-40 lg:hidden transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-[#050814]/95 backdrop-blur-xl" onClick={onClose} />
      <Container>
        <nav className="relative flex flex-col gap-1 pt-6 pb-8 max-h-[80vh] overflow-y-auto">
          {/* Services with sub-links */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full rounded-xl px-4 py-3.5 text-[17px] font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-white/[0.06] pl-3">
                {mobileServices.map((svc) => (
                  <a
                    key={svc.label}
                    href={svc.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[15px] text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    <svc.icon className="h-3.5 w-3.5 text-cyan-400" />
                    {svc.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {links.filter(l => !["Home", "Services"].includes(l.label)).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 flex flex-col gap-2">
            <Button href="/contact" size="md" variant="glow" className="w-full">
              Contact Us
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
