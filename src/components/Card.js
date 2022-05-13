import { useContext } from "react";
import { CardText, CardTitle } from "reactstrap";
import { Card } from "./styling/Card";
import { Button } from "./styling/Button";
import FavoriteContext from "../store/favorites-context";

export function CardComponent({ cardTitle, joke, card }) {
  const favoritesCtx = useContext(FavoriteContext);

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }

  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }
  return (
    <Card card={card}>
      <CardTitle tag="h5">{cardTitle}</CardTitle>
      <CardText> {joke.value}</CardText>
      <Button
        onClick={
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
  );
}
