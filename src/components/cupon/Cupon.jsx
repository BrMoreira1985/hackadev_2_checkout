import "./Cupon_styles.css";

const Cupon = ({ handleDiscount, discount }) => {
  return (
    <div className="cupon">
      <div className="line1">
        <input
          className="input"
          type="text"
          placeholder="Digite seu cupom"
          onChange={handleDiscount}
          value={discount}
        />
        <button className="apply">Aplicar</button>
      </div>

      <div className="line2">
        <p>{discount}</p>
      </div>
    </div>
  );
};

export default Cupon;
