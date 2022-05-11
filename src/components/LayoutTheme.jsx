import styled from "@emotion/styled";
import { Link as ReactLink, NavLink as ReactNavLink } from "react-router-dom";

// import { cardThemeDark, cardThemeLight } from "./Card";

export const lightTheme = {
  backgroundColorSideBar: "#ffe1a8",
  backgroundColorMainPage: "#fffcf2",
  // backgroundCard: "white",
  color: "#0d6efd",
  inputColor: "#0d6efd",
  // sideBar: {
  //   backgroundColor: "",
  //   color: "",
  // },
  // card: cardThemeLight,
};
export const darkTheme = {
  backgroundColorSideBar: "#01161e",
  backgroundColorMainPage: "#124559",
  backgroundCard: "transparent",
  color: "white",
  inputColor: "black",
};
export const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LayoutSideBar = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSideBar};
  width: 30%;
  font-size: "20px";
  color: "#0d6efd";
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LayoutMainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColorMainPage};
  min-height: 100%;
  width: 70%;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 100%;
    flex: 1;
  }
`;

export const LayoutMainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const FontSideBar = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.color};
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`;
export const FontFooter = styled.p`
  color: ${(props) => props.theme.color};
`;

export const FontHeader = styled.h3`
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color};
`;

export const FontLabel = styled.label`
  color: ${(props) => props.theme.color};
  margin: 1rem 0 1rem 0;
`;
export const Link = styled(ReactLink)`
  color: ${(props) => props.theme.color};
  &:hover {
    color: ${(props) => props.theme.color};
  }
`;

export const NavLink = styled(ReactNavLink)`
  color: ${(props) => props.theme.color};
  &:hover {
    color: ${(props) => props.theme.color};
  }
`;
