"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06]">
          <span className="text-7xl font-bold text-[#F5F7FA]">!</span>
        </div>
        <div>
          <h2 className="text-7xl font-semibold text-[#F5F7FA]">Something went wrong</h2>
          <p className="mt-1 text-[15px] text-[#6B7A8D]">An unexpected error occurred.</p>
        </div>
        <Button onClick={reset} variant="secondary" size="sm">
          Try again
        </Button>
      </div>
    </main>
  );
}
