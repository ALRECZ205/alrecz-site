
"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import FeaturedRelease from "./components/FeaturedRelease";
import MediaRail from "./components/MediaRail";
import RadioSection from "./components/RadioSection";
import MusicPlayer from "./components/MusicPlayer";
import CRTOverlay from "@/components/legacy/components/CRTOverlay";

import { TRACKS, CATEGORIES } from "./data";
import type { Track, MusicCategory } from "./types";
import { Instagram, Youtube, Mic2, Disc } from "lucide-react";

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
      
      <CRTOverlay />
      
      {/* HEADER / NAV */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <div className="font-grotesk font-bold text-2xl tracking-tighter">ALRECZ</div>
        <div className="hidden md:flex gap-6 font-mono text-xs">
          <button className="hover:text-alrecz-blood transition-colors">[ MUSIC ]</button>
          <button className="hover:text-alrecz-blood transition-colors text-gray-500">[ SHOP ]</button>
          <button className="hover:text-alrecz-blood transition-colors text-gray-500">[ ARCHIVE ]</button>
        </div>
      </nav>

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
                  <img
                    src={track.cover}
                    alt=""
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

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-32 px-6 md:px-12 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <div className="text-4xl font-grotesk font-bold mb-4 text-white">ALRECZ</div>
            <p className="text-gray-500 max-w-xs mb-8">
              A digital imprint for the new era of sound.
              <br />
              Est. 2026. No Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Instagram
                className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors"
                size={20}
              />
              <Youtube
                className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors"
                size={20}
              />
              <Mic2
                className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          <div className="text-right">
            <div className="mb-2 text-alrecz-blood animate-pulse">● SYSTEM ONLINE</div>
            <div className="text-gray-600">
              ALRECZ://MUSIC_TERMINAL
              <br />
              V.2.5.0
            </div>
          </div>
        </div>
      </footer>

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