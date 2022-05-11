import { Input as ReactInput } from "reactstrap";
import styled from "@emotion/styled";

export const Input = styled(ReactInput)`
  color: ${(props) => props.theme.inputColor};
  margin-bottom: 8px;

  &::placeholder {
    color: ${(props) => props.theme.inputColor};
    font-size: 12px;
  }
  &:focus {
    color: ${(props) => props.theme.inputColor};
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme.inputColor};
`;
