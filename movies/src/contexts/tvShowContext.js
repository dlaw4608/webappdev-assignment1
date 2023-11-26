import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
    const [favoritesTV, setFavoritesTV] = useState([]);

  const addToFavorites = (tvshow) => {
    let newFavorites = [...favoritesTV];
    if (!favoritesTV.includes(tvshow.id)) {
      newFavorites.push(tvshow.id);
    }
    setFavoritesTV(newFavorites);
  };

  // We will use this function in a later section
  const removeFromFavorites = (tvshow) => {
    setFavoritesTV( favoritesTV.filter(
      (mId) => mId !== tvshow.id
    ) )
  };

  return (
    <TvShowContext.Provider
      value={{
        favoritesTV,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  )
};

export default TvShowContextProvider;