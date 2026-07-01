import GlitchText from '@/components/shared/GlitchText';
import { SITE_EMAIL, SOCIAL_LINKS } from '@/lib/nav';

const CHANNELS = [
  { label: 'DJ SERVICES', subject: 'DJ Booking Inquiry' },
  { label: 'VISUAL COMMISSIONS', subject: 'Commission Inquiry' },
  { label: 'WEB & PRODUCT', subject: 'Web / Product Inquiry' },
  { label: 'GENERAL', subject: 'General Inquiry' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-alrecz-charcoal/40 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-6">
          [ SYS.DIR // OPEN CHANNEL ]
        </p>
        <GlitchText
          text="LET'S TRANSMIT"
          as="h2"
          className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-alrecz-offwhite mb-10 block"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent(`ALRECZ // ${channel.subject}`)}`}
                data-cursor="link"
                className="border border-white/15 hover:border-alrecz-blood/60 hover:text-alrecz-blood transition-all p-5 font-mono text-xs tracking-widest uppercase text-alrecz-silver"
              >
                {channel.label}
              </a>
            ))}
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] text-alrecz-silver/60 tracking-widest uppercase mb-3">
                {'// DIRECT'}
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                data-cursor="link"
                className="text-2xl md:text-3xl font-mono text-alrecz-offwhite hover:text-alrecz-blood transition-colors break-all"
              >
                {SITE_EMAIL}
              </a>
            </div>

            <div className="mt-10 flex gap-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="font-mono text-xs tracking-widest uppercase text-alrecz-silver hover:text-alrecz-offwhite transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
