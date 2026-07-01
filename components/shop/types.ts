export interface Product {
  id: string;
  name: string;
  price: number;
  /** Still-frame product shot. Optional — falls back to a monogram tile. */
  image?: string;
  video?: string;
  inStock: boolean;
  drop: string;
  color: string;
}
