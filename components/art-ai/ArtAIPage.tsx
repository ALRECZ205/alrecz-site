import React from 'react';
import CRTOverlay from './components/CRTOverlay';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import FeaturedExhibition from './components/FeaturedExhibition';
import GalleryRail from './components/GalleryRail';
import CollectionGrid from './components/CollectionGrid';
import ImmersiveBreak from './components/ImmersiveBreak';
import ArchiveIndex from './components/ArchiveIndex';
import Footer from './components/Footer';
import { Artwork } from './types';

// --- MOCK DATA ---
const ARTWORKS: Artwork[] = [
  { 
    id: '1', 
    title: 'Procedural Decay', 
    artist: 'ALRECZ', 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', 
    year: '2026', 
    medium: 'Digital / Generative', 
    category: 'DIGITAL',
    description: 'An exploration of algorithmic degradation and digital entropy. This piece was generated using custom software that simulates the decay of physical media over time.',
    archiveCode: 'ARC-001',
    location: 'MAIN HALL',
    status: 'EXHIBITING'
  },
  { 
    id: '2', 
    title: 'Chrome Heart', 
    artist: 'I$H', 
    image: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=800&auto=format&fit=crop', 
    year: '2025', 
    medium: 'Mixed Media / Sculpture', 
    category: 'INSTALLATION',
    archiveCode: 'ARC-002'
  },
  { 
    id: '3', 
    title: 'Night Terror', 
    artist: 'DJ GHOST', 
    image: 'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=800&auto=format&fit=crop', 
    year: '2024', 
    medium: 'Acrylic on Canvas', 
    category: 'PAINTING',
    archiveCode: 'ARC-003'
  },
  { 
    id: '4', 
    title: 'System Failure', 
    artist: 'PROTOCOL', 
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop', 
    year: '2026', 
    medium: 'Interactive Installation', 
    category: 'INSTALLATION',
    archiveCode: 'ARC-004'
  },
  { 
    id: '5', 
    title: 'Void Frequency', 
    artist: 'VOID', 
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop', 
    year: '2025', 
    medium: 'Digital Composite', 
    category: 'DIGITAL',
    archiveCode: 'ARC-005'
  },
  { 
    id: '6', 
    title: 'Heavy Metal Lung', 
    artist: 'RUST', 
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', 
    year: '2026', 
    medium: 'Industrial Design', 
    category: 'DESIGN',
    archiveCode: 'ARC-006'
  },
  { 
    id: '7', 
    title: 'Archive Fragment 01', 
    artist: 'ALRECZ', 
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop', 
    year: '2023', 
    medium: 'Photography / Scan', 
    category: 'ARCHIVE',
    archiveCode: 'ARC-007'
  },
  { 
    id: '8', 
    title: 'Collaboration X', 
    artist: 'ALRECZ x STUDIO', 
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop', 
    year: '2026', 
    medium: 'Mixed Media', 
    category: 'COLLABORATION',
    archiveCode: 'ARC-008'
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-alrecz-black text-alrecz-offwhite font-sans selection:bg-alrecz-blood selection:text-white cursor-none">
      <CustomCursor />
      <CRTOverlay />
      
      {/* HEADER / NAV */}
      <nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference">
        <div className="font-display font-bold text-2xl tracking-tighter uppercase">ALRECZ</div>
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
          <button className="hover:text-alrecz-blood transition-colors text-alrecz-silver/50" data-cursor="hover">[ MUSIC ]</button>
          <button className="hover:text-alrecz-blood transition-colors text-alrecz-offwhite font-bold" data-cursor="hover">[ ART ]</button>
          <button className="hover:text-alrecz-blood transition-colors text-alrecz-silver/50" data-cursor="hover">[ SHOP ]</button>
          <button className="hover:text-alrecz-blood transition-colors text-alrecz-silver/50" data-cursor="hover">[ ARCHIVE ]</button>
        </div>
      </nav>

      <main className="w-full overflow-hidden">
        <HeroSection />
        <FeaturedExhibition artwork={ARTWORKS[0]} />
        <GalleryRail title="Current Transmissions" artworks={ARTWORKS.slice(1, 6)} />
        <CollectionGrid artworks={ARTWORKS} />
        <ImmersiveBreak />
        <ArchiveIndex />
      </main>

      <Footer />
    </div>
  );
};

export default App;
