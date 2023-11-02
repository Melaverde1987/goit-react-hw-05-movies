import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { fetchReviews } from 'api';
import { ReviewCard, Error } from './Reviews.styled';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const fetchedCredits = await fetchReviews(params.movieId);
        setReviews(fetchedCredits.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    getReviews();
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
      {reviews.length > 0 ? (
        <ReviewCard>
          {reviews.map(item => (
            <li key={item.id}>
              <p>
                <strong>Author: </strong> {item.author}
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ReviewCard>
      ) : (
        <Error>
          <p>No review yet</p>
        </Error>
      )}
    </>
  );
};

export default Reviews;
