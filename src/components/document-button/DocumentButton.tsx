"use client";

import { useState } from "react";
import DocumentModal from "../document-modal/DocumentModal";

const DocumentButton = ({
  className,
  title,
  pdfFile,
}: {
  className: string;
  title: string;
  pdfFile: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const props = {
    isOpen,
    closeModal,
    pdfFile,
  };
  return (
    <>
      <button className={className} onClick={openModal}>
        {title}
      </button>
      <DocumentModal {...props} />
    </>
  );
};

export default DocumentButton;
