import { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Background Image with Optimization */}
      <Image
        src={`${imageBaseUrl}${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority // Load this image first
        className="object-cover"
      />

      {/* Dark Gradient Overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-10 md:bottom-20 left-4 md:left-10 text-white z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 shadow-lg">
          {movie.title}
        </h1>
        <p className="max-w-md text-sm md:text-lg text-gray-200 mb-6 line-clamp-3">
          {movie.overview}
        </p>
        <Link
          href={`/movie/${movie.id}`}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md text-lg transition-colors"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
