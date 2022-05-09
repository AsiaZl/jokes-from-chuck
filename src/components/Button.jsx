import { Button as ReactButton } from "reactstrap";
import styled from "@emotion/styled";

export const Button = styled(ReactButton)`
  background-color: transparent;
  color: #0d6efd;
  border-color: #0d6efd;
  transition: 0.5s;

  &:focus {
    background-color: transparent;
    color: #0d6efd;
  }
  &:hover {
    background-color: transparent;
    color: #0d6efd;
    border-color: #0d6efd;
    transform: scale(1.05);
  }
`;
