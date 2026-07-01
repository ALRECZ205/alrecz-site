'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/nav';
import { useCart } from '@/components/shop/CartContext';
import GlitchText from './GlitchText';

/**
 * Single site-wide nav, mounted once in the root layout. Replaces the
 * separate hand-rolled headers previously duplicated inside MainApp,
 * ArtAIPage, MusicAIPage, and the portfolio Header component.
 */
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, open: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToAnchor = (hash: string) => {
    setMenuOpen(false);
    if (pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9980] transition-all duration-500 border-b ${
        scrolled
          ? 'bg-alrecz-black/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" data-cursor="link">
          <GlitchText
            text="ALRECZ"
            as="span"
            className="text-xl md:text-2xl font-display font-bold tracking-widest text-alrecz-offwhite"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = item.type === 'route' && pathname === item.href;
            return item.type === 'route' ? (
              <Link
                key={item.label}
                href={item.href}
                data-cursor="link"
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  isActive ? 'text-alrecz-blood' : 'text-alrecz-silver hover:text-alrecz-offwhite'
                }`}
              >
                [ {item.label} ]
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => goToAnchor(item.href)}
                data-cursor="button"
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-alrecz-silver hover:text-alrecz-offwhite transition-colors"
              >
                [ {item.label} ]
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            data-cursor="button"
            aria-label={`Open cart (${cart.length} items)`}
            className="relative text-alrecz-silver hover:text-alrecz-offwhite transition-colors"
          >
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-alrecz-blood text-[9px] flex items-center justify-center text-white font-mono">
                {cart.length}
              </span>
            )}
          </button>

          <button
            className="md:hidden font-mono text-[11px] tracking-widest text-alrecz-offwhite border border-white/20 px-3 py-2"
            onClick={() => setMenuOpen((v) => !v)}
            data-cursor="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-4 px-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
          {NAV_ITEMS.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm tracking-[0.2em] uppercase text-alrecz-silver"
              >
                [ {item.label} ]
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => goToAnchor(item.href)}
                className="font-mono text-sm tracking-[0.2em] uppercase text-alrecz-silver text-left"
              >
                [ {item.label} ]
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
}
