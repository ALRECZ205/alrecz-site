'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from './BootSequence';
import ArchiveHero from './sections/ArchiveHero';
import ExhibitionsPreview from './sections/ExhibitionsPreview';
import TransmissionsPreview from './sections/TransmissionsPreview';
import LostBoyzMarquee from '@/components/shared/LostBoyzMarquee';
import MusicPreview from './sections/MusicPreview';
import LabPreview from './sections/LabPreview';
import ShopPreview from './sections/ShopPreview';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from '@/components/shared/Footer';

const ENTERED_KEY = 'alrecz_entered';

/**
 * Orchestrates the boot sequence vs. the main archive scroll. The boot
 * only ever plays once per browser session (sessionStorage, not
 * localStorage — a fresh boot each visit-session feels intentional, a
 * fresh boot every single page load felt like an obstacle). `booted`
 * starts `null` so the server-rendered markup and the client's first
 * paint match exactly; the real value is read client-side in useEffect,
 * one render after hydration, which is not a hydration mismatch.
 */
export default function HomeExperience() {
  const [booted, setBooted] = useState<boolean | null>(null);

  useEffect(() => {
    // One-time read of sessionStorage on mount — it's not an external
    // store with a change event to subscribe to, just a value that only
    // exists client-side (hence deferred out of render for SSR safety).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooted(sessionStorage.getItem(ENTERED_KEY) === '1');
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem(ENTERED_KEY, '1');
    setBooted(true);
  };

  return (
    <>
      <AnimatePresence>
        {booted === false && <BootSequence onEnter={handleEnter} />}
      </AnimatePresence>

      {booted !== null && (
        <motion.div
          initial={booted ? false : { opacity: 0 }}
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
          <AboutSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}

      {booted === null && <div className="fixed inset-0 z-[9985] bg-alrecz-black" />}
    </>
  );
}
