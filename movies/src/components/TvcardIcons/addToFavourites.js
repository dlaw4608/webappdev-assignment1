import React, { useContext } from "react";
import { TvShowContext } from "../../contexts/tvShowContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIconTV = ({ tvShow }) => {
    const context = useContext(TvShowContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIconTV;