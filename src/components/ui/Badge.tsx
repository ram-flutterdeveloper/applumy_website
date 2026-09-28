import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "cyan" | "blue";
}

const variants = {
  default: "border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-400",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.15em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
