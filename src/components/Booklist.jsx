import { useGlobalContext } from "../contexts/ThemeContext";

const Booklist = () => {
  const { handleTheme } = useGlobalContext();
  return (
    <div className="book-list">
      <ul>
        <li>The way of water</li>
        <li>Final empire</li>
        <li>A song of ice and fire</li>
      </ul>
      <button className="btn" onClick={handleTheme}>
        Change theme
      </button>
    </div>
  );
};

export default Booklist;
