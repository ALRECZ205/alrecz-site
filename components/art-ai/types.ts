export type ArtCategory = 'ALL' | '205' | 'Album Cover' | 'Artist Study' | 'DIGITAL' | 'Experimental' | 'INSTALLATION' | 'DESIGN' | 'ARCHIVE' | 'Brand Art' | 'POSTER' | 'Pop Surrealism' | 'RISO' | 'COLLABORATION';

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

