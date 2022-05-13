import { Button as ReactButton } from "reactstrap";
import styled from "@emotion/styled";

export const buttonThemeLight = {
  color: "#0d6efd",
};

export const buttonThemeDark = {
  color: "white",
};

export const Button = styled(ReactButton)`
  background-color: transparent;
  color: ${(props) => props.theme.button.color};
  border-color: ${(props) => props.theme.button.color};
  transition: 0.5s;
  &:focus {
    background-color: transparent;
    color: ${(props) => props.theme.button.color};
  }
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.button.color};
    border-color: ${(props) => props.theme.button.color};
    transform: scale(1.05);
  }
`;
