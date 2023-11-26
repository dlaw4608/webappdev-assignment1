import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowList";
import { TvShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/TvcardIcons/removeFromFavorites";

const FavoriteTvShowsPage = () => {
  const {favoritesTV: ids} = useContext(TvShowContext);

  // Create an array of queries and run in parallel.
  const favoriteTvShowQueries = useQueries(
    ids.map((Id) => {
      return {
        queryKey: ["tvShow", { id: Id }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favoriteTvShowQueries.map((q) => {
    console.log(q.data);
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data;
  });

  return (
    <PageTemplate
      title="Favorite Tv shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromFavorites tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavoriteTvShowsPage;
