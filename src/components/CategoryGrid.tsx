'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  title: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    title: 'Ceramic Tableware',
    image: '/images/hero1.jpg',
    href: '/ceramic-tableware'
  },
  {
    title: 'Flatware & Cutlery',
    image: '/images/hero2.jpg',
    href: '/flatware'
  },
  {
    title: 'Kitchenware',
    image: '/images/hero1.jpg',
    href: '/kitchenware'
  },
  {
    title: 'Plasticware',
    image: '/images/hero2.jpg',
    href: '/plasticware'
  },
  {
    title: 'Opal Glass',
    image: '/images/hero1.jpg',
    href: '/opal-glass'
  },
  {
    title: 'Glassware',
    image: '/images/hero2.jpg',
    href: 'https://www.garboglass.com/'
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[#c4151c] text-xs font-bold uppercase tracking-widest block mb-2">
            Product Categories
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            WE ARE TABLEWARE MANUFACTURER
          </h2>
          <div className="w-16 h-1 bg-[#c4151c] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative h-[280px] rounded-lg overflow-hidden shadow-md bg-white border border-gray-200"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title & View More Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {cat.title}
                </h3>
                <Link
                  href={cat.href}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-red-300 hover:text-white transition-colors"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
