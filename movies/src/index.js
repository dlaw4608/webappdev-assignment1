import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import TVShowPage from "./pages/discoverTVShowsPage";
import TemplateTVShowPage from "./pages/tvShowDetailsPage";
import TvShowContextProvider from "./contexts/tvShowContext";
import FavoriteTvShowPage from "./pages/favoriteTvShowsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <TvShowContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/trending" element={ <TrendingMoviesPage /> } />
          {/* <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} /> */}
          {/*<Route path="/tvshows/page=:pageNumber" element = {<TVPage/>}/>*/}
          <Route path="" element={<TopRatedMoviePage />} />
          <Route path="/movies/topratedmovies" element={<TopRatedMoviePage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/tvshows/discover" element={<TVShowPage/>}/>
          <Route path="/tvshow/favorites" element={<FavoriteTvShowPage></FavoriteTvShowPage>}></Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/tvshow/:id" element={<TemplateTVShowPage/>}></Route>
        </Routes>
        </TvShowContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);