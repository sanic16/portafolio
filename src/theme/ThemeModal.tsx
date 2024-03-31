'use client'
import Modal from "@/components/modal/Modal";
import { bg, primary } from "./theme-data";
import PrimaryButton from "./PrimaryButton";


import './themeModal.css'
import BgButton from "./BgButton";

const ThemeModal = () => {
  return (
    <Modal 
      className='theme__modal'>
        <h3>
            Escoge tu color favorito
        </h3>
        <div
           className='theme__primary'
        >
          { primary.map(pcolor => (
            <PrimaryButton
              key={pcolor} 
              className={pcolor}
            />
          ))}
        </div>
      <h3>
        Escoge tu color de fondo
      </h3>
      <div
        className="theme__bg"
      >
        {
          bg.map(bgcolor => (
            <BgButton
              key={bgcolor}
              className={bgcolor}
            />
          ))
        }
      </div>
    </Modal>
  )
}

export default ThemeModal