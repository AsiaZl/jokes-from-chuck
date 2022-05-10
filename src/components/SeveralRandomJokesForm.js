import { Col } from "reactstrap";
import { Input } from "./Input";
import { Button } from "./Button";
import { FontLabel } from "./LayoutTheme";

export function SeveralRandomJokesForm({ onSubmitChoise }) {
  return (
    <form onSubmit={onSubmitChoise}>
      <div>
        <FontLabel htmlFor="numberOfJokesInput">
          Determine the number of jokes
        </FontLabel>
        <Col lg={2}>
          <Input id="numberOfJokesInput" type="number" min="1" max="120" />
          <div style={{ margin: "1rem 0 1rem 0" }}>
            <Button type="submit">Submit</Button>
          </div>
        </Col>
      </div>
    </form>
  );
}
