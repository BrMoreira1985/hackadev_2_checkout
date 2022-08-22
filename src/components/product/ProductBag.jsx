import "./Product_styles.css";

const ProductBag = ({ content, subtotal }) => {
  return (
    <>
      <div className="product-bag">{content}</div>
      <p className="sum-products">{subtotal}</p>
    </>
  );
};

export default ProductBag;
