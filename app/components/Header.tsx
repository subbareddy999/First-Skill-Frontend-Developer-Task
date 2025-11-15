'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/80 text-white p-4 z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          StreamFlix
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Movies
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            TV Shows
          </Link>
        </div>
      </nav>
    </header>
  );
}
