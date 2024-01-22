import axios from 'axios';

const API_KEY = 'ef2f77713a3dddac14be60644348e486';

export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.results;
};

export const fetchMovieById = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchSearchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios({
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return data.results;
};

export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
