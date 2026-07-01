import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Track } from "../types";

interface FeaturedReleaseProps {
  track: Track;
  onPlay: (track: Track) => void;
}

export default function FeaturedRelease({
  track,
  onPlay,
}: FeaturedReleaseProps) {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-alrecz-charcoal border-b border-white/5 relative overflow-hidden">
      {/* ambient red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-alrecz-blood opacity-15 blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Artwork */}
        <div
          className="group relative aspect-square md:aspect-[4/5] bg-black border border-white/10 overflow-hidden cursor-pointer"
          onClick={() => onPlay(track)}
        >
          <Image
            src={track.cover}
            alt={track.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 rounded-full bg-alrecz-blood flex items-center justify-center shadow-[0_0_30px_rgba(122,15,15,0.6)]">
              <Play size={32} fill="white" className="ml-1 text-white" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 font-mono text-xs text-white bg-black px-2 py-1 border border-white/20">
            NEW_RELEASE
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col items-start">
          <span className="font-mono text-alrecz-blood text-sm mb-2 uppercase tracking-widest">
            Editorial Pick — {track.category}
          </span>

          <h2 className="text-5xl md:text-7xl font-grotesk font-bold uppercase leading-tight mb-6">
            {track.title}
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-lg text-white border-b border-alrecz-blood pb-1">
              {track.artist}
            </span>
            <span className="font-mono text-gray-500 text-sm">
              {'/// '}{track.duration}
            </span>
          </div>

          <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-md mb-8">
            A visceral exploration of distorted reality. Heavy baselines meet
            ethereal synthesizers in this latest offering from the collective.
          </p>

          <button
            onClick={() => onPlay(track)}
            className="flex items-center gap-4 text-white hover:text-alrecz-blood transition-colors group"
          >
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-alrecz-blood transition-colors">
              <Play size={16} fill="currentColor" />
            </div>
            <span className="font-grotesk uppercase text-lg tracking-wider">
              Listen Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}