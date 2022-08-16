import "./OptionField_styles.css";

const OptionField = (props) => {
  let hasIcon = props.hasIcon;
  if (hasIcon)
    return (
      <div className="optionField">
        <div className="clickable">
          <input type="radio" className="clickable" name={props.name} />
        </div>
        <img className="icon" src={props.image} alt={props.alt} />
        <p className="optionText">{props.text}</p>
        <p className="optionDescription">{props.description}</p>
      </div>
    );
  else
    return (
      <div className="optionField">
        <div className="clickable">
          <input type="radio" className="clickable" name={props.name} />
        </div>
        <p className="optionText">{props.text}</p>
        <p className="optionDescription">{props.description}</p>
      </div>
    );
};

export default OptionField;
