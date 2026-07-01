import Link from 'next/link';
import { PRODUCTS } from '@/components/shop/data';

export default function ShopPreview() {
  const product = PRODUCTS[0];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-b border-white/5 bg-alrecz-black">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative aspect-video border border-white/10 overflow-hidden group">
          {product.video && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={product.video} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/60 px-2 py-1 border border-white/20">
            {product.drop}
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-4">
            [ SHOP // LIMITED ]
          </p>
          <h3 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter text-alrecz-offwhite mb-6">
            {product.name}
          </h3>
          <p className="text-alrecz-silver/70 max-w-md mb-8 leading-relaxed">
            A digital garment built from static, signal, and a southern myth. Designed for the
            archive, released for the real world.
          </p>
          <div className="flex items-center gap-6 mb-8 font-mono text-sm">
            <span className="text-alrecz-offwhite">${product.price}</span>
            <span className="text-alrecz-blood">{product.inStock ? 'IN STOCK' : 'SOLD OUT'}</span>
          </div>
          <Link
            href="/shop"
            data-cursor="link"
            className="inline-block border border-white px-8 py-4 font-bold tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-all"
          >
            ENTER SHOP
          </Link>
        </div>
      </div>
    </section>
  );
}
