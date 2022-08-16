import "./Search_bar_styles.css";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="searchContainer">
      <input
        type="search"
        className="search"
        placeholder="O que você procura?"
      />
      <button className="search_button" title="Buscar">
        <FaSearch />
      </button>
    </div>
  );
};

export default Searchbar;
