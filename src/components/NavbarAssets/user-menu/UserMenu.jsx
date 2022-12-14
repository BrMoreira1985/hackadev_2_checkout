import "./UserMenu.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div className="user_menu_container">
      <button className="userButton" name="user" title="Entrar/Cadastrar">
        <FaUserAlt />
      </button>
      <button className="userButton" name="bag" title="Sacola">
        <FaShoppingBag />
      </button>
      <button className="userButton hiddenButton" name="hamburger" title="Menu">
        <FaEllipsisH />
      </button>
    </div>
  );
};

export default UserMenu;
