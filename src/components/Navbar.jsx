import "./Navbar_styles.css";
import Searchbar from "./NavbarAssets/search-bar/Search_bar";
import Logo from "./NavbarAssets/logo/Logo";
import UserMenu from "./NavbarAssets/user-menu/UserMenu";

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
