import { MovieList } from '../components/MovieList/MovieList';
import { fetchSearchMovies } from 'api/api';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Loader } from '../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('searchQuery');

  useEffect(() => {
    if (!query) return;

    const getMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMovies(query);
        setMovies(data);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQuery();
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}

      <SearchBar />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
