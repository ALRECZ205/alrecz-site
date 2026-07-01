import Image from 'next/image';

const LOST_BOYZ_IMAGES = [
  '/images/art/LostBoyz/lb1.jpg',
  '/images/art/LostBoyz/lb2.jpg',
  '/images/art/LostBoyz/lb5.jpg',
  '/images/art/LostBoyz/lb9.jpg',
  '/images/art/LostBoyz/lb10.jpg',
  '/images/art/LostBoyz/lb14.jpg',
];

/**
 * Lost Boyz Collection — pure-CSS marquee, no JS animation loop.
 *
 * The previous approach (GalleryRail with autoScroll) measured
 * scrollWidth in a useEffect to compute a Framer Motion keyframe distance.
 * That measurement can run before images finish loading, so the computed
 * loop distance goes stale and the strip snaps/jumps on the first repeat.
 *
 * Here the track is simply the image list rendered twice, animated with a
 * CSS transform from 0% to -50% (see .marquee-track / @keyframes
 * marquee-loop in globals.css). Because the loop distance is a percentage
 * of the track's own rendered width rather than a measured pixel value, it
 * is correct by construction — no measurement, no race, no drift. No
 * drag, no hover interaction, per spec.
 */
export default function LostBoyzMarquee() {
  const track = [...LOST_BOYZ_IMAGES, ...LOST_BOYZ_IMAGES];
  const duration = LOST_BOYZ_IMAGES.length * 5;

  return (
    <section className="py-24 md:py-32 border-b border-white/5 bg-alrecz-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-10 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-3">
            [ COLLECTION // 003 ]
          </p>
          <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-alrecz-offwhite">
            Lost Boyz Collection
          </h3>
        </div>
        <span className="hidden md:block font-mono text-[10px] text-alrecz-silver tracking-widest uppercase">
          {LOST_BOYZ_IMAGES.length} plates // continuous loop
        </span>
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      >
        <div
          className="marquee-track flex w-max"
          style={{ ['--marquee-duration' as string]: `${duration}s` }}
        >
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-[240px] md:w-[320px] aspect-[3/4] mx-3 md:mx-4 flex-shrink-0 border border-white/10 bg-alrecz-charcoal transform-gpu"
            >
              <Image
                src={src}
                alt={`Lost Boyz archive plate ${(i % LOST_BOYZ_IMAGES.length) + 1}`}
                fill
                sizes="(max-width: 768px) 240px, 320px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 font-mono text-[9px] text-alrecz-silver bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">
                LB-{((i % LOST_BOYZ_IMAGES.length) + 1).toString().padStart(3, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
