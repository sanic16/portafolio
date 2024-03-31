import modalContext from "@/context/modal/modal-context";
import themeContext from "@/context/theme/theme-context";
import { useContext } from "react";

export const useModalContext = () => useContext(modalContext)
export const useThemeContext = () => useContext(themeContext)