'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  ArrowUpIcon
} from './icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-gray-400 font-sans pt-16 pb-8 border-t-4 border-[#c4151c]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Contact */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-5 pb-2 border-b border-gray-800">
              Wholesale Tableware Supply
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-[#c4151c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-300 font-semibold block">Address:</span>
                  <span>Promise Commercial Mansion, No.282, Yingbin Road, Guangzhou, China</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 text-[#c4151c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-300 font-semibold block">Phone:</span>
                  <a href="tel:+862084791380" className="hover:text-white transition-colors">
                    +86 20 8479 1380
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-4 h-4 text-[#c4151c] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-300 font-semibold block">Email:</span>
                  <a href="mailto:sale@garbotableware.com" className="hover:text-white transition-colors">
                    sale@garbotableware.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2: About Us Links */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-5 pb-2 border-b border-gray-800">
              About Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-[#c4151c] transition-colors">
                  Garbo Tableware Overview
                </Link>
              </li>
              <li>
                <Link href="/about-us/company-profile" className="hover:text-[#c4151c] transition-colors">
                  Company Culture & Profile
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#c4151c] transition-colors">
                  Supplier OEM/ODM Services
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-[#c4151c] transition-colors">
                  Factory & Showroom Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Latest Catalog */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-5 pb-2 border-b border-gray-800">
              Latest Catalog
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/download" className="hover:text-[#c4151c] transition-colors">
                  Tableware Catalog 2026
                </Link>
              </li>
              <li>
                <Link href="/opal-glass" className="hover:text-[#c4151c] transition-colors">
                  Opal Glass Factory New Items
                </Link>
              </li>
              <li>
                <Link href="/flatware" className="hover:text-[#c4151c] transition-colors">
                  Buy Cutlery in Bulk
                </Link>
              </li>
              <li>
                <Link href="/kitchenware" className="hover:text-[#c4151c] transition-colors">
                  Kitchenware Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-5 pb-2 border-b border-gray-800">
              Newsletter
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Subscribe to receive latest factory catalog and wholesale offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              className="flex flex-col gap-2 mb-6"
            >
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c4151c]"
              />
              <button
                type="submit"
                className="bg-[#c4151c] hover:bg-red-700 text-white font-bold text-xs py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/tablewarefactory" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#c4151c] text-white transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/Garbo_Tableware" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#c4151c] text-white transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@GarboTableware" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#c4151c] text-white transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/garbotableware/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-[#c4151c] text-white transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 1993-2026 Garbo Tableware, All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-1 hover:text-[#c4151c] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
