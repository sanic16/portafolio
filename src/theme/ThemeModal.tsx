"use client";
import Modal from "@/components/modal/Modal";
import PrimaryButton from "./PrimaryButton";

import "./themeModal.css";
import BgButton from "./BgButton";
import { useModalContext } from "@/hooks/hooks";

const ThemeModal = () => {
  const { isOpen, closeModal } = useModalContext();
  return (
    <Modal className="theme__modal" isOpen={isOpen} closeModal={closeModal}>
      <h3>Escoge tu color favorito</h3>
      <div className="theme__primary">
        {/* { primary.map(pcolor => (
            <PrimaryButton
              key={pcolor} 
              className={pcolor}
            />
          ))} */}
      </div>
      <h3>Escoge tu color de fondo</h3>
      <div className="theme__bg">
        {
          // bg.map(bgcolor => (
          //   <BgButton
          //     key={bgcolor}
          //     className={bgcolor}
          //   />
          // ))
        }
      </div>
    </Modal>
  );
};

export default ThemeModal;
