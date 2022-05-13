import { useState, useEffect, useRef } from "react";
import { Spinner } from "reactstrap";
import { api } from "../api";
import { Input } from "./styling/Input";
import { CardComponent } from "./Card";
import { FontSideBar } from "./styling/LayoutTheme";

const countOfJokes = 25;
const minInputLength = 3;

export function SearchInput() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-5">
      <FontSideBar>Let's find a joke</FontSideBar>

      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder={"Type at least 3 characters"}
        innerRef={inputRef}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        result
          .slice(0, countOfJokes)
          .map((joke) => <CardComponent joke={joke} />)
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}
