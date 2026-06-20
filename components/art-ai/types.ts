export type ArtCategory =
  | 'DIGITAL'
  | 'Album Art'
  | 'Album Cover'
  | 'Artist Study'
  | 'Poster'
  | 'Animation Storyboard'
  | 'AEVAI Committe Award'
  | 'Personal Study'
  | 'Calendar Illustration'
  | 'RISO PRINT'
  | 'Experimental'
  | 'Event Flyer'
  | 'Commission'
  | 'Album Cover Commission'
  | 'Event Flyer Commission'
  | 'Artist Commission'
  | 'Character Design'
  | 'Commission Request';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: string;
  medium: string;
  category: ArtCategory;
  description?: string;
  archiveCode?: string;
  location?: string;
  status?: string;
}

