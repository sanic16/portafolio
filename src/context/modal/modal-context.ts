import { createContext } from "react";

const modalContext = createContext({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
})

export default modalContext
