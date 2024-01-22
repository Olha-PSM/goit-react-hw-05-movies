import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/api';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      if (!movieId) return;
      try {
        const data = await fetchReviews(movieId);
        setMoviesReviews([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {!moviesReviews.length && <p>We don`t have any reviews for this movie</p>}
      <ul>
        {moviesReviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
