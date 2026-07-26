'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Colored inside wall ceramic coffee drinking mug 15oz factory wholesale stoneware mugs',
    category: 'Ceramic Mug',
    image: '/images/hero1.jpg',
    link: '/ceramic-mug/colored-inside-wall-ceramic-coffee-drinking-mug-15oz'
  },
  {
    id: '2',
    title: 'Wholesale color glazed dark green 10.5 inch serving plate ceramic stoneware',
    category: 'Ceramic Plate',
    image: '/images/hero2.jpg',
    link: '/ceramic-plate/wholesale-color-glazed-dark-green-10.5-inch-serving-plate'
  },
  {
    id: '3',
    title: 'In Stock Set of Wine Opener Aerator Stopper And Storage Base from China Supplier',
    category: 'Wine Accessories',
    image: '/images/hero1.jpg',
    link: '/wine-accessories/in-stock-set-of-wine-opener-aerator-stopper'
  },
  {
    id: '4',
    title: 'High quality 201ss long handle spoon mirror polish soup ladle set',
    category: 'Kitchen Tools',
    image: '/images/hero2.jpg',
    link: '/kitchen-tools/high-quality-201ss-long-handle-spoon'
  },
  {
    id: '5',
    title: 'Cheap and lightweight 11oz Eco Friendly Wheat Straw Biodegradable Plastic Cup Mug',
    category: 'Plastic Cup',
    image: '/images/hero1.jpg',
    link: '/plastic-cup/cheap-and-lightweight-11oz-eco-friendly-wheat-straw'
  },
  {
    id: '6',
    title: 'Garbo new Stainless Steel Instant Noodle Bowl lunch box With Handle and lid',
    category: 'Plastic Bowl',
    image: '/images/hero2.jpg',
    link: '/plastic-bowl/garbo-new-stainless-steel-instant-noodle-bowl'
  },
  {
    id: '7',
    title: 'Luxury 4-Piece 18/10 Stainless Steel Cutlery Set For Hotel Home Serving Utensil Set',
    category: 'Flatware Sets',
    image: '/images/hero1.jpg',
    link: '/flatware-sets/luxury-4-piece-18-10-stainless-steel-cutlery-set'
  },
  {
    id: '8',
    title: '20 pieces round opal dinnerware bowls set for kitchen wholesale',
    category: 'Opal Glass',
    image: '/images/hero2.jpg',
    link: '/opal-glass/20-pieces-round-opal-dinnerware-bowls-set'
  }
];

export default function TopProducts() {
  return (
    <section className="py-16 bg-gray-50 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#c4151c] text-xs font-bold uppercase tracking-widest block mb-2">
            Top Rated Selection
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Wholesale Top Ranking Tableware
          </h2>
          <div className="w-16 h-1 bg-[#c4151c] mx-auto mt-4 rounded-full" />
        </div>

        {/* 8 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md hover:border-[#c4151c] transition-all flex flex-col justify-between"
            >
              <div className="relative h-[220px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#c4151c] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-xs font-semibold text-gray-800 group-hover:text-[#c4151c] transition-colors line-clamp-2 leading-snug mb-3">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="mt-auto text-xs font-bold text-[#c4151c] hover:underline flex items-center gap-1"
                >
                  Inquire Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
