"use client";
import Modal from "@/components/modal/Modal";

import "./themeModal.css";
import { useModalContext } from "@/hooks/hooks";
import { primaryCompass } from "@/utils/primaryColors";
import { useThemeContext } from "@/context/theme/ThemeContextProvider";

const ThemeModal = () => {
  const { isOpen, closeModal } = useModalContext();
  const { setPrimary, stopPrimaryInterval } = useThemeContext();

  const handlePrimary = (primary: Primary) => {
    setPrimary(primary);
    stopPrimaryInterval();
  };

  return (
    <Modal className="theme__modal" isOpen={isOpen} closeModal={closeModal}>
      <h3>Escoge tu color favorito</h3>
      <div className="theme__primary">
        {primaryCompass.map((color) => (
          <button
            key={color["--primary-hue"]}
            style={{ backgroundColor: color["--primary-color"] }}
            onClick={() => handlePrimary(color)}
          />
        ))}
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
