'use client'
import Modal from "@/components/modal/Modal";
import { primary } from "./theme-data";
import PrimaryButton from "./PrimaryButton";


import './themeModal.css'

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
    </Modal>
  )
}

export default ThemeModal