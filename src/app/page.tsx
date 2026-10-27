import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Divider */}
      <div className="divider-wave mx-auto max-w-screen-xl px-5 md:px-10" />

      <MenuSection />

      {/* Divider */}
      <div className="divider-wave mx-auto max-w-screen-xl px-5 md:px-10" />

      <GallerySection />

      {/* Divider */}
      <div className="divider-wave mx-auto max-w-screen-xl px-5 md:px-10" />

      <ReviewsSection />

      {/* Divider */}
      <div className="divider-wave mx-auto max-w-screen-xl px-5 md:px-10" />

      <ContactSection />

      <Footer />
    </main>
  );
}