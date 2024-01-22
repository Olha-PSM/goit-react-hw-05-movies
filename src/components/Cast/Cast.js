import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/api';
import { useState, useEffect } from 'react';
import { Title } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      if (!movieId) return;
      try {
        const data = await fetchCast(movieId);
        setMovieCast([...data.cast]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
      }
    };
    getCast();
  }, [movieId]);

  const defaultImageCaster =
    'https://astramed72.ru/upload/iblock/347/sycbae8zbho9u1ki9gfpg13enweryrr7.png';

  return (
    <div>
      {!movieCast.length && <p>No cast for this movie...</p>}
      <ul>
        {movieCast.map(({ id, profile_path, name }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImageCaster
                }
                alt={name}
              />
              <Title>{name}</Title>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
