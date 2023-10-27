import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MovieItem movie={item} />
        </li>
      ))}
    </ul>
  );
};
