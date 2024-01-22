import { fetchTrends } from '../api/api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        setIsLoading(true);
        const movieList = await fetchTrends();
        setMovies(movieList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieList();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <h1> Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
}
