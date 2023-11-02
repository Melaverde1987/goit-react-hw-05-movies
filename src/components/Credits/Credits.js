import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { fetchCredits } from 'api';
import { CastCard, Error } from './Credits.styled';

export default function Credits() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [credits, setCredits] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!params.movieId) return;
    async function getCredits() {
      try {
        setLoading(true);
        const fetchedCredits = await fetchCredits(params.movieId);
        setCredits(fetchedCredits.cast);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    getCredits();
  }, [params.movieId]);

  return (
    <>
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
      {credits.length > 0 ? (
        <CastCard>
          {credits.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
                width={213}
              />

              <p>{item.name}</p>
              <p>
                <i>{item.character}</i>
              </p>
            </li>
          ))}
        </CastCard>
      ) : (
        <Error>
          <p>Cast not available</p>
        </Error>
      )}
    </>
  );
}
