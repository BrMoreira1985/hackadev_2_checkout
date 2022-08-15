import "./Navbar_styles.css";
import Searchbar from "./search-bar/Search_bar";
import Logo from "./logo/Logo";
import UserMenu from "./user-menu/UserMenu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <Searchbar />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
