import React, { useMemo } from 'react';
import { Play, Activity, Radio } from 'lucide-react';
import { Track } from '../types';

interface RadioSectionProps {
  tracks: Track[];
  currentTrackId?: string;
  onPlay: (track: Track) => void;
}

// deterministic “random” (no Math.random during render)
function seeded(i: number) {
  // simple hash -> 0..1
  const x = Math.sin(i * 9999) * 10000;
  return x - Math.floor(x);
}

const RadioSection: React.FC<RadioSectionProps> = ({ tracks, currentTrackId, onPlay }) => {
  const bars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const r1 = seeded(i + 1);
      const r2 = seeded(i + 101);
      return {
        height: 20 + Math.round(r1 * 80),      // 20..100
        speed: 0.6 + r2 * 0.9,                 // 0.6..1.5
      };
    });
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#050505] border-y border-alrecz-blood/30">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-alrecz-blood to-black opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Info */}
        <div className="col-span-1">
          <div className="inline-flex items-center gap-2 border border-alrecz-blood/50 bg-alrecz-blood/10 px-3 py-1 mb-6 text-alrecz-blood font-mono text-xs animate-pulse">
            <Radio size={14} /> LIVE SIGNAL
          </div>

          <h2 className="text-5xl md:text-6xl font-grotesk font-bold uppercase text-white mb-6">
            Lost Boys <span className="text-alrecz-blood">Radio</span>
          </h2>

          <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
            Uncut streams, exclusive mixes, and raw audio from the Kickback collective. This is the pulse of the underground.
          </p>

          <div className="w-full h-32 bg-black border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Fake Visualizer */}
            <div className="flex items-end gap-1 h-12">
              {bars.map((b, i) => (
                <div
                  key={i}
                  className="w-2 bg-alrecz-blood"
                  style={{
                    height: `${b.height}%`,
                    animation: `pulse-fast ${b.speed}s infinite`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-gray-500">HZ: 432</div>
          </div>
        </div>

        {/* Right: Playlist */}
        <div className="lg:col-span-2 bg-black/50 border border-white/10 p-1">
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <span className="font-mono text-xs text-gray-400">PLAYLIST_SEQUENCE_01</span>
            <Activity size={16} className="text-alrecz-blood" />
          </div>

          <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto custom-scrollbar">
            {tracks.map((track, index) => {
              const isActive = currentTrackId === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => onPlay(track)}
                  className={`flex items-center gap-4 p-4 hover:bg-white/5 transition-colors cursor-pointer group ${
                    isActive ? 'bg-white/10' : ''
                  }`}
                >
                  <span className="font-mono text-xs text-gray-600 w-6 text-center">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>

                  <img
                    src={track.cover}
                    alt=""
                    className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all"
                  />

                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-grotesk uppercase text-lg truncate ${
                        isActive ? 'text-alrecz-blood' : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {track.title}
                    </h4>
                    <p className="text-xs font-mono text-gray-500">{track.artist}</p>
                  </div>

                  {isActive ? (
                    <div className="flex items-end gap-[2px] h-4">
                      <div className="w-[3px] h-full bg-alrecz-blood animate-pulse" />
                      <div className="w-[3px] h-2/3 bg-alrecz-blood animate-pulse delay-75" />
                      <div className="w-[3px] h-full bg-alrecz-blood animate-pulse delay-150" />
                    </div>
                  ) : (
                    <Play
                      size={16}
                      className="text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                    />
                  )}

                  <span className="font-mono text-xs text-gray-600">{track.duration}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioSection;