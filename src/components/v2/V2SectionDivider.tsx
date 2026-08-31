export function V2SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12" aria-hidden="true">
      <div className="relative flex items-center justify-center">
        {/* Soft edge-fading hairline */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Minimal geometric center accent (Tiny rotated diamond) */}
        <div className="absolute flex items-center gap-1.5 bg-[#080a0d] px-4">
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rotate-45 border border-white/30 bg-white/10" />
          <span className="h-1 w-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
