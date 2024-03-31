'use client'
import { FaPaintBrush } from "react-icons/fa"
import classes from './ThemeMenu.module.css'
import { useModalContext } from "@/hooks/hooks"

const ThemeMenu = () => {
  const { openModal } = useModalContext()  
  return (
    <div
        className={classes.theme__menu}
    >
        <button
            className={classes.theme__button}
            onClick={openModal}
        >
            <FaPaintBrush />
        </button>
    </div>
  )
}

export default ThemeMenu