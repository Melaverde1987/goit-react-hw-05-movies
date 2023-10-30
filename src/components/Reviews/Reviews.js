import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const fetchedCredits = await fetchReviews(params.movieId);
        setReviews(fetchedCredits.results);
      } catch (error) {}
    }

    getReviews();
  }, [params.movieId]);

  console.log('reviews', reviews);
  return (
    <>
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
