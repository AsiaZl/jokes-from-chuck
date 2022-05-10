import { createContext, useState, useEffect, useRef } from "react";

export const ThemeContext = createContext();

const initialMode = JSON.parse(localStorage.getItem("darkmode")) || false;
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(initialMode);
  const isInitialState = useRef(true);

  useEffect(() => {
    if (isInitialState.current) {
      isInitialState.current = false;
    } else {
      localStorage.setItem("darkmode", JSON.stringify(isDark));
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={[{ isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
