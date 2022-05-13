import { useState, useEffect, useContext } from "react";
import { Spinner, CardText } from "reactstrap";
import { api } from "../api";
import { Input } from "./styling/Input";
import { Card } from "./styling/Card";
import { Button } from "./styling/Button";
import { FontSideBar } from "./styling/LayoutTheme";
import FavoriteContext from "../store/favorites-context";

const countOfJokes = 25;
const minInputLength = 3;

export function SearchInput() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const favoritesCtx = useContext(FavoriteContext);

  useEffect(() => {
    if (query.length >= minInputLength) {
      setIsLoading(true);
      const delayDebounce = setTimeout(() => {
        api
          .get(`/search?query=${query}`)
          .then((res) => {
            setResult(res.data.result);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            setError(error);
          });
      }, 2000);
      return () => {
        clearTimeout(delayDebounce);
      };
    } else {
      setIsLoading(false);
      setResult([]);
    }
  }, [query]);

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }

  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }
  return (
    <div className="p-5">
      <FontSideBar>Let's find a joke</FontSideBar>

      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder={"Type at least 3 characters"}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        result.slice(0, countOfJokes).map((joke) => (
          <Card key={joke.id}>
            <CardText>{joke.value}</CardText>
            <Button
              handleClick={
                favoritesCtx.itemIsFavorite(joke.id)
                  ? () => deleteFromFav(joke.id)
                  : () => addToFavorite(joke)
              }
            >
              {favoritesCtx.itemIsFavorite(joke.id)
                ? "Remove from the favorites"
                : "Add to favorites"}
            </Button>
          </Card>
        ))
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}
