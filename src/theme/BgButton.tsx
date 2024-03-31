import { useThemeContext } from "@/hooks/hooks"


const BgButton = (
    {
        className
    }:{
        className: Bg
    }
) => {
  const { setTheme } = useThemeContext()
  return (
    <button
        className={className} 
        onClick={() => setTheme(className) }
    />
  )
}

export default BgButton