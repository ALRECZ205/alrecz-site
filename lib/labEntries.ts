export interface LabEntry {
  id: string;
  title: string;
  tag: 'GENERATIVE' | 'WEBGL' | 'AI TOOLING' | 'CREATIVE CODE';
  status: 'ACTIVE' | 'RESEARCH' | 'ARCHIVED';
  description: string;
  image?: string;
}

export const LAB_ENTRIES: LabEntry[] = [
  {
    id: 'artifact-engine',
    title: 'Artifact Engine',
    tag: 'WEBGL',
    status: 'ACTIVE',
    description:
      'A distorted-sphere renderer built on react-three-fiber, driving the object at the center of the Exhibitions hero. Continuous research into procedural material distortion and particle fields as a stand-in for physical artifacts that don’t exist yet.',
  },
  {
    id: 'procedural-decay',
    title: 'Procedural Decay',
    tag: 'GENERATIVE',
    status: 'RESEARCH',
    description:
      'A study in digital texture breakdown — compression artifacts, dither noise, and signal loss treated as material rather than defect. Source study archived below.',
    image: '/images/art/procedural-decay.jpg',
  },
  {
    id: 'archive-tooling',
    title: 'Archive-Assisted Tooling',
    tag: 'AI TOOLING',
    status: 'ACTIVE',
    description:
      'The exhibitions, music, and archive systems on this site were built collaboratively with AI-assisted tooling — componentized, then hand-tuned. This entry documents that process rather than hiding it.',
  },
  {
    id: 'signal-field',
    title: 'Signal Field',
    tag: 'CREATIVE CODE',
    status: 'ACTIVE',
    description:
      'A mouse-reactive particle field rendered on canvas, live below — nodes hold position until a cursor passes near, then scatter and re-settle. No library, just requestAnimationFrame and a spatial grid.',
  },
];
