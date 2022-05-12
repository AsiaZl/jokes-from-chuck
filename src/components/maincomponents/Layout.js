import { ThemeProvider } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchInput } from "../SearchInput";
import chuck from "../images/norris-cartoon-pics-transparent.png";
import { useContext } from "react";
import { ThemeContext } from "../../store/darkmode-context";
import { StyledLayout } from "../styling/LayoutTheme";
import { LayoutSideBar } from "../styling/LayoutTheme";
import { LayoutMainPage } from "../styling/LayoutTheme";
import { LayoutMainContent } from "../styling/LayoutTheme";
import { lightTheme, darkTheme } from "../styling/LayoutTheme";

export function Layout({ children }) {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StyledLayout>
        <LayoutSideBar>
          <SearchInput />
        </LayoutSideBar>
        <LayoutMainPage>
          <Header />
          <LayoutMainContent>
            <img src={chuck} alt="chuck" style={{ width: "20%" }} />
            {children}
          </LayoutMainContent>
          <Footer onClick={toggleTheme} isDark={isDark} />
        </LayoutMainPage>
      </StyledLayout>
    </ThemeProvider>
  );
}
