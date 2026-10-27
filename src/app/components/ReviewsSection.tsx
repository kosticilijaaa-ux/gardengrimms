'use client';

import React, { useEffect, useRef } from 'react';

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const reviews: Review[] = [
  {
    name: 'Milica Jovanović',
    rating: 5,
    date: 'Avgust 2026',
    text: 'Odličan kafić sa prijatnom atmosferom. Kafa je izvrsna, osoblje ljubazno i uvek nasmejano. Definitivno ću se vratiti!',
    initials: 'MJ',
    color: '#1E90FF',
    gradientFrom: '#EBF5FF',
    gradientTo: '#DAEEFF',
  },
  {
    name: 'Stefan Nikolić',
    rating: 5,
    date: 'Jul 2026',
    text: 'Prelepa bašta, savršena za letnje večeri. Kokteli su odlični, posebno Aperol Spritz. Preporučujem svima!',
    initials: 'SN',
    color: '#E63946',
    gradientFrom: '#FFF5F5',
    gradientTo: '#FDECEA',
  },
  {
    name: 'Ana Petrović',
    rating: 4,
    date: 'Jun 2026',
    text: 'Mirno mesto za opuštanje, cene su pristupačne za ponudu koju nude. Domaća kafa je baš kao kod bake — topla i mirisna.',
    initials: 'AP',
    color: '#D97706',
    gradientFrom: '#FFFBEB',
    gradientTo: '#FEF3C7',
  },
  {
    name: 'Marko Đorđević',
    rating: 5,
    date: 'Maj 2026',
    text: 'Najlepši kafić u Surdulici. Uvek čist, uredjen i ugodan. Osoblje zna šta radi — preporučujem svim posetaocima grada.',
    initials: 'MĐ',
    color: '#1E90FF',
    gradientFrom: '#EBF5FF',
    gradientTo: '#DAEEFF',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'star-filled' : 'text-border'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="recenzije" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #FAF6EF 0%, #F0EAE0 50%, #FAF6EF 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(50%, 50%)' }} />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Decorative stars */}
      <div className="absolute top-12 right-12 text-yellow-400/25 text-4xl select-none pointer-events-none">★</div>
      <div className="absolute bottom-12 left-12 text-blue-300/25 text-3xl select-none pointer-events-none">✦</div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 badge-gold text-xs uppercase tracking-widest">
            <span>★</span>
            <span>Recenzije</span>
            <span>★</span>
          </div>
          <h2 className="text-section-heading font-extrabold tracking-tight mb-4">
            <span className="text-foreground">Šta kažu </span>
            <span className="text-gradient-blue">naši gosti</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-8" />

          {/* Overall rating display */}
          <div className="inline-flex flex-col items-center gap-3 rounded-3xl px-10 py-7 mt-2" style={{ background: 'linear-gradient(145deg, #FFFFFF 0%, #EBF5FF 100%)', boxShadow: '0 8px 32px rgba(30,144,255,0.12), 0 2px 8px rgba(0,0,0,0.06)', border: '1.5px solid rgba(30,144,255,0.15)' }}>
            <div className="flex items-end gap-3">
              <span className="text-6xl font-extrabold tracking-tighter text-gradient-blue">4.6</span>
              <div className="flex flex-col items-start pb-2 gap-1">
                <StarRating rating={5} />
                <span className="text-xs text-muted-foreground font-medium">od 5 zvezdica</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm font-semibold text-foreground">269 recenzija</span>
              <span className="text-xs text-muted-foreground">na Google Maps</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="reveal reveal-hidden review-card-fancy rounded-2xl p-6"
              style={{
                transitionDelay: `${index * 80}ms`,
                background: `linear-gradient(145deg, #FFFFFF 0%, ${review.gradientFrom} 100%)`,
              }}
            >
              {/* Top accent line */}
              <div className="h-0.5 rounded-full mb-5" style={{ background: `linear-gradient(90deg, ${review.color}, transparent)` }} />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${review.color} 0%, ${review.color}BB 100%)` }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">Google</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.text}
              </p>

              {/* Quote decoration */}
              <div className="mt-4 flex justify-end">
                <span className="text-2xl font-serif opacity-10 select-none" style={{ color: review.color }}>"</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=Miloša+Obilića+7,+Surdulica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #4AABFF 100%)', color: '#FFFFFF', boxShadow: '0 6px 24px rgba(30,144,255,0.3)' }}
          >
            <span>★</span> Pogledaj sve recenzije na Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}