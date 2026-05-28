export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  video?: string;
  inStock: boolean;
}

export interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  title: string;
  description: string;
}

export type ViewState = 'HOME' | 'ARCHIVE' | 'SHOP' | 'MUSIC';