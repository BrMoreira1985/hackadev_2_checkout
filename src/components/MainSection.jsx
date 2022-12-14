import { useState } from "react";
import Modal from "react-modal";
import "./MainSection_styles.css";
import ShoppingBag from "./data/ShoppingBag.json";
import Costumer from "./data/Costumer.json";
import Section from "./section/Section";
import ProductBag from "./product/ProductBag";
import Product from "./product/Product";
import IconPg1 from "../images/boleto-icon.png";
import IconPg2 from "../images/pix-icon.png";
import IconPg3 from "../images/card-icon.png";
import IconPg4 from "../images/mercadopago-icon.png";
import OptionField from "./option-field/OptionField";
import Summary from "./summary/Summary";
import Cupon from "./cupon/Cupon";
import ChangeAddress from "./change-address/ChangeAddress";
import CreditCardOptions from "./credit-card-options/CrediCardOptions";
import CheckoutModal from "./modal/Modal";

Modal.setAppElement("#root");

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
          name="SUAS COMPRAS"
          content={
            <ProductBag
              subtotal={`Subtotal: ${ShoppingBag.map((bag) => bag.price)
                .reduce((acc, price) => price + acc)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`}
              content={ShoppingBag.map((shoppingBag) => {
                return (
                  <>
                    <Product
                      image={shoppingBag.image}
                      alt={shoppingBag.description}
                      quantity={`x ${shoppingBag.quantity}`}
                      priceOriginal={shoppingBag.priceOriginal}
                      price={shoppingBag.price}
                    />
                  </>
                );
              })}
            />
          }
        />
        <Section
          name="ENDERE??O"
          content={
            <>
              {Costumer.map((costumer) => {
                return (
                  <>
                    <p>{costumer.name}</p>
                    <p>{`${costumer.street} n??${costumer.number}`}</p>
                    <p>{`${costumer.district}, CEP ${costumer.cep}, ${costumer.city}-${costumer.state}`}</p>
                    <p>{`Telefone: ${costumer.phone}`}</p>
                  </>
                );
              })}
              <ChangeAddress
                openButtonText={"ALTERAR ENDERE??O"}
                closeButtonText={"CONCLU??DO"}
              />
            </>
          }
        />

        <Section
          name="FRETE"
          content={
            <>
              <OptionField
                name="Frete"
                text="Sedex - At?? 2 dias ??teis"
                description={`+R$ ${(50).toFixed(2)}`}
              />
              <OptionField
                name="Frete"
                text="PAC - At?? 6 dias ??teis"
                description={`+R$ ${(20).toFixed(2)}`}
              />

              <OptionField
                name="Frete"
                text="Retira - Imediato"
                description="Gr??tis"
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
                text="Boleto banc??rio - Vencimento em 3 dias ??teis"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg2}
                text="Pix - ?? vista"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg3}
                text="Cart??o de cr??dito"
              />

              {/*<CreditCardOptions />*/}

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg4}
                text="Mercado Pago - ?? vista"
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
              <Summary
                subtotal={"R$ 256,92"}
                frete={"R$ 50,00"}
                desconto={"R$ 17,98"}
                total={"R$ 288,94"}
                prazo={"At?? 2 dias ??teis"}
                formaPagamento={"Pix"}
                parcelas={"?? vista"}
              />
            </>
          }
        />

        <Section
          name="FINALIZAR"
          content={
            <CheckoutModal
              modalTitle="Compra finalizada com sucesso!!"
              openButtonText="FINALIZAR COMPRA"
              closeButtonText="VOLTAR PARA O IN??CIO"
            />
          }
        />
      </div>
    </section>
  );
};

export default MainSection;
