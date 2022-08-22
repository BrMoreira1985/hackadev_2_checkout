import "./ChangeAddress_styles.css";
import Modal from "react-modal";
import { useState } from "react";

const TextField = ({ placeholder }) => {
  return (
    <label>
      {placeholder}
      <input
        type="text"
        name=""
        id=""
        className="text-field"
        placeholder={placeholder}
      />
    </label>
  );
};

const ChangeAddress = ({
  openButtonText,
  closeButtonText,
  modalTitle,
  modalText,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-container">
      <button className="modal-opener" onClick={openModal}>
        {openButtonText}
      </button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="info">
          <div className="line">
            <TextField placeholder={"Bairro"} />
          </div>

          <div className="line">
            <TextField placeholder={"Rua"} />

            <TextField placeholder={"Número"} />
          </div>

          <div className="line">
            <TextField placeholder={"Complemento"} />
          </div>
          <div className="line">
            <TextField placeholder={"CEP"} />
            <TextField placeholder={"Cicade"} />
            <TextField placeholder={"Estado"} />
          </div>
        </div>

        <button className="modal-closer" onClick={closeModal}>
          {closeButtonText}
        </button>
      </Modal>
    </div>
  );
};

export default ChangeAddress;
