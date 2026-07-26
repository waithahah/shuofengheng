import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoryGrid from '@/components/CategoryGrid';
import AboutSection from '@/components/AboutSection';
import TopProducts from '@/components/TopProducts';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Tableware Manufacturer - Garbo Tableware | Custom Wholesale Dinnerware & Kitchenware",
  description: "Custom Wholesale dinnerware and kitchenware from factory for your tableware import business. Tableware Supplier China - Garbo Tableware Manufacturer has the best OEM & ODM service and factory price.",
  keywords: "tableware manufacturer, tableware supplier China, custom dinnerware manufacturer, Kitchenware Manufacturer"
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#c4151c] selection:text-white">
      <Header />
      <HeroBanner />
      <CategoryGrid />
      <AboutSection />
      <TopProducts />
      <NewsSection />
      <Footer />
    </main>
  );
}
