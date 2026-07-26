'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: '139th Canton Fair Tableware Exhibition',
    subtitle: 'Discover top OEM & ODM custom dinnerware and kitchenware from China',
    image: '/images/hero1.jpg',
    link: '/opal-glass'
  },
  {
    id: 2,
    title: 'China Ceramic Dinnerware Manufacturer',
    subtitle: 'High quality color glazed stoneware, porcelain plates & tea sets',
    image: '/images/hero2.jpg',
    link: '/ceramic-tableware'
  },
  {
    id: 3,
    title: 'Opal Dinner Sets & Flatware Wholesale',
    subtitle: 'Factory price for wholesalers, distributors, and global importers',
    image: '/images/hero1.jpg',
    link: '/opal-glass'
  },
  {
    id: 4,
    title: 'Complete Kitchenware & Stainless Steel Cutlery',
    subtitle: 'Explore over 100,000 tableware product choices',
    image: '/images/hero2.jpg',
    link: '/kitchenware'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center brightness-75 scale-105 transition-transform duration-10000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full text-white">
              <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-left duration-700">
                <span className="inline-block px-3 py-1 bg-[#c4151c] text-xs font-bold uppercase tracking-wider rounded">
                  Garbo Tableware Factory
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="pt-2">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center gap-2 bg-[#c4151c] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded text-sm transition-all shadow-lg hover:shadow-red-900/50"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#c4151c] text-white flex items-center justify-center backdrop-blur transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#c4151c] text-white flex items-center justify-center backdrop-blur transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#c4151c]' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
