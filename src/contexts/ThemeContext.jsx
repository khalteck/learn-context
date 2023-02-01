import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [username, setUsername] = useState("khalteck");

  const [isLightTheme, setIsLightTheme] = useState(true);
  const [lightTheme, setLightTheme] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [darkTheme, setDarkTheme] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  return (
    <ThemeContext.Provider
      value={{
        username,
        isLightTheme,
        setIsLightTheme,
        lightTheme,
        setLightTheme,
        darkTheme,
        setDarkTheme,
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
