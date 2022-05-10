import { ThemeProvider } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchInput } from "../SearchInput";
import chuck from "../images/norris-cartoon-pics-transparent.png";
import { useContext } from "react";
import { ThemeContext } from "../../store/darkmode-context";

import { StyledLayout } from "../LayoutTheme";
import { LayoutSideBar } from "../LayoutTheme";
import { LayoutMainPage } from "../LayoutTheme";
import { LayoutMainContent } from "../LayoutTheme";
import { lightTheme, darkTheme } from "../LayoutTheme";

export function Layout({ children }) {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div>
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
      </div>
    </ThemeProvider>
  );
}
