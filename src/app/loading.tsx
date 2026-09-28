export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#7C5CFC]" />
        <span className="text-[15px] text-[#6B7A8D]">Loading...</span>
      </div>
    </main>
  );
}
