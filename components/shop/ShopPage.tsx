'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/shared/Footer';
import { PRODUCTS } from './data';
import { useCart } from './CartContext';

export default function ShopPage() {
  const product = PRODUCTS[0];
  const videoRef = useRef<HTMLVideoElement>(null);
  const { addToCart } = useCart();

  const toggleRotation = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="min-h-screen bg-alrecz-black text-alrecz-offwhite pt-24">
      <section
        className="relative min-h-[calc(100vh-6rem)] overflow-hidden border-b border-white/10 cursor-pointer"
        onClick={toggleRotation}
        data-cursor="image"
      >
        {product.video && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={product.video} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-10 left-8 md:left-16 z-10">
          <h1 className="font-retro text-5xl md:text-8xl text-white tracking-widest">ALRECZ</h1>
          <p className="text-xs md:text-sm text-white/60 tracking-[0.4em] mt-2">LAW OF THE JUNGLE</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 z-10 max-w-xs"
        >
          <h2 className="font-retro text-4xl md:text-6xl leading-none text-white mb-6">
            SHIRT .001
            <br />
            GENESIS
          </h2>
          <p className="font-mono text-xs md:text-sm text-white/80 leading-relaxed">
            A DIGITAL GARMENT BUILT FROM STATIC, SIGNAL, FROM A SOUTHERN MYTH. DESIGNED FOR THE
            ARCHIVE. RELEASED FOR THE REAL WORLD.
          </p>
          <div className="mt-8 text-xs font-mono text-white/50 space-y-2">
            <p>{product.drop}</p>
            <p>COLOR // {product.color}</p>
            <p>STATUS // {product.inStock ? 'LIMITED' : 'SOLD OUT'}</p>
            <p>NODE // 205</p>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs text-white/50 tracking-[0.3em] mb-2">ALRECZ://PRODUCT_DROP_001</p>
              <h3 className="font-retro text-4xl md:text-6xl text-white">LIMITLESS TEE</h3>
            </div>

            <div className="md:w-[420px]" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between mb-3 font-mono">
                <span className="text-white/70">${product.price}</span>
                <span className="text-alrecz-blood">{product.inStock ? 'IN STOCK' : 'SOLD OUT'}</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
                data-cursor="button"
                className="w-full py-4 bg-white text-black font-bold text-sm uppercase hover:bg-alrecz-blood hover:text-white transition-all disabled:opacity-40"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 z-10 font-mono text-[9px] text-white/40 tracking-widest">
          [ CLICK TO PAUSE ROTATION ]
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-4">
          [ ARCHIVE // MORE SOON ]
        </p>
        <p className="text-alrecz-silver/60 leading-relaxed">
          This drop is the first in an ongoing run. Future releases — apparel, prints, and
          limited archive objects — will surface here as they&apos;re ready. No countdowns, no
          waitlist gimmicks — just the next thing when it&apos;s done.
        </p>
      </section>

      <Footer />
    </div>
  );
}
