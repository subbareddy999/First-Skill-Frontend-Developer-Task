'use client';

import { Movie } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    // Link to the dynamic movie detail page
    <Link href={`/movie/${movie.id}`} className="flex-shrink-0 w-40 md:w-48">
      <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={`${posterBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="object-cover w-full h-auto"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
          <h4 className="text-sm font-bold text-white truncate">
            {movie.title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-white">{categoryTitle}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
