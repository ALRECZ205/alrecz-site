export type MusicCategory = "SINGLE" | "MIX" | "BEAT" | "C&S" | "RADIO";

export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: string;
  category: MusicCategory;
  date?: string;
}