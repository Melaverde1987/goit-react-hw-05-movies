import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <p>{movie.title}</p>
      <img
        width={100}
        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
        alt={movie.title}
      />
    </Link>
  );
};
