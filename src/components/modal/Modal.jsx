import "./Modal_styles.css";
import Modal from "react-modal";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const CheckoutModal = ({
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
        <h1 className="title">{modalTitle}</h1>
        <div className="info">
          <FaRegCheckCircle />
        </div>
        <button className="modal-closer" onClick={closeModal}>
          {closeButtonText}
        </button>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
