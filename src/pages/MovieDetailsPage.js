import { fetchMovieById } from 'api';
import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (!params.movieId) return;
    async function getMovie() {
      try {
        const fetchedMovie = await fetchMovieById(params.movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }

    getMovie();
  }, [params.movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt={movie.title}
          />
          <p>
            {movie.title} {movie.release_date}
          </p>
          <p>Overview:</p>
          <p>{movie.overview}</p>
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
