import React, { useContext } from "react";
import { TvShowContext } from "../../contexts/tvShowContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIconTV = ({ tvShow }) => {
    const context = useContext(TvShowContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(tvShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIconTV;