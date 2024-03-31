import { createContext } from "react";

const modalContext = createContext({
    isOpen: false,
    openModal: () => {}
})

export default modalContext
