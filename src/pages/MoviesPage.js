import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  useEffect(() => {
    if (!title || title === '') {
      return;
    }
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const allMovies = await searchMovies(title);
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
  }, [title]);

  const handlerSubmit = evt => {
    if (title !== evt.search.trim()) {
      setMovies([]);
    }
    setQuery(evt.search.trim());
    setSearchParams({ title: evt.search.trim() });
  };

  const handlerChange = evt => {
    setSearchParams({ title: evt.target.value.trim() });
  };

  console.log('title', title);
  console.log('query', query);

  return (
    <div>
      <h1>All movies</h1>
      <Searchbar onSubmit={handlerSubmit} handleChange={handlerChange} />
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
