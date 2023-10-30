import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
      <p>{movie.title}</p>
      <img
        width={220}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
      />
    </Link>
  );
};
