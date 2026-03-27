import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Mic2 } from 'lucide-react';
import { Track } from '../types';
import GlitchText from './GlitchText';

interface MusicPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  currentTrack, 
  isPlaying, 
  onPlayPause, 
  onNext, 
  onPrev 
}) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-alrecz-black/95 backdrop-blur-md border-t border-white/10 text-white transform transition-transform duration-500">
      {/* Progress Bar (Visual Only for Demo) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-800">
        <div className={`h-full bg-alrecz-blood ${isPlaying ? 'animate-pulse' : ''}`} style={{ width: '35%' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 overflow-hidden">
          <img 
            src={currentTrack.cover} 
            alt="Now Playing" 
            className={`w-10 h-10 md:w-12 md:h-12 object-cover border border-white/10 ${isPlaying ? 'animate-pulse-fast' : ''}`} 
          />
          <div className="flex flex-col truncate">
            <h4 className="font-grotesk font-bold uppercase text-sm md:text-base tracking-wide truncate">
              {currentTrack.title}
            </h4>
            <span className="font-mono text-[10px] md:text-xs text-gray-400 truncate">
              {currentTrack.artist} // <span className="text-alrecz-blood">{currentTrack.duration}</span>
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={onPrev} className="hidden md:block text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={onPlayPause}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-alrecz-paper text-black hover:bg-alrecz-blood hover:text-white transition-all skew-x-[-10deg]"
          >
            <div className="skew-x-[10deg]">
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </div>
          </button>
          
          <button onClick={onNext} className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Extra UI */}
        <div className="flex items-center justify-end gap-6 hidden md:flex">
          <div className="flex items-center gap-2">
            <Mic2 size={14} className="text-alrecz-blood" />
            <span className="font-mono text-[10px] text-gray-500">LYRICS_OFF</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-gray-400" />
            <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-white" />
            </div>
          </div>
        </div>

      </div>
      
      {/* Mobile background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-alrecz-blood/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default MusicPlayer;