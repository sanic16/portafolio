import { useThemeContext } from "@/context/theme/ThemeContextProvider"

const PrimaryButton = (
    {
        className
    }:{
        className: Primary
    }
) => {
  const { setTheme } = useThemeContext()
  return (
    <button
        className={className}
        onClick={() => setTheme(className)}
    />
  )
}

export default PrimaryButton