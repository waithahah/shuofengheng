'use client';

import React from 'react';
import Link from 'next/link';

interface Article {
  day: string;
  month: string;
  title: string;
  excerpt: string;
  link: string;
}

const articles: Article[] = [
  {
    day: '20',
    month: '07',
    title: 'Top 5 tableware from China to Brazil market',
    excerpt:
      'As a B2B home goods supplier, achieving a breakthrough in market share in Brazil requires developing and producing targeted tableware by taking into account local consumer preferences...',
    link: '/tableware-acticles/top-5-tableware-from-china-to-brazil-market'
  },
  {
    day: '09',
    month: '07',
    title: 'Ceramic cups & Glass cups: Which one is the best companion for daily drinking water?',
    excerpt:
      'If I were to recommend just one least error-prone option, I would say: Keep two cups at home, one made of ceramic for hot tea and coffee, and one glass cup for cold drinks...',
    link: '/tableware-acticles/ceramic-cups-glass-cups-which-one-is-the-best-companion'
  },
  {
    day: '07',
    month: '07',
    title: '2026 Spain Imported Tableware Top 5 Bestsellers',
    excerpt:
      'For global tableware exporters and local Spanish importers, matching product portfolios to HoReCa, supermarket, and home retail scenarios is key to mitigating risk...',
    link: '/tableware-acticles/2026-spain-imported-tableware-top-5-bestsellers'
  }
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-white font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#c4151c] text-xs font-bold uppercase tracking-widest block mb-2">
              Industry Insights
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
              Tableware News & Articles
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#c4151c] hover:underline uppercase tracking-wider hidden sm:block"
          >
            View All News →
          </Link>
        </div>

        {/* 3 News Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-md hover:border-[#c4151c] transition-all"
            >
              {/* Date badge */}
              <div className="flex-shrink-0 bg-[#c4151c] text-white rounded-lg p-3 w-14 h-16 flex flex-col items-center justify-center font-bold text-center">
                <span className="text-lg leading-none">{item.day}</span>
                <span className="text-[10px] uppercase opacity-90 leading-tight mt-1">
                  {item.month}
                </span>
              </div>

              {/* Text info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 hover:text-[#c4151c] transition-colors line-clamp-2 mb-2">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <Link
                  href={item.link}
                  className="mt-3 text-[11px] font-bold text-[#c4151c] hover:underline uppercase tracking-wider block"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
