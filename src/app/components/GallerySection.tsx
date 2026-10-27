'use client';

import React, { useEffect, useRef } from 'react';

const placeholders = [
  { id: 1, label: 'Galerija — Slika 1', hint: 'Enterijor kafića', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, label: 'Galerija — Slika 2', hint: 'Bašta / Terasa', span: 'md:col-span-1' },
  { id: 3, label: 'Galerija — Slika 3', hint: 'Kafa & napici', span: 'md:col-span-1' },
  { id: 4, label: 'Galerija — Slika 4', hint: 'Koktel bar', span: 'md:col-span-1' },
  { id: 5, label: 'Galerija — Slika 5', hint: 'Detalji ambijenta', span: 'md:col-span-1' },
  { id: 6, label: 'Galerija — Slika 6', hint: 'Posebna prigoda', span: 'md:col-span-2' },
];

const gradients = [
  'linear-gradient(135deg, #C8E6FF 0%, #87CEEB 60%, #B0D8FF 100%)',
  'linear-gradient(135deg, #FFF8CC 0%, #FFE566 60%, #FFF0CC 100%)',
  'linear-gradient(135deg, #FDECEA 0%, #F4A0A6 60%, #FDECEA 100%)',
  'linear-gradient(135deg, #C8E6FF 0%, #4AABFF 60%, #B0D8FF 100%)',
  'linear-gradient(135deg, #F5F0E8 0%, #DDD5C5 100%)',
  'linear-gradient(135deg, #FFF8CC 0%, #87CEEB 50%, #E0F0FF 100%)',
];

const accentColors = ['#1E90FF', '#FFD700', '#E63946', '#1E90FF', '#8B7355', '#87CEEB'];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="galerija" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #EDE5D8 0%, #E2D9CC 50%, #EDE5D8 100%)' }}>
      {/* Background texture */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-yellow-400/30 text-3xl select-none pointer-events-none">✦</div>
      <div className="absolute bottom-10 left-10 text-blue-300/30 text-2xl select-none pointer-events-none">★</div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 badge-gold text-xs uppercase tracking-widest">
              <span>◈</span>
              <span>Galerija</span>
              <span>◈</span>
            </div>
            <h2 className="text-section-heading font-extrabold tracking-tight">
              <span className="text-foreground">Atmosfera </span>
              <span className="text-gradient-warm">kafića</span>
            </h2>
            <div className="section-divider w-40 mt-3" />
          </div>
          <p className="text-muted-foreground text-sm max-w-xs md:text-right leading-relaxed">
            Fotografije će biti dostupne uskoro.<br />Zamenite placeholdere pravim slikama.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {placeholders.map((ph, index) => (
            <div
              key={ph.id}
              ref={(el) => { if (el) itemsRef.current[index] = el; }}
              className={`reveal reveal-hidden overflow-hidden rounded-2xl group cursor-pointer ${ph.span}`}
              style={{
                transitionDelay: `${index * 80}ms`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)',
                border: `1.5px solid ${accentColors[index]}22`,
              }}
            >
              <div
                className="w-full h-full min-h-[160px] md:min-h-[200px] img-placeholder relative overflow-hidden transition-transform duration-700 group-hover:scale-105"
                style={{ background: gradients[index], border: 'none' }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex flex-col items-center justify-center gap-2">
                  <span className="text-foreground/70 font-bold text-sm md:text-base text-center px-4">
                    {ph.label}
                  </span>
                  <span className="text-foreground/50 text-xs text-center px-4">
                    {ph.hint}
                  </span>
                </div>

                {/* Corner badge */}
                <div className="absolute top-3 left-3 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(255,255,255,0.75)', color: accentColors[index], border: `1px solid ${accentColors[index]}33` }}>
                  #{ph.id}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-3 right-3 text-sm opacity-40 select-none" style={{ color: accentColors[index] }}>✦</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-300" />
          <p className="text-muted-foreground text-xs text-center">
            📸 Fotografije iz kafića biće dodate uskoro. Pratite nas na Facebooku.
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-300" />
        </div>
      </div>
    </section>
  );
}