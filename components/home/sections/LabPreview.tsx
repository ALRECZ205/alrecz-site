import Link from 'next/link';
import { LAB_ENTRIES } from '@/lib/labEntries';

export default function LabPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/5 bg-alrecz-charcoal/40">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-4">
              [ SYS.LAB // EXPERIMENTAL ]
            </p>
            <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-alrecz-offwhite">
              The Lab
            </h3>
          </div>
          <Link
            href="/lab"
            data-cursor="link"
            className="border border-white/30 px-6 py-3 font-mono text-xs tracking-widest uppercase hover:border-alrecz-offwhite transition-colors"
          >
            Enter the lab
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LAB_ENTRIES.slice(0, 3).map((entry) => (
            <Link
              key={entry.id}
              href="/lab"
              data-cursor="hover"
              className="block border border-white/10 p-6 hover:border-alrecz-blood/50 transition-colors bg-alrecz-black/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-widest text-alrecz-blood uppercase">
                  {entry.tag}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-alrecz-silver/50 uppercase">
                  {entry.status}
                </span>
              </div>
              <h4 className="font-display font-bold text-xl uppercase tracking-tight mb-2 text-alrecz-offwhite">
                {entry.title}
              </h4>
              <p className="text-xs text-alrecz-silver/60 leading-relaxed line-clamp-3">
                {entry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
