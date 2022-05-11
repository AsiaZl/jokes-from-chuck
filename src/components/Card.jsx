import { Card as ReactCard } from "reactstrap";
import styled from "@emotion/styled";

export const Card = styled(ReactCard)`
  background-color: ${(props) => props.theme.backgroundCard} !important;
  margin: 0.5rem;
  color: ${(props) => props.theme.color};
  padding: 2rem;
  border-color: ${(props) => props.theme.color};
  transition: 0.5s;
  width: 80%;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MainCard = styled(ReactCard)`
  background-color: transparent !important;
  border: none;
  color: ${(props) => props.theme.color};
`;
