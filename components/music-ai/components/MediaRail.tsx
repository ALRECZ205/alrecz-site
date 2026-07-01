import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Track } from '../types';

interface MediaRailProps {
  title: string;
  tracks: Track[];
  onPlay: (track: Track) => void;
}

const MediaRail: React.FC<MediaRailProps> = ({ title, tracks, onPlay }) => {
  const constraintsRef = useRef(null);

  return (
    <section className="py-20 border-b border-white/10 bg-black overflow-hidden">
      <div className="px-6 md:px-12 mb-10 flex justify-between items-end">
        <h3 className="text-3xl md:text-4xl font-grotesk font-bold uppercase text-white tracking-wide">
          {title}
        </h3>
        <div className="hidden md:flex gap-2">
          <div className="w-2 h-2 bg-alrecz-blood rounded-full" />
          <div className="w-2 h-2 bg-gray-800 rounded-full" />
          <div className="w-2 h-2 bg-gray-800 rounded-full" />
        </div>
      </div>

      <div ref={constraintsRef} className="pl-6 md:pl-12 cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div 
          className="flex gap-6 md:gap-8 w-max pr-12"
          drag={autoScroll ? false : "x"}
  dragConstraints={{ right: 0, left: -width }}
        >
          {tracks.map((track) => (
            <motion.div 
              key={track.id} 
              className="relative w-[280px] md:w-[350px] group flex-shrink-0"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <div
  className="aspect-square w-full overflow-hidden bg-gray-900 border border-white/10 relative mb-4 group cursor-pointer">
  {/* IMAGE */}
  <img
    src={track.cover}
    alt={track.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* DARK HOVER OVERLAY (BOTTOM INFO STYLE) */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
    <div>
      <p className="text-xs text-alrecz-blood">PLAY NOW</p>
      <p className="text-sm text-white">{track.title}</p>
    </div>
  </div>

  {/* CLICK AREA */}
  <button
    onClick={() => onPlay(track)}
    className="absolute inset-0"
  />

  {/* CATEGORY TAG */}
  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono border border-white/20 text-gray-300">
    {track.category}
  </div>
</div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold font-grotesk text-lg uppercase truncate w-[200px] group-hover:text-alrecz-blood transition-colors">
                    {track.title}
                  </h4>
                  <p className="text-gray-500 font-mono text-xs">{track.artist}</p>
                </div>
                <span className="font-mono text-xs text-gray-600 border border-gray-800 px-1">
                  {track.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaRail;