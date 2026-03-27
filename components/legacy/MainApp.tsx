'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart, Play } from 'lucide-react';

import CRTOverlay from './components/CRTOverlay';
import GlitchText from './components/GlitchText';
import CartModal from './components/CartModal';
import Link from 'next/link';

import type { MediaItem, Product, ViewState } from './types';

const DUMMY_PRODUCTS: Product[] = [
  { id: '1', name: 'AWGE TRUCKER HAT', price: 45, image: 'https://picsum.photos/200/200?random=1', inStock: true },
  { id: '2', name: 'TESTING TEE', price: 60, image: 'https://picsum.photos/200/200?random=2', inStock: true },
  { id: '3', name: 'VHS ARCHIVE BOX', price: 120, image: 'https://picsum.photos/200/200?random=3', inStock: false },
];

const DUMMY_MEDIA: MediaItem[] = [
  { id: '1', type: 'video', src: 'https://picsum.photos/800/600?random=10', title: 'RIOT (ROWDY PIPE)', description: 'DIR. A$AP ROCKY' },
  { id: '2', type: 'image', src: 'https://picsum.photos/800/600?random=11', title: 'BABUSHKA BOI', description: 'BTS FOOTAGE' },
  { id: '3', type: 'video', src: 'https://picsum.photos/800/600?random=12', title: 'SHITTIN ME', description: 'VISUALIZER' },
  { id: '4', type: 'image', src: 'https://picsum.photos/800/600?random=13', title: 'AGENCY REEL 2024', description: 'INTERNAL USE ONLY' },
];

export default function MainApp() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const [view, setView] = useState<ViewState>('HOME');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    const clock = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(clock);
    };
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  // Preloader Screen
if (loading || !entered) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden cursor-crosshair">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* UI LAYER (this MUST wrap everything you want centered) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <CRTOverlay />

        {loading ? (
          <div className="text-center">
            <h1 className="text-4xl md:text-8xl font-retro text-white animate-pulse">
              LOADING...
            </h1>
            <p className="font-mono text-xs text-awge-yellow mt-4">
              INITIALIZING ASSETS
            </p>
          </div>
        ) : (
          <div className="text-center cursor-pointer" onClick={() => setEntered(true)}>
            <GlitchText
              text="ENTER ARCHIVE"
              as="h1"
              className="text-4xl md:text-8xl font-retro font-bold text-white mb-8"
              hoverEffect
            />
            <p className="text-xs font-mono text-gray-400 mt-4 animate-bounce">
              [ CLICK TO START ]
            </p>
          </div>
        )}

        <div className="absolute bottom-4 left-4 font-mono text-xs text-gray-500">
          v2.0.25 - SYSTEM READY
        </div>
      </div>
    </div>
  );
}

  // Main Interface
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono overflow-x-hidden selection:bg-awge-yellow selection:text-black">
      <CRTOverlay />

      <header className="fixed top-0 left-0 w-full z-40 border-b border-white/20 bg-black/90 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setView('HOME')} className="text-2xl font-bold font-retro tracking-widest hover:text-awge-yellow transition-colors">
            ALRECZ
          </button>
          <span className="hidden md:inline-block text-xs text-gray-500">
            {currentTime.toLocaleTimeString()}
          </span>
        </div>

        <nav className="flex items-center gap-6">

          <Link
  href="/portfolio"
  className="text-sm hover:underline decoration-awge-yellow underline-offset-4"
>
  [ PORTFOLIO ]
</Link>

  <Link
    href="/art"
    className="text-sm hover:underline decoration-awge-yellow underline-offset-4"
  >
   [ ART ]
  </Link>

  <Link
    href="/music"
    className="text-sm hover:underline decoration-awge-yellow underline-offset-4"
  >
    [ MUSIC ]
  </Link>

  <button
    onClick={() => setView('SHOP')}
    className="text-sm hover:underline decoration-awge-yellow underline-offset-4"
  >
    [ SHOP ]
  </button>

  <button onClick={() => setCartOpen(true)} className="relative group">
    <ShoppingCart size={20} className="group-hover:text-awge-yellow transition-colors" />
  </button>
</nav>
      </header>

      <main className="pt-24 pb-20 px-4 md:px-12 relative z-10 min-h-screen">
        {view === 'HOME' && (
  <section className="relative min-h-[70vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden">
{/* Background image */}
<div
  className="absolute inset-0 z-0 bg-center bg-cover"
  style={{ backgroundImage: "url('/images/home-bg.png')" }}
/>

{/* Optional: darken image a bit for readability */}
<div className="absolute inset-0 z-1 bg-black/55" />


    {/* Background scene */}

    {/* CRT overlays */}
    <div className="absolute inset-0 z-3 pointer-events-none">
      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 2px, transparent 6px)",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      {/* subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")",
        }}
      />
      {/* corner HUD ticks */}
      <div className="absolute left-6 top-6 w-10 h-10 border-l border-t border-white/30" />
      <div className="absolute right-6 top-6 w-10 h-10 border-r border-t border-white/30" />
      <div className="absolute left-6 bottom-6 w-10 h-10 border-l border-b border-white/30" />
      <div className="absolute right-6 bottom-6 w-10 h-10 border-r border-b border-white/30" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-6xl px-4 md:px-10">
      {/* Status bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[10px] md:text-xs">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-awge-yellow inline-block animate-pulse" />
            <span className="text-gray-300">SIGNAL: OK</span>
          </span>
          <span className="text-gray-500">NODE: BHM-205</span>
          <span className="text-gray-500">LATENCY: 14ms</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-500">TIME:</span>
          <span className="text-gray-300 tabular-nums">{currentTime.toLocaleTimeString()}</span>
          <span className="text-gray-500">BUILD:</span>
          <span className="text-gray-300">v2.0.25</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: terminal hero */}
        <div className="lg:col-span-7 relative border border-white/15 bg-black/55 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/60">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-white/30" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
              <span className="w-2 h-2 rounded-full bg-awge-yellow/80" />
              <span className="text-gray-400 ml-2">ALRECZ://HOME</span>
            </div>
            <div className="text-[10px] text-gray-500">CRT MODE: ENABLED</div>
          </div>

          <div className="p-5 md:p-7">
            <GlitchText
              text="ALABAMA RECORDS"
              as="h1"
              className="text-3xl md:text-6xl font-bold tracking-tight"
              hoverEffect
            />

            <div className="mt-4 space-y-2 text-xs md:text-sm text-gray-300">
              <p className="text-gray-400">
                <span className="text-awge-yellow">RULE #1:</span> NOTHING IS REAL.
              </p>
              <p className="text-gray-400">
                <span className="text-awge-yellow">RULE #2:</span> WHEN IN DOUBT, REFER TO RULE #1.
              </p>
              <p className="text-gray-500">
                Merch • Music • DJ Services • Visual Archives • Client Work
              </p>
            </div>

            <div className="mt-6 border border-white/10 bg-black/70 p-4 font-mono text-[11px] md:text-xs leading-relaxed">
              <div className="text-gray-400">
                <span className="text-awge-yellow">alrecz@terminal</span>:~$ boot --home
              </div>
              <div className="text-gray-500 mt-2">
                [OK] mounting archive<br />
                [OK] loading shop modules<br />
                [OK] syncing media index<br />
                <span className="text-awge-yellow">[READY]</span> choose a path ↓
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setView('ARCHIVE')}
                className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                ENTER ARCHIVE
              </button>

              <button
                onClick={() => setView('SHOP')}
                className="border border-awge-yellow text-awge-yellow px-6 py-3 hover:bg-awge-yellow hover:text-black transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                OPEN SHOP
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="border border-white/30 px-6 py-3 hover:border-awge-yellow hover:text-awge-yellow transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                VIEW CART
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/60 px-4 py-2 text-[10px] text-gray-500 overflow-hidden">
            <div className="whitespace-nowrap alrecz-marquee">
              ⟡ SYSTEM BROADCAST ⟡ NEW DROPS SOON ⟡ BOOKING OPEN ⟡ ARCHIVE UPDATED ⟡
            </div>
          </div>
        </div>

        {/* Right: UI cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-white/15 bg-black/55 backdrop-blur-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-gray-400">QUICK ACCESS</div>
              <div className="text-[10px] text-gray-500">/shortcuts</div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => setView('ARCHIVE')}
                className="border border-white/15 hover:border-awge-yellow/70 hover:text-awge-yellow transition-all p-3 text-left"
              >
                <div className="font-bold tracking-widest">ARCHIVE</div>
                <div className="text-gray-500 mt-1">videos • images • docs</div>
              </button>

              <button
                onClick={() => setView('SHOP')}
                className="border border-white/15 hover:border-awge-yellow/70 hover:text-awge-yellow transition-all p-3 text-left"
              >
                <div className="font-bold tracking-widest">SHOP</div>
                <div className="text-gray-500 mt-1">merch • drops</div>
              </button>

              <a
                href="mailto:YOUR_EMAIL_HERE?subject=ALRECZ%20Booking"
                className="border border-white/15 hover:border-awge-yellow/70 hover:text-awge-yellow transition-all p-3 text-left"
>
                <div className="font-bold tracking-widest">BOOKING</div>
                <div className="text-gray-500 mt-1">DJ • design • murals</div>
              </a>

              <button
                onClick={() => setCartOpen(true)}
                className="border border-white/15 hover:border-awge-yellow/70 hover:text-awge-yellow transition-all p-3 text-left"
              >
                <div className="font-bold tracking-widest">CART</div>
                <div className="text-gray-500 mt-1">{cart.length} items</div>
              </button>
            </div>
          </div>

          <div className="border border-white/15 bg-black/55 backdrop-blur-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-gray-400">SIGNAL MONITOR</div>
              <div className="text-[10px] text-gray-500">/telemetry</div>
            </div>

            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-center justify-between">
                <span>CRT FLICKER</span>
                <span className="text-awge-yellow">ON</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SCANLINE PASS</span>
                <span className="text-awge-yellow">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AUDIO BUS</span>
                <span className="text-gray-300">READY</span>
              </div>

              <div className="pt-2">
                <div className="h-2 w-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-awge-yellow/80 animate-pulse" />
                </div>
                <div className="mt-2 text-[10px] text-gray-500">
                  STATUS: STABLE • NOISE FLOOR: LOW
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/15 bg-black/55 backdrop-blur-sm p-5">
            <div className="text-xs text-gray-400 mb-2">TIP</div>
            <div className="text-xs text-gray-500 leading-relaxed">
              Keep HOME as your “terminal hub.” Later we can swap the right column into featured drop, DJ booking,
              and latest release pulled from CMS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

        {view === 'ARCHIVE' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUMMY_MEDIA.map((item) => (
              <div key={item.id} className="group relative border border-white/10 bg-gray-900/50 hover:border-awge-yellow/50 transition-all cursor-pointer overflow-hidden">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-awge-yellow w-12 h-12" fill="currentColor" />
                  </div>
                </div>
                <div className="p-4 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                  <span className="text-xs font-retro text-awge-yellow border border-awge-yellow px-1">
                    {item.type.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'SHOP' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {DUMMY_PRODUCTS.map((product) => (
              <div key={product.id} className="group border border-white/20 p-4 hover:bg-white/5 transition-all">
                <div className="aspect-square bg-gray-900 mb-4 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <span className="text-red-500 font-bold border-2 border-red-500 px-4 py-2 -rotate-12">SOLD OUT</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold max-w-[70%]">{product.name}</h3>
                  <span className="text-awge-yellow">${product.price}</span>
                </div>
                <button
                  onClick={() => product.inStock && addToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-2 font-bold text-sm uppercase transition-all
                    ${product.inStock
                      ? 'bg-white text-black hover:bg-awge-yellow hover:translate-x-1 hover:translate-y-1'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-40 border-t border-white/20 bg-black/90 backdrop-blur-sm p-2 flex justify-between items-center text-[10px] md:text-xs">
        <div className="flex gap-4">
          <span>© 2026 LAW OF THE JUNGLE</span>
          <span className="hidden md:inline text-gray-500">205</span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/pelatiah_/" className="hover:text-awge-yellow">INSTAGRAM</a>
          <a href="https://www.threads.com/@pelatiah_" className="hover:text-awge-yellow">THREADS</a>
          <a href="https://www.youtube.com/@pelatiah_" className="hover:text-awge-yellow">YOUTUBE</a>
        </div>
      </footer>

      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
