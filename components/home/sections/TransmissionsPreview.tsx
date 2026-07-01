import Link from 'next/link';
import GalleryRail from '@/components/art-ai/components/GalleryRail';
import { ARTWORKS } from '@/lib/artworks';

/**
 * Draggable teaser rail for the homepage — reuses art-ai's GalleryRail
 * in its drag (non-autoScroll) mode as-is, since it's already a solid,
 * fully-parameterized implementation with working momentum via Framer
 * Motion's default dragMomentum. A different slice than /art's own
 * "Current Transmissions" rail so the two pages don't feel identical.
 */
export default function TransmissionsPreview() {
  return (
    <div className="relative">
      <GalleryRail title="Current Transmissions" artworks={ARTWORKS.slice(6, 13)} />
      <div className="absolute bottom-6 right-6 md:right-12">
        <Link
          href="/art"
          data-cursor="link"
          className="font-mono text-[11px] text-alrecz-silver hover:text-alrecz-offwhite tracking-widest uppercase underline underline-offset-4 decoration-alrecz-blood"
        >
          View all transmissions →
        </Link>
      </div>
    </div>
  );
}
