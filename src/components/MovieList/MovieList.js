import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { List, ListItem } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultPosterImg =
    'https://www.reelviews.net/resources/img/default_poster.jpg';
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultPosterImg
              }
              alt={title}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
