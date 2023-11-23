import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterCard";
import TVShowList from "../tvShowList";
import Grid from "@mui/material/Grid";

function TVShowTemplateList({ tvShows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTvshows = tvShows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            type = {"Tv Shows"}
          />
        </Grid>
        <TVShowList tvShows={displayedTvshows} action={action}></TVShowList>
      </Grid>
    </Grid>
  );
}
export default TVShowTemplateList;