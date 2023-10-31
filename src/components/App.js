import { Layout } from './Layout/Layout';
import { Credits } from './Credits/Credits';
import { Reviews } from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

//import HomePage from 'pages/HomePage';
//import MoviesPage from 'pages/MoviesPage';
//import MovieDetailsPage from 'pages/MovieDetailsPage';
//import NotFoundPage from 'pages/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Credits />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
