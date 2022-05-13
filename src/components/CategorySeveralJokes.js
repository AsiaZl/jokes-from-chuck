import { api } from "../api";
import { useState, useContext } from "react";
import { Spinner, CardText } from "reactstrap";
import { Card } from "./styling/Card";
import { Button } from "./styling/Button";
import { CategorySeveralForm } from "./CategorySeveralForm";
import FavoriteContext from "../store/favorites-context";
import { FontLabel } from "./styling/LayoutTheme";

export function CategorySeveralJokes({
  onChangeValue,
  selectedCategory,
  allCategories,
  category,
}) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const favoritesCtx = useContext(FavoriteContext);

  function formSubmit(e, countOfJokes) {
    e.preventDefault();
    setIsLoading(true);
    Promise.all(
      Array(Number(countOfJokes))
        .fill(`/random?category=${category}`)
        .map((endpoint) => api.get(endpoint))
    )
      .then((response) => {
        setIsLoading(false);
        setJokes(response.map((res) => res.data));
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }
  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <FontLabel>1. Select the category</FontLabel>
      <CategorySeveralForm
        formSubmit={formSubmit}
        onChangeValue={onChangeValue}
        selectedCategory={selectedCategory}
        allCategories={allCategories}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        jokes.map((joke) => (
          <Card key={joke.id}>
            <CardText>{joke.value}</CardText>
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
        ))
      )}
      {error && <p>oops....{error.message}</p>}
    </div>
  );
}
export default CategorySeveralJokes;
