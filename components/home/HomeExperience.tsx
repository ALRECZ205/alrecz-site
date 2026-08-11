'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from './BootSequence';
import ArchiveHero from './sections/ArchiveHero';
import ExhibitionsPreview from './sections/ExhibitionsPreview';
import TransmissionsPreview from './sections/TransmissionsPreview';
import LostBoyzMarquee from '@/components/shared/LostBoyzMarquee';
import MusicPreview from './sections/MusicPreview';
import LabPreview from './sections/LabPreview';
import ShopPreview from './sections/ShopPreview';
import ContactSection from './sections/ContactSection';
import Footer from '@/components/shared/Footer';

/**
 * Orchestrates the boot sequence vs. the main archive scroll. Matches the
 * original MainApp: every mount plays LOADING -> ENTER ARCHIVE, no
 * persistence across visits.
 */
export default function HomeExperience() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!entered && <BootSequence onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-alrecz-black"
        >
          <ArchiveHero />
          <ExhibitionsPreview />
          <TransmissionsPreview />
          <LostBoyzMarquee />
          <MusicPreview />
          <LabPreview />
          <ShopPreview />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
