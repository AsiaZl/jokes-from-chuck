import { useEffect, useState, useContext } from "react";
import { Row, CardTitle, CardText, Spinner } from "reactstrap";
import { MainCard } from "./styling/Card";
import { api } from "../api";
import { Button } from "./styling/Button";
import { SeveralRandomJokes } from "./SeveralRandomJokes";
import FavoriteContext from "../store/favorites-context";

export function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [severalJokes, setSeveralJokes] = useState(false);

  const favoritesCtx = useContext(FavoriteContext);

  function addComponent() {
    setSeveralJokes((severalJokes) => !severalJokes);
  }

  function getRandomJoke() {
    setIsLoading(true);
    api
      .get("/random")
      .then((res) => {
        setRandomJoke(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    getRandomJoke();
  }, []);

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }

  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  if (error) {
    return <p>Ooops.{error.message}</p>;
  }

  return (
    <div>
      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          <MainCard body className="text-center">
            <CardTitle tag="h5">Joke from Chuck</CardTitle>
            <CardText> {randomJoke.value}</CardText>
            <Button
              style={{ marginBottom: "1rem" }}
              onClick={
                favoritesCtx.itemIsFavorite(randomJoke.id)
                  ? () => deleteFromFav(randomJoke.id)
                  : () => addToFavorite(randomJoke)
              }
            >
              {favoritesCtx.itemIsFavorite(randomJoke.id)
                ? "Remove from the favorites"
                : "Add to favorites"}
            </Button>
            <Button onClick={getRandomJoke}>Get Another Joke</Button>
          </MainCard>
        )}
      </Row>
      <Row>
        <div className="px-3">
          <Button style={{ width: "100%" }} onClick={addComponent}>
            {severalJokes ? "Hide jokes" : "Get more random jokes"}
          </Button>
        </div>
        <div>{severalJokes ? <SeveralRandomJokes /> : ""}</div>
      </Row>
    </div>
  );
}
