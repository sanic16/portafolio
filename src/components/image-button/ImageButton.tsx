"use client";

import { useState } from "react";
import ImageModal from "../image-modal/ImageModal";

const ImageButton = ({
  className,
  title,
  images,
}: {
  className: string;
  title: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  //   const openModal = () => setIsOpen(true);
  const props = {
    isOpen,
    closeModal,
    images,
  };
  return (
    <>
      <button
        className={className}
        // onClick={openModal}
      >
        {title}
      </button>
      <ImageModal {...props} />
    </>
  );
};

export default ImageButton;
