import "./KeyValuePair_styles.css";

const KeyValuePair = (props) => {
  return (
    <div className="line">
      <span className="entry">{props.entry}</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

export default KeyValuePair;
