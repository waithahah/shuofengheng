'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const factoryImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero1.jpg'
];

export default function AboutSection() {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % factoryImages.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + factoryImages.length) % factoryImages.length);

  return (
    <section className="py-16 bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <div>
              <span className="text-[#c4151c] text-xs font-bold uppercase tracking-widest block mb-2">
                About Garbo Tableware
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Tableware Industry Supply Chain Master - Better Tableware Better Life
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Garbo Tableware has more than 30 years of experience in tableware manufacturing. We are confident that our customer services and sales staff are well trained to serve our customers with great care and attention.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Garbo Tableware has a wide range of tableware including glassware, ceramic tableware, flatware, kitchenware, plasticware and opal glassware. Nearly 100,000 different items are available for choices of wholesale customers. With reliable quality and complete variety, we own tableware factories and have good cooperation with many other tableware manufacturers. It absolutely allows us to offer you the best price.
            </p>

            {/* Navigation buttons for image slider */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prevImg}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-colors flex items-center justify-center text-gray-700"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={nextImg}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#c4151c] hover:bg-[#c4151c] hover:text-white transition-colors flex items-center justify-center text-gray-700"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="relative h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src={factoryImages[currentImg]}
              alt="Garbo Tableware Factory and Showroom"
              fill
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded backdrop-blur">
              Factory & Showroom View ({currentImg + 1} / {factoryImages.length})
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
