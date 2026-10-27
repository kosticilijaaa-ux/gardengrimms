import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #1C2B3A 0%, #0F1E2D 60%, #1A2535 100%)', borderTop: '1.5px solid rgba(30,144,255,0.2)' }}>
      {/* Decorative top gradient line */}
      <div className="section-divider opacity-60" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Decorative stars */}
      <div className="absolute top-8 left-1/4 text-yellow-400/15 text-2xl select-none pointer-events-none">✦</div>
      <div className="absolute top-12 right-1/3 text-blue-400/15 text-xl select-none pointer-events-none">★</div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left: Brand + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AppLogo size={32} iconName="SparklesIcon" />
              <span className="font-extrabold text-xl tracking-tight text-white">
                Garden Grimms
              </span>
            </div>
            <div className="h-0.5 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #FFD700, #1E90FF, transparent)' }} />
            <p className="text-white/50 text-sm max-w-xs">
              Kafić u srcu Surdulice — Miloša Obilića 7
            </p>
            <p className="text-white/50 text-sm">☎ 063 7746617 

            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap gap-6">
            {[
            { label: 'Početna', href: '#pocetna' },
            { label: 'Meni', href: '#meni' },
            { label: 'Galerija', href: '#galerija' },
            { label: 'Recenzije', href: '#recenzije' },
            { label: 'Kontakt', href: '#kontakt' }]?.
            map((link) =>
            <a
              key={link?.href}
              href={link?.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors relative group">

                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            )}
          </div>

          {/* Right: Social + copyright */}
          <div className="flex flex-col gap-4 items-start lg:items-end">
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/gardengrimms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.3) 0%, rgba(30,144,255,0.15) 100%)', border: '1px solid rgba(30,144,255,0.3)' }}>

                <Icon name="GlobeAltIcon" size={16} />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gardengrimmscafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(225,48,108,0.3) 0%, rgba(247,119,55,0.2) 100%)', border: '1px solid rgba(225,48,108,0.3)' }}>

                <Icon name="CameraIcon" size={16} />
                Instagram
              </a>
            </div>
            <p className="text-xs text-white/30">
              © 2026 Garden Grimms · Sva prava zadržana
            </p>
          </div>
        </div>
      </div>
    </footer>);

}