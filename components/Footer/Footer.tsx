// components/Footer.tsx
'use client'

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-blue-900 text-white py-6">
      {/* Copy & Credit */}
      <div className="max-w-4xl mx-auto text-center space-y-1">
        <p>Copyright © 2025 | All rights reserved</p>
        <p>
          Designed by{' '}
          <Link href="https://your-portfolio.com" target="_blank" className="text-teal-400 hover:underline">
            Josephine Shobande
          </Link>
        </p>
      </div>

      {/* Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
      >
        <ArrowUpIcon className="h-6 w-6 text-teal-600" />
      </button>
    </footer>
  );
}
