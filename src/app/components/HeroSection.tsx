'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (blob1Ref?.current) {
        blob1Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (blob2Ref?.current) {
        blob2Ref.current.style.transform = `translateY(${scrollY * -0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="pocetna"
      ref={heroRef}
      className="relative min-h-screen flex items-end overflow-hidden noise-overlay">

      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Extra richness layer */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(255,215,0,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(230,57,70,0.15) 0%, transparent 50%)' }} />

      {/* Depth blobs */}
      <div
        ref={blob1Ref}
        className="blob-1 absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none will-change-transform" />

      <div
        ref={blob2Ref}
        className="blob-2 absolute bottom-1/3 left-1/6 w-80 h-80 rounded-full pointer-events-none will-change-transform" />

      <div className="blob-3 absolute top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none" />

      {/* Decorative star elements */}
      <div className="absolute top-24 left-10 text-white/20 text-4xl select-none pointer-events-none font-bold">✦</div>
      <div className="absolute top-40 right-20 text-yellow-300/30 text-2xl select-none pointer-events-none">★</div>
      <div className="absolute bottom-40 left-1/3 text-white/15 text-5xl select-none pointer-events-none">◆</div>
      <div className="absolute top-1/3 left-1/2 text-yellow-200/20 text-3xl select-none pointer-events-none">✦</div>

      {/* Decorative horizontal lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,215,0,0.2) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)' }} />

      {/* Dark scrim at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />

      {/* Hero placeholder image overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 img-placeholder opacity-20 text-white text-lg">
          Uvodna slika — placeholder
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-5 md:px-10 pb-20 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left: Main headline */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              <span className="sparkle-dot" />
              Kafić u srcu Surdulice
              <span className="sparkle-dot" />
            </span>

            <h1 className="mb-6">
              <img
                src="/assets/images/garden_grimss-slovima_napisano-1791242762562.png"
                alt="Garden Grimms"
                className="max-w-sm w-full"
              />
            </h1>

            {/* Decorative line under title */}
            <div className="w-32 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #FFD700, #E63946, transparent)' }} />

            <p className="text-white/85 text-lg md:text-xl max-w-md leading-relaxed mb-8 font-medium">Savršeno mesto za jutarnju kafu, opuštanje s prijateljima ili večernji koktel 

            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#meni"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFE566 50%, #FFD700 100%)', color: '#1C1917', boxShadow: '0 6px 24px rgba(255,215,0,0.4)' }}>

                <span>✦</span> Pogledaj Meni
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/40 text-white rounded-full font-bold text-base hover:bg-white/25 transition-all duration-300">

                Kontakt
              </a>
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="float-card relative max-w-xs w-full">
              {/* Gradient border wrapper */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ padding: '1.5px', background: 'linear-gradient(135deg, rgba(255,215,0,0.6), rgba(30,144,255,0.4), rgba(230,57,70,0.4))', borderRadius: '1rem' }}>
                <div className="w-full h-full rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }} />
              </div>
              <div className="relative bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg" style={{ background: 'linear-gradient(135deg, #FFD700, #FFE566)', boxShadow: '0 4px 12px rgba(255,215,0,0.4)' }}>
                    G
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Garden Grimms</p>
                    <p className="text-white/70 text-xs">Surdulica, Srbija</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-yellow-300">★★★★★</span>
                    <span className="font-semibold">4.6</span>
                    <span className="text-white/60 text-xs">(269 recenzija)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-yellow-300">📍</span>
                    <span>Miloša Obilića 7</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-yellow-300">🕐</span>
                    <span>Otvoreno do 23:59</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs uppercase tracking-wider font-semibold">Status</span>
                    <span className="flex items-center gap-1.5 text-green-300 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Otvoreno
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest font-semibold">Skroluj</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>);

}