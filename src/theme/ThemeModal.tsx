"use client";
import Modal from "@/components/modal/Modal";

import classes from "./themeModal.module.css";
import { useModalContext } from "@/hooks/hooks";
import { primaryCompass, changeColorTone } from "@/utils/primaryColors";
import { useThemeContext } from "@/context/theme/ThemeContextProvider";
import { bgColors } from "@/utils/bgColors";
import { ChangeEvent } from "react";

const ThemeModal = () => {
  const { isOpen, closeModal } = useModalContext();
  const {
    setPrimary,
    setBg,
    theme,
    saturation,
    lightness,
    newSaturation,
    newLightness,
    mode,
    changeMode,
  } = useThemeContext();

  const handlePrimary = (primary: Primary) => {
    setPrimary(primary);
    changeMode("static");
  };

  const handleSaturation = (e: ChangeEvent<HTMLInputElement>) => {
    const primary = changeColorTone(theme.primary, e.target.value, lightness);
    newSaturation(e.target.value);
    setPrimary(primary);
  };

  const handleLightness = (e: ChangeEvent<HTMLInputElement>) => {
    const primary = changeColorTone(theme.primary, saturation, e.target.value);
    newLightness(e.target.value);
    setPrimary(primary);
  };

  return (
    <Modal
      className={classes.theme__modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div className={classes.theme__colors}>
        <h5>Escoge tu color favorito</h5>
        <div className={classes.theme__primary}>
          {primaryCompass.map((color) => (
            <button
              key={color["--primary-hue"]}
              style={{ backgroundColor: color["--primary-color"] }}
              onClick={() => handlePrimary(color)}
            />
          ))}
        </div>
        <h5>Escoge tu color de fondo</h5>
        <div className={classes.theme__bg}>
          {bgColors.map((bgcolor) => (
            <button
              key={bgcolor["--black-color"]}
              style={{ backgroundColor: bgcolor["--white-color"] }}
              onClick={() => setBg(bgcolor)}
            />
          ))}
        </div>
      </div>

      <div className={classes.theme__controls}>
        <div className={classes.theme__range}>
          <h5>Saturación:</h5>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={saturation}
            onChange={handleSaturation}
          />
        </div>
        <div className={classes.theme__range}>
          <h5>Luminosidad:</h5>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={lightness}
            onChange={handleLightness}
          />
        </div>
        <div className={classes.theme__mode}>
          <h5>
            Modo:{" "}
            <span>
              {mode === "static"
                ? "Estático"
                : mode === "cycle"
                ? "Cíclico"
                : ""}
            </span>
            <div className={classes["theme__mode-buttons"]}>
              <button onClick={() => changeMode("static")}>Estático</button>
              <button onClick={() => changeMode("cycle")}>Cíclico</button>
            </div>
          </h5>
        </div>
      </div>
    </Modal>
  );
};

export default ThemeModal;
