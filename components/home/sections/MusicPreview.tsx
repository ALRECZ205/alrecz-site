'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import FeaturedRelease from '@/components/music-ai/components/FeaturedRelease';
import { TRACKS } from '@/components/music-ai/data';

const featured = TRACKS[0];
const PREVIEW_SRC = '/audio/Denim Tears.mp3';

const BAR_HEIGHTS = [40, 70, 30, 90, 55, 20, 65, 45, 80, 35, 60, 25];

/**
 * Homepage music teaser — reuses music-ai's FeaturedRelease as-is (already
 * a solid, self-contained, prop-driven component) and wires its onPlay
 * callback to a real <audio> element instead of a no-op, so this actually
 * plays a preview rather than just looking interactive.
 */
export default function MusicPreview() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src={PREVIEW_SRC}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />

      <FeaturedRelease track={featured} onPlay={handlePlay} />

      <div className="absolute top-10 right-6 md:right-12 flex items-end gap-[3px] h-10" aria-hidden="true">
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="w-[3px] bg-alrecz-blood/70 rounded-sm"
            style={{
              height: isPlaying ? `${h}%` : '10%',
              transition: 'height 0.3s ease',
              animation: isPlaying ? `waveform-pulse ${0.6 + (i % 4) * 0.15}s ease-in-out infinite alternate` : undefined,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 z-10">
        <Link
          href="/music"
          data-cursor="music"
          className="font-mono text-[11px] text-alrecz-silver hover:text-alrecz-offwhite tracking-widest uppercase underline underline-offset-4 decoration-alrecz-blood"
        >
          Enter the radio archive →
        </Link>
      </div>
    </div>
  );
}
