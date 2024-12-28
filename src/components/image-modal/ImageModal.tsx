import Modal from "@/components/modal/Modal";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./imageModal.css";
import { FaCircleXmark } from "react-icons/fa6";

const ImageModal = ({
  isOpen,
  closeModal,
  handlePrevImage,
  handleNextImage,
  currentImage,
}: {
  isOpen: boolean;
  closeModal: () => void;
  handlePrevImage: () => void;
  handleNextImage: () => void;
  currentImage: string;
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} className="image__modal">
      <div className="image__modal-container">
        <div className="image__modal-image">
          <Image src={currentImage} alt="" fill />
        </div>
        <div className="image__modal-prev" onClick={handlePrevImage}>
          <FaArrowAltCircleLeft />
        </div>
        <div className="image__modal-next" onClick={handleNextImage}>
          <FaArrowAltCircleRight />
        </div>
        <div className="image__modal-close" onClick={closeModal}>
          <FaCircleXmark />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
