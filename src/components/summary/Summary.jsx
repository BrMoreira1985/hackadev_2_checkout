import "./Summary_styles.css";
import KeyValuePair from "../key-value-pair/KeyValuePair";

const Summary = ({
  subtotal,
  frete,
  desconto,
  total,
  prazo,
  formaPagamento,
  parcelas,
}) => {
  return (
    <div className="summary">
      <KeyValuePair entry="Subtotal" value={subtotal} />
      <KeyValuePair entry="Frete" value={frete} />
      <KeyValuePair entry="Desconto" value={desconto} />
      <KeyValuePair entry="Total" value={total} />
      <KeyValuePair entry="Prazo" value={prazo} />
      <KeyValuePair entry="FormaPagamento" value={formaPagamento} />
      <KeyValuePair entry="Parcelas" value={parcelas} />
    </div>
  );
};

export default Summary;
