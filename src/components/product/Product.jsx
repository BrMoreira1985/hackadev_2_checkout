import "./Product_styles.css";

const Product = ({ image, alt, quantity, priceOriginal, price }) => {
  function valueToBRL(val) {
    if (val === undefined || val === 0) return;

    let converted = val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return converted;
  }
  return (
    <div className="product">
      <img src={image} alt={alt} title={alt} />
      <p className="quantity">{quantity}</p>
      <p className="priceOriginal">{valueToBRL(priceOriginal)}</p>
      <p className="price">{valueToBRL(price)}</p>
    </div>
  );
};

export default Product;
