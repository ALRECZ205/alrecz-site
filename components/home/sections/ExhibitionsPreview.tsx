import Image from 'next/image';
import Link from 'next/link';
import { ARTWORKS } from '@/lib/artworks';

const featured = ARTWORKS[0];

/**
 * Homepage teaser for the Exhibitions archive. Deliberately shows one
 * piece full-bleed rather than porting /art's entire FeaturedExhibition
 * carousel — the hero here is a single thesis statement, with a clear
 * path into the full collection rather than duplicating it.
 */
export default function ExhibitionsPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/5 bg-alrecz-black">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative aspect-[4/5] border border-white/10 bg-alrecz-charcoal group overflow-hidden">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute top-4 right-4 font-mono text-[10px] text-alrecz-silver bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">
            {featured.archiveCode}
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-4">
            [ EXHIBITIONS // FEATURED ]
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter text-alrecz-offwhite leading-[0.9] mb-6">
            {featured.title}
          </h2>
          <p className="font-mono text-sm text-alrecz-silver mb-8 max-w-md">
            {featured.artist} <span className="mx-2 opacity-50">•</span> {featured.year}
            <span className="mx-2 opacity-50">•</span> {featured.medium}
          </p>
          <p className="text-alrecz-silver/70 max-w-md mb-10 leading-relaxed">
            {featured.description ??
              'A rotating archive of exhibited work — commissions, studies, and released pieces preserved as a running visual record.'}
          </p>
          <Link
            href="/art"
            data-cursor="link"
            className="inline-block border border-white px-8 py-4 font-bold tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-all"
          >
            VIEW FULL EXHIBITION
          </Link>
        </div>
      </div>
    </section>
  );
}
