'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Početna', href: '#pocetna' },
  { label: 'Meni', href: '#meni' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Recenzije', href: '#recenzije' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'header-scrolled' :'bg-transparent'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#pocetna" className="flex items-center gap-2 group">
            <AppLogo
              size={36}
              iconName="SparklesIcon"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className={`text-sm font-semibold transition-colors duration-200 relative group ${
                  scrolled
                    ? 'text-muted-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link?.label}
                <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full ${scrolled ? 'bg-primary' : 'bg-secondary'}`} />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFE566 100%)', color: '#1C1917', boxShadow: '0 4px 16px rgba(255,215,0,0.35)' }}
            >
              <span>✦</span> Kontakt
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
              aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.95) 0%, rgba(10,60,120,0.97) 100%)', backdropFilter: 'blur(16px)' }}
          onClick={() => setMobileOpen(false)}
        >
          {/* Decorative stars in mobile menu */}
          <div className="absolute top-10 right-10 text-yellow-300/30 text-3xl select-none">✦</div>
          <div className="absolute bottom-10 left-10 text-white/20 text-2xl select-none">★</div>

          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={handleLinkClick}
              className="text-white text-2xl font-bold tracking-tight hover:text-secondary transition-colors relative group"
            >
              {link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleLinkClick}
            className="mt-4 px-8 py-3 rounded-full text-base font-bold hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFE566 100%)', color: '#1C1917', boxShadow: '0 4px 16px rgba(255,215,0,0.4)' }}
          >
            ✦ Kontakt
          </a>
        </div>
      )}
    </>
  );
}