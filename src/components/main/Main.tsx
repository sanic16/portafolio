'use client'
import { useThemeContext } from "@/hooks/hooks"

const Main = (
    {
        children
    }: {
        children: React.ReactNode
    
    }
) => {
  const { theme } = useThemeContext()  
  return (
    <main className={`${theme.primary}`}>
        { children }
    </main>
  )
}

export default Main