import "./CreditCardOption_styles.css";
import OptionField from "../option-field/OptionField";

const CreditCardOptions = () => {
  return (
    <>
      <div className="options">
        <OptionField name="credit-options" text="1 x de " />
      </div>

      <div className="options">
        <OptionField name="credit-options" text="2 x de " />
      </div>

      <div className="options">
        <OptionField name="credit-options" text="3 x de " />
      </div>
    </>
  );
};

export default CreditCardOptions;
