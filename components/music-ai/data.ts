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
    title: "Chrome Heart",
    artist: "I$H feat. AL",
    cover:
      "https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=500&auto=format&fit=crop",
    duration: "2:15",
    category: "BEAT",
  },
  {
    id: "3",
    title: "Night Terror Mix",
    artist: "DJ GHOST",
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
    title: "Chopped Soul",
    artist: "PURPLE DRANK",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop",
    duration: "4:20",
    category: "C&S",
  },
  {
    id: "6",
    title: "Lost Frequency",
    artist: "VOID",
    cover:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500&auto=format&fit=crop",
    duration: "2:58",
    category: "RADIO",
  },
  {
    id: "7",
    title: "Heavy Metal Lung",
    artist: "RUST",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop",
    duration: "3:33",
    category: "SINGLE",
  },
];

export const CATEGORIES: MusicCategory[] = ["SINGLE", "MIX", "BEAT", "C&S", "RADIO"];