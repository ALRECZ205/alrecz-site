/**
 * Replaces the empty "AL" ghost-text placeholder in the music Hero with
 * something that reads as an actual preserved object — a museum wall
 * label crossed with a vinyl archive catalog card — rather than another
 * UI widget.
 *
 * Deliberately breaks from the site's red-CRT accent language here: pure
 * black/white/gray, thin hairline borders, no scanline/glow effects. The
 * point is for this one element to feel like an artifact sitting inside
 * the broadcast terminal, not more terminal chrome — the contrast is
 * what sells it as "documented and preserved" rather than "live system."
 */
export default function ArchivePlacard() {
  return (
    <figure className="group w-full h-full flex flex-col items-center justify-center gap-6 md:gap-7 px-6 py-8 border border-white/15 bg-black transition-colors duration-200 ease-out hover:border-white/35 hover:bg-white/[0.02]">
      <span className="font-sans text-6xl md:text-7xl font-bold leading-none text-white/90 transition-colors duration-200 ease-out group-hover:text-white">
        AL
      </span>

      <p className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-white/40 pl-[0.6em]">
        A L R E C z
      </p>

      <div className="w-8 h-px bg-white/15 transition-colors duration-200 ease-out group-hover:bg-white/35" />

      <figcaption className="flex flex-col items-center gap-5 font-mono uppercase">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] md:text-[11px] tracking-[0.35em] text-white/60">Archive</span>
          <span className="text-[10px] md:text-[11px] tracking-[0.35em] text-white/60">Vol. 01</span>
        </div>

        <span className="text-[9px] tracking-[0.3em] text-white/30">Est. 2016</span>

        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-white/70">Southern</span>
          <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-white/70">Experimental</span>
        </div>
      </figcaption>
    </figure>
  );
}
