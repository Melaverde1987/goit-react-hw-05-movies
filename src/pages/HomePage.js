import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { fetchMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const allMovies = await fetchMovies();
        setMovies(allMovies.results);
        console.log(allMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      <h1>Thrending today</h1>
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
      {error && <p>Error! Please reload this page!</p>}
      {movies ? (
        <MovieList items={movies} />
      ) : (
        <p>Error! Please reload this page!</p>
      )}
    </div>
  );
}
