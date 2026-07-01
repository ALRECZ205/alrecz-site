import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedExhibition from './components/FeaturedExhibition';
import GalleryRail from './components/GalleryRail';
import CollectionGrid from './components/CollectionGrid';
import ImmersiveBreak from './components/ImmersiveBreak';
import ArchiveIndex from './components/ArchiveIndex';
import Footer from '@/components/shared/Footer';
import LostBoyzMarquee from '@/components/shared/LostBoyzMarquee';
import { ARTWORKS } from '@/lib/artworks';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-alrecz-black text-alrecz-offwhite font-sans selection:bg-alrecz-blood selection:text-white">
      <main className="w-full overflow-hidden">
        <HeroSection />

        <FeaturedExhibition />

        <GalleryRail
          title="Current Transmissions"
          artworks={ARTWORKS.slice(1, 6)}
        />

        <LostBoyzMarquee />

        <CollectionGrid artworks={ARTWORKS} />

        <ImmersiveBreak />
        <ArchiveIndex />
      </main>

      <Footer />
    </div>
  );
};

export default App;