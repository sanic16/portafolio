"use client";
import Modal from "@/components/modal/Modal";

import "./themeModal.css";
import { useModalContext } from "@/hooks/hooks";
import { primaryCompass, saturationSpectrum } from "@/utils/primaryColors";
import { useThemeContext } from "@/context/theme/ThemeContextProvider";
import { bgColors } from "@/utils/bgColors";
import { ChangeEvent } from "react";

const ThemeModal = () => {
  const { isOpen, closeModal } = useModalContext();
  const {
    setPrimary,
    setBg,
    stopPrimaryInterval,
    theme,
    saturation,
    newSaturation,
  } = useThemeContext();

  const handlePrimary = (primary: Primary) => {
    setPrimary(primary);
    stopPrimaryInterval();
  };

  const handleSaturation = (e: ChangeEvent<HTMLInputElement>) => {
    const primary = saturationSpectrum(theme.primary, e.target.value);
    newSaturation(e.target.value);
    setPrimary(primary);
  };

  return (
    <Modal className="theme__modal" isOpen={isOpen} closeModal={closeModal}>
      <div>
        <h5>Escoge tu color favorito</h5>
        <div className="theme__primary">
          {primaryCompass.map((color) => (
            <button
              key={color["--primary-hue"]}
              style={{ backgroundColor: color["--primary-color"] }}
              onClick={() => handlePrimary(color)}
            />
          ))}
        </div>
        <h5>Escoge tu color de fondo</h5>
        <div className="theme__bg">
          {bgColors.map((bgcolor) => (
            <button
              key={bgcolor["--black-color"]}
              style={{ backgroundColor: bgcolor["--white-color"] }}
              onClick={() => setBg(bgcolor)}
            />
          ))}
        </div>
      </div>
      <div>
        <h5>Saturación:</h5>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={saturation}
          onChange={handleSaturation}
        />
        <h5>Luminosidad:</h5>
      </div>
    </Modal>
  );
};

export default ThemeModal;
