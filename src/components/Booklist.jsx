import { useGlobalContext } from "../contexts/ThemeContext";

const Booklist = () => {
  const { handleTheme, isLightTheme, light, dark } = useGlobalContext();
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of water</li>
        <li style={{ background: theme.ui }}>Final empire</li>
        <li style={{ background: theme.ui }}>A song of ice and fire</li>
      </ul>
      <button className="btn" onClick={handleTheme}>
        Change theme
      </button>
    </div>
  );
};

export default Booklist;
