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
  background-color: ${(props) => props.theme.card.backgroundColor} !important;
  margin: 0.5rem;
  color: ${(props) => props.theme.card.color};
  padding: 2rem;
  border-color: ${(props) => props.theme.card.color};
  transition: 0.5s;
  width: 80%;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MainCard = styled(ReactCard)`
  background-color: transparent !important;
  border: none;
  color: ${(props) => props.theme.card.color};
`;
