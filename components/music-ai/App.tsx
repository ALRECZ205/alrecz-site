import React, { useState, useEffect } from 'react';
import CRTOverlay from '../CRTOverlay';
import Hero from './components/Hero';
import FeaturedRelease from './components/FeaturedRelease';
import MediaRail from './components/MediaRail';
import RadioSection from './components/RadioSection';
import MusicPlayer from './components/MusicPlayer';
import { Track, MusicCategory } from './types';
import { Instagram, Youtube, Mic2, Disc } from 'lucide-react';

// --- MOCK DATA ---
const TRACKS: Track[] = [
  { id: '1', title: 'Graveyard Shift', artist: 'I$H', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=500&auto=format&fit=crop', duration: '3:42', category: 'SINGLE' },
  { id: '2', title: 'Chrome Heart', artist: 'I$H feat. AL', cover: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=500&auto=format&fit=crop', duration: '2:15', category: 'BEAT' },
  { id: '3', title: 'Night Terror Mix', artist: 'DJ GHOST', cover: 'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=500&auto=format&fit=crop', duration: '45:00', category: 'MIX' },
  { id: '4', title: 'System Failure', artist: 'PROTOCOL', cover: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop', duration: '3:11', category: 'SINGLE' },
  { id: '5', title: 'Chopped Soul', artist: 'PURPLE DRANK', cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop', duration: '4:20', category: 'C&S' },
  { id: '6', title: 'Lost Frequency', artist: 'VOID', cover: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500&auto=format&fit=crop', duration: '2:58', category: 'RADIO' },
  { id: '7', title: 'Heavy Metal Lung', artist: 'RUST', cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop', duration: '3:33', category: 'SINGLE' },
];

const CATEGORIES: MusicCategory[] = ['SINGLE', 'MIX', 'BEAT', 'C&S', 'RADIO'];

const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFilter, setActiveFilter] = useState<MusicCategory | 'ALL'>('ALL');

  const handlePlay = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const filteredTracks = activeFilter === 'ALL' 
    ? TRACKS 
    : TRACKS.filter(t => t.category === activeFilter);

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
        
        {/* FILTER BAR */}
        <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12 flex gap-8 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveFilter('ALL')}
            className={`text-sm md:text-base whitespace-nowrap uppercase tracking-wider transition-all ${activeFilter === 'ALL' ? 'text-alrecz-blood font-bold' : 'text-gray-500 hover:text-white'}`}
          >
            All Broadcasts
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm md:text-base whitespace-nowrap uppercase tracking-wider transition-all ${activeFilter === cat ? 'text-alrecz-blood font-bold' : 'text-gray-500 hover:text-white'}`}
            >
              {cat}s
            </button>
          ))}
        </div>

        {/* FEATURED */}
        <FeaturedRelease track={TRACKS[0]} onPlay={handlePlay} />

        {/* NEW DROPS RAIL */}
        <MediaRail 
          title="Recent Transmissions" 
          tracks={TRACKS.filter(t => t.category === 'SINGLE' || t.category === 'BEAT')} 
          onPlay={handlePlay} 
        />

        {/* RADIO SECTION */}
        <RadioSection 
          tracks={TRACKS} 
          currentTrackId={currentTrack?.id} 
          onPlay={handlePlay} 
        />

        {/* GRID SECTION (Mixes) */}
        <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
          <h3 className="text-3xl font-grotesk font-bold uppercase mb-10 flex items-center gap-4">
             <Disc className="animate-spin-slow" /> DJ Archive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.filter(t => t.category === 'MIX').map(track => (
              <div key={track.id} className="group border border-white/10 bg-[#080808] p-4 hover:border-alrecz-blood/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-gray-500">{track.date || '2025'}</span>
                  <span className="font-mono text-xs text-alrecz-blood border border-alrecz-blood px-1">MIX</span>
                </div>
                <div className="flex gap-4 items-center">
                  <img src={track.cover} alt="" className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-xl uppercase leading-none mb-1">{track.title}</h4>
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
              <br/>Est. 2026. No Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Instagram className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors" size={20} />
              <Youtube className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors" size={20} />
              <Mic2 className="text-gray-500 hover:text-alrecz-blood cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          
          <div className="text-right">
             <div className="mb-2 text-alrecz-blood animate-pulse">● SYSTEM ONLINE</div>
             <div className="text-gray-600">
               ALRECZ://MUSIC_TERMINAL<br/>
               V.2.5.0
             </div>
          </div>
        </div>
      </footer>

      {/* STICKY PLAYER */}
      <MusicPlayer 
        currentTrack={currentTrack} 
        isPlaying={isPlaying} 
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onNext={() => console.log('next')}
        onPrev={() => console.log('prev')}
      />
      
    </div>
  );
};

export default App;