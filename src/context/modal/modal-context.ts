import { createContext } from "react";

const modalContext = createContext<ContextModal>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export default modalContext;
