import { fetchMovieById } from 'api';
import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { AddInfo } from 'components/AddInfo/AddInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieCard } from 'components/MovieCard/MovieCard';

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
    <>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      {movie && (
        <>
          <MovieCard data={movie} />
          <AddInfo data={movie} />
        </>
      )}

      <Outlet />
    </>
  );
}
