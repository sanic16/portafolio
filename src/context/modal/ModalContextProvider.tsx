'use client'
import modalContext from "./modal-context";
import { useState } from "react";

const ModalContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <modalContext.Provider value={{
            isOpen,
            openModal,
            closeModal
        }}>
            { children }
        </modalContext.Provider>
    )
}

export default ModalContextProvider