
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import FeaturedRelease from "./components/FeaturedRelease";
import MediaRail from "./components/MediaRail";
import RadioSection from "./components/RadioSection";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "@/components/shared/Footer";

import { TRACKS, CATEGORIES } from "./data";
import type { Track, MusicCategory } from "./types";
import { Disc } from "lucide-react";

export default function MusicAIPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFilter, setActiveFilter] = useState<MusicCategory | "ALL">("ALL");

  const handlePlay = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const filteredTracks =
    activeFilter === "ALL"
      ? TRACKS
      : TRACKS.filter((t) => t.category === activeFilter);

  const recentTransmissionTracks = TRACKS.filter(
    (t) =>
      t.category === "SINGLE" ||
      t.category === "MIX" ||
      t.category === "BEAT" ||
      t.category === "C&S" ||
      t.category === "RADIO"
  );

  const radioTracks = TRACKS.filter((t) => t.category === "RADIO");
  const mixTracks = TRACKS.filter((t) => t.category === "MIX");

  return (
    <div className="relative min-h-screen bg-alrecz-black text-alrecz-paper font-mono selection:bg-alrecz-blood selection:text-white">
      <main className="pb-32">
        <Hero />

        <FilterBar
          categories={CATEGORIES}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <FeaturedRelease
          track={filteredTracks[0] || TRACKS[0]}
          onPlay={handlePlay}
        />

        <MediaRail
          title="Recent Transmissions"
          tracks={recentTransmissionTracks}
          onPlay={handlePlay}
        />

        <RadioSection
          tracks={radioTracks}
          currentTrackId={currentTrack?.id}
          onPlay={handlePlay}
        />

        <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
          <h3 className="text-3xl font-grotesk font-bold uppercase mb-10 flex items-center gap-4">
            <Disc className="animate-spin-slow" /> DJ Archive
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mixTracks.map((track) => (
              <div
                key={track.id}
                className="group border border-white/10 bg-[#080808] p-4 hover:border-alrecz-blood/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-gray-500">
                    {track.date || "2025"}
                  </span>
                  <span className="font-mono text-xs text-alrecz-blood border border-alrecz-blood px-1">
                    MIX
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <Image
                    src={track.cover}
                    alt={track.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="font-bold text-xl uppercase leading-none mb-1">
                      {track.title}
                    </h4>
                    <p className="text-sm text-gray-500">{track.artist}</p>
                    <button
                      onClick={() => handlePlay(track)}
                      className="mt-2 text-xs font-mono uppercase text-white hover:text-alrecz-blood hover:underline"
                    >
                      ▶ Play Mix
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <MusicPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() => console.log("next")}
        onPrev={() => console.log("prev")}
      />
    </div>
  );
}