import React from "react";
import { useParams } from 'react-router-dom';
import TVShowdetails from "../components/tvshowDetails";
import PageTemplate from "../components/templateTvShow";
import { getTvShow} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TvShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShowDetails", { id: id }],
      getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
    }

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
                      <TVShowdetails tvShow={tvShow}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvShowDetailsPage;