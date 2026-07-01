'use client';

import { useEffect, useState } from 'react';

export interface ArchiveMetadata {
  time: string;
  sessionCode: string;
  signal: number;
  filesIndexed: number;
  recovered: number;
  status: 'ONLINE' | 'SYNCING';
}

const FILES_INDEXED = 214;
const RECOVERED = 127;

/**
 * Drives the "living archive" HUD readouts (clock, session code, signal).
 * Time/session values are computed client-side only in useEffect — seeding
 * them from Date.now()/Math.random() during render would desync from the
 * server-rendered markup and trigger a hydration mismatch.
 */
export function useArchiveMetadata(): ArchiveMetadata {
  const [time, setTime] = useState('--:--:--');
  const [sessionCode, setSessionCode] = useState('----');
  const [signal, setSignal] = useState(98);

  useEffect(() => {
    // One-time read of a client-only value (Date.now()) used purely for
    // display flavor — there's nothing to "subscribe" to here, so the
    // usual subscribe-in-effect shape doesn't apply.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSessionCode(Date.now().toString(16).slice(-6).toUpperCase());

    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    };
    tick();
    const clock = setInterval(tick, 1000);

    const drift = setInterval(() => {
      setSignal((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.min(99, Math.max(94, next));
      });
    }, 4000);

    return () => {
      clearInterval(clock);
      clearInterval(drift);
    };
  }, []);

  return {
    time,
    sessionCode,
    signal,
    filesIndexed: FILES_INDEXED,
    recovered: RECOVERED,
    status: 'ONLINE',
  };
}
