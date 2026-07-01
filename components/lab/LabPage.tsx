import Image from 'next/image';
import GlitchText from '@/components/shared/GlitchText';
import Footer from '@/components/shared/Footer';
import SignalField from './SignalField';
import { LAB_ENTRIES } from '@/lib/labEntries';

export default function LabPage() {
  return (
    <div className="min-h-screen bg-alrecz-black text-alrecz-offwhite pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.35em] uppercase mb-6">
          [ SYS.LAB // EXPERIMENTAL DIVISION ]
        </p>
        <GlitchText
          text="THE LAB"
          as="h1"
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8"
        />
        <p className="max-w-2xl text-alrecz-silver/70 leading-relaxed mb-20">
          Work in progress, research, and process documentation — the parts of the archive
          that aren&apos;t finished, aren&apos;t for sale, and don&apos;t pretend to be either.
          Generative studies, creative-coding sketches, and the tooling behind the rest of
          this site.
        </p>

        <div className="mb-24">
          <SignalField />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAB_ENTRIES.map((entry) => (
            <article
              key={entry.id}
              className="border border-white/10 bg-alrecz-charcoal/50 p-6 md:p-8 hover:border-alrecz-blood/50 transition-colors"
              data-cursor="hover"
            >
              {entry.image && (
                <div className="relative aspect-video mb-6 border border-white/10 overflow-hidden">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-widest text-alrecz-blood uppercase">
                  {entry.tag}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-alrecz-silver/50 uppercase">
                  {entry.status}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl uppercase tracking-tight mb-3">
                {entry.title}
              </h2>
              <p className="text-sm text-alrecz-silver/70 leading-relaxed">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
