import { MovieDetail } from '@/lib/types';
import Image from 'next/image';

interface DetailPageProps {
  params: {
    id: string;
  };
}

async function getMovieDetail(id: string): Promise<MovieDetail> {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}`;

  const res = await fetch(`${url}?api_key=${apiKey}&append_to_response=videos`);

  if (!res.ok) {
    throw new Error('Failed to fetch movie details');
  }

  const data = await res.json();
  return data as MovieDetail;
}

export default async function MovieDetailPage({ params }: DetailPageProps) {
  const movie = await getMovieDetail(params.id);
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const backdropBaseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[50vh]">
        <Image
          src={`${backdropBaseUrl}${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8 relative -mt-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-3">
            <Image
              src={`${posterBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="md:col-span-9 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{movie.title}</h1>
            <p className="text-lg text-gray-400 mb-4">{movie.status} • {movie.release_date}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map(genre => (
                <span key={genre.id} className="bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-lg text-gray-300 mb-6">
              {movie.overview}
            </p>

            <div className="flex gap-8">
              <div>
                <span className="text-gray-400 block">Rating</span>
                <span className="text-2xl font-bold">{movie.vote_average.toFixed(1)} / 10</span>
              </div>
              <div>
                <span className="text-gray-400 block">Runtime</span>
                <span className="text-2xl font-bold">{movie.runtime} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
