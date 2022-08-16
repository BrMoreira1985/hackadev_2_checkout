import "./Product_styles.css";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt={props.alt} />
      <p className="quantity">{props.quantity}</p>
      <p className="priceOriginal">{props.priceOriginal}</p>
      <p className="price">{props.price}</p>
    </div>
  );
};

export default Product;
