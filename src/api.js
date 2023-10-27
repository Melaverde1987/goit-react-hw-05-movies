import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDZhYWFmNTkzMjk2YjAzMmUxMTQ1YjBlZTIyOTUzZCIsInN1YiI6IjY1M2E4MmUxZWM0NTUyMDEwYjNiNjM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPesGN1gOceGty2xi79kaxsW2IkeNBhEJ_8sGMzalJQ',
  },
};

export const fetchMovies = async () => {
  const params = new URLSearchParams({
    language: 'en-US',
  });
  const response = await axios.get(`/trending/movie/day?${params}`, options);
  return response.data;
};

export const searchMovies = async query => {
  const params = new URLSearchParams({
    include_adult: false,
    language: 'en-US',
    page: 1,
    query: query,
  });
  const response = await axios.get(`/search/movie?${params}`, options);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    movie_id: movieId,
  });
  const response = await axios.get(`/movie/${movieId}?${params}`, options);
  return response.data;
};

export const fetchCredits = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    movie_id: movieId,
  });
  const response = await axios.get(
    `/movie/${movieId}/credits?${params}`,
    options
  );
  return response.data;
};
