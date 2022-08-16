import "./Logo_styles.css";
import Logotipo from "./Logo_branco.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={Logotipo} alt="Logo" title="Home" />
    </div>
  );
};

export default Logo;
