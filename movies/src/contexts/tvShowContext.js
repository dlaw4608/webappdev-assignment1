import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
    const [favouritesTV, setFavouritesTV] = useState([]);

  const addToFavourites = (tvshow) => {
    let newFavourites = [...favouritesTV];
    if (!favouritesTV.includes(tvshow.id)) {
      newFavourites.push(tvshow.id);
    }
    setFavouritesTV(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tvshow) => {
    setFavouritesTV( favouritesTV.filter(
      (mId) => mId !== tvshow.id
    ) )
  };

  return (
    <TvShowContext.Provider
      value={{
        favouritesTV,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  )
};

export default TvShowContextProvider;