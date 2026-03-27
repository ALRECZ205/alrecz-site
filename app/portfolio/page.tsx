import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Campaign Visuals',
      category: 'Design',
      description: 'Cover art, promo graphics, rollout assets, and social visuals.',
    },
    {
      title: 'Murals + Public Art',
      category: 'Art',
      description: 'Large-scale wall pieces, painted installations, and concept sketches.',
    },
    {
      title: 'DJ + Event Branding',
      category: 'Music',
      description: 'Flyers, motion assets, stage visuals, and booking promo material.',
    },
    {
      title: 'Client Work',
      category: 'Creative Direction',
      description: 'Selected projects for brands, artists, and collaborations.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-mono px-4 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs text-gray-500 mb-2">ALRECZ://PORTFOLIO</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              PORTFOLIO
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Selected work across design, visuals, murals, music-related projects,
              and creative direction.
            </p>
          </div>

          <Link
            href="/"
            className="border border-white px-4 py-2 text-xs hover:bg-white hover:text-black transition-all"
          >
            BACK HOME
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/15 bg-black/60 backdrop-blur-sm p-6 hover:border-awge-yellow/70 transition-all"
            >
              <p className="text-[10px] text-awge-yellow mb-2 uppercase tracking-[0.2em]">
                {project.category}
              </p>
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}