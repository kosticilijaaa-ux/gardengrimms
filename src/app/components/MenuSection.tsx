'use client';

import React, { useState, useCallback } from 'react';

interface MenuItem {
  name: string;
  price: number;
}

interface MenuSubcategory {
  title: string;
  items: MenuItem[];
}

interface CarouselSlide {
  label: string;
  emoji: string;
  sublabel: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  icon: string;
  color: string;
  bgGradient: string;
  imageLabel: string;
  imageEmoji: string;
  slides: CarouselSlide[];
  items?: MenuItem[];
  subcategories?: MenuSubcategory[];
}

const menuData: MenuCategory[] = [
  {
    id: 'kafe',
    label: 'Kafe',
    emoji: '☕',
    icon: '✦',
    color: '#8B5E3C',
    bgGradient: 'linear-gradient(135deg, #6F4E37 0%, #C8A97E 50%, #F5DEB3 100%)',
    imageLabel: 'Kafa',
    imageEmoji: '☕',
    slides: [
      { label: 'Espresso', emoji: '☕', sublabel: 'Kafa', image: '/assets/images/1-1790157184715.jpg' },
      { label: 'Cappucino', emoji: '☕', sublabel: 'Kafa', image: '/assets/images/2-1790157182985.jpg' },
      { label: 'Nescafe', emoji: '☕', sublabel: 'Kafa', image: '/assets/images/3-1790157184728.jpg' },
    ],
    items: [
      { name: 'Espresso', price: 150 },
      { name: 'Espresso sa mlekom', price: 160 },
      { name: 'Cappucino', price: 180 },
      { name: 'Late macchiato', price: 220 },
      { name: 'Nescafe', price: 180 },
      { name: 'Domaća kafa', price: 140 },
      { name: 'Fredo', price: 200 },
      { name: 'Espresso + Baileys', price: 250 },
    ],
  },
  {
    id: 'voda',
    label: 'Voda',
    emoji: '💧',
    icon: '◈',
    color: '#1E90FF',
    bgGradient: 'linear-gradient(135deg, #1E90FF 0%, #87CEEB 50%, #E0F4FF 100%)',
    imageLabel: 'Voda',
    imageEmoji: '💧',
    slides: [
      { label: 'Heba flašica (0.25l)', emoji: '💧', sublabel: 'Slika ovde' },
      { label: 'Rosa (0.33l)', emoji: '💧', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Heba flašica (0.25l)', price: 130 },
      { name: 'Rosa (0.33l)', price: 140 },
    ],
  },
  {
    id: 'bezalkoholna',
    label: 'Bezalkoholna',
    emoji: '🥤',
    icon: '★',
    color: '#E63946',
    bgGradient: 'linear-gradient(135deg, #E63946 0%, #FF8C69 50%, #FFE4D6 100%)',
    imageLabel: 'Bezalkoholna pića',
    imageEmoji: '🥤',
    slides: [
      { label: 'Coca-Cola', emoji: '🥤', sublabel: 'Bezalkoholno', image: '/assets/images/4-1790157185705.jpg' },
      { label: 'Red Bull', emoji: '⚡', sublabel: 'Bezalkoholno', image: '/assets/images/5-1790157186212.jpg' },
      { label: 'Sveža limunada', emoji: '🍋', sublabel: 'Slika ovde' },
    ],
    subcategories: [
      {
        title: 'Gazirana pića',
        items: [
          { name: 'Coca-Cola', price: 200 },
          { name: 'Fanta', price: 200 },
          { name: 'Sprite', price: 200 },
          { name: 'Šveps', price: 220 },
          { name: 'Cocta', price: 200 },
          { name: 'Orangina', price: 280 },
        ],
      },
      {
        title: 'Negazirana pića & Sokovi',
        items: [
          { name: 'Next', price: 250 },
          { name: 'Cedevita', price: 150 },
          { name: 'Cedevita UP', price: 200 },
          { name: 'Milkshake', price: 240 },
        ],
      },
      {
        title: 'Energetska pića',
        items: [
          { name: 'Guarana', price: 200 },
          { name: 'Red Bull', price: 450 },
        ],
      },
      {
        title: 'Ceđeni i sveži sokovi',
        items: [
          { name: 'Sveža limunada', price: 220 },
          { name: 'Ceđena narandža', price: 300 },
          { name: 'Ceđeni miks', price: 350 },
          { name: 'Litto sirup – Malina', price: 200 },
          { name: 'Litto sirup – Zova', price: 200 },
          { name: 'Litto sirup – Višnja', price: 200 },
        ],
      },
    ],
  },
  {
    id: 'topli',
    label: 'Topli napici',
    emoji: '🍵',
    icon: '✦',
    color: '#D97706',
    bgGradient: 'linear-gradient(135deg, #92400E 0%, #D97706 50%, #FDE68A 100%)',
    imageLabel: 'Topli napici',
    imageEmoji: '🍵',
    slides: [
      { label: 'Kakao', emoji: '🍫', sublabel: 'Slika ovde' },
      { label: 'Topla čokolada', emoji: '🍵', sublabel: 'Slika ovde' },
      { label: 'Čaj', emoji: '🍵', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Kakao', price: 150 },
      { name: 'Topla čokolada', price: 200 },
      { name: 'Čaj', price: 120 },
      { name: 'Kuvano vino', price: 190 },
      { name: 'Med', price: 30 },
    ],
  },
  {
    id: 'zestoka',
    label: 'Žestoka pića',
    emoji: '🥃',
    icon: '◆',
    color: '#7C3AED',
    bgGradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #DDD6FE 100%)',
    imageLabel: 'Žestoka pića',
    imageEmoji: '🥃',
    slides: [
      { label: "Jack Daniel's", emoji: '🥃', sublabel: 'Slika ovde' },
      { label: 'Jameson', emoji: '🥃', sublabel: 'Slika ovde' },
      { label: 'Jägermeister', emoji: '🍶', sublabel: 'Slika ovde' },
    ],
    subcategories: [
      {
        title: 'Viski & Burbon',
        items: [
          { name: 'Four Roses', price: 250 },
          { name: 'Johnnie Walker', price: 200 },
          { name: 'J.W. Black Label', price: 350 },
          { name: "Ballantine's", price: 200 },
          { name: "Jack Daniel's", price: 280 },
          { name: 'Jameson', price: 220 },
        ],
      },
      {
        title: 'Rakije',
        items: [
          { name: 'Stara sokolova', price: 280 },
          { name: 'Viljamovka', price: 200 },
          { name: 'Šljivovica', price: 150 },
          { name: 'Dunja', price: 200 },
          { name: 'Lincura', price: 130 },
          { name: 'Crnogorska loza', price: 150 },
          { name: 'Tikveš loza', price: 170 },
          { name: 'Stomaklija', price: 150 },
        ],
      },
      {
        title: 'Likeri & Biljna pića',
        items: [
          { name: 'Gorki list (0.05l)', price: 200 },
          { name: 'Jägermeister', price: 200 },
        ],
      },
      {
        title: 'Džin, Vodka & Tekila',
        items: [
          { name: 'Beefeater gin', price: 180 },
          { name: 'Baltic vodka', price: 130 },
          { name: 'Tequila Olmeca', price: 180 },
        ],
      },
      {
        title: 'Ostalo',
        items: [
          { name: 'Vinjak Rubin 5', price: 200 },
          { name: 'Vinjak Rubin', price: 130 },
          { name: 'Ouzo', price: 150 },
          { name: 'Vermouth (0,05)', price: 150 },
        ],
      },
    ],
  },
  {
    id: 'pivo',
    label: 'Pivo',
    emoji: '🍺',
    icon: '★',
    color: '#D97706',
    bgGradient: 'linear-gradient(135deg, #92400E 0%, #F59E0B 50%, #FEF3C7 100%)',
    imageLabel: 'Pivo',
    imageEmoji: '🍺',
    slides: [
      { label: 'Heineken', emoji: '🍺', sublabel: 'Slika ovde' },
      { label: 'Stella Artois', emoji: '🍺', sublabel: 'Slika ovde' },
      { label: 'Zaječarsko', emoji: '🍺', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Zaječarsko', price: 180 },
      { name: 'Heineken (0,25l)', price: 260 },
      { name: 'Heineken bez alkohola', price: 180 },
      { name: 'Jelen', price: 180 },
      { name: 'Nikšićko svetlo', price: 230 },
      { name: 'Nikšićko tamno', price: 280 },
      { name: 'Bavaria (0,25l)', price: 250 },
      { name: 'Stella Artois', price: 330 },
      { name: 'Staropramen', price: 250 },
      { name: 'Madri', price: 260 },
    ],
  },
  {
    id: 'vino',
    label: 'Vino',
    emoji: '🍷',
    icon: '◈',
    color: '#9F1239',
    bgGradient: 'linear-gradient(135deg, #881337 0%, #BE123C 50%, #FFE4E6 100%)',
    imageLabel: 'Vino',
    imageEmoji: '🍷',
    slides: [
      { label: 'Aleksandria belo', emoji: '🥂', sublabel: 'Slika ovde' },
      { label: 'Aleksandria crno', emoji: '🍷', sublabel: 'Slika ovde' },
      { label: 'Šampanjac', emoji: '🍾', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Aleksandria belo (0.187l)', price: 450 },
      { name: 'Aleksandria crno (0.187l)', price: 450 },
      { name: 'Luda Mara belo (0.7l)', price: 2000 },
      { name: 'Luda Mara crno (0.7l)', price: 2000 },
      { name: 'Aspall (0.33l)', price: 300 },
      { name: 'Šampanjac (0.7l)', price: 2000 },
    ],
  },
  {
    id: 'kokteli',
    label: 'Kokteli',
    emoji: '🍹',
    icon: '✦',
    color: '#E63946',
    bgGradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 50%, #FCE7F3 100%)',
    imageLabel: 'Kokteli',
    imageEmoji: '🍹',
    slides: [
      { label: 'Spritz Aperol', emoji: '🍹', sublabel: 'Slika ovde' },
      { label: 'Blue Lagoon', emoji: '🍹', sublabel: 'Slika ovde' },
      { label: 'Negroni', emoji: '🍸', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Spritz Aperol', price: 600 },
      { name: 'Blue Lagoon', price: 600 },
      { name: 'Cosmopolitan', price: 600 },
      { name: 'Campari Juice', price: 600 },
      { name: 'Cuba Libre', price: 600 },
      { name: 'Negroni', price: 680 },
      { name: 'Pink Gin', price: 600 },
      { name: 'Gorki Spritz', price: 600 },
    ],
  },
  {
    id: 'dezert',
    label: 'Dezert',
    emoji: '🍨',
    icon: '★',
    color: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #9D174D 0%, #EC4899 50%, #FDF2F8 100%)',
    imageLabel: 'Sladoled',
    imageEmoji: '🍨',
    slides: [
      { label: 'Sladoled', emoji: '🍨', sublabel: 'Slika ovde' },
    ],
    items: [
      { name: 'Sladoled 50g', price: 120 },
    ],
  },
];

function MenuItemRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div
      className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-blue-50/60 transition-all duration-200 group border border-transparent hover:border-blue-100"
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
        <span className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors">
          {item.name}
        </span>
      </div>
      <span className="price-badge ml-4 shrink-0">
        {item.price} din.
      </span>
    </div>
  );
}

function CategoryCarousel({ category }: { category: MenuCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [animating, setAnimating] = useState(false);

  const slides = category.slides;
  const total = slides.length;

  const goTo = useCallback((idx: number, dir: 'left' | 'right') => {
    if (animating || total <= 1) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setAnimating(false);
      setDirection(null);
    }, 280);
  }, [animating, total]);

  const prev = () => goTo((currentSlide - 1 + total) % total, 'right');
  const next = () => goTo((currentSlide + 1) % total, 'left');

  const slide = slides[currentSlide];

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === 'left' ? '-18px' : '18px'}) scale(0.97)`
      : 'translateX(0) scale(1)',
    transition: 'opacity 0.28s ease, transform 0.28s ease',
  };

  return (
    <div
      className="w-full lg:w-72 xl:w-80 shrink-0 rounded-2xl overflow-hidden shadow-xl relative select-none"
      style={{ height: '340px', border: '1.5px solid rgba(255,255,255,0.5)' }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: category.bgGradient, opacity: 0.88 }}
      />

      {/* Decorative circles */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20" style={{ background: 'rgba(255,255,255,0.4)' }} />
      <div className="absolute bottom-14 left-4 w-10 h-10 rounded-full opacity-15" style={{ background: 'rgba(255,255,255,0.5)' }} />
      <div className="absolute top-1/2 left-3 w-6 h-6 rounded-full opacity-10" style={{ background: 'rgba(255,255,255,0.6)' }} />

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4" style={slideStyle}>
        {slide.image ? (
          <img
            src={slide.image}
            alt={slide.label}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        ) : null}
        <div className="relative z-10 flex flex-col items-center">
          {!slide.image && (
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl mb-3"
              style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.4)' }}
            >
              {slide.emoji}
            </div>
          )}
          {!slide.image && (
            <>
              <p className="text-white font-extrabold text-lg drop-shadow-md text-center leading-tight">{slide.label}</p>
              <p className="text-white/65 text-xs mt-1 font-medium">{slide.sublabel}</p>
              <div className="flex gap-1.5 mt-3">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Left arrow */}
      {total > 1 && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.35)' }}
          aria-label="Prethodna slika"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {total > 1 && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.35)' }}
          aria-label="Sledeća slika"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Bottom strip: label + dots */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between"
        style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)' }}
      >
        <span className="text-white text-sm font-bold">{category.imageLabel}</span>
        {total > 1 && (
          <div className="flex gap-1.5 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentSlide ? 'left' : 'right')}
                className="transition-all duration-200"
                style={{
                  width: i === currentSlide ? '16px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === currentSlide ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)',
                }}
                aria-label={`Slajd ${i + 1}`}
              />
            ))}
          </div>
        )}
        {total === 1 && <span className="text-white/60 text-xs">placeholder</span>}
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('kafe');

  const activeCategory = menuData.find((c) => c.id === activeTab)!;

  return (
    <section id="meni" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #EBF5FF 0%, #F5F0E8 40%, #FAF6EF 100%)' }}>
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 badge-gold text-xs uppercase tracking-widest">
            <span>✦</span>
            <span>Naš meni</span>
            <span>✦</span>
          </div>
          <h2 className="text-section-heading font-extrabold tracking-tight mb-4">
            <span className="text-foreground">Šta </span>
            <span className="text-gradient-blue">nudimo</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto text-base">
            Bogat izbor napitaka i deserata za svaki ukus i svaku prigodu.
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-10">
          {menuData.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 border-2 ${
                  isActive
                    ? 'menu-cat-card-active text-white border-transparent shadow-lg scale-105'
                    : 'menu-cat-card text-muted-foreground border-transparent hover:scale-105'
                }`}
              >
                <span className="text-xl leading-none">{cat.emoji}</span>
                <span className={`text-center leading-tight ${isActive ? 'text-white' : 'text-foreground'}`}>{cat.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 shadow-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu content + carousel layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Swipeable carousel — left side on desktop */}
          <CategoryCarousel key={activeCategory.id} category={activeCategory} />

          {/* Menu content card — right side */}
          <div className="flex-1 min-w-0 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #FFFFFF 0%, #FAF6EF 100%)', boxShadow: '0 8px 40px rgba(30,144,255,0.1), 0 2px 8px rgba(0,0,0,0.06)', border: '1.5px solid rgba(30,144,255,0.12)' }}>
            {/* Category header */}
            <div className="relative px-6 md:px-10 py-7 border-b border-blue-50 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(255,215,0,0.08) 50%, rgba(230,57,70,0.05) 100%)' }}>
              {/* Decorative corner stars */}
              <div className="absolute top-3 right-4 text-yellow-300 text-lg opacity-60 select-none">✦ ✦</div>
              <div className="absolute bottom-3 right-16 text-blue-200 text-sm opacity-50 select-none">◆</div>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                  style={{ background: `linear-gradient(135deg, ${activeCategory.color}22 0%, ${activeCategory.color}44 100%)`, border: `1.5px solid ${activeCategory.color}33` }}
                >
                  {activeCategory.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: activeCategory.color }}>{activeCategory.icon}</span>
                    <h3 className="text-xl font-extrabold text-foreground">
                      {activeCategory.label}
                    </h3>
                  </div>
                  {activeCategory.id === 'zestoka' && (
                    <p className="text-xs text-muted-foreground">Porcija 0,03l ako nije drugačije naznačeno</p>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3].map(i => (
                      <span key={i} className="w-1 h-1 rounded-full bg-yellow-400 opacity-70" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 md:px-8 py-6">
              {/* Simple items */}
              {activeCategory.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {activeCategory.items.map((item, idx) => (
                    <MenuItemRow key={item.name} item={item} index={idx} />
                  ))}
                </div>
              )}

              {/* Subcategories */}
              {activeCategory.subcategories && (
                <div className="space-y-8">
                  {activeCategory.subcategories.map((sub) => (
                    <div key={sub.title}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.1) 0%, rgba(255,215,0,0.1) 100%)', border: '1px solid rgba(230,57,70,0.2)', color: '#E63946' }}>
                          <span>◆</span>
                          <span>{sub.title}</span>
                        </div>
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(230,57,70,0.3), transparent)' }} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {sub.items.map((item, idx) => (
                          <MenuItemRow key={item.name} item={item} index={idx} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-200" />
          <p className="text-muted-foreground text-xs">
            Sve cene su izražene u dinarima (RSD) i uključuju PDV.
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-200" />
        </div>
      </div>
    </section>
  );
}