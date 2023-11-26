import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowContext } from "../../contexts/tvShowContext";

const RemoveFromFavoritesTVIcon = ({ tvShow }) => {
  const context = useContext(TvShowContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesTVIcon;