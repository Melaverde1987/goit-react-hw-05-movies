import { fetchMovieById, fetchCredits } from 'api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await fetchMovieById(params.movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }

    getMovie();
  }, [params.movieId]);

  useEffect(() => {
    async function getCredits() {
      try {
        const fetchedCredits = await fetchCredits(params.movieId);
        setCredits(fetchedCredits);
      } catch (error) {}
    }

    getCredits();
  }, [params.movieId]);

  console.log(credits);
  return (
    <div>
      <h1>Movie Details</h1>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt={movie.title}
          />
          <p>
            {movie.title} {movie.release_date}
          </p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p>Additional information</p>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        </>
      )}

      <Outlet />
    </div>
  );
}
