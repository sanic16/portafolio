import Modal from "@/components/modal/Modal";
import classes from "./errorModal.module.css";

import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const ErrorModal = ({
  isOpen,
  closeModal,
  message,
}: {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={classes.error__modal}
    >
      <div className={classes["error__modal-container"]}>
        <p className={classes["error__modal-content"]}>{message}</p>
        <div className={classes["error__modal-close"]} onClick={closeModal}>
          <FaCircleXmark />
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
