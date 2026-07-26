'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SearchIcon,
  GlobeIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon
} from './icons';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { title: 'Home', href: '/' },
    {
      title: 'Products',
      href: '/products',
      children: [
        {
          title: 'Ceramic',
          href: '/ceramic-tableware',
          children: [
            { title: 'Ceramic Cup', href: '/ceramic-cup' },
            { title: 'Ceramic Bowl', href: '/ceramic-bowl' },
            { title: 'Ceramic Plate', href: '/ceramic-plate' },
            { title: 'Dinnerware Sets', href: '/dinnerware-sets' }
          ]
        },
        {
          title: 'Kitchenware',
          href: '/kitchenware',
          children: [
            { title: 'Cooking Utensils', href: '/kitchen-tools' },
            { title: 'Kitchen Knife Set', href: '/kitchen-knife-set' },
            { title: 'Wine Accessories', href: '/wine-accessories' }
          ]
        },
        {
          title: 'Plasticware',
          href: '/plasticware',
          children: [
            { title: 'Plastic Cup', href: '/plastic-cup' },
            { title: 'Plastic Bowl', href: '/plastic-bowl' },
            { title: 'Plastic Food Container', href: '/plastic-food-container' }
          ]
        },
        {
          title: 'Flatware',
          href: '/flatware',
          children: [
            { title: 'Flatware Sets', href: '/flatware-sets' },
            { title: 'Stainless Steel Fork', href: '/stainless-steel-fork' },
            { title: 'Stainless Steel Knife', href: '/stainless-steel-knife' },
            { title: 'Stainless Steel Spoon', href: '/stainless-steel-spoon' }
          ]
        },
        { title: 'Opal Glass', href: '/opal-glass' }
      ]
    },
    {
      title: 'Services',
      href: '/services',
      children: [{ title: 'Download', href: '/download' }]
    },
    {
      title: 'Videos',
      href: '/videos',
      children: [
        { title: 'Product Video', href: '/product-video' },
        { title: 'Factory Video', href: '/factory-video' },
        { title: 'Showroom Video', href: '/showroom-video' }
      ]
    },
    {
      title: 'About Us',
      href: '/about-us',
      children: [
        { title: 'Company Profile', href: '/about-us/company-profile' },
        { title: 'Research & Design', href: '/about-us/research-design' }
      ]
    },
    {
      title: 'News',
      href: '/news',
      children: [
        { title: 'Tableware Articles', href: '/tableware-acticles' },
        { title: 'Company News', href: '/company-news' }
      ]
    },
    { title: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <header className="w-full relative z-50 font-sans">
      {/* Top bar */}
      <div className="bg-[#1f1f1f] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a
              href="mailto:sale@garbotableware.com"
              className="flex items-center gap-1 hover:text-[#c4151c] transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-[#c4151c]" />
              <span>sale@garbotableware.com</span>
            </a>
            <span className="flex items-center gap-1">
              <PhoneIcon className="w-3.5 h-3.5 text-[#c4151c]" />
              <span>+86 20 8479 1380</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/tablewarefactory" target="_blank" rel="noreferrer" className="hover:text-[#c4151c] transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com/Garbo_Tableware" target="_blank" rel="noreferrer" className="hover:text-[#c4151c] transition-colors">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/garbo-glassware/" target="_blank" rel="noreferrer" className="hover:text-[#c4151c] transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/garbotableware/" target="_blank" rel="noreferrer" className="hover:text-[#c4151c] transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.youtube.com/@GarboFlatware" target="_blank" rel="noreferrer" className="hover:text-[#c4151c] transition-colors">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Search & Language triggers */}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-700">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1 hover:text-[#c4151c] transition-colors"
                title="Search"
              >
                <SearchIcon className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsLangOpen(true)}
                className="flex items-center gap-1 hover:text-[#c4151c] transition-colors"
              >
                <GlobeIcon className="w-3.5 h-3.5 text-[#c4151c]" />
                <span>Language</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
                GARBO<span className="text-[#c4151c] font-light ml-1">TABLEWARE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group px-3 py-2">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-[#c4151c] transition-colors flex items-center gap-1 py-1"
                >
                  {item.title}
                  {item.children && <ChevronDownIcon className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-b border border-gray-100 min-w-[200px] py-2 z-50">
                    {item.children.map((child) => (
                      <div key={child.title} className="relative group/sub px-4 py-1.5 hover:bg-red-50">
                        <Link
                          href={child.href}
                          className="text-xs text-gray-700 hover:text-[#c4151c] font-medium block flex justify-between items-center"
                        >
                          {child.title}
                          {child.children && <ChevronDownIcon className="w-3 h-3 -rotate-90" />}
                        </Link>

                        {child.children && (
                          <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded border border-gray-100 min-w-[180px] py-2">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.title}
                                href={subChild.href}
                                className="text-xs text-gray-600 hover:text-[#c4151c] hover:bg-red-50 px-4 py-1.5 block"
                              >
                                {subChild.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#c4151c]"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="py-1">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-[#c4151c] block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Search Tableware Catalog</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchOpen(false);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Search ceramic, flatware, kitchenware..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#c4151c]"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#c4151c] hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-semibold flex items-center gap-1"
              >
                <SearchIcon className="w-4 h-4" />
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Language Modal */}
      {isLangOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setIsLangOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GlobeIcon className="w-5 h-5 text-[#c4151c]" />
              Select Language
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['English', 'Spanish', 'French', 'German', 'Russian', 'Arabic', 'Portuguese', 'Japanese'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setIsLangOpen(false)}
                  className="text-left px-3 py-2 border rounded hover:bg-red-50 hover:border-[#c4151c] hover:text-[#c4151c] transition-colors"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
