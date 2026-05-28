import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import FeaturedWork from '@/components/portfolio/FeaturedWork';
import Expertise from '@/components/portfolio/Expertise';
import Experience from '@/components/portfolio/Experience';
import TextScroll from '@/components/portfolio/TextScroll';
import Clients from '@/components/portfolio/Clients';
import Stats from '@/components/portfolio/Stats';
import Awards from '@/components/portfolio/Awards';
import About from '@/components/portfolio/About';
import Footer from '@/components/portfolio/Footer';

export default function PortfolioPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white">
      <div className="crt-overlay pointer-events-none" />

      <div className="fixed top-6 right-6 z-[60] flex items-center gap-2 font-mono text-brand-red text-xs tracking-widest mix-blend-screen">
        <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse shadow-[0_0_8px_#ff003c]" />
        REC // SYS.BROADCAST
      </div>

      <Header />

      <main>
        <Hero />
        <FeaturedWork />
        <Expertise />
        <Experience />
        <TextScroll />
        <Clients />
        <Stats />
        <Awards />
        <About />
      </main>

      <Footer />
    </div>
  );
}