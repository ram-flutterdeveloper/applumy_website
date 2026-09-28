"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Anim = "reveal" | "left" | "right" | "scale";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: Anim;
  stag?: boolean;
}

const cls: Record<Anim, string> = {
  reveal: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function AnimatedSection({ children, className, delay = 0, type = "reveal", stag }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn(cls[type], stag && "stag", className)}>
      {children}
    </div>
  );
}
