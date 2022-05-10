import { Container } from "reactstrap";
import { Button } from "../Button";
import { FontFooter } from "../LayoutTheme";

export function Footer(props) {
  return (
    <Container className="mb-4 d-flex justify-content-between">
      <FontFooter>{new Date().getFullYear()} chuck-jokes.cn</FontFooter>
      <Button onClick={props.onClick}>
        Switch to {props.isDark ? "Light" : "Dark"} theme
      </Button>
    </Container>
  );
}
