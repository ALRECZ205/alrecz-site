export type ArtCategory = 'ALL' | 'PAINTING' | 'DIGITAL' | 'INSTALLATION' | 'DESIGN' | 'ARCHIVE' | 'COLLABORATION';

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

