import { createContext } from "react"

const themeContext = createContext<ThemeContext>({
    theme: {
        primary: 'color-1',
        bg: 'bg-1'
    },
    setTheme: () => {}
})

export default themeContext