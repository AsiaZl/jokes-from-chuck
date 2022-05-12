import { createContext, useState, useEffect, useRef, useReducer } from "react";

const initialState = [];
const FavoriteContext = createContext({
  favorites: initialState,
  addFavorite: (favoriteJoke) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

// const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.favoriteJoke];
    case "delete":
      return state.filter((joke) => joke.id !== action.id);
    case "isFavorite":
      return Array(state).some((joke) => joke.id === action.id);
    default:
      return state;
  }
}

export function FavoritesContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [favorites, setFavorites] = useState(initialFavorites);
  // const isInitialState = useRef(true);

  // useEffect(() => {
  //   if (isInitialState.current) {
  //     isInitialState.current = false;
  //   } else {
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }
  // }, [favorites]);

  // function addFavorites(favoriteJoke) {
  //   const favoriteJokes = [...favorites, favoriteJoke];
  //   setFavorites(favoriteJokes);
  // }

  const addFavorites = (favoriteJoke) => {
    dispatch({ type: "add", favoriteJoke: favoriteJoke });
  };

  // function removeFavorite(id) {
  //   const favoriteJokes = favorites.filter((joke) => joke.id !== id);
  //   setFavorites(favoriteJokes);
  // }

  const removeFavorite = (id) => {
    dispatch({ type: "delete", id: id });
  };

  // function itemIsFavorite(id) {
  //   return favorites.some((joke) => joke.id === id);
  // }

  const itemIsFavorite = (id) => {
    dispatch({ type: "isFavorite", id: id });
  };
  const context = {
    favorites: state,
    addFavorite: addFavorites,
    removeFavorite: removeFavorite,
    itemIsFavorite: itemIsFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
