import { Card as ReactCard } from "reactstrap";
import styled from "@emotion/styled";

export const cardThemeLight = {
  backgroundColor: "white",
  color: "#0d6efd",
};
export const cardThemeDark = {
  backgroundColor: "transparent",
  color: "white",
};

export const Card = styled(ReactCard)`
  background-color: ${(props) =>
    props.card ? "transparent" : props.theme.card.backgroundColor} !important;
  margin: ${(props) => (props.card ? "0" : "2")};
  width: ${(props) => (props.card ? "100%" : "80%")};
  text-align: center;
  color: ${(props) => props.theme.card.color};
  padding: ${(props) => (props.card ? "0" : "1.5rem")};
  border-color: ${(props) =>
    props.card ? "transparent" : props.theme.card.color};
  transition: 0.5s;
  font-size: 15px;
  &:hover {
    transform: scale(1.05);
  }
`;
