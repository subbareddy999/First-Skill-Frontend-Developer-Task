import { Movie } from '@/lib/types';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';

async function getTrendingMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not defined in .env.local');
  }

  const url = 'https://api.themoviedb.org/3/trending/movie/week';

  try {
    const res = await fetch(`${url}?api_key=${apiKey}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error('Failed to fetch trending movies. Status:', res.status);
      throw new Error('Failed to fetch trending movies');
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
      <HeroBanner movie={heroMovie} />

      <div className="container mx-auto px-4 py-10">
        <MovieRow movies={trendingNow} categoryTitle="Trending Now" />
        <MovieRow movies={topPicks} categoryTitle="Top Picks for You" />
        <MovieRow movies={popular} categoryTitle="Highly Rated" />
      </div>
    </div>
  );
}
