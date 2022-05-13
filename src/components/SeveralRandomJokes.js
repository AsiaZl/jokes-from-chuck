import { api } from "../api";
import { useState } from "react";
import { Spinner } from "reactstrap";
import { SeveralRandomJokesForm } from "./SeveralRandomJokesForm";
import { CardComponent } from "./Card";

export function SeveralRandomJokes() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function submitChoise(e) {
    e.preventDefault();
    setIsLoading(true);
    Promise.all(
      Array(Number(e.target.numberOfJokesInput.value))
        .fill("/random")
        .map((endpoint) => api.get(endpoint))
    )
      .then((response) => {
        setJokes(response.map((res) => res.data));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <SeveralRandomJokesForm onSubmitChoise={submitChoise} />
      {isLoading ? (
        <Spinner />
      ) : (
        jokes.map((joke) => <CardComponent joke={joke} />)
      )}
    </div>
  );
}
