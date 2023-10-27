import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  return <Link to={`/movies/${movie.id}`}>{movie.title}</Link>;
};
