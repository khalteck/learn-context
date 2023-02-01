import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  function handleTheme() {
    setIsLightTheme((prev) => !prev);
  }
  return (
    <ThemeContext.Provider
      value={{
        handleTheme,
        isLightTheme,
        setIsLightTheme,
        light,
        setLight,
        dark,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
