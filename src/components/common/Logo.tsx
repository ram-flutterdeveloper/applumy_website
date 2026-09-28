import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
        <span className="text-[16px] font-bold text-white tracking-tight">A</span>
      </div>
      <span className="text-[19px] font-bold text-white tracking-[-0.02em]">
        Applumy
      </span>
    </Link>
  );
}
