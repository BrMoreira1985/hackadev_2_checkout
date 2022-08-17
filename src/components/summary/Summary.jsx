import "./Summary_styles.css";
import "../key-value-pair/KeyValuePair";
import KeyValuePair from "../key-value-pair/KeyValuePair";

const Summary = (props) => {
  let subtotal = props.subtotal;
  let frete = props.frete;
  let desconto = props.desconto;
  let total = props.total;
  let prazo = props.prazo;
  let formaPagamento = props.formaPagamento;
  let parcelas = props.parcelas;

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
