import type { Track, MusicCategory } from "./types";

export const TRACKS: Track[] = [
  {
    id: "1",
    title: "Good Flirt (Free$tyle)",
    artist: "I$H",
    cover:
      "/images/Good Flirt Cover.jpg",
    duration: "3:42",
    category: "SINGLE",
  },
  {
    id: "2",
    title: "Chrome Heart Chri$t",
    artist: "I$H",
    cover:
      "/images/CHC Cover.jpg",
    duration: "2:15",
    category: "SINGLE",
  },
  {
    id: "3",
    title: "Night Terror Mix",
    artist: "I$H",
    cover:
      "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=500&auto=format&fit=crop",
    duration: "45:00",
    category: "MIX",
  },
  {
    id: "4",
    title: "System Failure",
    artist: "PROTOCOL",
    cover:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop",
    duration: "3:11",
    category: "SINGLE",
  },
  {
    id: "5",
    title: "Chopped 205",
    artist: "I$H",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop",
    duration: "30:00",
    category: "C&S",
  },
  {
    id: "6",
    title: "Lost Boyz 14",
    artist: "LostBoyz",
    cover:
      "/images/Lost-Boyz-14.png",
    duration: "25:00",
    category: "RADIO",
  },
  {
    id: "7",
    title: "Carrhart Chri$t",
    artist: "I$H",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop",
    duration: "3:33",
    category: "SINGLE",
  },
];

export const CATEGORIES: MusicCategory[] = ["SINGLE", "MIX", "BEAT", "C&S", "RADIO"];