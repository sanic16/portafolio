import Modal from "@/components/modal/Modal";
import './documentModal.css'

import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";

const DocumentModal = (
    {
        isOpen,
        closeModal,
        pdfFile,
    }:{
        isOpen: boolean
        closeModal: () => void
        pdfFile: string
    }
) => {
  return (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        className="document__modal"
    >
        <div
            className="document__modal-container"
        >
            <embed
                src={pdfFile}
                type='application/pdf'
                width='100%'
                height='100%'
            />
           
            
        </div>
        <div
                className="document__modal-close"
                onClick={closeModal}
            >
                <FaCircleXmark />
            </div>
    </Modal>
  )
}

export default DocumentModal