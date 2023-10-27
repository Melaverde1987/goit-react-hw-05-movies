import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { searchMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const allMovies = await searchMovies(query);
        setMovies(allMovies.results);
        if (allMovies.results < 1) {
          toast.error('There are no entries. Try again');
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [query]);

  const handlerSubmit = evt => {
    setMovies([]);
    setQuery(evt.search.trim());
  };

  console.log(movies);
  return (
    <div>
      <h1>All movies</h1>
      <Searchbar onSubmit={handlerSubmit} />
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
      {movies.length > 0 && <MovieList items={movies} />}
      <Toaster position="top-right" />
    </div>
  );
}
