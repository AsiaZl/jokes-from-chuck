import { createContext, useEffect, useRef, useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];
const FavoriteContext = createContext({
  favorites: initialState,
  addFavorite: (favoriteJoke) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.favoriteJoke];
    case "delete":
      return state.filter((joke) => joke.id !== action.id);
    default:
      return state;
  }
}

export function FavoritesContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isInitialState = useRef(true);

  useEffect(() => {
    if (isInitialState.current) {
      isInitialState.current = false;
    } else {
      localStorage.setItem("favorites", JSON.stringify(state));
    }
  }, [state]);

  const addFavorites = (favoriteJoke) => {
    dispatch({ type: "add", favoriteJoke: favoriteJoke });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "delete", id: id });
  };

  const itemIsFavorite = (id) => {
    return state.some((joke) => joke.id === id);
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
