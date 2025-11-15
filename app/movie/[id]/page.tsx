import { Movie } from '@/lib/types';

async function getTrendingMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;

  console.log('TMDB_API_KEY read by server:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND');

  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not defined in .env.local');
  }

  const url = 'https://api.themoviedb.org/3/trending/movie/week';

  try {
    const res = await fetch(`${url}?api_key=${apiKey}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      // This will now show the status from TMDB (e.g., 401)
      console.error('Failed to fetch trending movies. Status:', res.status, res.statusText);
      throw new Error(`Failed to fetch trending movies: ${res.statusText}`);
    }

    const data = await res.json();
    return data.results as Movie[];

  } catch (error) {
    console.error('Error in getTrendingMovies:', error);
    return [];
  }
}

export default async function HomePage() {
  const movies = await getTrendingMovies();

  if (movies.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl">Failed to load movies. Please try again later.</h1>
      </div>
    );
  }

  const heroMovie = movies[0];

  const trendingNow = movies.slice(1, 10);
  const topPicks = movies.slice(10, 20);

  const popular = movies.filter(m => m.vote_average > 7.5);

  return (
    <div className="flex flex-col">
    </div>
  );
}
