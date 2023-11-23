import React,{useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import {getTopRatedMovies} from '../api/tmdb-api'
import { useParams } from "react-router-dom";
import { MoviesContext } from "../contexts/moviesContext";

const TopRatedMoviesPage = (props) => {
  const {pageNum} = useContext(MoviesContext);
  const {pageNumber} = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['toprated',{pageNum:pageNum}], getTopRatedMovies)

  console.log("pageNumber" + pageNumber)
  
  
    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    const mustWatch = movies.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  
    return (
      <PageTemplate
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
      }}
      />
    );
  };
  export default TopRatedMoviesPage; 