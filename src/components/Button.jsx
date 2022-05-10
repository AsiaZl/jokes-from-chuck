import { Button as ReactButton } from "reactstrap";
import styled from "@emotion/styled";

export const Button = styled(ReactButton)`
  background-color: transparent;
  color: ${(props) => props.theme.color};
  border-color: ${(props) => props.theme.color};
  transition: 0.5s;
  &:focus {
    background-color: transparent;
    color: ${(props) => props.theme.color};
  }
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.color};
    border-color: ${(props) => props.theme.color};
    transform: scale(1.05);
  }
`;
