import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 py-12">
          {/* 404 Number */}
          <div className="relative">
            <span className="text-[6.125rem] sm:text-[8.125rem] font-bold text-white/[0.04] leading-none select-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/20">
                <Search className="h-7 w-7 text-[#7C5CFC]" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.625rem] font-bold text-[#F5F7FA]">Page Not Found</h1>
            <p className="max-w-md text-[16px] text-[#6B7A8D] leading-[1.8]">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link href="/">
              <Button size="md">
                <Home className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="md">
                Contact Support <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-[13px] text-[#6B7A8D] uppercase tracking-wider">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Career", href: "/career" },
                { label: "Resources", href: "/resources" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#A7AFBF] hover:text-[#7C5CFC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
