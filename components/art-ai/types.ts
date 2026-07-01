export type ArtCategory =
  | '205'
  | 'AEVAI Committe Award'
  | 'Album Art'
  | 'Album Cover'
  | 'Album Cover Commission'
  | 'Artist Commission'
  | 'Artist Study'
  | 'Brand Art'
  | 'Calendar Illustration'
  | 'Character Design'
  | 'Commission'
  | 'Commission Request'
  | 'DIGITAL'
  | 'Event Flyer'
  | 'Event Flyer Commission'
  | 'Experimental'
  | 'INSTALLATION'
  | 'DESIGN'
  | 'ARCHIVE'
  | 'Animation Storyboard'
  | 'Personal Study'
  | 'Pop Surrealism'
  | 'Poster'
  | 'RISO'
  | 'RISO PRINT'
  | 'COLLABORATION';

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

