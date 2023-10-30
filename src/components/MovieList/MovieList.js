import { MovieItem } from 'components/MovieItem/MovieItem';
import { List, Item } from './MovieList.styled';

export const MovieList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <MovieItem movie={item} />
        </Item>
      ))}
    </List>
  );
};
