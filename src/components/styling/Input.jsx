import { Input as ReactInput } from "reactstrap";
import styled from "@emotion/styled";

export const inputThemeLight = {
  color: "#0d6efd",
};

export const inputThemeDark = {
  color: "black",
};

export const Input = styled(ReactInput)`
  color: ${(props) => props.theme.input.color};
  margin-bottom: 8px;

  &::placeholder {
    color: ${(props) => props.theme.input.color};
    font-size: 12px;
  }
  &:focus {
    color: ${(props) => props.theme.input.color};
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme.input.color};
`;
