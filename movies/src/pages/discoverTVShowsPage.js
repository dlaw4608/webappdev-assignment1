import React from "react";
import { getTvShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';
import AddToFavouritesIcon from '../components/TvcardIcons/addToFavourites';

const DiscoverTVShowsPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);
  const {  data, error, isLoading, isError }  = useQuery(['discoverTvshows', { id: pageNumber }], getTvShows);

 
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
  console.log(data);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };


  // Redundant, but necessary to avoid app crashing.
 // const favourites = tvShows.filter(m => m.favourite)
  //localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <>
        <PageTemplate
        title="Discover TV Shows"
        tvShows={tvShows}
        action={(tvshow) => {
          return <AddToFavouritesIcon tvShow={tvshow} />
        }}
        />
        <Pagination
      page={page}
      count={data.total_pages}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/tvshows/discover${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
          
        />
      )}
    />
        </>
  );
};
export default DiscoverTVShowsPage;