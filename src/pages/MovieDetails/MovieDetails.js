import { fetchMovieById } from 'api/api';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

import { useLocation, useParams, Outlet } from 'react-router-dom';
import {
  Wrapper,
  FilmWrapper,
  ItemImg,
  FilmTitle,
  StyledLink,
  BackLink,
  List,
  ListItem,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieById(movieId);
        setMovies(movieDetails);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieId]);

  const defaultPosterImg =
    'https://www.reelviews.net/resources/img/default_poster.jpg';

  return (
    <>
      {isLoading && <Loader />}
      <BackLink to={backLink}> Go Back </BackLink>
      <Wrapper>
        <div>
          <ItemImg
            alt={movie?.title}
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                : defaultPosterImg
            }
          />
        </div>

        <FilmWrapper>
          <FilmTitle>{movie?.title}</FilmTitle>
          <p>
            User scores: <b>{Math.round(movie?.vote_average * 10)}%</b>
          </p>
          <FilmTitle>Overview</FilmTitle>
          <p>{movie?.overview}</p>
          <FilmTitle>Genres</FilmTitle>
          <p>{movie?.genres.map(({ name }) => name).join(', ')}</p>
        </FilmWrapper>
      </Wrapper>
      <div>
        <FilmTitle>Previus information</FilmTitle>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
        <Outlet />
      </div>
    </>
  );
}
