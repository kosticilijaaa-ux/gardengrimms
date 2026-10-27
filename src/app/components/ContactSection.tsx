'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #EBF5FF 0%, #DAEEFF 40%, #EBF5FF 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-blue-300/25 text-3xl select-none pointer-events-none">◈</div>
      <div className="absolute bottom-10 right-10 text-yellow-400/25 text-2xl select-none pointer-events-none">✦</div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 badge-gold text-xs uppercase tracking-widest">
            <span>◈</span>
            <span>Lokacija & Kontakt</span>
            <span>◈</span>
          </div>
          <h2 className="text-section-heading font-extrabold tracking-tight mb-4">
            <span className="text-foreground">Pronađite </span>
            <span className="text-gradient-blue">nas</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto text-base">
            Posetite nas u Surdulici ili nas kontaktirajte za više informacija.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📍', label: 'Adresa', value: 'Miloša Obilića 7, Surdulica', href: 'https://maps.google.com/?q=Miloša+Obilića+7,+Surdulica', color: '#E63946', gradFrom: '#FFF5F5', gradTo: '#FDECEA' },
              { icon: '📞', label: 'Telefon', value: '063 7746617', href: 'tel:+381637746617', color: '#1E90FF', gradFrom: '#EBF5FF', gradTo: '#DAEEFF' },
              { icon: '🕐', label: 'Radno vreme', value: 'Radnim danima 7:30–00:00 | Vikend 7:30–01:00', href: undefined, color: '#D97706', gradFrom: '#FFFBEB', gradTo: '#FEF3C7' },
            ]?.map((info) => (
              <div
                key={info?.label}
                className="contact-card-fancy rounded-2xl p-5"
                style={{ background: `linear-gradient(145deg, ${info?.gradFrom} 0%, ${info?.gradTo} 100%)`, border: `1.5px solid ${info?.color}22` }}
              >
                {/* Top accent */}
                <div className="h-0.5 rounded-full mb-3" style={{ background: `linear-gradient(90deg, ${info?.color}, transparent)` }} />
                <div className="text-2xl mb-2">{info?.icon}</div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: info?.color }}>{info?.label}</p>
                {info?.href ? (
                  <a href={info?.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    {info?.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-foreground">{info?.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(30,144,255,0.12), 0 2px 8px rgba(0,0,0,0.06)', border: '1.5px solid rgba(30,144,255,0.15)' }}>
            <iframe
              title="Garden Grimms lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.5!2d22.1!3d42.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sMilo%C5%A1a+Obili%C4%87a+7%2C+Surdulica!5e0!3m2!1ssr!2srs!4v1000000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: 'linear-gradient(145deg, #EBF5FF 0%, #DAEEFF 100%)', border: '1.5px solid rgba(30,144,255,0.2)', boxShadow: '0 4px 16px rgba(30,144,255,0.1)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #4AABFF 100%)' }}>
                f
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">Pratite nas na Facebooku</p>
                <p className="text-xs text-muted-foreground">@gardengrimms</p>
              </div>
              <a
                href="https://www.facebook.com/gardengrimms/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-bold text-white hover:opacity-90 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #4AABFF 100%)', boxShadow: '0 4px 12px rgba(30,144,255,0.3)' }}
              >
                Poseti
              </a>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: 'linear-gradient(145deg, #FFF5F5 0%, #FDECEA 100%)', border: '1.5px solid rgba(230,57,70,0.15)', boxShadow: '0 4px 16px rgba(230,57,70,0.08)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)' }}>
                IG
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">Pratite nas na Instagramu</p>
                <p className="text-xs text-muted-foreground">@gardengrimmscafe</p>
              </div>
              <a
                href="https://www.instagram.com/gardengrimmscafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-bold text-white hover:opacity-90 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)', boxShadow: '0 4px 12px rgba(225,48,108,0.3)' }}
              >
                Poseti
              </a>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: 'linear-gradient(145deg, #FFF5F5 0%, #FDECEA 100%)', border: '1.5px solid rgba(230,57,70,0.15)', boxShadow: '0 4px 16px rgba(230,57,70,0.08)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md" style={{ background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)' }}>
                IG
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">Sajt dizajnirao</p>
                <p className="text-xs text-muted-foreground">@builtbyilija</p>
              </div>
              <a
                href="https://www.instagram.com/builtbyilija"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-bold text-white hover:opacity-90 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)', boxShadow: '0 4px 12px rgba(225,48,108,0.3)' }}
              >
                Poseti
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}