'use client'
import { useThemeContext } from "@/context/theme/ThemeContextProvider"
const Main = (
    {
        children
    }: {
        children: React.ReactNode
    
    }
) => {
  const { theme } = useThemeContext()  
  return (
    <main className={`${theme.primary} ${theme.bg}`}>
        { children }
    </main>
  )
}

export default Main