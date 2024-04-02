import Modal from "@/components/modal/Modal"
import Image from "next/image"
import { useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import './imageModal.css'
import { FaCircleXmark } from "react-icons/fa6"

const ImageModal = (
    {
        isOpen,
        closeModal,
        images,
    }:{
        isOpen: boolean
        closeModal: () => void
        images: {
            src: string,
            width: number,
            height: number
        }[]
    
    }
) => {
  const [imgCursor, setImgCursor] = useState(0)
  const handleNextImage = () => {
    setImgCursor(prev => (prev + 1) % images.length)
  }

  const handlePrevImage = () => {
    setImgCursor(prev => (prev - 1 + images.length) % images.length)
  }
  return (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        className="image__modal"
    >
        <div
            className="image__modal-container"
        >
            
           <div
                className="image__modal-image"
           >
            <Image
                    src={images[imgCursor]}
                    alt=""
                />
           </div>
            <div
                className="image__modal-prev"
                onClick={handlePrevImage}
            >
                <FaArrowAltCircleLeft 
                    
                />
            </div>
            <div
                className="image__modal-next"
                onClick={handleNextImage}
            >
                <FaArrowAltCircleRight
                    
                />
            </div>
            <div
                className="image__modal-close"
                onClick={closeModal}
            >
                <FaCircleXmark />
            </div>

        </div>
    </Modal>
  )
}

export default ImageModal