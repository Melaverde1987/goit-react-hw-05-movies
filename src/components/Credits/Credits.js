import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'api';

export const Credits = () => {
  const params = useParams();
  const [credits, setCredits] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!params.movieId) return;
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
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              alt={item.name}
            />

            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
