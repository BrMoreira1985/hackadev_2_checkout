import "./Logo_styles.css";
import Logotipo from "./Ocean_logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={Logotipo} alt="Logo" title="Home" />
    </div>
  );
};

export default Logo;
