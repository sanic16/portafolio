import { useThemeContext } from "@/hooks/hooks"

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