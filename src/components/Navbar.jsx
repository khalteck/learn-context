import { useGlobalContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useGlobalContext();
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context app</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
