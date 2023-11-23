import React from "react";
import Grid from "@mui/material/Grid";
import TVShowCard from "../tvShowCard";

const TVShowList = ( {tvShows, action}) => {
  let tvShowCards = tvShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVShowCard key={m.id} tvShow={m} action={action}/>
    </Grid>
  ));
  return tvShowCards;
};

export default TVShowList;