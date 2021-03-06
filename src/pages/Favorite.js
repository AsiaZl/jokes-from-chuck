import { Layout } from "../components/maincomponents/Layout";
import { useContext } from "react";
import { Card } from "../components/styling/Card";
import { Button } from "../components/styling/Button";
import { CardText } from "reactstrap";

import FavoriteContext from "../store/favorites-context";

export function Favorites() {
  const favoritesCtx = useContext(FavoriteContext);

  function DeleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  return (
    <Layout>
      {favoritesCtx.favorites.length === 0 ? (
        <p>There is no favorite jokes yet</p>
      ) : (
        favoritesCtx.favorites.map((joke) => {
          return (
            <Card key={joke.id}>
              <CardText>{joke.value}</CardText>
              <Button onClick={() => DeleteFromFav(joke.id)} id="btn">
                Remove from the favorites
              </Button>
            </Card>
          );
        })
      )}
    </Layout>
  );
}
