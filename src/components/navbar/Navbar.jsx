import "./Navbar_styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserLarge,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Ocean_logo.png";

export default function Navbar() {
  return (
    <nav id="navbar">
      <nav id="navbar-container">
        <div>
          <a href="/">
            <img src={Logo} className="logo" alt="Logo" />
          </a>
        </div>
        <div className="input-container">
          <input
            type="text"
            id="search-input"
            class="inputUser"
            autoFocus
            required
          />
          <label for="procurar" class="labelInput">
            O que deseja procurar?
          </label>
          <label for="search-input" class="icon-lupa">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
        </div>
        <div className="user">
          <div className="conta">
            <div className="icon-user">
              <FontAwesomeIcon icon={faUserLarge} />
            </div>
            <div className="container-cadastro">
              <div className="minhaconta">
                <p>
                  <a href="./login/index--login.html">Minha Conta</a>
                </p>
              </div>

              <div className="cadastro">
                <p>
                  <a href="./cadastro/index--cadastro.html">Cadastro</a>
                </p>
              </div>
            </div>
          </div>
          <div className="icon-cart">
            <a href="./carrinho/index--carrinho.html">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </nav>
    </nav>
  );
}
