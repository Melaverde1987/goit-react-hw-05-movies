import { Link } from 'react-router-dom';
import { Extras } from './AddInfo.styled';

export const AddInfo = ({ data }) => {
  return (
    <Extras>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movies/${data.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${data.id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </Extras>
  );
};
