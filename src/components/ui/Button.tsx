import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "glow";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}

type ButtonProps = ButtonBaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const variants: Record<Variant, string> = {
  primary: "bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
  secondary: "border border-white/10 text-white bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20",
  ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  glow: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[15px] rounded-xl",
  md: "h-11 px-6 text-[16px] rounded-xl",
  lg: "h-12 px-8 text-[17px] rounded-xl",
};

export function Button({ variant = "primary", size = "md", href, className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/30 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
