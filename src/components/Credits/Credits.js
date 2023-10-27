import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'api';

export const Credits = () => {
  const location = useLocation();
  const params = useParams();
  const [credits, setCredits] = useState([]);
  //console.log('location', location);

  useEffect(() => {
    async function getCredits() {
      try {
        const fetchedCredits = await fetchCredits(params.movieId);
        setCredits(fetchedCredits.cast);
      } catch (error) {}
    }

    getCredits();
  }, [params.movieId]);

  console.log('credits', credits);
  return (
    <>
      <p>Credits Result {location.state.id}</p>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/` + item.profile_path}
                alt={item.name}
              />
            )}
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
