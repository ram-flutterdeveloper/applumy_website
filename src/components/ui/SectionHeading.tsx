import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ badge, title, highlight, description, className, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="text-[13px] font-semibold text-cyan-400 uppercase tracking-[0.18em]">
          {badge}
        </span>
      )}
      <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-white sm:text-[2.125rem] lg:text-[2.625rem] lg:leading-[1.08]">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> {highlight}</span>
        )}
      </h2>
      {description && (
        <p className="max-w-xl text-[16px] sm:text-[17px] leading-[1.75] text-slate-400">{description}</p>
      )}
    </div>
  );
}
