import { useState } from "react";
import "./MainSection_styles.css";
import Section from "./section/Section";
import Product from "./product/Product";
import ImgProduct1 from "../images/produto 1-checkout.jpg";
import ImgProduct2 from "../images/produto 2-checkout.jpg";
import ImgProduct3 from "../images/produto 3-checkout.jpg";
import IconPg1 from "../images/boleto-icon.png";
import IconPg2 from "../images/pix-icon.png";
import IconPg3 from "../images/card-icon.png";
import IconPg4 from "../images/mercadopago-icon.png";
import OptionField from "./option-field/OptionField";
import Summary from "./summary/Summary";
import Cupon from "./cupon/Cupon";
import CheckoutButton from "./checout-button/CheckoutButton";
import CreditCardOptions from "./credit-card-options/CrediCardOptions";

function CuponFunction() {
  const [discount, setDiscount] = useState("");

  const handleDiscount = (event) => {
    setDiscount(event.target.value);
  };

  return (
    <Section
      name="APLICAR CUPOM"
      content={<Cupon {...{ handleDiscount, discount }} />}
    />
  );
}

const MainSection = () => {
  return (
    <section className="main_section">
      <div className="containerLeft">
        <Section
          name="ENDEREÇO"
          content={
            <>
              <p>Maria Silva e Silva</p>
              <p>Rua Passárgadas nº 1234</p>
              <p>Bairro dos Sonhos, Goiânia-GO, CEP 74000-000</p>
              <p>Contato: (62) 9999 0000</p>
            </>
          }
        />

        <Section
          name="SUAS COMPRAS"
          content={
            <>
              <div className="productBag">
                <Product
                  image={ImgProduct1}
                  alt="biquini animal print"
                  quantity="x 1"
                  priceOriginal={`R$ ${(89.9).toFixed(2)}`}
                  price={`R$ ${(71.92).toFixed(2)}`}
                />

                <Product
                  image={ImgProduct2}
                  alt="vestido Lisa"
                  quantity="x 1"
                  price={`R$ ${(85).toFixed(2)}`}
                />

                <Product
                  image={ImgProduct3}
                  alt="Maiô Tiras"
                  quantity="x 1"
                  price={`R$ ${(100).toFixed(2)}`}
                />
              </div>
              <p className="subtotal">
                Subtotal: {`R$ ${(256.92).toFixed(2)}`}
              </p>
            </>
          }
        />

        <Section
          name="FRETE"
          content={
            <>
              <OptionField
                name="Frete"
                text="Sedex - Até 2 dias úteis"
                description={`+R$ ${(50).toFixed(2)}`}
              />
              <OptionField
                name="Frete"
                text="PAC - Até 6 dias úteis"
                description={`+R$ ${(20).toFixed(2)}`}
              />

              <OptionField
                name="Frete"
                text="Retira - Imediato"
                description="Grátis"
              />
            </>
          }
        />

        <Section
          name="FORMA DE PAGAMENTO"
          content={
            <>
              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg1}
                text="Boleto bancário - Vencimento em 3 dias úteis"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg2}
                text="Pix - À vista"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg3}
                text="Cartão de crédito"
              />

              <CreditCardOptions />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg4}
                text="Mercado Pago - À vista"
              />
            </>
          }
        />
      </div>

      <div className="containerRight">
        <CuponFunction />

        <Section
          name="RESUMO"
          content={
            <>
              <Summary />
            </>
          }
        />

        <Section name="FINALIZAR" content={<CheckoutButton />} />
      </div>
    </section>
  );
};

export default MainSection;
