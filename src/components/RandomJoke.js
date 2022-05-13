import { useEffect, useState } from "react";
import { Row, Spinner } from "reactstrap";
import { CardComponent } from "./Card";
import { api } from "../api";
import { Button } from "./styling/Button";
import { MainCard } from "./styling/Card";
import { SeveralRandomJokes } from "./SeveralRandomJokes";

export function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [severalJokes, setSeveralJokes] = useState(false);

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

  if (error) {
    return <p>Ooops.{error.message}</p>;
  }

  return (
    <div>
      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <CardComponent
              card
              cardTitle={"Joke from Chuck"}
              joke={randomJoke}
            />
            <Button onClick={getRandomJoke} className="w-100 my-3">
              Get Another Joke
            </Button>
          </div>
        )}
      </Row>
      <Row>
        <Button className="w-100" onClick={addComponent}>
          {severalJokes ? "Hide jokes" : "Get more random jokes"}
        </Button>

        <div>{severalJokes ? <SeveralRandomJokes /> : ""}</div>
      </Row>
    </div>
  );
}
